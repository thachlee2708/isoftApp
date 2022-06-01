import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {colors} from 'constants';
const YTabs = ({pickedYear, onPressItem}) => {
  const currentYear = new Date().getFullYear();
  let yearArr = [];
  for (let i = currentYear; i >= currentYear - 4; i--) {
    yearArr.push(i);
  }
  const onPress = React.useCallback(
    item => {
      onPressItem(item);
    },
    [onPressItem],
  );
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.container}>
      {yearArr.map(item => {
        return (
          <TouchableOpacity onPress={() => onPress(item)}>
            <View
              style={[
                styles.textContainer,
                {
                  backgroundColor:
                    pickedYear === item
                      ? colors.primary.green
                      : colors.primary.white,
                },
              ]}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      pickedYear === item
                        ? colors.primary.white
                        : colors.primary.green,
                  },
                ]}>
                {'Y' + item.toString().substr(-2)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default React.memo(YTabs);
