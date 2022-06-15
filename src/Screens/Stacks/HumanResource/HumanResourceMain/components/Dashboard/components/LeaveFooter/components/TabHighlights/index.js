import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {pxScale} from 'Helpers';
const TabHighlights = ({tabPicked, switchTab}) => {
  return (
    <View
      style={{
        marginBottom: pxScale.wp(20),
        marginHorizontal: pxScale.hp(5),
      }}>
      <View style={styles.shawdowHighlights}>
        <View style={styles.tabHighlightsContainer}>
          <TouchableOpacity onPress={() => switchTab('highlights')}>
            <View
              style={
                tabPicked === 'highlights' ? styles.tabPicked : styles.tab
              }>
              <Text
                style={
                  tabPicked === 'highlights' ? styles.textPicked : styles.text
                }>
                Highlights
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => switchTab('details')}>
            <View
              style={tabPicked === 'details' ? styles.tabPicked : styles.tab}>
              <Text
                style={
                  tabPicked === 'details' ? styles.textPicked : styles.text
                }>
                Full Details
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default React.memo(TabHighlights);
