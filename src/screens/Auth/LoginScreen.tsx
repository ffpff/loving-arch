import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>登录页面 - 开发中</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: Colors.textPrimary,
  },
});

export default LoginScreen;