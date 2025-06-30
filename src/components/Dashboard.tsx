
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, ShoppingCart, Award, Book, LogOut, User } from 'lucide-react';
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
    carbonSaved: 45.2
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShoppingCart className="h-5 w-5 text-white" />
              </div>
              <Leaf className="h-6 w-6 text-green-600" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Walmart EcoCompass</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Welcome, {user.name}</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="text-gray-600 hover:text-gray-800"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Eco Journey</h2>
                <p className="text-green-100">Track your sustainable shopping impact</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{stats.avgEcoScore}/10</div>
                <div className="text-sm text-green-100">Avg Eco Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Purchases</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalPurchases}</p>
                </div>
                <ShoppingCart className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Green Products</p>
                  <p className="text-2xl font-bold text-green-600">{stats.greenProducts}</p>
                </div>
                <Leaf className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">CO₂ Saved</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.carbonSaved} kg</p>
                </div>
                <div className="text-2xl">🌍</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-green-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Eco Badges</p>
                  <p className="text-2xl font-bold text-yellow-600">12</p>
                </div>
                <Award className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">Purchase History</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="badges">Badges & Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <EcoCharts />
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <PurchaseHistory />
          </TabsContent>

          <TabsContent value="recommendations" className="mt-6">
            <Recommendations />
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <BadgesAndTips />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
