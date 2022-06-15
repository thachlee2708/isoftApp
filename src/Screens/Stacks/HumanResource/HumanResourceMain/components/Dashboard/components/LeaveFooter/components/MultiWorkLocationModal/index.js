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
import CheckBox from 'components/CheckBox';
const MultiWorkLocationModal = ({
  isVisible,
  onPressClose,
  setPickedItems,
  checkedWorkLocation,
  setCheckedWorkLocation,
  data,
}) => {
  const [textSearch, setTextSearch] = React.useState('');
  const [workLocationArr, setWorkLocationArr] = React.useState(data);
  const [checkedItems, setCheckedItems] = React.useState(checkedWorkLocation);
  React.useEffect(() => {
    setWorkLocationArr(
      data.filter(item =>
        item.worklocation.toLowerCase().includes(textSearch.toLowerCase()),
      ),
    );
  }, [textSearch]);
  const onCheckAllItem = React.useCallback(
    value => {
      if (value) {
        setCheckedItems(workLocationArr);
      } else {
        setCheckedItems([]);
      }
    },
    [setCheckedWorkLocation, workLocationArr, setCheckedItems],
  );
  const renderItem = React.useCallback(item => {
    const onCheckItem = value => {
      if (value) {
        if (!checkedItems.includes(item)) {
          setCheckedItems([...checkedItems, item]);
        }
      }
      if (!value) {
        var i = checkedItems.indexOf(item);
        if (i !== -1) {
          setCheckedItems([
            ...checkedItems.slice(0, i),
            ...checkedItems.slice(i + 1),
          ]);
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
          changeValue={checkedItems.includes(item)}
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
    setCheckedWorkLocation(checkedItems);
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
            <Text numberOfLines={1} style={{marginRight: pxScale.wp(10)}}>
              {checkedItems.map(e => {
                return e.worklocation + ' ';
              })}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: pxScale.hp(20)}}>
            <CheckBox
              changeValue={
                workLocationArr.length === checkedWorkLocation.length
              }
              initialValue={
                workLocationArr.length === checkedWorkLocation.length
              }
              onValueChange={onCheckAllItem}
            />
            <Text
              style={{
                marginLeft: pxScale.wp(10),
                fontSize: pxScale.fontSize(18),
                color: colors.primary.black,
                fontFamily:
                  workLocationArr.length === checkedItems.length
                    ? fontFamily.InterBold
                    : fontFamily.InterRegular,
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
