import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';
import {PreferenceAction} from 'action';
import {store} from '../../../store';

const usePreference = () => {
  const {loading, postData, getData} = useHttp();

  const {dataPos, dataLoc} = useSelector(state => ({
    dataPos: state.preference.dataPos,
    dataLoc: state.user.data.dataLoc,
  }));

  const navigation = useNavigation();

  const [position, setPosition] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdata = () => {
    getData({
      url: endpoint.GET_JP_DATA,
      onSuccess: res => {
        const {data, status} = res;

        if (status === 200) {
          setPosition(data.position);
          setLocation(data.location);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const submit = () => {
    store.dispatch(PreferenceAction.setEmpty());

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

  return {loading, position, location, submit};
};

export default usePreference;
