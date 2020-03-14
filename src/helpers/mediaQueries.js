const pixels = {
  small: 600,
  medium: 960,
  large: 1280,
  xLarge: 1920,
};

const mediaQueries = {
  smallWidth: `(max-width:${pixels.small}px)`,
  mediumWidth: `(max-width:${pixels.medium}px)`,
  largeWidth: `(max-width:${pixels.large}px)`,
  xLargeWidth: `(max-width:${pixels.xLarge}px)`,
};

export default mediaQueries;