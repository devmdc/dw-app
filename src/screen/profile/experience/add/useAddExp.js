import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useHttp, endpoint} from 'api';
import {formatDate} from 'utils';

const useAddExp = () => {
  const {loading, postData, getData} = useHttp();

  const navigation = useNavigation();

  const [city, setCity] = useState([]);
  const [position, setPosition] = useState([]);

  useEffect(() => {
    getCity();
    getPosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosition = () => {
    getData({
      url: endpoint.GET_JOB_POSITION,
      onSuccess: res => {
        const {data, status} = res;
        if (status === 200) {
          setPosition(data);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const getCity = () => {
    getData({
      url: endpoint.GET_CITY,
      onSuccess: res => {
        const {data, status} = res;
        if (status === 200) {
          setCity(data);
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const submit = (
    hotel,
    posId,
    cityId,
    dateStart,
    dateEnd,
    payment,
    period,
  ) => {
    const param = {
      company_name: hotel,
      job_position_id: posId,
      city_id: cityId,
      date_start: formatDate(dateStart, true),
      date_end: formatDate(dateEnd, true),
      payment: parseInt(payment, 10),
      period: period,
    };

    postData({
      url: endpoint.POST_ADD_EXPERIENCE,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          navigation.goBack();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const checkDate = (dateStart, dateEnd) => {
    console.log(dateStart, dateEnd);
    if (dateStart > dateEnd) {
      return false;
    }

    return true;
  };

  return {loading, submit, city, position, checkDate};
};

export default useAddExp;
