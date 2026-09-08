#!/usr/bin/env python3
"""Generate dark slate placeholder PNGs for screenshot drop-in."""

import struct
import zlib
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "screenshots"
LABELS = {
    "review.png": "Review",
    "compare.png": "Compare",
    "annotate.png": "Annotate",
    "projects.png": "Projects",
}


def png_chunk(tag: bytes, data: bytes) -> bytes:
    crc = zlib.crc32(tag + data) & 0xffffffff
    return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", crc)


def make_png(width: int, height: int, label: str) -> bytes:
    # Dark slate base with subtle coral accent bar
    rows = []
    for y in range(height):
        row = bytearray([0])
        for x in range(width):
            t = y / max(height - 1, 1)
            r = int(22 + 8 * t)
            g = int(26 + 10 * t)
            b = int(38 + 14 * t)
            # accent stripe
            if 0.12 * width < x < 0.88 * width and 0.08 * height < y < 0.14 * height:
                r, g, b = 158, 82, 48
            row.extend((r, g, b, 255))
        rows.append(bytes(row))

    raw = b"".join(rows)
    compressed = zlib.compress(raw, 9)
    ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    return (
        b"\x89PNG\r\n\x1a\n"
        + png_chunk(b"IHDR", ihdr)
        + png_chunk(b"IDAT", compressed)
        + png_chunk(b"IEND", b"")
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name in LABELS:
        data = make_png(1280, 800, LABELS[name])
        (OUT / name).write_bytes(data)
        print(f"wrote {OUT / name}")


if __name__ == "__main__":
    main()
