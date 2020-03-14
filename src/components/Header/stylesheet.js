import { colors, HEADER_HEIGHT } from '../../helpers/globalStyles';

const stylesheet = {
  header: {
    '&.MuiAppBar-root': {
      backgroundColor: colors.secondary,
      color: colors.text,
      flex: `0 0 ${HEADER_HEIGHT}px`,
    },
  },

  container: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
  },

  title: {
    flexGrow: 1,
  },
};

export default stylesheet;