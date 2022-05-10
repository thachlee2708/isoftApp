import {SafeAreaView, Text} from 'react-native';
import React, {memo} from 'react';
const MoreTab = () => {
  return (
    <SafeAreaView>
      <Text style={{alignSelf: 'center'}}>More Tab</Text>
    </SafeAreaView>
  );
};
export default memo(MoreTab);
