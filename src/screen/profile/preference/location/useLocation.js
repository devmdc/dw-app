import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';
import {PreferenceAction} from 'action';
import {store} from '../../../../store';

const useLocation = () => {
  const {loading, getData} = useHttp();

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
          setLocation(data.location);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const saveData = (check, item) => {
    let newData = {...item, check: check};
    store.dispatch(PreferenceAction.setDataLoc(newData));
  };

  return {loading, location, saveData};
};

export default useLocation;
