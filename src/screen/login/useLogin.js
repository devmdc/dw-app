import {useHttp, endpoint} from 'api';

const useLogin = () => {
  const {data, loading, postData} = useHttp();

  const submit = (email, password) => {
    const param = {
      email: email,
      password: password,
      fcm_token: 'fcm_token',
    };

    postData({
      url: endpoint.POST_LOGIN,
      params: param,
      onSuccess: resData => {
        console.log(resData);
      },
      onError: resError => {
        console.log(resError);
      },
    });
  };

  return {loading, data, submit};
};

export default useLogin;
