import {useHttp, endpoint} from 'api';

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
          console.log(res);
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
