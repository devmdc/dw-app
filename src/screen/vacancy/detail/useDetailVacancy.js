import {useState} from 'react';
import {useHttp, endpoint} from 'api';

const useDetailVacancy = () => {
  const {loading, postData} = useHttp();

  const [data, setData] = useState([]);

  const getData = id => {
    postData({
      url: endpoint.GET_DETAIL_VACANCY,
      params: {vacancy_id: id},
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

  return {loading, data, getData};
};

export default useDetailVacancy;
