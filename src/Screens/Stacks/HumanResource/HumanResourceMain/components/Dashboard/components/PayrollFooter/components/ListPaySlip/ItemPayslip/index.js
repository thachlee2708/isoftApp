import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import styles from './styles';
const ItemPayslip = item => {
  const [showFooter, setShowFooter] = React.useState(false);
  const handleShowFooter = React.useCallback(() => {
    showFooter ? setShowFooter(false) : setShowFooter(true);
  }, [setShowFooter, showFooter]);
  return (
    <SafeAreaView
      style={{
        paddingBottom: pxScale.hp(10),
        paddingHorizontal: pxScale.hp(5),
      }}>
      <TouchableOpacity activeOpacity={1} onPress={handleShowFooter}>
        <View style={styles.wrap}>
          <View
            style={{
              paddingVertical: pxScale.wp(8),
              paddingHorizontal: pxScale.wp(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppImageSvg
              style={{position: 'absolute'}}
              source={AppIcon.line.primary}
              height={pxScale.hp(50)}
              width={pxScale.wp(4)}
            />
            <View style={{flex: 1}}>
              <Text style={styles.text}>{item.textDetails}</Text>
            </View>

            <AppImageSvg
              source={AppIcon.arrowToRight}
              height={pxScale.hp(15)}
              width={pxScale.wp(15)}
              style={{
                transform: [{rotate: showFooter ? '90deg' : '0deg'}],
              }}
            />
          </View>
          {showFooter && item.renderFooter}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default memo(ItemPayslip);
