import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {AppImage} from 'assets/images';
import {colors} from 'constants';
import {pxScale} from 'Helpers';
import CardItemDate from './components/CardItemDate';
import CardItemLeave from './components/CardItemLeave';

const LeaveFooter = () => {
  const upcomingLeave = [
    {date: '2021-12-13', type: 'Annual Leave'},
    {date: '2021-12-14', type: 'Annual Leave'},
  ];
  const upcomingPublicHoliday = [{date: '2021-12-25', type: 'Christmas Day'}];
  const leaveHighlight = [
    {
      leaveTitle: 'Annual Leave',
      sourceIcon: AppImage.balloon,
      colorBorder: colors.primary.green,
      takenNum: 3,
      balText: 'Bal. (0.00BFL)',
      balNum: 11,
      fromDate: '2021-12-01',
      toDate: '2022-07-30',
      percent: 80,
    },
    {
      leaveTitle: 'Sick Leave',
      sourceIcon: AppImage.pharmacy,
      colorBorder: colors.label['text-EF5350'],
      takenNum: 6,
      balNum: 3,
      balText: 'Bal.',
      fromDate: '2021-07-21',
      toDate: '2022-12-31',
      percent: 35,
    },
    {
      leaveTitle: 'Child Care Leave',
      sourceIcon: AppImage.baby,
      colorBorder: colors.label['text-BA68C8'],
      takenNum: 3,
      balNum: 6,
      balText: 'Bal.',
      fromDate: '2021-07-21',
      toDate: '2022-12-31',
      percent: 65,
    },
  ];
  return (
    <View
      style={{
        marginHorizontal: pxScale.wp(16),
        paddingVertical: pxScale.hp(20),
      }}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}}>
        <Text style={{color: colors.primary.green}}>+Apply Leave</Text>
      </TouchableOpacity>

      <Text style={{marginTop: pxScale.hp(10), marginBottom: pxScale.hp(5)}}>
        Upcoming Leave
      </Text>
      {upcomingLeave.map(item => {
        return <CardItemDate date={item.date} dateType={item.type} />;
      })}
      <Text style={{marginTop: pxScale.hp(10), marginBottom: pxScale.hp(5)}}>
        Upcoming Public Holiday
      </Text>
      {upcomingPublicHoliday.map(item => {
        return <CardItemDate date={item.date} dateType={item.type} />;
      })}
      {leaveHighlight.map(item => {
        return (
          <CardItemLeave
            leaveTitle={item.leaveTitle}
            sourceIcon={item.sourceIcon}
            colorBorder={item.colorBorder}
            takenNum={item.takenNum}
            balNum={item.balNum}
            balText={item.balText}
            fromDate={item.fromDate}
            toDate={item.toDate}
            percent={item.percent}
          />
        );
      })}
    </View>
  );
};
export default React.memo(LeaveFooter);
