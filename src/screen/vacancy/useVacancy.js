import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';
import {formatDate} from 'utils';

const useVacancy = () => {
  const {loading, postData} = useHttp();

  const [data, setData] = useState([]);

  useEffect(() => {
    getRecentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRecentData = () => {
    let param = {limit: 5};

    postData({
      url: endpoint.GET_RECENT_VACANCY,
      params: param,
      onSuccess: res => {
        const {data: result, status} = res;

        if (status === 200) {
          setData(result);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const checkDate = (dateStart, dateEnd) => {
    if (formatDate(dateStart, true) > formatDate(dateEnd, true)) {
      return false;
    }

    return true;
  };

  return {loading, data, checkDate};
};

export default useVacancy;
