import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style';

export default class Login extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
