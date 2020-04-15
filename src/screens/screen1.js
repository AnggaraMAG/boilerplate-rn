import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/styles';

export class screen1 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={style.title}> screen1 </Text>
      </View>
    );
  }
}

export default screen1;
