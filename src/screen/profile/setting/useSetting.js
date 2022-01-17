import {useEffect, useState} from 'react';
import {Buffer} from 'buffer';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useHttp, endpoint} from 'api';

const useSetting = () => {
  const {loading, postData, getData, uploadData} = useHttp();

  const navigation = useNavigation();

  const [data, setData] = useState({});
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getProfile();
    getEducation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const takePicture = () => {
    const opt = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(opt, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let base64Pict = 'data:image/png;base64,' + response.assets[0].base64;
        setData({...data, photo: base64Pict});
        submitPicture(response.assets[0].base64);
      }
    });
  };

  const submitPicture = base64 => {
    const buffer = Buffer.from(base64, 'base64');

    uploadData({
      url: endpoint.POST_UPLOAD_DATA,
      data: buffer,
      onSuccess: res => {
        console.log(res);
        const {data: dtUpload, status} = res;
        if (status === 200) {
          setData({...data, photo: dtUpload.file_url});
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

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

  return {loading, data, education, submit, takePicture};
};

export default useSetting;
