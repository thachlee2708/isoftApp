import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import AppImageSvg from '../../../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../../../assets/icons';
import {pxScale} from '../../../../../../../../Helpers';
import styles from './styles';
const cardItem = ({
  sourceLine,
  sourceIcon,
  textTitle,
  textDetails,
  renderFooter,
}) => {
  const [showFooter, setShowFooter] = React.useState(false);
  const handleShowQR = React.useCallback(() => {
    showFooter ? setShowFooter(false) : setShowFooter(true);
  }, [setShowFooter, showFooter]);
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
              source={sourceLine}
              height={pxScale.hp(50)}
              width={pxScale.wp(4)}
            />
            <AppImageSvg
              source={sourceIcon}
              height={pxScale.hp(40)}
              width={pxScale.wp(40)}
            />
            <View>
              <Text style={{flex: 1}}>{textTitle}</Text>
              <Text style={{flex: 1}}>{textDetails}</Text>
            </View>

            <AppImageSvg
              source={AppIcon.arrowToRight}
              height={pxScale.hp(20)}
              width={pxScale.wp(20)}
              style={{
                transform: [{rotate: showFooter ? '90deg' : '0deg'}],
              }}
            />
          </View>
          {showFooter && renderFooter}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
cardQR.defaultProps = {
  textTitle: 'textTitle',
};
export default memo(cardItem);
