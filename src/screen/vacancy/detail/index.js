import React, {useEffect} from 'react';
import {View, Image, ScrollView} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {Container, Header, Loading, Text} from 'component';
import {colors, images} from 'assets';

import styles, {setMarginTop} from './styles';

const DetailVacancyScreen = ({route, navigation}) => {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container color={'transparent'}>
      <DropShadow style={[styles.shadowNavbar, {zIndex: 2}]}>
        <Header isBack logo />
      </DropShadow>

      <View style={styles.wrapperStatus}>
        <Text style={styles.textStatus}>Request Interview</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.wrapperSection, setMarginTop(56)]}>
          <DropShadow style={[styles.shadowImage]}>
            <View style={styles.wrapperProfile}>
              <Image
                source={images.profile}
                style={styles.imageProfile}
                resizeMode={'cover'}
              />
            </View>
          </DropShadow>
          <Text
            semibold
            fontSize={15}
            style={[styles.textTitle, setMarginTop(50)]}>
            Urgently Need! House Keeper
          </Text>
          <Text
            semibold
            fontSize={11}
            style={[styles.textTitle, setMarginTop(5), {color: colors.dwBlue}]}>
            Company Name
          </Text>
          <Text
            bold
            fontSize={13}
            style={[setMarginTop(20), {color: colors.dwMediumBlue}]}>
            Basic Info
          </Text>
          <View style={[styles.line, setMarginTop(5)]} />
          <View style={[{flexDirection: 'row'}, setMarginTop(15)]}>
            <Image
              source={images.vacanJob}
              style={styles.imageVacan}
              resizeMode={'contain'}
            />
            <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              House Keeper
            </Text>
          </View>
          <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
            <Image
              source={images.vacanPerson}
              style={styles.imageVacan}
              resizeMode={'contain'}
            />
            <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              5 person
            </Text>
          </View>
          <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
            <Image
              source={images.vacanLocation}
              style={styles.imageVacan}
              resizeMode={'contain'}
            />
            <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              Jakarta Barat
            </Text>
          </View>
          <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
            <Image
              source={images.vacanGender}
              style={styles.imageVacan}
              resizeMode={'contain'}
            />
            <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              Male / Female
            </Text>
          </View>
          <View style={[{flexDirection: 'row'}, setMarginTop(10)]}>
            <Image
              source={images.vacanProfile}
              style={styles.imageVacan}
              resizeMode={'contain'}
            />
            <Text medium fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              19 - 25 Tahun
            </Text>
          </View>
        </View>

        <View style={[styles.wrapperSection, setMarginTop(16)]}>
          <Text bold fontSize={13} style={[{color: colors.dwWhatsapp}]}>
            Work Info
          </Text>
          <View style={[styles.line, setMarginTop(5)]} />
          <View style={[setMarginTop(10)]}>
            <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              Work Date
            </Text>
            <Text
              medium
              fontSize={11}
              style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
              DD/MM/YYYY - DD/MM/YYYY
            </Text>
            <View style={[styles.line, setMarginTop(5)]} />
          </View>
          <View style={[setMarginTop(10)]}>
            <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              Day-off
            </Text>
            <Text
              medium
              fontSize={11}
              style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
              Lorem Ipsum
            </Text>
            <View style={[styles.line, setMarginTop(5)]} />
          </View>
          <View style={[setMarginTop(10)]}>
            <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              Salary
            </Text>
            <Text
              medium
              fontSize={11}
              style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
              IDR 0
            </Text>
            <View style={[styles.line, setMarginTop(5)]} />
          </View>
          <View style={[setMarginTop(10)]}>
            <Text bold fontSize={11} style={[{color: colors.dwDarkGrey}]}>
              Work location
            </Text>
            <Text
              medium
              fontSize={11}
              style={[{color: colors.dwLightGrey}, setMarginTop(2)]}>
              Street, Region, City
            </Text>
            <View style={[styles.line, setMarginTop(5)]} />
          </View>
        </View>

        <View style={[styles.wrapperSection, setMarginTop(16)]}>
          <Text bold fontSize={13} style={[{color: colors.dwFreshOrange}]}>
            Description
          </Text>
          <View style={[styles.line, setMarginTop(5)]} />
          <Text
            medium
            fontSize={11}
            style={[{color: colors.dwDarkGrey}, setMarginTop(10)]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet : Cons ectetuer
            adipiscing elit Sed diam nonummy nibh euismod Tincidunt ut laoreet
            dolore magna Aliquam erat volutpat. See Less
          </Text>
        </View>
      </ScrollView>

      <DropShadow style={[styles.shadowFooter, {zIndex: 4}]}>
        <View style={styles.wrapperFooter} />
      </DropShadow>
    </Container>
  );
};

export default DetailVacancyScreen;
