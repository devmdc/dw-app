import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

const usePreference = () => {
  const {loading, postData, getData} = useHttp();

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

  return {loading, position, location};
};

export default usePreference;
