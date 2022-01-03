import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';
import {UserAction} from 'action';
import {store} from '../../store';

const useProfile = () => {
  const {loading, getData} = useHttp();

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

  return {loading, logout};
};

export default useProfile;
