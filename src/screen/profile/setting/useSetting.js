import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

const useSetting = () => {
  const {loading, postData, getData} = useHttp();

  const navigation = useNavigation();

  const [data, setData] = useState({});

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfile = () => {
    getData({
      url: endpoint.GET_SETTING_DATA,
      onSuccess: res => {
        const {data: dtProfile, status} = res;
        if (status === 200) {
          console.log(dtProfile);
          setData(dtProfile);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

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

  return {loading, data, submit};
};

export default useSetting;
