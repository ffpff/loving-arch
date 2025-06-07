import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

const AchievementDetailScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>成就详情页面 - 开发中</Text>
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

export default AchievementDetailScreen;