import Config from 'react-native-config';

const endpoint = {
  POST_LOGIN: Config.BASEURL + 'auth/login/manual',
  POST_REGISTER_EMAIL: Config.BASEURL + 'auth/register/submit_email',
  POST_REGISTER_VERIFY: Config.BASEURL + 'auth/register/verify_code',
  POST_REGISTER_DATA: Config.BASEURL + 'auth/register/submit_data',
  POST_FORGOT_EMAIL: Config.BASEURL + 'auth/reset_password/submit_email',
  POST_FORGOT_VERIFY: Config.BASEURL + 'auth/reset_password/verify_code',
  POST_FORGOT_DATA: Config.BASEURL + 'auth/reset_password/submit_data',
};

export {endpoint};
