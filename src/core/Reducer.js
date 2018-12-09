export default (actionHandlers = {}, initState = {}) => (
  state = initState,
  { type, ...restOfAction }
) => {
  if (typeof actionHandlers[type] !== 'undefined') return actionHandlers[type](state, restOfAction);
  return state;
};
