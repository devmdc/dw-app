import {formatDate} from 'utils';

const useVacancy = () => {
  const checkDate = (dateStart, dateEnd) => {
    if (formatDate(dateStart, true) > formatDate(dateEnd, true)) {
      return false;
    }

    return true;
  };

  return {checkDate};
};

export default useVacancy;
