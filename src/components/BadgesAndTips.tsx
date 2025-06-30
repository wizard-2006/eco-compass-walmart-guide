
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Award, Leaf, Star, Trophy, Target, Gift, Lightbulb, BookOpen } from 'lucide-react';

const BadgesAndTips = () => {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const earnedBadges = [
    {
      id: 1,
      name: "Green Starter",
      icon: "🌱",
      description: "Made your first eco-friendly purchase",
      earnedDate: "2023-01-15",
      category: "Beginner",
      points: 50
    },
    {
      id: 2,
      name: "Plastic Reducer",
      icon: "♻️",
      description: "Avoided 100 single-use plastic items",
      earnedDate: "2023-03-22",
      category: "Environmental",
      points: 150
    },
    {
      id: 3,
      name: "Energy Saver",
      icon: "⚡",
      description: "Saved 500 kWh through smart purchases",
      earnedDate: "2023-06-10",
      category: "Energy",
      points: 200
    },
    {
      id: 4,
      name: "Organic Champion",
      icon: "🥬",
      description: "Purchased 50+ organic products",
      earnedDate: "2023-08-05",
      category: "Food",
      points: 175
    },
    {
      id: 5,
      name: "Carbon Cutter",
      icon: "🌍",
      description: "Reduced CO₂ footprint by 25kg",
      earnedDate: "2023-10-12",
      category: "Climate",
      points: 250
    },
    {
      id: 6,
      name: "Eco Influencer",
      icon: "📢",
      description: "Shared 10 eco tips with friends",
      earnedDate: "2023-11-20",
      category: "Community",
      points: 100
    }
  ];

  const availableBadges = [
    {
      id: 7,
      name: "Waste Warrior",
      icon: "🗑️",
      description: "Reduce waste by 10 lbs this month",
      progress: 60,
      target: "4 lbs to go",
      category: "Environmental",
      points: 300
    },
    {
      id: 8,
      name: "Local Hero",
      icon: "🏪",
      description: "Buy 20 locally-sourced products",
      progress: 35,
      target: "13 products to go",
      category: "Community",
      points: 200
    },
    {
      id: 9,
      name: "Water Guardian",
      icon: "💧",
      description: "Save 1000 gallons of water",
      progress: 80,
      target: "200 gallons to go",
      category: "Conservation",
      points: 400
    }
  ];

  const ecoTips = [
    {
      id: 1,
      title: "Smart Shopping Lists",
      tip: "Plan your meals and make a shopping list to reduce food waste by up to 40%",
      category: "Food Waste",
      impact: "Saves $150/month on average",
      icon: "📝"
    },
    {
      id: 2,
      title: "Reusable Bag Benefits",
      tip: "A single reusable bag can replace over 700 disposable bags during its lifetime",
      category: "Plastic Reduction",
      impact: "Prevents 12 lbs of plastic waste annually",
      icon: "👜"
    },
    {
      id: 3,
      title: "Energy Star Appliances",
      tip: "Energy Star certified appliances use 20-50% less energy than standard models",
      category: "Energy Efficiency",
      impact: "Reduces electricity bills by $200+ yearly",
      icon: "⭐"
    },
    {
      id: 4,
      title: "Buy in Season",
      tip: "Seasonal produce requires less energy for storage and transportation",
      category: "Sustainable Food",
      impact: "Reduces carbon footprint by 15%",
      icon: "🍎"
    },
    {
      id: 5,
      title: "Refill Stations",
      tip: "Use refill stations for cleaning products to reduce packaging waste",
      category: "Packaging",
      impact: "Eliminates 80% of container waste",
      icon: "🔄"
    }
  ];

  const achievements = {
    totalPoints: 1425,
    level: 8,
    nextLevelPoints: 1500,
    rank: "Eco Champion"
  };

  return (
    <div className="space-y-6">
      {/* Achievement Overview */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Achievement Level {achievements.level}</h2>
              <p className="text-yellow-100 mb-3">{achievements.rank}</p>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">{achievements.totalPoints}</div>
                <div className="text-sm">
                  <div>Total Points</div>
                  <div className="text-yellow-100">{achievements.nextLevelPoints - achievements.totalPoints} to next level</div>
                </div>
              </div>
            </div>
            <Trophy className="h-16 w-16 text-yellow-200" />
          </div>
          <Progress 
            value={(achievements.totalPoints / achievements.nextLevelPoints) * 100} 
            className="mt-4 h-2"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Your Badges ({earnedBadges.length})
            </CardTitle>
            <CardDescription>
              Badges you've earned through eco-friendly actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {earnedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="p-4 rounded-lg border border-green-100 bg-gradient-to-br from-green-50 to-yellow-50 hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => setSelectedBadge(badge)}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">
                      {badge.name}
                    </h3>
                    <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 text-xs">
                      {badge.category}
                    </Badge>
                    <div className="text-xs text-gray-500 mt-2">
                      +{badge.points} pts
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Available Badges */}
        <Card className="bg-white/80 backdrop-blur-sm border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-500" />
              Available Badges
            </CardTitle>
            <CardDescription>
              Badges you can earn with your next actions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 hover:border-blue-200 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl opacity-60">{badge.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {badge.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {badge.description}
                      </p>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {badge.category}
                        </Badge>
                        <span className="text-xs text-blue-600 font-medium">
                          +{badge.points} pts
                        </span>
                      </div>
                      <Progress value={badge.progress} className="h-2 mb-1" />
                      <div className="text-xs text-gray-500">{badge.target}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Eco Tips Section */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-green-600" />
            Personalized Eco Tips
          </CardTitle>
          <CardDescription>
            Tailored advice to boost your sustainability score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecoTips.map((tip) => (
              <div
                key={tip.id}
                className="p-4 rounded-lg border border-green-100 bg-gradient-to-br from-green-50 to-blue-50 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{tip.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {tip.tip}
                    </p>
                    <div className="space-y-1">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                        {tip.category}
                      </Badge>
                      <div className="text-xs text-green-600 font-medium">
                        💡 {tip.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Rewards Program */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Walmart Eco Rewards</h3>
              <p className="text-purple-100 mb-3">
                Earn points for sustainable shopping and redeem exclusive rewards
              </p>
              <div className="flex items-center gap-4">
                <Button className="bg-white text-purple-600 hover:bg-purple-50">
                  <Gift className="h-4 w-4 mr-2" />
                  View Rewards
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{achievements.totalPoints}</div>
              <div className="text-sm text-purple-100">Available Points</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badge Detail Modal-like Card */}
      {selectedBadge && (
        <Card className="fixed inset-4 z-50 max-w-md mx-auto my-auto bg-white shadow-2xl border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{selectedBadge.icon}</span>
                {selectedBadge.name}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => setSelectedBadge(null)}
              >
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">{selectedBadge.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Category:</span>
                <Badge variant="outline">{selectedBadge.category}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Points Earned:</span>
                <span className="font-semibold text-green-600">+{selectedBadge.points}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Date Earned:</span>
                <span className="text-sm">{selectedBadge.earnedDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BadgesAndTips;
