export default (actionHandlers = {}, initState = {}) => (state, { type, ...restOfAction }) => {
  if (typeof actionHandlers[type] !== 'undefined') return actionHandlers[type](state, restOfAction);
  return initState;
};
