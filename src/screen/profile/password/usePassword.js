import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';

const usePassword = () => {
  const {loading, postData} = useHttp();

  const submitData = (oldPass, newPass) => {
    const param = {
      old_password: oldPass,
      new_password: newPass,
    };

    postData({
      url: endpoint.POST_CHANGE_PASSWORD,
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

  return {loading, submitData};
};

export default usePassword;
