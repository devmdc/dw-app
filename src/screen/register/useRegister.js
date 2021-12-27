import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

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
      code: code,
    };

    postData({
      url: endpoint.POST_REGISTER_VERIFY,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.navigate('RegisterData', {email: email, code: code});
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit, verify};
};

export default useRegister;
