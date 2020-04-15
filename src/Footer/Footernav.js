import React from 'react';
import Tabs1 from '../tabs/Tabs1';
import Tabs2 from '../tabs/Tabs2';
import Tabs3 from '../tabs/Tabs3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const Footernav = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Tabs1} />
      <BottomTabs.Screen name="Order" component={Tabs2} />
      <BottomTabs.Screen name="Pay" component={Tabs3} />
    </BottomTabs.Navigator>
  );
};

export default Footernav;
