// Picks whichever of happi-dark / white gives better WCAG contrast against a
// given hex background. Several components (BotGrid, BotConfigurator) paint
// buttons, chat bubbles and selection badges with a per-item accent color —
// some of those accents (golds like #D4AF37, #D4A853, #C5A028) are light
// enough that white text/icons on them fall to ~2.1-2.5:1, well under the
// 4.5:1 WCAG AA minimum for text. Deriving the text color from the actual
// background keeps every future accent color readable automatically.

const HAPPI_DARK = '#0F172A';
const WHITE = '#FFFFFF';

function relativeLuminance(hex: string): number {
  const c = hex.replace('#', '');
  const r = parseInt(c.substring(0, 2), 16) / 255;
  const g = parseInt(c.substring(2, 4), 16) / 255;
  const b = parseInt(c.substring(4, 6), 16) / 255;
  const lin = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

const HAPPI_DARK_LUMINANCE = relativeLuminance(HAPPI_DARK);

export function getContrastText(backgroundHex: string): string {
  const bgL = relativeLuminance(backgroundHex);
  const contrastWithWhite = 1.05 / (bgL + 0.05);
  const contrastWithDark = (bgL + 0.05) / (HAPPI_DARK_LUMINANCE + 0.05);
  return contrastWithDark > contrastWithWhite ? HAPPI_DARK : WHITE;
}
