import { HEADER_HEIGHT } from '../../../helpers/globalStyles';

const stylesheet = {
  hero: {
    flex: '1 1 100%',

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: HEADER_HEIGHT,
  },

  title: {
    fontSize: '4rem',
  },
};

export default stylesheet;