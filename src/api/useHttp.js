import {useState} from 'react';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {api} from 'api';
import {isEmpty} from 'utils';
import {store} from '../store';

const useHttp = (initialData = []) => {
  const [loading, setLoading] = useState(false);

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
          Authorization: `Bearer ${store.getState().user.data.token}`,
        },
      })
      .then(res => {
        setLoading(false);
        onSuccess(res.data);
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
          Authorization: `Bearer ${store.getState().user.data.token}`,
        },
      })
      .then(res => {
        setLoading(false);
        onSuccess(res.data);
      })
      .catch(err => {
        setLoading(false);
        showMsgError(err.response.data.message);
        onError(err.response.data.message);
      });
  };

  return {loading, postData, getData};
};

const DEFAULT_PARAMS = {
  page: 1,
  limit: 10,
};

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${store.getState().user.data.token}`,
  },
});

const showMsgError = msg => {
  showMessage({
    message: 'Error',
    description: msg,
    type: 'danger',
    onPress: () => hideMessage(),
  });
};

const showMsgWarning = msg => {
  showMessage({
    message: 'Warning',
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

export {
  useHttp,
  getAuthHeader,
  isSignin,
  showMsgError,
  showMsgWarning,
  showMsgSuccess,
};
