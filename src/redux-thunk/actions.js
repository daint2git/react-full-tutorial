import * as Constants from './constants';
import getPeople from './api';

export function getData() {
  return {
    type: Constants.FETCHING_DATA
  }
}

export function getDataSuccess(data) {
  return {
    type: Constants.FETCHING_DATA_SUCCESS,
    data,
  }
}

export function getDataFailure() {
  return {
    type: Constants.FETCHING_DATA_FAILURE
  }
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getPeople()
    .then(resData => {dispatch(getDataSuccess(resData));
    }).catch(err => dispatch(getDataFailure()));
  }
}

// Khi action fetchData được gọi, nó trả về một function nhận dispatch làm tham số,
// function sẽ dispatch getData action.
// Tiếp theo function getPeople sẽ được gọi.
// Sau khi getPeople hoàn thành sẽ dispatch getDataSuccess action.
// Action fetchData bây giờ đã trở thành một thunk.

// Thunk là một function được bao lại để tạm dừng nó cho đến khi được gọi
