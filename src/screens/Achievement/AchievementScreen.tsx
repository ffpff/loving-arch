import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RootState} from '@store/index';
import {Achievement, AchievementStatus} from '@types/index';
import {Colors} from '@constants/colors';

const AchievementScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'wished'>('completed');
  const navigation = useNavigation();
  
  const achievements = useSelector((state: RootState) => state.achievement.achievements);
  const wishedAchievements = useSelector((state: RootState) => state.achievement.wishedAchievements);
  
  const completedAchievements = achievements.filter(
    a => a.status === AchievementStatus.COMPLETED
  );
  
  const wishedAchievementsList = achievements.filter(
    a => wishedAchievements.includes(a.id)
  );

  const renderAchievementCard = ({item}: {item: Achievement}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AchievementDetail', {achievementId: item.id})}
      activeOpacity={0.9}>
      <View style={styles.cardContent}>
        <Image source={{uri: item.icon}} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          {item.completedAt && (
            <Text style={styles.completedDate}>
              完成于 {new Date(item.completedAt).toLocaleDateString()}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Tab切换 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
          onPress={() => setActiveTab('completed')}>
          <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
            已完成 ({completedAchievements.length})
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'wished' && styles.activeTab]}
          onPress={() => setActiveTab('wished')}>
          <Text style={[styles.tabText, activeTab === 'wished' && styles.activeTabText]}>
            想完成 ({wishedAchievementsList.length})
          </Text>
        </TouchableOpacity>
      </View>

      {/* 成就列表 */}
      <FlatList
        data={activeTab === 'completed' ? completedAchievements : wishedAchievementsList}
        renderItem={renderAchievementCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Icon name={activeTab === 'completed' ? 'trophy-outline' : 'heart-outline'} 
                  size={80} color={Colors.textLight} />
            <Text style={styles.emptyText}>
              {activeTab === 'completed' ? '还没有完成的成就' : '还没有想完成的成就'}
            </Text>
            <TouchableOpacity
              style={styles.discoverButton}
              onPress={() => navigation.navigate('Discover')}>
              <Text style={styles.discoverButtonText}>去发现</Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* 浮动添加按钮 */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('CreateAchievement')}>
        <Icon name="plus" size={24} color={Colors.textWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  activeTabText: {
    color: Colors.textWhite,
  },
  listContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
  },
  icon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  completedDate: {
    fontSize: 12,
    color: Colors.textLight,
    marginTop: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.textLight,
    marginTop: 20,
    marginBottom: 30,
  },
  discoverButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  discoverButtonText: {
    color: Colors.textWhite,
    fontSize: 16,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});

export default AchievementScreen;