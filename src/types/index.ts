// 成就相关类型
export interface Achievement {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  rarity: AchievementRarity;
  icon: string;
  requiredSteps?: number;
  currentSteps?: number;
  status: AchievementStatus;
  completedAt?: Date;
  completedBy?: string[];
  photos?: string[];
  notes?: string;
  isCustom?: boolean;
  createdBy?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum AchievementCategory {
  ROMANTIC = 'romantic',         // 浪漫约会
  ENTERTAINMENT = 'entertainment', // 娱乐休闲
  TRAVEL = 'travel',             // 旅行探索
  HOME = 'home',                 // 居家生活
  CREATIVE = 'creative',         // 创意手工
  SPORTS = 'sports',             // 运动健身
  LEARNING = 'learning',         // 学习成长
}

export enum AchievementRarity {
  BRONZE = 'bronze',     // 青铜
  SILVER = 'silver',     // 白银
  GOLD = 'gold',         // 黄金
  DIAMOND = 'diamond',   // 钻石
}

export enum AchievementStatus {
  LOCKED = 'locked',           // 未解锁
  IN_PROGRESS = 'in_progress', // 进行中
  PENDING = 'pending',         // 待确认
  COMPLETED = 'completed',     // 已完成
  WISHED = 'wished',          // 想完成
}

// 用户相关类型
export interface User {
  id: string;
  email: string;
  displayName: string;
  avatar?: string;
  partnerId?: string;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  notificationsEnabled: boolean;
  reminderTime?: string;
  theme: 'light' | 'dark' | 'auto';
  language: string;
}

// 情侣关系类型
export interface CoupleRelation {
  id: string;
  user1Id: string;
  user2Id: string;
  anniversaryDate: Date;
  status: 'pending' | 'active' | 'inactive';
  createdAt: Date;
  sharedAchievements: string[];
}

// 统计数据类型
export interface Statistics {
  totalAchievements: number;
  completedAchievements: number;
  completionRate: number;
  daysTogether: number;
  categoryStats: CategoryStat[];
  monthlyProgress: MonthlyProgress[];
}

export interface CategoryStat {
  category: AchievementCategory;
  completed: number;
  total: number;
  percentage: number;
}

export interface MonthlyProgress {
  month: string;
  year: number;
  completed: number;
}

// 导航类型
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  AchievementDetail: {achievementId: string};
  CreateAchievement: undefined;
  CoupleConnect: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type MainTabParamList = {
  Achievement: undefined;
  Discover: undefined;
  Statistics: undefined;
  AllAchievements: undefined;
};