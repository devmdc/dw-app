import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';

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

  return {loading, location};
};

export default useLocation;
