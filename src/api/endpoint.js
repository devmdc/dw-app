import Config from 'react-native-config';

const endpoint = {
  POST_LOGIN: Config.BASEURL + 'auth/login/manual',
  POST_LOGIN_APPLE: Config.BASEURL + 'auth/login/apple',
  POST_LOGIN_GOOGLE: Config.BASEURL + 'auth/login/google',
  POST_LOGIN_FACEBOOK: Config.BASEURL + 'auth/login/facebook',
  POST_REGISTER_EMAIL: Config.BASEURL + 'auth/register/submit_email',
  POST_REGISTER_VERIFY: Config.BASEURL + 'auth/register/verify_code',
  POST_REGISTER_DATA: Config.BASEURL + 'auth/register/submit_data',
  POST_FORGOT_EMAIL: Config.BASEURL + 'auth/reset_password/submit_email',
  POST_FORGOT_VERIFY: Config.BASEURL + 'auth/reset_password/verify_code',
  POST_FORGOT_DATA: Config.BASEURL + 'auth/reset_password/submit_data',
  GET_DETAIL_PROFILE: Config.BASEURL + 'profile/profile/detail',
  POST_LOGOUT: Config.BASEURL + 'profile/profile/logout',
  POST_EDIT_PHONE: Config.BASEURL + 'profile/update_whatsapp/submit_number',
  POST_CHANGE_PASSWORD: Config.BASEURL + 'profile/change_password/update',
  GET_CITY: Config.BASEURL + 'profile/add_experience/get_city',
  GET_JOB_POSITION: Config.BASEURL + 'profile/add_experience/get_job_position',
  POST_ADD_EXPERIENCE: Config.BASEURL + 'profile/add_experience/add',
  POST_EDIT_EXPERIENCE: Config.BASEURL + 'profile/edit_experience/edit',
  GET_EXPERIENCE: Config.BASEURL + 'profile/my_experience/list',
  GET_SETTING_DATA: Config.BASEURL + 'profile/profile_setting/data',
  GET_EDUCATION: Config.BASEURL + 'profile/profile_setting/get_education',
};

export {endpoint};
