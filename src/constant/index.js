import {colors} from 'assets';

/**
 * @description Enum of status vacancy
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export const STATUS = {
  APPLIED: 'Waiting Interview',
  REQUEST_INTERVIEW: 'Request Interview',
  INTERVIEW_ACCEPTED: 'Interview Accepted',
  INTERVIEW_REJECTED: 'Interview Rejected',
  UPCOMING: 'Upcoming',
  FAILED: 'Failed',
  ONGOING: 'On Going',
  FINISHED: 'Finished',
  REVIEWED: 'Reviewed',
};

/**
 * @description For define title by status
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export function getTitle(status = STATUS.APPLIED) {
  switch (status) {
    case STATUS.APPLIED:
      return 'Waiting Interview';
    case STATUS.REQUEST_INTERVIEW:
      return 'Request Interview';
    case STATUS.INTERVIEW_ACCEPTED:
      return 'Interview Accepted';
    case STATUS.INTERVIEW_REJECTED:
      return 'Interview Rejected';
    case STATUS.UPCOMING:
      return 'Upcoming';
    case STATUS.FAILED:
      return 'Failed';
    case STATUS.ONGOING:
      return 'On Going';
    case STATUS.FINISHED:
      return 'Finished';
    case STATUS.REVIEWED:
      return 'Reviewed';
    default:
      return STATUS.APPLIED;
  }
}

/**
 * @description For define color by status
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export function getColor(status = STATUS.APPLIED) {
  switch (status) {
    case STATUS.APPLIED:
      return colors.dwBlueTwitter;
    case STATUS.REQUEST_INTERVIEW:
      return colors.dwBlueTwitter;
    case STATUS.INTERVIEW_ACCEPTED:
      return colors.dwBlueTwitter;
    case STATUS.INTERVIEW_REJECTED:
      return colors.dwRed;
    case STATUS.UPCOMING:
      return colors.dwBlueTwitter;
    case STATUS.FAILED:
      return colors.dwRed;
    case STATUS.ONGOING:
      return colors.dwBlueTwitter;
    case STATUS.FINISHED:
      return colors.dwWhatsapp;
    case STATUS.REVIEWED:
      return colors.dwWhatsapp;
    default:
      return colors.dwBlueTwitter;
  }
}
