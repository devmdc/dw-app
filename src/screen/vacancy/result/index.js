import React from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Text, Loading, Input} from 'component';
import {colors, images} from 'assets';

import styles, {setMarginTop} from './styles';
import CardResult from '../component/cardvacancyresult';

import usePosition from '../../profile/preference/position/usePosition';

const ResultScreen = ({navigation}) => {
  const {loading, position} = usePosition();

  const renderItem = ({item, index}) => {
    return <CardResult />;
  };

  return (
    <Container>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Input
            style={[setMarginTop(20)]}
            placeholder={'Search again..'}
            rightIcon={
              <TouchableOpacity onPress={() => console.log('search')}>
                <Image
                  style={styles.imgInput}
                  source={images.search}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            }
          />
        </View>
        <View style={{paddingHorizontal: 16}}>
          <Text
            semibold
            style={[setMarginTop(20), {color: colors.dwDarkGrey}]}
            fontSize={15}>
            Found 5 job/vacancies
          </Text>
          <Text
            medium
            style={[setMarginTop(3), {color: colors.dwGrey}]}
            fontSize={11}>
            House Keeping, Jakarta Barat, 02/05/22-02/07/22
          </Text>
          <View style={[setMarginTop(15), styles.line]} />
        </View>
        <View style={styles.wrapperList}>
          {loading && <Loading />}
          <FlatList
            contentContainerStyle={styles.contentList}
            showsVerticalScrollIndicator={false}
            data={loading ? [] : position}
            keyExtractor={index => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Container>
  );
};

export default ResultScreen;
