import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';

const useSearchPosition = () => {
  const {loading, getData} = useHttp();

  const [data, setData] = useState([]);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getdata = () => {
    getData({
      url: endpoint.GET_SEARCH_POSITION,
      onSuccess: res => {
        const {data: result, status} = res;

        if (status === 200) {
          setData(result);
          setPosition(result);
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

    setPosition(newData);
  };

  return {loading, position, search};
};

export default useSearchPosition;
