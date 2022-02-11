import {useState, useEffect} from 'react';
import {useHttp, endpoint} from 'api';
import {formatDate} from 'utils';

const useVacancy = () => {
  const {loading, postData} = useHttp();

  const [dataSuggest, setDataSuggest] = useState([]);
  const [dataRecent, setDataRecent] = useState([]);

  useEffect(() => {
    getSuggestData();
    getRecentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSuggestData = () => {
    let param = {limit: 5};

    postData({
      url: endpoint.GET_SUGGEST_VACANCY,
      params: param,
      onSuccess: res => {
        const {data: result, status} = res;

        if (status === 200) {
          setDataSuggest(result);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const getRecentData = () => {
    let param = {limit: 5};

    postData({
      url: endpoint.GET_RECENT_VACANCY,
      params: param,
      onSuccess: res => {
        const {data: result, status} = res;

        if (status === 200) {
          setDataRecent(result);
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

  return {loading, dataRecent, dataSuggest, checkDate};
};

export default useVacancy;
