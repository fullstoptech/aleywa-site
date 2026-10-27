import hero from '../assets/img/post-spacing-hero.jpg';
import figPairs from '../assets/img/fig-letter-pairs.jpg';
import figMeasured from '../assets/img/fig-spacing-measured.jpg';
import figGaps from '../assets/img/fig-gap-tests.jpg';
import figSmall from '../assets/img/fig-small-sizes.jpg';
export const spacedHero = hero;
export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'figure'; image: ImageMetadata; caption: string; credit: string; alt: string }
  | { type: 'pull'; text: string }
  | { type: 'table' }
  | { type: 'rules' }
  | { type: 'gaveup'; text: string };
export const spacedBlocks: Block[] = [
  { type: 'p', text: 'The y and the w in our wordmark sit about 3.4 units apart at their closest point, on our measure. They started at 5.5. We tested four gaps before we settled. Every other pair of letters has a target of its own: a-l 8.6, l-e 6.6, e-y 5.5, w-a 5.5, and 7.6 between the last a and the square stop.' },
  { type: 'p', text: 'This post explains how we measured, why y and w needed the most work, and the one decision the numbers could not make.' },
  { type: 'h3', text: 'Why the boxes around letters mislead' },
  { type: 'p', text: 'Every letter sits inside a box. The usual way to space type is to set the gaps between those boxes, and for straight letters that works. An l fills its box from edge to edge, so the box and the letter agree.' },
  { type: 'p', text: 'Round and diagonal letters do not fill their boxes. An o touches its box at a single point on each side. A y or a w leaves big empty triangles in the corners of its box. Set the boxes evenly and the eye sees uneven gaps, because it judges the space between the shapes and ignores the boxes.' },
  { type: 'p', text: 'So we measured something else: the closest distance between the outlines of two neighbouring letters. That number describes the gap the eye actually sees.' },
  { type: 'p', text: 'The method is simple to repeat. Keep each letter as its own object. Find the nearest pair of points between two neighbours, measure the distance, and move one letter until the distance matches its target. Then save the file and measure again from the saved version, because what you exported is what people will see.' },
  { type: 'figure', image: figPairs, caption: 'Above: the box around each letter. Below: the closest gap between outlines, the number we spaced by.', credit: 'Diagram, Aleywa Studios.', alt: 'The box around each letter, and the closest gap between outlines' },
  { type: 'h3', text: 'One unit: the stem' },
  { type: 'p', text: 'A measurement needs a unit that holds at any size. Ours is tied to the drawing. The wordmark is 128 units tall, and every stem is 15 units thick, as described in how we drew the wordmark.' },
  { type: 'p', text: 'Working in those units keeps the numbers honest when the logo is scaled. A gap of about 3.4 is a little under a quarter of a stem, whether the word is on a business card or a billboard. Shown 128 pixels tall, one unit is exactly one pixel, which makes the figures easy to check on screen.' },
  { type: 'h3', text: 'A target for every pair' },
  { type: 'p', text: 'Each pair of neighbours got a target. The targets differ because the shapes that meet are different.' },
  { type: 'table' },
  { type: 'p', text: 'The pattern is simple once it is in a table. Two straight edges facing each other need the most room, because nothing opens up between them. A round letter brings some white space of its own, so it can sit closer. Diagonals bring the most, so they sit closest of all.' },
  { type: 'figure', image: figMeasured, caption: 'The spacing page of the brand book, with each target and the value measured in the final file.', credit: 'Brand book, Aleywa Studios.', alt: 'The spacing page of the brand book' },
  { type: 'h3', text: 'The pair with the most empty space' },
  { type: 'p', text: 'The y and the w are two diagonals that open downward. The right arm of the y leans left as it falls. The left arm of the w leans right. They come closest at the top, at the x-height, and then the space between them widens into a wedge all the way down.' },
  { type: 'p', text: 'That wedge is why this pair had the most empty space in the word. At 5.5, the gap we gave e-y and w-a, the opening between y and w looked like the widest gap in the word.' },
  { type: 'h3', text: 'Four tests, then about 3.4' },
  { type: 'p', text: 'We tried four values for the y-w gap: 5.5, 4.2, 3.2 and 2.4. The figure shows the top of each pair enlarged, where the two letters come closest.' },
  { type: 'p', text: 'The opening changes quickly. At 5.5 there is a clear notch between the two arms. By 2.4 the top corners nearly touch.' },
  { type: 'p', text: 'We settled on about 3.4 units, between the third and second tests. Every number in this post is rounded and taken on one measure. Measure the same gap another way and it moves by a few tenths of a unit, so treat the numbers as targets on our measure.' },
  { type: 'figure', image: figGaps, caption: 'The top of the y (left) and the w (right) at each gap we tried, and the gap we kept.', credit: 'Diagram, Aleywa Studios.', alt: 'The top of the y and the w at each gap we tried' },
  { type: 'p', text: 'Once a gap is set, it stays set. The logo exports are made once, in a vector tool, and every board, document and render uses those files. Nobody re-spaces the letters by eye later.' },
  { type: 'pull', text: 'Between 3.2 and 4.2, both ends could be defended on paper, and no measurement settles which looks right.' },
  { type: 'h3', text: 'Small sizes get their own drawing' },
  { type: 'p', text: 'Tight gaps that look right on a poster fill in on a phone screen. So below 24 pixels tall, the wordmark uses a separate drawing. Its gaps open by 3 to 4 units, and the stop grows from 1.1 stems to 1.3 stems so it does not shrink to a speck.' },
  { type: 'p', text: 'The extra space is not spread evenly. The pairs with straight edges, a-l, l-e and the a against the stop, open by 3 units. The pairs with diagonals, e-y, y-w and w-a, open by 4. Measured in units, the stop grows from 16.5 to 19.5 units square.' },
  { type: 'p', text: 'This is a second set of files, drawn for small sizes.' },
  { type: 'figure', image: figSmall, caption: 'The small-size drawing, shown at true size and magnified.', credit: 'Brand book, Aleywa Studios.', alt: 'The small-size drawing, at true size and magnified' },
  { type: 'h3', text: 'What measuring cannot decide' },
  { type: 'p', text: 'The numbers did a lot. They gave every pair a target, showed us which pair was wrong, and turned \u201cit looks a bit off\u201d into four values we could compare.' },
  { type: 'p', text: 'They did not choose the final gap. Between 3.2 and 4.2, both ends could be defended on paper, and no measurement settles which looks right. The last call was made by looking at the whole word.' },
  { type: 'rules' },
  { type: 'gaveup', text: 'The wide gap between the y and the w. At 5.5 it looked like the widest opening in the word.' },
];
export const spacedTable = [
  ['a\u2011l', 'straight to straight', '8.6'],
  ['l\u2011e', 'straight to round', '6.6'],
  ['e\u2011y', 'round to diagonal', '5.5'],
  ['y\u2011w', 'diagonal to diagonal', '3.4'],
  ['w\u2011a', 'diagonal to round', '5.5'],
  ['a\u2011stop', 'straight to square', '7.6'],
];
export const spacedRules = [
  'Measure the closest distance between outlines, not the boxes around letters.',
  'Count in units of your stem, so the numbers survive scaling.',
  'Give every pair a written target, and record the measured value next to it.',
  'Test values on both sides of where you think the answer is.',
  'Draw small sizes separately, with wider gaps and a larger stop.',
];
