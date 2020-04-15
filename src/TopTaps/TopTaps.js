import React from 'react';
import Tabs1 from '../tabs/Tabs1';
import Tabs2 from '../tabs/Tabs2';
import Tabs3 from '../tabs/Tabs3';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const TopTabs = createMaterialTopTabNavigator();

const TopTaps = () => {
  return (
    <TopTabs.Navigator>
      <TopTabs.Screen name="Tab 1" component={Tabs1} />
      <TopTabs.Screen name="Tab 2" component={Tabs2} />
      <TopTabs.Screen name="Tab 3" component={Tabs3} />
    </TopTabs.Navigator>
  );
};

export default TopTaps;
