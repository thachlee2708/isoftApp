import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../assets/icons';
import {pxScale} from '../../../../../../Helpers';
import styles from './styles';
const cardQR = ({sourceIcon, sourceQR, textTitle}) => {
  const [showQR, setShowQR] = React.useState(false);
  const handleShowQR = React.useCallback(() => {
    showQR ? setShowQR(false) : setShowQR(true);
  }, [setShowQR, showQR]);
  return (
    <SafeAreaView
      style={{
        // overflow: 'hidden',
        paddingBottom: pxScale.hp(10),
        paddingHorizontal: pxScale.hp(5),
      }}>
      <TouchableOpacity activeOpacity={1} onPress={handleShowQR}>
        <View style={styles.wrap}>
          <View
            style={{
              padding: pxScale.wp(8),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <AppImageSvg
              style={{position: 'absolute'}}
              source={AppIcon.line}
              height={pxScale.hp(50)}
              width={pxScale.wp(4)}
            />
            <AppImageSvg
              source={sourceIcon}
              height={pxScale.hp(40)}
              width={pxScale.wp(40)}
            />
            <Text style={{flex: 1}}>{textTitle}</Text>
            <AppImageSvg
              source={AppIcon.arrowToRight}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
              style={{
                transform: [{rotate: showQR ? '90deg' : '0deg'}],
              }}
            />
          </View>
          {showQR && (
            <View
              style={{
                alignItems: 'center',
                padding: 20,
              }}>
              <AppImageSvg
                source={sourceQR}
                height={pxScale.hp(150)}
                width={pxScale.wp(150)}
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
cardQR.defaultProps = {
  textTitle: 'textTitle',
};
export default memo(cardQR);
