import React from 'react';
import {AppIcon} from '../../../../../../assets/icons';
import {AppImage} from '../../../../../../assets/images';
import CardItems from './components/CardItems';
import {View, Text} from 'react-native';
const Announcement = () => {
  const listItemsDashboard = [
    {
      title: 'Announcement',
      details: 'Notice, updates',
      sourceLine: AppIcon.line.brown,
      icon: AppImage.announcement,
    },
  ];
  return (
    <View>
      {listItemsDashboard.map(item => {
        return (
          <CardItems
            sourceLine={item.sourceLine}
            sourceIcon={item.icon}
            textTitle={item.title}
            textDetails={item.details}
          />
        );
      })}
    </View>
  );
};
export default React.memo(Announcement);
