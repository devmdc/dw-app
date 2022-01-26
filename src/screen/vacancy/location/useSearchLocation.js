import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';

const useSearchLocation = () => {
  const {loading, getData} = useHttp();

  const [data, setData] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdata = () => {
    getData({
      url: endpoint.GET_SEARCH_CITY,
      onSuccess: res => {
        const {data: result, status} = res;

        if (status === 200) {
          setData(result);
          setLocation(result);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const search = key => {
    const newData = data.filter(
      item => item.name.toLowerCase().indexOf(key) > -1,
    );

    setLocation(newData);
  };

  return {loading, location, search};
};

export default useSearchLocation;
