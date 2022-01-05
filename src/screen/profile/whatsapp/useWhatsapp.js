import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

const useWhatsapp = () => {
  const {loading, postData} = useHttp();

  const navigation = useNavigation();

  const submit = phone => {
    let fChar = phone.charAt(0);
    if (parseInt(fChar, 10) === 0) {
      phone = `+62${parseInt(phone, 10)}`;
    }

    const param = {
      number: phone,
    };

    postData({
      url: endpoint.POST_EDIT_PHONE,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.goBack();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit};
};

export default useWhatsapp;
