// IMPORTS/INITIALIZATION =========================|
// ================================================|
// add any imports needed here
// ------------------------------------------------|
// UI ACTION TYPES ================================|
// ================================================|
export const TOAST_SUCCESS = 'TOAST_SUCCESS';
export const TOAST_ERROR = 'TOAST_ERROR';
export const TOAST_INFO = 'TOAST_INFO';
export const TOAST_CLEAR = 'TOAST_CLEAR';
// ------------------------------------------------|
// TOAST CREATORS =================================|
// ================================================|
// SUCCESS TOAST ----------------------------------|
export const showSuccessToast = message => {
  return dispatch => {
    dispatch({ type: 'TOAST_SUCCESS', payload: message });
  };
};
// ================================================|
// ERROR TOAST ------------------------------------|
export const showErrorToast = message => {
  return dispatch => {
    dispatch({ type: 'TOAST_ERROR', payload: message });
  };
};
// ================================================|
// INFO TOAST -------------------------------------|
export const showInfoToast = message => {
  return dispatch => {
    dispatch({ type: 'TOAST_INFO', payload: message });
  };
};
// ================================================|
// CLEAR TOAST ------------------------------------|
export const clearToast = () => {
  return dispatch => {
    dispatch({ type: 'TOAST_CLEAR' });
  };
};
