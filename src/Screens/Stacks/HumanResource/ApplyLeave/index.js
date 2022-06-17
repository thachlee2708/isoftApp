import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import AppHeader from 'components/AppHeader';
import {pxScale} from 'Helpers';
import {colors, fontFamily} from 'constants';
import LeaveDisclaimer from './components/LeaveDisclaimer';
const ApplyLeave = () => {
  return (
    <>
      <AppHeader textTitle={'Leave'} />
      <View
        style={{
          height: pxScale.hp(745),
          paddingHorizontal: pxScale.wp(16),
          paddingTop: pxScale.hp(20),
          backgroundColor: colors.primary.white,
        }}>
        <View
          style={{
            borderBottomWidth: pxScale.hp(3),
            borderBottomColor: colors.primary.green,
            marginBottom: pxScale.hp(15),
          }}>
          <Text
            style={{
              color: colors.primary.green,
              fontFamily: fontFamily.InterBold,
              fontSize: pxScale.fontSize(20),
              marginBottom: pxScale.hp(3),
            }}>
            Apply Leave
          </Text>
        </View>
        <LeaveDisclaimer />
      </View>
    </>
  );
};
export default React.memo(ApplyLeave);
