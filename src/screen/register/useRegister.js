import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';

const useRegister = () => {
  const {loading, postData} = useHttp();

  const navigation = useNavigation();

  const submit = email => {
    const param = {
      email: email,
    };

    postData({
      url: endpoint.POST_REGISTER_EMAIL,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.navigate('Verify', {email: email});
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
      url: endpoint.POST_REGISTER_VERIFY,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.navigate('RegisterData', {
            email: email,
            code: code,
          });
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const submitData = (email, code, name, password) => {
    const param = {
      email: email,
      code: parseInt(code, 10),
      full_name: name,
      dob: '1990-10-15',
      password: password,
      fcm_token: 'token',
    };

    postData({
      url: endpoint.POST_REGISTER_DATA,
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

  return {loading, submit, verify, submitData};
};

export default useRegister;
