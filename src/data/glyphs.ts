export const glyphs = [
  { glyph: '\u025B', status: 'Not drawn yet' },
  { glyph: '\u0190', status: 'Not drawn yet' },
  { glyph: '\u0254', status: 'Not drawn yet' },
  { glyph: '\u0186', status: 'Not drawn yet' },
  { glyph: '\u0256', status: 'Not drawn yet' },
  { glyph: '\u0263', status: 'Not drawn yet' },
  { glyph: '\u028B', status: 'Not drawn yet' },
  { glyph: '\u014B', status: 'In the typeface' },
];
export const glyphsMissing = glyphs.filter((g) => g.status === 'Not drawn yet');
