import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from './styles/styles';

export class Detail extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Detail Screen</Text>
        <Button
          title="View Bottom Taps"
          onPress={() => {
            this.props.navigation.navigate('Bottom Tabs');
          }}
        />
        <Button
          title="View Top Taps"
          onPress={() => {
            this.props.navigation.navigate('TopTabs');
          }}
        />
      </View>
    );
  }
}

export default Detail;
