import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
import React from 'react';
import styles from './styles';
const YearPicker = ({
  isVisible,
  yearPicked,
  setYearPicked,
  onPressCancel,
  onPressOK,
}) => {
  const flatlistRef = React.useRef();

  const currentYear = new Date().getFullYear();
  let yearArr = [];
  for (let i = currentYear + 10; i >= currentYear - 30; i--) {
    yearArr.push(i);
  }
  yearArr.reverse();
  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={isVisible}
      animationType="slide">
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          flex: 1,
        }}>
        <TouchableWithoutFeedback onPress={onPressCancel}>
          <View style={{flex: 1}}></View>
        </TouchableWithoutFeedback>
        <View
          style={{
            borderRadius: pxScale.wp(5),
            alignSelf: 'center',
            height: pxScale.hp(520),
            backgroundColor: colors.primary.white,
            width: pxScale.wp(396),
            padding: pxScale.wp(25),
          }}>
          <Text>YEAR ONLY</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                flex: 1,
                marginTop: pxScale.hp(10),
                fontSize: pxScale.fontSize(40),
                fontFamily: fontFamily.InterSemiBold,
              }}>
              {yearPicked}
            </Text>
            <AppImageSvg
              source={AppIcon.formsIcon}
              width={pxScale.wp(30)}
              height={pxScale.hp(30)}
            />
          </View>
          <View style={{alignItems: 'center', marginTop: pxScale.hp(20)}}>
            <FlatList
              ref={flatlistRef}
              keyExtractor={(_, index) => index.toString()}
              data={yearArr}
              numColumns={3}
              style={{height: pxScale.hp(300)}}
              columnWrapperStyle={{
                width: pxScale.wp(310),
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => setYearPicked(item)}>
                  <View
                    style={{
                      backgroundColor: yearPicked === item ? 'blue' : 'white',
                      borderRadius: pxScale.wp(25),
                      padding: pxScale.wp(10),
                    }}>
                    <Text
                      style={{
                        fontSize: pxScale.fontSize(20),
                        fontFamily: fontFamily.InterRegular,
                        color:
                          yearPicked === item
                            ? colors.primary.white
                            : colors.primary.black,
                      }}>
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginTop:
                Platform.OS === 'ios' ? pxScale.hp(40) : pxScale.hp(20),
            }}>
            <TouchableOpacity onPress={onPressCancel}>
              <Text style={styles.bottomText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressOK}>
              <Text style={styles.bottomText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={onPressCancel}>
          <View style={{flex: 1}}></View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
};
export default React.memo(YearPicker);
