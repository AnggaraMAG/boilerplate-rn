import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from './styles/styles';

export class Detail extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.title}>Detail Screen</Text>
        <Button title="View Bottom Taps" onPress={() => {}} />
        <Button title="View Top Taps" onPress={() => {}} />
      </View>
    );
  }
}

export default Detail;
