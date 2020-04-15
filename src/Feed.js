import React, {Component} from 'react';
import {Text, View, Button, TouchableOpacity} from 'react-native';
import {styles} from './styles/styles';

export class Feed extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}> textInComponent </Text>
        <TouchableOpacity>
          <Button onPress={() => {}} />
          <Text style={styles.androidButtonText}>Go to FeedItem</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Feed;
