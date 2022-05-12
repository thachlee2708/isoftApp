import {Dimensions} from 'react-native';
import {pxScale} from '../Helpers';
import Config from 'react-native-config';

export const colors = {
  primary: {
    white: '#FFFFFF',
    black: '#2F2F2F',
    green: '#00AB9D',
  },
  disabledInput: '#F0F0F0',
  label: {
    'text-EF5350': '#EF5350',
    'text-EF6C00': '#EF6C00',
    'text-F06292': '#F06292',
    'text-BA68C8': '#BA68C8',
    'text-7986CB': '#7986CB',
    'text-2196F3': '#2196F3',
    'text-26A69A': '#26A69A',
    'text-43A047': '#43A047',
    'text-78909C': '#78909C',
    'text-795548': '#795548',
    'text-FCDCDC': '#FCDCDC',
    'text-FCE1CC': '#FCE1CC',
    'text-FCDFE9': '#FCDFE9',
    'text-F1E1F4': '#F1E1F4',
    'text-E4E7F5': '#E4E7F5',
    'text-D2EAFD': '#D2EAFD',
    'text-D3EDEB': '#D3EDEB',
    'text-D9ECDA': '#D9ECDA',
    'text-E4E9EB': '#E4E9EB',
    'text-E4DDDA': '#E4DDDA',
  },
};
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const screenName = {
  FirstTimeLogin: 'FirstTimeLogin',
  StaffAccess: 'StaffAccess',
  PDPAAgree: 'PDPAAgree',
  ResetPassword: 'ResetPassword',
  HomeTab: 'Home',
  AccountTab: 'Account',
  MoreTab: 'More',
  RootTab: 'RootTab',
  ChangePassword: 'ChangePassword',
};
export const fontFamily = {
  InterRegular: 'Inter-Regular',
  InterBold: 'Inter-Bold',
  InterSemiBold: 'Inter-SemiBold',
};
