/* eslint-disable import/prefer-default-export */
import {
  MEDIA_REQUEST_START,
  MEDIA_REQUEST_FAIL,
  MEDIA_REQUEST_SUCCESS
} from './mediaTypes';
import axiosAuth from '../../../helpers/axiosAuth';

export const addMedia = (values, file) => async dispatch => {
  try {
    dispatch({ type: MEDIA_REQUEST_START });
    const uploadConfig = await axiosAuth().get('/api/upload');
    await axiosAuth().put(uploadConfig.data.url, file, {
      headers: {
        'Content-Type': file.type
      }
    });
    const res = await axiosAuth().post('/api/media', {
      ...values,
      link: uploadConfig.data.key
    });
    dispatch({ type: MEDIA_REQUEST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: MEDIA_REQUEST_FAIL, payload: { errMsg: err } });
  }
};
