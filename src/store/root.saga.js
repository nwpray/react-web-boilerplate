import { all, call } from 'redux-saga/effects';

import { saga as example } from '@/store/example';

export default function*() {
  yield all([call(example)]);
}
