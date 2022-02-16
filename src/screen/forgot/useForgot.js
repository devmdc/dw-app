import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';

const useForgot = () => {
  const {loading, postData} = useHttp();

  const navigation = useNavigation();

  const submit = email => {
    const param = {
      email: email,
    };

    postData({
      url: endpoint.POST_FORGOT_EMAIL,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.navigate('VerifyForgot', {email: email});
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const verify = (email, code) => {
    const param = {
      email: email,
      code: parseInt(code, 10),
    };

    postData({
      url: endpoint.POST_FORGOT_VERIFY,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.navigate('ForgotData', {
            email: email,
            code: parseInt(code, 10),
          });
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const submitData = (email, code, password) => {
    const param = {
      email: email,
      code: parseInt(code, 10),
      password: password,
    };

    postData({
      url: endpoint.POST_FORGOT_DATA,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          RootNav.navigateToLogin();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit, verify, submitData};
};

export default useForgot;
