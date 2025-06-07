import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainTabParamList} from '@types/index';
import {Colors} from '@constants/colors';

import AchievementScreen from '@screens/Achievement/AchievementScreen';
import DiscoverScreen from '@screens/Discover/DiscoverScreen';
import StatisticsScreen from '@screens/Statistics/StatisticsScreen';
import AllAchievementsScreen from '@screens/AllAchievements/AllAchievementsScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string;

          switch (route.name) {
            case 'Achievement':
              iconName = focused ? 'trophy' : 'trophy-outline';
              break;
            case 'Discover':
              iconName = focused ? 'compass' : 'compass-outline';
              break;
            case 'Statistics':
              iconName = focused ? 'chart-line' : 'chart-line-variant';
              break;
            case 'AllAchievements':
              iconName = focused ? 'view-grid' : 'view-grid-outline';
              break;
            default:
              iconName = 'help-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textLight,
        tabBarStyle: {
          backgroundColor: Colors.cardBackground,
          borderTopWidth: 1,
          borderTopColor: Colors.border,
          paddingBottom: 5,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: Colors.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: Colors.textPrimary,
        headerTitleStyle: {
          fontWeight: '600',
        },
      })}>
      <Tab.Screen
        name="Achievement"
        component={AchievementScreen}
        options={{
          title: '成就',
          headerTitle: '我的成就',
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          title: '发现',
          headerTitle: '发现新成就',
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          title: '统计',
          headerTitle: '数据统计',
        }}
      />
      <Tab.Screen
        name="AllAchievements"
        component={AllAchievementsScreen}
        options={{
          title: '全部',
          headerTitle: '全部成就',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;