
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, ShoppingCart, Award, TrendingUp, LogOut, User, Target, Zap } from 'lucide-react';
import PurchaseHistory from './PurchaseHistory';
import EcoCharts from './EcoCharts';
import Recommendations from './Recommendations';
import BadgesAndTips from './BadgesAndTips';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalPurchases: 127,
    avgEcoScore: 7.2,
    greenProducts: 89,
    carbonSaved: 45.2,
    monthlyGoal: 60,
    streak: 12
  };

  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score) => {
    if (score >= 8) return 'bg-green-100';
    if (score >= 6) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Enhanced Header with Better Design */}
      <header className="bg-white/90 backdrop-blur-md border-b border-green-100/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg shadow-md">
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Walmart EcoCompass
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-semibold text-gray-700">Welcome, {user.name}</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="text-gray-600 hover:text-gray-800 border-gray-200 hover:bg-gray-50"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Hero Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Your Eco Journey</h2>
                <p className="text-green-100 text-lg">Making sustainable choices that matter</p>
                <div className="flex items-center space-x-4 pt-2">
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-medium">{stats.streak} day streak</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-medium">{stats.carbonSaved}kg of {stats.monthlyGoal}kg goal</span>
                  </div>
                </div>
              </div>
              <div className="text-right space-y-2">
                <div className={`text-5xl font-bold ${getScoreColor(stats.avgEcoScore)} bg-white/90 px-4 py-3 rounded-xl text-center`}>
                  {stats.avgEcoScore}/10
                </div>
                <div className="text-sm text-green-100 font-medium">Average Eco Score</div>
                <Badge className="bg-white/20 text-white border-white/30">
                  {stats.avgEcoScore >= 8 ? 'Excellent' : stats.avgEcoScore >= 6 ? 'Good' : 'Improving'}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Cards with Better Visual Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Total Purchases</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalPurchases}</p>
                  <div className="flex items-center space-x-1 text-xs text-green-600">
                    <TrendingUp className="h-3 w-3" />
                    <span>+12 this month</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <ShoppingCart className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Green Products</p>
                  <p className="text-3xl font-bold text-green-600">{stats.greenProducts}</p>
                  <div className="flex items-center space-x-1 text-xs text-green-600">
                    <span>70% of purchases</span>
                  </div>
                </div>
                <div className="bg-green-100 p-3 rounded-lg">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">CO₂ Saved</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.carbonSaved} kg</p>
                  <div className="flex items-center space-x-1 text-xs text-blue-600">
                    <span>75% of monthly goal</span>
                  </div>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <div className="text-2xl">🌍</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Eco Badges</p>
                  <p className="text-3xl font-bold text-yellow-600">12</p>
                  <div className="flex items-center space-x-1 text-xs text-yellow-600">
                    <span>3 new this week</span>
                  </div>
                </div>
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Tabs with Better Design */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-2 border-0">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              📊 Overview
            </TabsTrigger>
            <TabsTrigger 
              value="history"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              🛍️ History
            </TabsTrigger>
            <TabsTrigger 
              value="recommendations"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              💡 Suggestions
            </TabsTrigger>
            <TabsTrigger 
              value="badges"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-200"
            >
              🏆 Rewards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <EcoCharts />
          </TabsContent>

          <TabsContent value="history" className="mt-8">
            <PurchaseHistory />
          </TabsContent>

          <TabsContent value="recommendations" className="mt-8">
            <Recommendations />
          </TabsContent>

          <TabsContent value="badges" className="mt-8">
            <BadgesAndTips />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
