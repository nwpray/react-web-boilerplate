import { Map } from 'immutable';

import Reducer from '@/core/Reducer';

import { TYPES } from './example.actions';

const INIT_STATE = Map({
  example: 0,
  example2: 0
});

export default Reducer(
  {
    [TYPES.EXAMPLE]: state => state.update('example', value => value + 1),
    [TYPES.EXAMPLE_2_SUCCESS]: (state, { amount }) =>
      state.update('example2', value => value + amount)
  },
  INIT_STATE
);
