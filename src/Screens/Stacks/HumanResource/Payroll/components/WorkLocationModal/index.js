import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  Animated,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {colors, fontFamily} from 'constants';
import {pxScale} from 'Helpers';
import React from 'react';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import dataTest from './dataTest';
const WorkLocationModal = ({
  isVisible,
  onPressClose,
  onPressOK,
  onPressItem,
  pickedItem,
}) => {
  const flatlistRef = React.useRef();
  const [textSearch, setTextSearch] = React.useState('');
  const [workLocationArr, setWorkLocationArr] = React.useState(dataTest);
  React.useEffect(() => {
    setWorkLocationArr(
      dataTest.filter(item =>
        item.worklocation.toLowerCase().includes(textSearch.toLowerCase()),
      ),
    );
  }, [textSearch]);
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
            height: Platform.OS === 'ios' ? pxScale.hp(800) : pxScale.hp(900),
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
              fontSize: pxScale.fontSize(18),
            }}>
            Select Work Location
          </Text>
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
              style={{fontSize: pxScale.fontSize(18)}}
              onChangeText={setTextSearch}
              placeholder="Search Work Location"
            />
          </View>
          <View>
            <ScrollView nestedScrollEnabled={true} style={{zIndex: 1}}>
              {workLocationArr.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => onPressItem(item.worklocation)}>
                    <View
                      style={{
                        marginVertical: pxScale.hp(8),
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          fontSize: pxScale.fontSize(18),
                          flex: 1,
                          color:
                            pickedItem === item.worklocation
                              ? colors.primary.green
                              : colors.primary.black,
                          fontFamily:
                            pickedItem === item.worklocation
                              ? fontFamily.InterBold
                              : fontFamily.InterRegular,
                        }}>
                        {item.worklocation}
                      </Text>
                      {pickedItem === item.worklocation && (
                        <AppImageSvg
                          source={AppIcon.iconGreenCheck}
                          width={pxScale.wp(20)}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </Animated.ScrollView>
    </Modal>
  );
};
export default React.memo(WorkLocationModal);
