import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';

const useWhatsappVerify = () => {
  const {loading, postData} = useHttp();

  const navigation = useNavigation();

  const submit = (phone, code) => {
    let fChar = phone.charAt(0);
    if (parseInt(fChar, 10) === 0) {
      phone = `+62${parseInt(phone, 10)}`;
    }

    const param = {
      number: phone,
      code: parseInt(code, 10),
    };

    postData({
      url: endpoint.POST_EDIT_PHONE_VERIFY,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          RootNav.navigateToProfile();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit};
};

export default useWhatsappVerify;
