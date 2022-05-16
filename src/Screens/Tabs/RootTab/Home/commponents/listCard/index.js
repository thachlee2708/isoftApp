import {
  Text,
  View,
  ImageBackground,
  FlatList,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {pxScale} from '../../../../../../Helpers';
import styles from './styles';
import {SlidingDot} from 'react-native-animated-pagination-dots';
import AppImageSvg from '../../../../../../components/AppImageSvg';
import {SCREEN_WIDTH} from '../../../../../../constants';
const listCard = ({data}) => {
  const flatlistRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const renderItems = React.useCallback(({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <AppImageSvg
              source={item.icon}
              width={pxScale.wp(30)}
              height={pxScale.hp(40)}
            />
            <Text style={styles.titleText}>{item.title}</Text>
          </View>
          <Text>{item.time}</Text>
          <Text style={styles.detailsText}>{item.details}</Text>
          <Text style={styles.viewMoreText}>{'View more >'}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <View>
      <FlatList
        ref={flatlistRef}
        pagingEnabled
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          marginVertical: pxScale.hp(5),
        }}
      />
    </View>
  );
};
export default memo(listCard);
