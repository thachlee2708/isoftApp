import React from 'react';
import {AppIcon} from '../../../../../../assets/icons';
import {AppImage} from '../../../../../../assets/images';
import CardItems from './components/CardItems';
import {View, Text} from 'react-native';
const Dashboard = () => {
  const listItemsDashboard = [
    {
      title: 'Payroll',
      details: 'Payslip & Year-To-Date summary',
      sourceLine: AppIcon.line.primary,
      icon: AppImage.payroll,
    },
    {
      title: 'Leave',
      details: 'Leave details, leave calendar',
      sourceLine: AppIcon.line.blue,
      icon: AppImage.leave,
    },
    {
      title: 'Attendance',
      details: 'Timesheet, duty roster',
      sourceLine: AppIcon.line.orange,
      icon: AppImage.attendance,
    },
    {
      title: 'Meal Order',
      details: 'Meal order details',
      sourceLine: AppIcon.line.pink,
      icon: AppImage.mealOrder,
    },
    {
      title: 'Claim',
      details: 'Claim history, entitlement',
      sourceLine: AppIcon.line.red,
      icon: AppImage.claim,
    },
    {
      title: 'Long Service Award',
      details: 'Anniversary of servicing with company',
      sourceLine: AppIcon.line.lightPurple,
      icon: AppImage.award,
    },
    {
      title: 'Education Grant',
      details: 'Fund support for education',
      sourceLine: AppIcon.line.darkGreen,
      icon: AppImage.education,
    },
    {
      title: 'Disciplinary',
      details: 'Performance-related issues',
      sourceLine: AppIcon.line.darkPurple,
      icon: AppImage.disciplinary,
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
            renderFooter={{}}
          />
        );
      })}
    </View>
  );
};
export default React.memo(Dashboard);
