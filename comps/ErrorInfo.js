import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorInfo = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>⚠️ {error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 0,
    fontWeight: '600'
  }
});

export default ErrorInfo;