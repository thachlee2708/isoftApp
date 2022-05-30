import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import {AppIcon} from '../../../../../../assets/icons';
import {AppImage} from '../../../../../../assets/images';
import {pxScale} from '../../../../../../Helpers';
import {colors} from '../../../../../../constants';
import React from 'react';
import styles from './styles';
const PayrollTabs = ({pickedTab, onPressItem}) => {
  const onPress = React.useCallback(
    item => {
      onPressItem(item.name);
    },
    [onPressItem],
  );
  const arrTab = [
    {icon: AppImage.fullWallet, name: 'My Payslip'},
    {icon: AppImage.report, name: 'Year-To-Date-Report'},
    {icon: AppImage.claim, name: 'Other Approval'},
  ];
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      {arrTab.map(item => {
        return (
          <View
            style={{
              paddingLeft: pxScale.wp(5),
              paddingBottom: pxScale.hp(10),
              marginRight: pxScale.wp(18),
              maxWidth: pxScale.wp(300),
              minWidth: pxScale.wp(230),
            }}>
            <View
              style={{
                borderWidth: pickedTab === item.name ? 1.5 : 0,
                borderColor: colors.primary.green,
                backgroundColor: colors.primary.white,
                borderRadius: pxScale.wp(8),
                marginTop: pxScale.hp(5),
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowRadius: 1,
                shadowOpacity: 0.1,
                elevation: 6,
              }}>
              <TouchableOpacity onPress={() => onPress(item)}>
                <View
                  style={{
                    paddingVertical: pxScale.wp(8),
                    paddingHorizontal: pxScale.wp(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.icon}
                    style={{width: pxScale.wp(50), height: pxScale.hp(50)}}
                  />
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default React.memo(PayrollTabs);
