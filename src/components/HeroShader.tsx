import { useEffect, useRef, useState } from 'react'
import { clock, effect, frame, frameLoop, init, surface } from 'vgpu'
import type { FrameLoopHandle, Gpu } from 'vgpu'
import heroShader from '../shaders/hero-review.wgsl'

type HeroShaderProps = {
  className?: string
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function HeroShader({ className = '' }: HeroShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [useFallback, setUseFallback] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !navigator.gpu) {
      setUseFallback(true)
      return
    }

    let gpu: Gpu | undefined
    let loop: FrameLoopHandle | undefined
    let resizeOff: (() => void) | undefined
    let disposed = false

    const setup = async () => {
      try {
        gpu = await init()
        if (disposed) {
          gpu.dispose()
          return
        }

        const canvasSurface = surface(gpu, canvas, {
          dpr: [1, 2],
          alphaMode: 'opaque',
        })

        const shader = effect(gpu, heroShader, {
          set: {
            params: { time: 0, texel: canvasSurface.texelSize },
          },
        })

        resizeOff = canvasSurface.onResize(() => {
          shader.set({ params: { texel: canvasSurface.texelSize } })
        })

        const time = clock(gpu)
        const reduced = prefersReducedMotion()

        if (reduced) {
          shader.set({ params: { time: 0.35, texel: canvasSurface.texelSize } })
          frame(gpu, (f) => f.pass(canvasSurface, shader))
          return
        }

        loop = frameLoop(gpu, (f) => {
          shader.set({ params: { time: time.time, texel: canvasSurface.texelSize } })
          f.pass(canvasSurface, shader)
        })
      } catch {
        if (gpu) gpu.dispose()
        if (!disposed) setUseFallback(true)
      }
    }

    void setup()

    return () => {
      disposed = true
      resizeOff?.()
      loop?.stop()
      gpu?.dispose()
    }
  }, [])

  if (useFallback) {
    return <div className={`hero-shader-fallback ${className}`} aria-hidden="true" />
  }

  return (
    <canvas
      ref={canvasRef}
      className={`hero-shader-canvas ${className}`}
      aria-hidden="true"
    />
  )
}
