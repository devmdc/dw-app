import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';
import {PreferenceAction} from 'action';
import {store} from '../../../store';

const usePreference = () => {
  const {loading, postData} = useHttp();

  const {dataPos, dataLoc} = useSelector(state => ({
    dataPos: state.preference.dataPos,
    dataLoc: state.preference.dataLoc,
  }));

  const navigation = useNavigation();

  useEffect(() => {
    store.dispatch(PreferenceAction.setEmpty());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
