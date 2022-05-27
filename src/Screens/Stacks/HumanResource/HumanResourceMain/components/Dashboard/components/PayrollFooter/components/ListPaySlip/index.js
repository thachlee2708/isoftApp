import {FlatList, View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {pxScale} from '../../../../../../../../../../Helpers';
import styles from './styles';
import AppImageSvg from '../../../../../../../../../../components/AppImageSvg';
import {AppIcon} from '../../../../../../../../../../assets/icons';
import ItemPayslip from './ItemPayslip';
const ListPayslip = () => {
  const listPayslip = [
    {
      textDetails: 'CMM - Dec 31',
    },
    {
      textDetails: 'CMM - Nov 30',
    },
    {
      textDetails: 'CMM - Oct 31',
    },
    {
      textDetails: 'CMM - Sep 30',
    },
    {
      textDetails: 'CMM - Aug 31',
    },
    {
      textDetails: 'CMM - Jul 31',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: pxScale.wp(180),
          paddingRight: pxScale.hp(5),
        }}>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.wrap}>
            <View
              style={{
                paddingVertical: pxScale.wp(12),
                paddingHorizontal: pxScale.wp(10),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AppImageSvg
                style={{position: 'absolute'}}
                source={AppIcon.line.primary}
                height={pxScale.hp(35)}
                width={pxScale.wp(3)}
              />
              <View style={{flex: 1}}>
                <Text style={styles.text}>{item.textDetails}</Text>
              </View>

              <AppImageSvg
                source={AppIcon.arrowToRight}
                height={pxScale.hp(15)}
                width={pxScale.wp(15)}
                style={
                  {
                    //   transform: [{rotate: showFooter ? '90deg' : '0deg'}],
                  }
                }
              />
            </View>
            {/* {showFooter && item.renderFooter} */}
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      scrollEnabled={false}
      columnWrapperStyle={{justifyContent: 'space-between'}}
      contentContainerStyle={{paddingBottom: pxScale.hp(10)}}
      data={listPayslip}
      renderItem={renderItem}
      numColumns={2}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
export default React.memo(ListPayslip);
