import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'component';
import {colors, images} from 'assets';

const BottomBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.container, styles.shadow]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            let isMe = route.name === 'Profile' ? {me: true, isId: 0} : {};
            navigation.navigate(route.name, isMe);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const setIcon = () => {
          let icon = images.vacanciesActive;
          switch (index) {
            case 0:
              icon = isFocused ? images.vacanciesActive : images.vacancies;
              break;
            case 1:
              icon = isFocused ? images.agendaActive : images.agenda;
              break;
            case 2:
              icon = isFocused ? images.userActive : images.user;
              break;
          }

          return icon;
        };

        const setTitle = () => {
          let text = 'Vacancies';
          switch (index) {
            case 0:
              text = 'Vacancies';
              break;
            case 1:
              text = 'Agenda';
              break;
            case 2:
              text = 'Profile';
              break;
          }

          return (
            <Text
              bold={isFocused ? true : false}
              medium={isFocused ? false : true}
              style={[styles.textInfo]}
              fontSize={12}>
              {text}
            </Text>
          );
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.flex}>
            <View style={styles.wrapperIcon}>
              <Image
                source={setIcon()}
                style={styles.imageIcon}
                resizeMode={'contain'}
              />
              {setTitle()}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 84,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.dwWhite,
    paddingHorizontal: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 0,
  },
  shadow: {
    shadowColor: colors.silver,
    shadowOffset: {
      width: 0.5,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4.0,
    elevation: 4,
  },
  wrapperIcon: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageIcon: {
    width: 32,
    height: 32,
  },
  flex: {
    flex: 1,
  },
  textInfo: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export {BottomBar};
