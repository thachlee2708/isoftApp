import React from 'react';
import {AppIcon, AppImage} from 'assets/icons';
import CardItems from './components/CardItems';
import {View, Text} from 'react-native';
const Approval = () => {
  const listItemsDashboard = [
    {
      title: 'Payroll',
      details: 5,
      sourceLine: AppIcon.line.primary,
      icon: AppImage.payroll,
      arrow: AppIcon.arrowToRightDoubleBlue,
    },
    {
      title: 'Claim',
      details: 3,
      sourceLine: AppIcon.line.blue,
      icon: AppImage.leave,
      arrow: AppIcon.arrowToRightDoubleOrange,
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
            textDetails={item.details.toString()}
            sourceArrow={item.arrow}
          />
        );
      })}
    </View>
  );
};
export default React.memo(Approval);
