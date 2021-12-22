import {useState} from 'react';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {api} from 'api';
import {isEmpty} from 'utils';
import {store} from '../store';

const useHttp = (initialData = []) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);

  const postData = ({
    url,
    params = DEFAULT_PARAMS,
    onSuccess = () => {},
    onError = () => {},
  }) => {
    setLoading(true);
    api
      .post(url, params, {
        headers: {
          Authorization: `Bearer ${store.getState().user.data.users_token}`,
        },
      })
      .then(res => {
        setLoading(false);
        setData(res.data.data);
        onSuccess(res.data.data);
      })
      .catch(err => {
        setLoading(false);
        showMsgError(err.response.data.message);
        onError(err.response.data.message);
      });
  };

  const getData = ({url, onSuccess = () => {}, onError = () => {}}) => {
    setLoading(true);
    api
      .get(url, {
        headers: {
          Authorization: `Bearer ${store.getState().user.data.users_token}`,
        },
      })
      .then(res => {
        setLoading(false);
        onSuccess(res.data.data);
      })
      .catch(err => {
        setLoading(false);
        showMsgError(err.response.data.message);
        onError(err.response.data.message);
      });
  };

  return {data, loading, postData, getData};
};

const DEFAULT_PARAMS = {
  page: 1,
  limit: 10,
};

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${store.getState().user.data.users_token}`,
  },
});

const showMsgError = msg => {
  showMessage({
    message: 'Error',
    description: msg,
    type: 'warning',
    onPress: () => hideMessage(),
  });
};

const showMsgSuccess = msg => {
  showMessage({
    message: 'Success',
    description: msg,
    type: 'success',
    onPress: () => hideMessage(),
  });
};

const isSignin = () => {
  return !isEmpty(store.getState().user.data);
};

export {useHttp, getAuthHeader, isSignin, showMsgError, showMsgSuccess};
