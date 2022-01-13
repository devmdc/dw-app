import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

const useSetting = () => {
  const {loading, postData, getData} = useHttp();

  const navigation = useNavigation();

  const [data, setData] = useState({});
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getProfile();
    getEducation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProfile = () => {
    getData({
      url: endpoint.GET_SETTING_DATA,
      onSuccess: res => {
        const {data: dtProfile, status} = res;
        if (status === 200) {
          setData(dtProfile);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const getEducation = () => {
    getData({
      url: endpoint.GET_EDUCATION,
      onSuccess: res => {
        const {data: dtEdu, status} = res;
        if (status === 200) {
          setEducation(dtEdu);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const submit = (photo, name, gender, dob, eduId, cityId) => {
    const param = {
      photo: photo,
      full_name: name,
      gender: gender,
      dob: dob,
      last_education_id: eduId,
      city_id: cityId,
    };
    console.log(param);
    postData({
      url: endpoint.POST_SETTING_DATA,
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

  return {loading, data, education, submit};
};

export default useSetting;
