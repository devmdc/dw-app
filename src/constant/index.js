import {colors} from 'assets';

/**
 * @description Enum of status vacancy
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export const STATUS_VACANCY = {
  OPEN: 'Open',
  CLOSED: 'Closed',
};

/**
 * @description Enum of status applied
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export const STATUS_APPLIED = {
  NOT_APPLIED: 'Not Applied',
  UNSUITABLE: 'Unsuitable',
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
 * @description Enum of status agenda
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export const STATUS_AGENDA = {
  NOT_APPLIED: 'Not Applied',
  UNSUITABLE: 'Unsuitable',
  APPLIED: 'Applied',
  REQUEST_INTERVIEW: 'Requested',
  INTERVIEW_ACCEPTED: 'Aceppted',
  INTERVIEW_REJECTED: 'Rejected',
  UPCOMING: 'Upcoming',
  FAILED: 'Failed',
  ONGOING: 'On Going',
  FINISHED: 'Finished',
  REVIEWED: 'Reviewed',
};

/**
 * @description For define title by status applied
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export function getTitle(status = STATUS_APPLIED.NOT_APPLIED) {
  switch (status) {
    case STATUS_APPLIED.UNSUITABLE:
      return 'Unsuitable';
    case STATUS_APPLIED.APPLIED:
      return 'Waiting Interview';
    case STATUS_APPLIED.REQUEST_INTERVIEW:
      return 'Request Interview';
    case STATUS_APPLIED.INTERVIEW_ACCEPTED:
      return 'Interview Accepted';
    case STATUS_APPLIED.INTERVIEW_REJECTED:
      return 'Interview Rejected';
    case STATUS_APPLIED.UPCOMING:
      return 'Upcoming';
    case STATUS_APPLIED.FAILED:
      return 'Failed';
    case STATUS_APPLIED.ONGOING:
      return 'On Going';
    case STATUS_APPLIED.FINISHED:
      return 'Finished';
    case STATUS_APPLIED.REVIEWED:
      return 'Reviewed';
    default:
      return 'Not Applied';
  }
}

/**
 * @description For define color by status applied
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export function getColor(status = STATUS_APPLIED.NOT_APPLIED) {
  switch (status) {
    case STATUS_APPLIED.UNSUITABLE:
      return colors.dwFreshOrange;
    case STATUS_APPLIED.APPLIED:
      return colors.dwBlueTwitter;
    case STATUS_APPLIED.REQUEST_INTERVIEW:
      return colors.dwBlueTwitter;
    case STATUS_APPLIED.INTERVIEW_ACCEPTED:
      return colors.dwBlueTwitter;
    case STATUS_APPLIED.INTERVIEW_REJECTED:
      return colors.dwRed;
    case STATUS_APPLIED.UPCOMING:
      return colors.dwBlueTwitter;
    case STATUS_APPLIED.FAILED:
      return colors.dwRed;
    case STATUS_APPLIED.ONGOING:
      return colors.dwBlueTwitter;
    case STATUS_APPLIED.FINISHED:
      return colors.dwWhatsapp;
    case STATUS_APPLIED.REVIEWED:
      return colors.dwWhatsapp;
    default:
      return colors.dwBlueTwitter;
  }
}

/**
 * @description For define title by status agenda
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export function getTitleAgenda(status = STATUS_AGENDA.NOT_APPLIED) {
  switch (status) {
    case STATUS_AGENDA.UNSUITABLE:
      return 'Unsuitable';
    case STATUS_AGENDA.APPLIED:
      return 'Applied';
    case STATUS_AGENDA.REQUEST_INTERVIEW:
      return 'Requested';
    case STATUS_AGENDA.INTERVIEW_ACCEPTED:
      return 'Accepted';
    case STATUS_AGENDA.INTERVIEW_REJECTED:
      return 'Rejected';
    case STATUS_AGENDA.UPCOMING:
      return 'Upcoming';
    case STATUS_AGENDA.FAILED:
      return 'Failed';
    case STATUS_AGENDA.ONGOING:
      return 'On Going';
    case STATUS_AGENDA.FINISHED:
      return 'Finished';
    case STATUS_AGENDA.REVIEWED:
      return 'Reviewed';
    default:
      return 'Not Applied';
  }
}

/**
 * @description For define color by status agenda
 * @author Raden Agung Wijaya <mdc.co.id>
 * @date 2022-01-03
 * @export
 */
export function getColorAgenda(status = STATUS_AGENDA.NOT_APPLIED) {
  switch (status) {
    case STATUS_AGENDA.UNSUITABLE:
      return colors.dwFreshOrange;
    case STATUS_AGENDA.APPLIED:
      return colors.dwBlueTwitter;
    case STATUS_AGENDA.REQUEST_INTERVIEW:
      return colors.dwBlueTwitter;
    case STATUS_AGENDA.INTERVIEW_ACCEPTED:
      return colors.dwBlueTwitter;
    case STATUS_AGENDA.INTERVIEW_REJECTED:
      return colors.dwRed;
    case STATUS_AGENDA.UPCOMING:
      return colors.dwBlueTwitter;
    case STATUS_AGENDA.FAILED:
      return colors.dwRed;
    case STATUS_AGENDA.ONGOING:
      return colors.dwBlueTwitter;
    case STATUS_AGENDA.FINISHED:
      return colors.dwWhatsapp;
    case STATUS_AGENDA.REVIEWED:
      return colors.dwWhatsapp;
    default:
      return colors.dwBlueTwitter;
  }
}
