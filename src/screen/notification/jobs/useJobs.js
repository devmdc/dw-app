import {useState} from 'react';
import {useHttp, endpoint} from 'api';

const useJobs = () => {
  const {postData} = useHttp();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchData = async () => {
    let param = {page: 1, limit: 10};

    setLoading(true);
    await getData(param);
    setLoading(false);
  };

  const getData = async param => {
    postData({
      url: endpoint.GET_JOBS_AGENDA,
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

  return {
    loading,
    data,
    fetchData,
  };
};

export default useJobs;
