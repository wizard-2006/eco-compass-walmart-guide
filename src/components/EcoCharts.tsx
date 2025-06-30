
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Leaf, TrendingUp, Award } from 'lucide-react';

const EcoCharts = () => {
  const pieData = [
    { name: 'Excellent (8-10)', value: 45, color: '#22c55e' },
    { name: 'Good (6-8)', value: 30, color: '#eab308' },
    { name: 'Fair (4-6)', value: 20, color: '#f97316' },
    { name: 'Poor (0-4)', value: 5, color: '#ef4444' }
  ];

  const trendData = [
    { month: 'Jul', score: 6.2, purchases: 12 },
    { month: 'Aug', score: 6.8, purchases: 15 },
    { month: 'Sep', score: 7.1, purchases: 18 },
    { month: 'Oct', score: 7.4, purchases: 22 },
    { month: 'Nov', score: 7.8, purchases: 25 },
    { month: 'Dec', score: 8.2, purchases: 28 }
  ];

  const categoryData = [
    { category: 'Fresh Produce', score: 8.9, count: 25 },
    { category: 'Household', score: 7.2, count: 18 },
    { category: 'Personal Care', score: 6.8, count: 15 },
    { category: 'Packaged Foods', score: 5.4, count: 32 },
    { category: 'Beverages', score: 4.2, count: 12 }
  ];

  const impactData = [
    { metric: 'CO₂ Saved', value: 45.2, unit: 'kg', icon: '🌍' },
    { metric: 'Plastic Reduced', value: 12.8, unit: 'lbs', icon: '♻️' },
    { metric: 'Water Saved', value: 230, unit: 'gal', icon: '💧' },
    { metric: 'Trees Equivalent', value: 2.3, unit: 'trees', icon: '🌳' }
  ];

  return (
    <div className="space-y-6">
      {/* Impact Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {impactData.map((item, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-sm border-green-100">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-gray-900">
                {item.value} <span className="text-sm font-normal text-gray-600">{item.unit}</span>
              </div>
              <div className="text-sm text-gray-600">{item.metric}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Eco Score Distribution */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              Eco Score Distribution
            </CardTitle>
            <CardDescription>
              Breakdown of your purchase sustainability ratings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, 'Percentage']}
                    labelStyle={{ color: '#374151' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Eco Score Trends */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Sustainability Progress
            </CardTitle>
            <CardDescription>
              Your eco score improvement over the past 6 months
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6b7280"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    fontSize={12}
                    domain={[0, 10]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#22c55e"
                    strokeWidth={3}
                    dot={{ fill: '#22c55e', strokeWidth: 2, r: 6 }}
                    name="Eco Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm text-green-600 font-medium">
                🎉 Your eco score improved by 32% this quarter!
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Performance */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-green-600" />
            Category Performance
          </CardTitle>
          <CardDescription>
            Average eco scores by product category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="category" 
                  stroke="#6b7280"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="#6b7280"
                  fontSize={12}
                  domain={[0, 10]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="score" 
                  name="Avg Eco Score"
                  radius={[4, 4, 0, 0]}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={
                      entry.score >= 8 ? '#22c55e' :
                      entry.score >= 6 ? '#eab308' :
                      entry.score >= 4 ? '#f97316' : '#ef4444'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🌟</div>
            <div className="text-lg font-semibold">Best Month</div>
            <div className="text-sm opacity-90">December with 8.2 avg score</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">📈</div>
            <div className="text-lg font-semibold">Improvement</div>
            <div className="text-sm opacity-90">+32% eco score increase</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-lg font-semibold">Next Goal</div>
            <div className="text-sm opacity-90">Reach 9.0 average score</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EcoCharts;
