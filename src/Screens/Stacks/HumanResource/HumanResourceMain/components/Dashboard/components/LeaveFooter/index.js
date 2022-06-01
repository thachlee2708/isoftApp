import {it} from 'jest-circus';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../../../../../../../../constants';
import {pxScale} from '../../../../../../../../Helpers';
import CardItemDate from './components/CardItemDate';

const LeaveFooter = () => {
  const upcomingLeave = [
    {date: '2021-12-13', type: 'Annual Leave'},
    {date: '2021-12-14', type: 'Annual Leave'},
  ];
  const upcomingPublicHoliday = [{date: '2021-12-25', type: 'Christmas Day'}];
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
    </View>
  );
};
export default React.memo(LeaveFooter);
