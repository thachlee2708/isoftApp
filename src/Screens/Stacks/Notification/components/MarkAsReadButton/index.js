import React from 'react';
import {
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Platform,
} from 'react-native';
import {AppIcon} from '../../../../../assets/icons';
import AppImageSvg from '../../../../../components/AppImageSvg';
import {pxScale} from '../../../../../Helpers';
import {colors} from '../../../../../constants';
import styles from './styles';

const markAsReadButton = ({
  onPressMarkAsRead,
  onPressMarkAsUnRead,
  showOptions,
  onpressOptions,
}) => {
  return (
    <>
      {!showOptions && (
        <Pressable
          onPress={onpressOptions}
          style={{
            position: 'absolute',
            bottom: Platform.OS === 'ios' ? pxScale.hp(210) : pxScale.hp(170),
            right: pxScale.wp(16),
            zIndex: 1,
          }}>
          <View style={styles.buttonContainer}>
            <AppImageSvg
              source={AppIcon.markReadOptions}
              height={pxScale.wp(70)}
              width={pxScale.wp(70)}
            />
          </View>
        </Pressable>
      )}
      {showOptions && (
        <Modal visible={showOptions} transparent>
          <View style={styles.modalContainer}>
            <Pressable
              style={styles.detailsButtonContainer}
              onPress={onPressMarkAsUnRead}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Mark as unread</Text>
              </View>
              <View style={styles.buttonContainer}>
                <AppImageSvg
                  source={AppIcon.unreadEye}
                  height={pxScale.wp(70)}
                  width={pxScale.wp(70)}
                />
              </View>
            </Pressable>
            <Pressable
              style={styles.detailsButtonContainer}
              onPress={onPressMarkAsRead}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>Mark as read</Text>
              </View>
              <View style={styles.buttonContainer}>
                <AppImageSvg
                  source={AppIcon.readEye}
                  height={pxScale.wp(70)}
                  width={pxScale.wp(70)}
                />
              </View>
            </Pressable>
            <Pressable onPress={onpressOptions}>
              <View style={styles.buttonContainer}>
                <AppImageSvg
                  source={AppIcon.closeReadOptions}
                  height={pxScale.wp(70)}
                  width={pxScale.wp(70)}
                />
              </View>
            </Pressable>
          </View>
        </Modal>
      )}
    </>
  );
};
export default React.memo(markAsReadButton);
