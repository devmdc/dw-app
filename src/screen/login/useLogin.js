import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';

const useLogin = () => {
  const {loading, postData} = useHttp();

  const submit = (email, password) => {
    const param = {
      email: email,
      password: password,
      fcm_token: 'fcm_token',
    };

    postData({
      url: endpoint.POST_LOGIN,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          RootNav.navigateToVacancies();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit};
};

export default useLogin;
