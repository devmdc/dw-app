/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';
import {UserAction} from 'action';
import {store} from '../../store';

const useProfile = () => {
  const {loading, getData} = useHttp();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    getData({
      url: endpoint.GET_DETAIL_PROFILE,
      onSuccess: res => {
        const {data, status} = res;
        if (status === 200) {
          console.log(data);
          store.dispatch(UserAction.setDataProfile(data.email, data.whatsapp));
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const logout = () => {
    getData({
      url: endpoint.POST_LOGOUT,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          store.dispatch(UserAction.setEmpty());
          RootNav.navigateToWelcome();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, getProfile, logout};
};

export default useProfile;
