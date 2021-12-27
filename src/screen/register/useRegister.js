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
          navigation.navigate('Verify');
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit};
};

export default useRegister;
