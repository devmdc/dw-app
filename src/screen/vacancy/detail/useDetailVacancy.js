import React, {useState} from 'react';
import {useHttp, endpoint} from 'api';

import {STATUS_APPLIED} from 'constant';

import FooterInterview from './component/footerinterview';
import FooterStatus from './component/footerstatus';
import FooterResult from './component/footerresult';

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

  const getFooter = (status = STATUS_APPLIED.NOT_APPLIED) => {
    switch (status) {
      case STATUS_APPLIED.UNSUITABLE:
        return <FooterInterview />;
      case STATUS_APPLIED.APPLIED:
        return <FooterInterview />;
      case STATUS_APPLIED.REQUEST_INTERVIEW:
        return <FooterInterview />;
      case STATUS_APPLIED.INTERVIEW_ACCEPTED:
        return <FooterInterview />;
      case STATUS_APPLIED.INTERVIEW_REJECTED:
        return <FooterInterview />;
      case STATUS_APPLIED.UPCOMING:
        return <FooterInterview />;
      case STATUS_APPLIED.FAILED:
        return <FooterInterview />;
      case STATUS_APPLIED.ONGOING:
        return <FooterInterview />;
      case STATUS_APPLIED.FINISHED:
        return <FooterInterview />;
      case STATUS_APPLIED.REVIEWED:
        return <FooterInterview />;
      default:
        return <FooterInterview />;
    }
  };

  return {loading, data, getData, getFooter};
};

export default useDetailVacancy;
