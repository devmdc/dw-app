import React, {useState} from 'react';
import {useHttp, endpoint} from 'api';
import {formatDateInterview} from 'utils';
import {STATUS_APPLIED} from 'constant';
import {VacancyAction} from 'action';
import {store} from '../../../store';

import FooterInterview from './component/footerinterview';
import FooterStatus from './component/footerstatus';
import FooterResult from './component/footerresult';

const useDetailVacancy = id => {
  const {loading, postData} = useHttp();

  const [data, setData] = useState([]);

  const getData = () => {
    postData({
      url: endpoint.GET_DETAIL_VACANCY,
      params: {vacancy_id: id},
      onSuccess: res => {
        const {data: result, status} = res;

        if (status === 200) {
          setData(result);
          store.dispatch(VacancyAction.fetch(false));
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const getFooter = (
    status = STATUS_APPLIED.NOT_APPLIED,
    date,
    rating,
    ratingText,
  ) => {
    switch (status) {
      case STATUS_APPLIED.UNSUITABLE:
        return (
          <FooterStatus
            title={'Age or gender didn’t match'}
            btntitle={`Can't Apply`}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.APPLIED:
        return (
          <FooterStatus
            title={'Waiting interview'}
            btntitle={'Applied'}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.REQUEST_INTERVIEW:
        return (
          <FooterInterview
            id={id}
            title={'Interview date :'}
            subtitle={formatDateInterview(date)}
            btnleft={'Reject'}
            btnright={'Accept'}
          />
        );
      case STATUS_APPLIED.INTERVIEW_ACCEPTED:
        return (
          <FooterStatus
            title={'Interview date :'}
            subtitle={formatDateInterview(date)}
            btntitle={'Accepted'}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.INTERVIEW_REJECTED:
        return (
          <FooterStatus
            title={'Interview date :'}
            subtitle={formatDateInterview(date)}
            btntitle={'Rejected'}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.UPCOMING:
        return (
          <FooterResult
            title={'Upcoming'}
            subtitle={
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
            }
          />
        );
      case STATUS_APPLIED.FAILED:
        return (
          <FooterStatus
            title={'Interview failed'}
            btntitle={'Failed'}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.ONGOING:
        return (
          <FooterStatus
            title={'Lorem ipsum'}
            btntitle={'On Going'}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.FINISHED:
        return (
          <FooterStatus
            title={'Wait for job provider rating'}
            btntitle={'Finished'}
            btnDisabled={true}
          />
        );
      case STATUS_APPLIED.REVIEWED:
        return (
          <FooterResult title={'Review'} subtitle={ratingText} star={rating} />
        );
      default:
        return (
          <FooterStatus
            id={id}
            title={'Apply or decline this vacancy'}
            btntitle={'Apply'}
          />
        );
    }
  };

  const submitData = async type => {
    var url = endpoint.POST_APPLY_VACANCY;
    if (type === 'accept') {
      url = endpoint.POST_ACCEPT_VACANCY;
    }
    if (type === 'reject') {
      url = endpoint.POST_REJECT_VACANCY;
    }

    postData({
      url: url,
      params: {vacancy_id: id},
      onSuccess: res => {
        const {status} = res;

        if (status === 200) {
          store.dispatch(VacancyAction.fetch(true));
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, data, getData, getFooter, submitData};
};

export default useDetailVacancy;
