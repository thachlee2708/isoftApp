import {SafeAreaView, Text} from 'react-native';
import React, {memo} from 'react';
const AccountTab = () => {
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center'}}>Account Tab</Text>
    </SafeAreaView>
  );
};
export default memo(AccountTab);
