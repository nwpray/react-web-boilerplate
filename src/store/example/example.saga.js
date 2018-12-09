import { all, put, takeEvery, select } from 'redux-saga/effects';

import { TYPES, example2Success } from './example.actions';

function* handleExample({ amount }) {
  const example2 = yield select(({ example }) => example.get('example2'));
  console.log(example2);
  yield put(example2Success(amount));
}

export default function* exampleSaga() {
  yield all([takeEvery(TYPES.EXAMPLE_2, handleExample)]);
}
