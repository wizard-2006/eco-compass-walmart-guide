
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Leaf, ShoppingCart, Award } from 'lucide-react';
import Navigation from './Navigation';
import PurchaseHistory from './PurchaseHistory';
import EcoCharts from './EcoCharts';
import Recommendations from './Recommendations';
import BadgesAndTips from './BadgesAndTips';
import ProductDashboard from './ProductDashboard';

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
      <Navigation 
        user={user} 
        onLogout={onLogout} 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section - Only show on overview */}
        {activeTab === 'overview' && (
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
        )}

        {/* Stats Cards - Only show on overview */}
        {activeTab === 'overview' && (
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

            <Card 
              className="bg-white/80 backdrop-blur-sm border-green-100 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setActiveTab('history')}
            >
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
        )}

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsContent value="overview" className="mt-0">
            <EcoCharts />
          </TabsContent>

          <TabsContent value="products" className="mt-0">
            <ProductDashboard />
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <PurchaseHistory />
          </TabsContent>

          <TabsContent value="recommendations" className="mt-0">
            <Recommendations />
          </TabsContent>

          <TabsContent value="badges" className="mt-0">
            <BadgesAndTips />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
