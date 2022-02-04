import React, {useEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Loading} from 'component';
import {formatDate} from 'utils';
import {colors, images} from 'assets';

import styles from './styles';
import CardResult from '../component/cardvacancyresult';

const MoreScreen = ({route, navigation}) => {
  const {title} = route.params || {};

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item, index}) => {
    return <CardResult />;
  };

  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.container}>
        <View style={[styles.wrapper]}>
          <View style={styles.wrapInfo}>
            <Text semibold style={[{color: colors.dwDarkGrey}]} fontSize={15}>
              Found 5 job/vacancies
            </Text>
            <Text style={[{color: colors.dwGrey}]} fontSize={11}>
              {title}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={images.searchBack}
              style={styles.searchIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperList}>
          <FlatList
            contentContainerStyle={styles.contentList}
            showsVerticalScrollIndicator={false}
            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            keyExtractor={index => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Container>
  );
};

export default MoreScreen;
