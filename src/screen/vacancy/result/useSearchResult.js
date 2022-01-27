import {useState} from 'react';
import {useHttp, endpoint} from 'api';

const useSearchResult = () => {
  const {loading, postData} = useHttp();

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  const getdata = (cID, jpID, dtStart, dtEnd) => {
    let param = {
      city_id: cID,
      job_position_id: jpID,
      gender: 'All',
      date_start: dtStart,
      date_end: dtEnd,
      page: 1,
      limit: 10,
    };

    postData({
      url: endpoint.GET_SEARCH_LIST,
      params: param,
      onSuccess: res => {
        const {data: result, status, meta} = res;
        const {total_data} = meta || {};

        if (status === 200) {
          setData(result);
          setCount(total_data || 0);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, data, count, getdata};
};

export default useSearchResult;
