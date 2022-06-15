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
      <View style={styles.tabHighlightsContainer}>
        <TouchableOpacity onPress={() => switchTab('LeaveEntitlement')}>
          <View
            style={
              tabPicked === 'LeaveEntitlement' ? styles.tabPicked : styles.tab
            }>
            <Text
              style={
                tabPicked === 'LeaveEntitlement'
                  ? styles.textPicked
                  : styles.text
              }>
              Leave Entitlement
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchTab('History')}>
          <View style={tabPicked === 'History' ? styles.tabPicked : styles.tab}>
            <Text
              style={tabPicked === 'History' ? styles.textPicked : styles.text}>
              History
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => switchTab('Calendar')}>
          <View
            style={tabPicked === 'Calendar' ? styles.tabPicked : styles.tab}>
            <Text
              style={
                tabPicked === 'Calendar' ? styles.textPicked : styles.text
              }>
              Calendar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default React.memo(TabHighlights);
