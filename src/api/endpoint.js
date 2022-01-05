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
};

export {endpoint};
