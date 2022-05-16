import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {memo, useRef} from 'react';
import {pxScale} from '../../../../../../Helpers';
import styles from './styles';
import AppImageSvg from '../../../../../../components/AppImageSvg';
const listCard = ({data}) => {
  const flatListRef = React.useRef();
  const [dots, setDots] = React.useState([]);
  const [currentDotIndex, setCurrentDotIndex] = React.useState(0);
  React.useEffect(() => {
    const arr = new Array(data.length).fill(0);
    setDots(arr);
  }, [data?.length]);
  const handleOnScroll = React.useCallback(
    event => {
      console.log('2708', event.nativeEvent.contentOffset.x);
      setCurrentDotIndex(
        Math.abs(
          parseInt(event.nativeEvent.contentOffset.x / pxScale.wp(337), 10),
        ),
      );
    },
    [dots.length, flatListRef],
  );

  const renderDot = React.useCallback(
    (item, index) => {
      return (
        <View
          key={index.toString()}
          useNativeDriver={true}
          duration={500}
          style={
            index === currentDotIndex ? styles.activeDot : styles.inActiveDot
          }
        />
      );
    },
    [currentDotIndex],
  );
  const onpressItem = React.useCallback(item => {}, []);
  const renderItems = React.useCallback(({item, index}) => {
    return (
      <>
        <TouchableOpacity activeOpacity={1} onPress={onpressItem}>
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
      </>
    );
  });
  return (
    <View>
      <FlatList
        ref={flatListRef}
        onScroll={e => handleOnScroll(e)}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItems}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{
          marginVertical: pxScale.hp(5),
        }}
      />
      <View style={styles.dotsContainer}>
        {dots.length > 0 && dots.map(renderDot)}
      </View>
    </View>
  );
};
export default memo(listCard);
