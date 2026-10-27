export const EMAIL = 'info@aleywa.com';
export const SITE_NAME = 'Aleywa Studios';
export const TAGLINE = 'Brand identity and websites, made together.';
export const NAV = [
  { label: 'What we do', href: '/what-we-do' },
  { label: 'Recent work', href: '/recent-work' },
  { label: 'Why us', href: '/why-us' },
  { label: 'How we work', href: '/how-we-work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Letters', href: '/letters' },
] as const;
export function isCurrent(currentPath: string, href: string): boolean {
  if (href === '/what-we-do') return currentPath.startsWith('/what-we-do');
  if (href === '/recent-work') return currentPath.startsWith('/recent-work');
  if (href === '/blog') return currentPath.startsWith('/blog');
  return currentPath === href || currentPath === href + '/';
}
