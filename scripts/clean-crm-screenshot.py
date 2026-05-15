"""
Run after saving the screenshot:
  python3 scripts/clean-crm-screenshot.py
Covers the localhost URL bar in the bottom-left corner.
"""
from PIL import Image, ImageDraw

SRC = "public/images/crm-dashboard.png"
OUT = "public/images/crm-dashboard.png"

img = Image.open(SRC).convert("RGB")
w, h = img.size

# The browser status-bar "localhost:3000/companies" sits in a thin strip
# at the very bottom-left. We paint it with the same background colour.
draw = ImageDraw.Draw(img)
# Approximate region: bottom 22 px, left 220 px wide
bg_color = (255, 255, 255)   # white (matches the CRM light theme)
draw.rectangle([0, h - 22, 220, h], fill=bg_color)

img.save(OUT, "PNG", optimize=True)
print(f"Saved cleaned screenshot → {OUT}  ({w}×{h})")
