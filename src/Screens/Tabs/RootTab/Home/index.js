import {SafeAreaView, Text} from 'react-native';
import React, {memo} from 'react';
const HomeTab = () => {
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center'}}>Home Tab</Text>
    </SafeAreaView>
  );
};
export default memo(HomeTab);
