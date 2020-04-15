export const HEADER_HEIGHT = 64;
export const FOOTER_HEIGHT = 36;

export const colors = {
  // General
  text: '#1d1d1d',

  // Theme
  primary: '#FAFAFA',
  secondary: '#FFEFE0',
  tertiary: '#FED9CA',
  fourth: '#C5C5C5',
  accent: '#7D7D7D',
};

const globalStyles = {
  container: {
    flex: '1 1 100%',

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',

    marginTop: HEADER_HEIGHT,
    marginBottom: `calc(${HEADER_HEIGHT}px / 2)`,

    lineHeight: 1.5,
  },
};

export default globalStyles;