import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

const usePreference = () => {
  const {loading, postData} = useHttp();

  const {dataPos, dataLoc} = useSelector(state => ({
    dataPos: state.preference.dataPos,
    dataLoc: state.preference.dataLoc,
  }));

  const navigation = useNavigation();

  const submit = () => {
    const param = {
      position: dataPos,
      location: dataLoc,
    };

    postData({
      url: endpoint.POST_JP_DATA,
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

export default usePreference;
