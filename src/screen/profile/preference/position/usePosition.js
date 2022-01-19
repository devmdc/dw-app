import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';
import {PreferenceAction} from 'action';
import {store} from '../../../../store';

const usePosition = () => {
  const {loading, getData} = useHttp();

  const [position, setPosition] = useState([]);

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
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const saveData = (check, item) => {
    let newData = {...item, check: check};
    store.dispatch(PreferenceAction.setDataPos(newData));
  };

  return {loading, position, saveData};
};

export default usePosition;
