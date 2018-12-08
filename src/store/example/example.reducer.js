import { Map } from 'immutable';

import Reducer from '@/core/Reducer';

import { TYPES } from './example.actions';

const INIT_STATE = Map({
  example: 0
});

export default Reducer(
  {
    [TYPES.EXAMPLE]: state => state.update('example', value => value + 1)
  },
  INIT_STATE
);
