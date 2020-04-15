import { createStore, action } from 'easy-peasy';

/**
 * @example usage
 *
 * // Import methods from easy-peasy
 * import { useStoreState, useStoreActions } from 'easy-peasy';
 *
 * // GET data from store
 * const data = useStoreState(state => state.data);
 *
 * // SET data in store
 * const setData = useStoreActions(actions => actions.setData);
 * setData(some.value);
 */
// TODO: Store variables should have descriptive names.
//  When data is added, update 'data' and 'setData' to something more specific.
const storeModel = {
  data: [],

  setData: action((state, payload) => {
    state.userData = payload;
  }),
};

const store = createStore(storeModel);

export default store;