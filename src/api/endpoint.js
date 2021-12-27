import Config from 'react-native-config';

const endpoint = {
  POST_LOGIN: Config.BASEURL + 'auth/login/manual',
  POST_REGISTER_EMAIL: Config.BASEURL + 'auth/register/submit_email',
  POST_REGISTER_VERIFY: Config.BASEURL + 'auth/register/verify_code',
  POST_REGISTER_DATA: Config.BASEURL + 'auth/register/submit_data',
};

export {endpoint};
