import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './style';
import propTypes from 'prop-types';

export default class Screen extends React.Component {
  static propTypes = {
    children: propTypes.any.isRequired,
    style: propTypes.object,
  };

  static defaultProps = {
    children: '',
    style: {},
  };

  render() {
    const { style, children } = this.props;
    return (
      <View style={[styles.container, style]}>
        <SafeAreaView style={styles.container}>{children}</SafeAreaView>
      </View>
    );
  }
}
