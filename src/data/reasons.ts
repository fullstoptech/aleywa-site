import plateWebsite from '../assets/img/plate-website.jpg';
import plateBrandFull from '../assets/img/plate-brand-full.jpg';
import plateSpacing from '../assets/img/plate-spacing.jpg';
import plateCard from '../assets/img/plate-card.jpg';
export const reasons = [
  { n: 1, title: 'One studio for your brand and your website.', body: 'One studio decides both, and writes the decisions down. You do not brief a logo maker, wait, then hand a web builder a logo that was never drawn for a website.', label: 'Our own brand. Site design.', image: plateWebsite, alt: 'Our own website, designed from our own brand' },
  { n: 2, title: 'Every decision has a reason you can read.', body: 'We write down what we tried and what we gave up. You can judge our thinking before you buy it. Our own brand came with a brand book of more than fifty pages that shows the working.', label: 'Our own brand. Brand book page.', image: plateBrandFull, alt: 'A page from our brand book' },
  { n: 3, title: 'Craft you can measure.', body: 'We set the space between your letters by measuring each pair, so the word looks even. For tiny sizes we draw a separate small version of your mark, so it still reads in a browser tab.', label: 'Our own brand. Brand book page.', image: plateSpacing, alt: 'The spacing page of our brand book' },
  { n: 4, title: 'Letters for your people.', body: 'We check every letter your customers write. Our own typeface cannot set the Twi, Ga and Ewe letters \u025B \u0254 \u0256 \u0263 \u028B yet, so we say so, and we plan to have them drawn.', label: undefined as string | undefined, image: undefined as unknown as ImageMetadata, alt: '' },
  { n: 5, title: 'Bold, and finished.', body: 'Every piece takes one deliberate risk, and is disciplined everywhere else. Our card takes one: a 9 mm square is cut through the paper.', label: 'Our own brand. 3D render.', image: plateCard, alt: 'Our card, with a square cut through it' },
];
export type ReasonItem = (typeof reasons)[number];
