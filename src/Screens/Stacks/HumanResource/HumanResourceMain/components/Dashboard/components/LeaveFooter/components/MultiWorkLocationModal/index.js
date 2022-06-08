import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
import React from 'react';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import AppButton from 'components/AppButton';
import dataTest from './dataTest';
import CheckBox from 'components/CheckBox';
const MultiWorkLocationModal = ({
  isVisible,
  onPressClose,
  setPickedItems,
  checkedWorkLocation,
}) => {
  const [textSearch, setTextSearch] = React.useState('');
  const [workLocationArr, setWorkLocationArr] = React.useState(dataTest);
  const [checkedItems, setCheckedItems] = React.useState(checkedWorkLocation);
  React.useEffect(() => {
    setWorkLocationArr(
      dataTest.filter(item =>
        item.worklocation.toLowerCase().includes(textSearch.toLowerCase()),
      ),
    );
  }, [textSearch]);

  const renderItem = React.useCallback(item => {
    const onCheckItem = value => {
      console.log(checkedItems);
      if (value) {
        console.log('1', checkedItems.includes(item));
        if (!checkedItems.includes(item)) {
          checkedItems.push(item);
        }
        console.log('2', checkedItems.includes(item));
      }
      if (!value) {
        var i = checkedItems.indexOf(item);
        if (i !== -1) {
          checkedItems.splice(i, 1);
        }
      }
    };
    return (
      <View
        style={{
          marginVertical: pxScale.hp(8),
          flexDirection: 'row',
        }}>
        <CheckBox
          onValueChange={onCheckItem}
          initialValue={checkedItems.includes(item)}
        />
        <Text
          style={{
            marginLeft: pxScale.wp(10),
            fontSize: pxScale.fontSize(18),
            color: colors.primary.black,
            fontFamily: checkedItems.includes(item)
              ? fontFamily.InterBold
              : fontFamily.InterRegular,
          }}>
          {item.worklocation}
        </Text>
      </View>
    );
  });
  const onConfirm = React.useCallback(() => {
    setPickedItems(JSON.parse(JSON.stringify(checkedItems)));
    onPressClose();
  }, [checkedItems, setPickedItems]);
  return (
    <Modal
      statusBarTranslucent
      transparent
      visible={isVisible}
      animationType="fade">
      <Animated.ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{
          height: pxScale.hp(920),
          backgroundColor: 'rgba(0,0,0,0.3)',
          flex: 1,
        }}>
        <TouchableWithoutFeedback onPress={onPressClose}>
          <View style={{height: pxScale.hp(400)}}></View>
        </TouchableWithoutFeedback>
        <View
          style={{
            paddingHorizontal: pxScale.wp(16),
            borderRadius: pxScale.wp(10),
            alignSelf: 'center',
            height: Platform.OS === 'ios' ? pxScale.hp(900) : pxScale.hp(900),
            backgroundColor: colors.primary.white,
            width: pxScale.wp(428),
          }}>
          <AppImageSvg
            style={{alignSelf: 'center'}}
            source={AppIcon.iconDragable}
            width={pxScale.wp(40)}
            height={pxScale.hp(40)}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: fontFamily.InterBold,
              fontSize: pxScale.fontSize(20),
              marginBottom: pxScale.hp(20),
            }}>
            Select Work Location
          </Text>
          <View style={{flexDirection: 'row'}}>
            {checkedItems.map(e => {
              return (
                <Text style={{marginRight: pxScale.wp(10)}}>
                  {e.worklocation}
                </Text>
              );
            })}
          </View>
          <View style={{flexDirection: 'row', marginVertical: pxScale.hp(20)}}>
            <CheckBox />
            <Text
              style={{
                marginLeft: pxScale.wp(10),
                fontSize: pxScale.fontSize(18),
                color: colors.primary.black,
                // fontFamily: checkedItems.includes(item)
                //   ? fontFamily.InterBold
                //   : fontFamily.InterRegular,
              }}>
              All Work Location
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              height: pxScale.hp(50),
              paddingLeft: pxScale.wp(10),
              borderWidth: 1,
              borderRadius: pxScale.wp(10),
              marginBottom: pxScale.hp(10),
            }}>
            <AppImageSvg
              style={{marginRight: pxScale.wp(10)}}
              source={AppIcon.iconSearch}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
            />
            <TextInput
              onChangeText={setTextSearch}
              placeholder="Search Work Location"
            />
          </View>
          <View>
            <ScrollView nestedScrollEnabled={true} style={{zIndex: 1}}>
              {workLocationArr.map(renderItem)}
            </ScrollView>
          </View>
          <AppButton buttonText={'Confirm'} onPress={onConfirm}></AppButton>
        </View>
      </Animated.ScrollView>
    </Modal>
  );
};
export default React.memo(MultiWorkLocationModal);
