import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Config from 'react-native-config';
import {Container, Header} from 'component';
import {WebView} from 'react-native-webview';
import {colors} from 'assets';

import styles from './styles';

const WebviewScreen = ({route, navigation}) => {
  const {isPrivacy} = route.params || {};

  const uri = isPrivacy ? Config.PRIVACYURL : Config.TOSURL;

  const title = isPrivacy ? 'Privacy Policies' : 'Term Of Service';

  const [loading, setLoading] = useState(true);

  return (
    <Container color={colors.pure}>
      <DropShadow style={styles.shadowNavbar}>
        <Header isBack logo />
      </DropShadow>
      <WebView onLoad={() => setLoading(false)} source={{uri: uri}} />
      {/* {loading && <ActivityIndicator style={styles.indicator} size="large" />} */}
    </Container>
  );
};

export default WebviewScreen;
