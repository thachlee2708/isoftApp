import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {Platform, Dimensions, StatusBar} from 'react-native';
import moment from 'moment';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const pxScale = {
  guidelineBaseWidth: 428,
  guidelineBaseHeight: 926,
  widthScale() {
    return SCREEN_WIDTH / this.guidelineBaseWidth;
  },
  heightScale() {
    return SCREEN_HEIGHT / this.guidelineBaseHeight;
  },
  wp(px) {
    const percentage = (px / this.guidelineBaseWidth) * 100;
    return wp(percentage);
  },
  hp(px) {
    const scale = isIphoneX() ? this.heightScale() : 1;

    const percentage = (px / scale / this.guidelineBaseHeight) * 100;
    return hp(percentage);
  },
  fontSize(px, baseHeight = isIphoneX() ? 926 : this.guidelineBaseHeight) {
    return RFValue(px, baseHeight);
  },
};
export const formatDay = day => {
  return moment(day).format('ddd, MMM DD');
};
