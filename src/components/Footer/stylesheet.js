import { colors, FOOTER_HEIGHT } from '../../helpers/globalStyles';

const stylesheet = {
  footer: {
    flex: `0 0 ${FOOTER_HEIGHT}px`,

    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    fontSize: '0.85rem',
    backgroundColor: colors.secondary,
    color: colors.text,
  },
};

export default stylesheet;