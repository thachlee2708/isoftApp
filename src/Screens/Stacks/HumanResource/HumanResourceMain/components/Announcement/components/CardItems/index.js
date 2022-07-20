import {SafeAreaView, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {memo} from 'react';
import AppImageSvg from 'components/AppImageSvg';
import {AppIcon} from 'assets/icons';
import {pxScale} from 'Helpers';
import styles from './styles';
const CardItem = ({
  sourceLine,
  sourceIcon,
  textTitle,
  textDetails,
  renderFooter,
}) => {
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
              source={sourceLine}
              height={pxScale.hp(55)}
              width={pxScale.wp(3)}
            />
            <Image
              source={sourceIcon}
              style={{
                height: pxScale.hp(40),
                width: pxScale.hp(40),
                marginHorizontal: pxScale.wp(10),
              }}
            />
            <View style={{flex: 1}}>
              <Text style={styles.textTitle}>{textTitle}</Text>
              <Text style={styles.textDetails}>{textDetails}</Text>
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
          {showFooter && renderFooter}
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default memo(CardItem);
