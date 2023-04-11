const size = {
  mobile: '320px',
  mobileOnly: '479px',
  tabletOnly: '767px',
  tablet: '768px',
  beforeDesktop: '1279px',
  desktop: '1280px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobileOnly: `(max-width: ${size.mobileOnly})`,

  beforeTablet: `(max-width: ${size.tabletOnly})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletOnly: `(min-width:${size.tablet}) and (max-width:${size.beforeDesktop})`,

  beforeDesktop: `(max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
};

// how to use:
// @media ${device.tablet} {}

export const deviceWindows = {
  beforeTablet: window.innerWidth < 768,
};
