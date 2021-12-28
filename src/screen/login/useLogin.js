import {useHttp, endpoint} from 'api';
import {RootNav} from 'utils';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const useLogin = () => {
  const {loading, postData, showMsgWarning} = useHttp();

  const configGoogle = () => {
    try {
      GoogleSignin.configure({
        // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        webClientId:
          '255241024812-haca1jjmgajfr8vacujf2ulbvaso4c8t.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        // hostedDomain: '', // specifies a hosted domain restriction
        // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        // accountName: '', // [Android] specifies an account name on the device that should be used
        // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      });
    } catch (error) {
      console.log('[error GoogleSignin Configure]', error);
    }
  };

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // const {data, status, message} = await loginGoogle(
      //   userInfo.user.email,
      //   userInfo.user.name,
      //   userInfo.idToken,
      //   token,
      // );

      // if (status === 200) {
      //   RootNav.navigateToVacancies();
      // } else {
      //   showMsgWarning(message);
      // }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        showMsgWarning('user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        showMsgWarning('operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        showMsgWarning('play services not available or outdated');
      } else {
        // some other error happened
        showMsgWarning('some other error happened');
      }
    }
  };

  const submit = (email, password) => {
    const param = {
      email: email,
      password: password,
      fcm_token: 'fcm_token',
    };

    postData({
      url: endpoint.POST_LOGIN,
      params: param,
      onSuccess: res => {
        const {status} = res;
        if (status === 200) {
          RootNav.navigateToVacancies();
        }
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  return {loading, submit, configGoogle, googleLogin};
};

export default useLogin;
