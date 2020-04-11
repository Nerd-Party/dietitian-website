const widths = {
  small: 600,
  medium: 960,
  large: 1280,
  xLarge: 1920,
};

const mediaQueries = {
  smallWidth: `(max-width:${widths.small}px)`,
  mediumWidth: `(max-width:${widths.medium}px)`,
  largeWidth: `(max-width:${widths.large}px)`,
  xLargeWidth: `(max-width:${widths.xLarge}px)`,
};

export default mediaQueries;