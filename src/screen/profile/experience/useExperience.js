import {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';

const useExperience = () => {
  const {postData} = useHttp();

  const [initial, setInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [dataJob, setDataJob] = useState([]);
  const [refreshLoad, setRefreshLoad] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (!initial) {
        getDataJob();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initial]),
  );

  useEffect(() => {
    fetchData();
    setInitial(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshData = () => {
    setRefreshLoad(true);

    getDataJob();

    setRefreshLoad(false);
  };

  const fetchData = async () => {
    setLoading(true);
    await getDataJob();
    setLoading(false);
  };

  const getDataJob = async () => {
    postData({
      url: endpoint.GET_EXPERIENCE,
      onSuccess: res => {
        const {data, status} = res;
        if (status === 200) {
          setDataJob(data);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {
    dataJob,
    loading,
    refreshData,
    refreshLoad,
  };
};

export default useExperience;
