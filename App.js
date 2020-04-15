import React, {Component} from 'react';
import Feed from './src/Feed';
import Detail from './src/Detail';
import Footernav from './src/Footer/Footernav';
import TopTaps from './src/TopTaps/TopTaps';
import Screen1 from './src/screens/screen1';
import Screen2 from './src/screens/screen2';
import Screen3 from './src/screens/screen3';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen
        name="TopTabs"
        options={(Headers = false)}
        component={TopTaps}
      />
      <Stack.Screen name="Bottom Tabs" component={Footernav} />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favorite" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
