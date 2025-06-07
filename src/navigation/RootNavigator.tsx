import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '@types/index';

import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';
import AchievementDetailScreen from '@screens/Achievement/AchievementDetailScreen';
import CreateAchievementScreen from '@screens/Achievement/CreateAchievementScreen';
import CoupleConnectScreen from '@screens/Couple/CoupleConnectScreen';
import ProfileScreen from '@screens/Profile/ProfileScreen';
import SettingsScreen from '@screens/Profile/SettingsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  // TODO: 这里需要根据用户登录状态判断初始路由
  const isAuthenticated = false; // 临时设置

  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? 'Main' : 'Auth'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen
        name="AchievementDetail"
        component={AchievementDetailScreen}
        options={{
          headerShown: true,
          title: '成就详情',
        }}
      />
      <Stack.Screen
        name="CreateAchievement"
        component={CreateAchievementScreen}
        options={{
          headerShown: true,
          title: '创建成就',
        }}
      />
      <Stack.Screen
        name="CoupleConnect"
        component={CoupleConnectScreen}
        options={{
          headerShown: true,
          title: '情侣连接',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: '个人资料',
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: true,
          title: '设置',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;