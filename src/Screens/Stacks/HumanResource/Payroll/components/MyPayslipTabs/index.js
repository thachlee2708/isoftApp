import {View, Text, TouchableOpacity} from 'react-native';
import {AppIcon} from 'assets/icons';
import AppImageSvg from 'components/AppImageSvg';
import {pxScale} from 'Helpers';
import React from 'react';
import {colors} from 'constants';
import styles from './styles';
const MyPayslipTabs = ({pickedPayslipTab, onPressItem}) => {
  const onPress = React.useCallback(
    item => {
      onPressItem(item);
    },
    [onPressItem],
  );
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: pxScale.wp(10),
      }}>
      <View
        style={{
          marginRight: pxScale.wp(10),
          borderBottomWidth: pickedPayslipTab === 'Payslip' ? 3 : 0,
          borderBottomColor: colors.primary.green,
        }}>
        <TouchableOpacity onPress={() => onPress('Payslip')}>
          <Text
            style={[
              styles.text,
              {
                color:
                  pickedPayslipTab === 'Payslip'
                    ? colors.primary.green
                    : colors.primary.black,
              },
            ]}>
            Payslip
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginRight: pxScale.wp(10),
          borderBottomWidth: pickedPayslipTab === 'Taxation' ? 3 : 0,
          borderBottomColor: colors.primary.green,
        }}>
        <TouchableOpacity onPress={() => onPress('Taxation')}>
          <Text
            style={[
              styles.text,
              {
                color:
                  pickedPayslipTab === 'Taxation'
                    ? colors.primary.green
                    : colors.primary.black,
              },
            ]}>
            Taxation
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}></View>
      <AppImageSvg
        style={{flex: 1}}
        source={AppIcon.iconKey}
        width={pxScale.wp(25)}
        height={pxScale.hp(25)}
      />
    </View>
  );
};
export default React.memo(MyPayslipTabs);
