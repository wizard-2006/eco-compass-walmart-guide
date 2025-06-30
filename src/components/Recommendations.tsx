
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, ArrowRight, Heart, ShoppingCart, Star, Lightbulb } from 'lucide-react';

const Recommendations = () => {
  const [favorites, setFavorites] = useState(new Set());

  const recommendations = [
    {
      id: 1,
      currentProduct: "Great Value Plastic Water Bottles (24-pack)",
      currentScore: 3.1,
      currentPrice: "$4.98",
      recommendedProduct: "Hydro Flask Stainless Steel Water Bottle",
      recommendedScore: 9.2,
      recommendedPrice: "$34.95",
      savings: {
        co2: "12.5 kg CO₂/year",
        plastic: "156 bottles/year",
        money: "$180/year"
      },
      category: "Beverages",
      reason: "Eliminate single-use plastic waste",
      impact: "One reusable bottle replaces 1,460 plastic bottles annually"
    },
    {
      id: 2,
      currentProduct: "Disposable Paper Plates (100 count)",
      currentScore: 4.2,
      currentPrice: "$8.97",
      recommendedProduct: "Corelle Livingware Dinnerware Set",
      recommendedScore: 8.9,
      recommendedPrice: "$49.99",
      savings: {
        co2: "8.3 kg CO₂/year", 
        waste: "45 lbs/year",
        money: "$95/year"
      },
      category: "Party Supplies",
      reason: "Reduce single-use waste",
      impact: "Reusable dishes eliminate 1,200+ disposable plates yearly"
    },
    {
      id: 3,
      currentProduct: "Regular LED Bulbs",
      currentScore: 7.1,
      currentPrice: "$15.88",
      recommendedProduct: "Philips Smart LED Bulbs with Timer",
      recommendedScore: 9.7,
      recommendedPrice: "$45.99",
      savings: {
        energy: "320 kWh/year",
        co2: "5.2 kg CO₂/year",
        money: "$65/year"
      },
      category: "Home Improvement",
      reason: "Smart energy management",
      impact: "Automated scheduling reduces energy waste by 40%"
    },
    {
      id: 4,
      currentProduct: "Conventional Cleaning Products",
      currentScore: 5.5,
      currentPrice: "$24.50",
      recommendedProduct: "Seventh Generation Multi-Surface Cleaner Bundle",
      recommendedScore: 8.8,
      recommendedPrice: "$28.97",
      savings: {
        chemicals: "12 toxic chemicals avoided",
        co2: "3.8 kg CO₂/year",
        health: "Better indoor air quality"
      },
      category: "Household",
      reason: "Plant-based, non-toxic formula",
      impact: "Reduces harmful chemical exposure for your family"
    }
  ];

  const quickTips = [
    {
      icon: "🛒",
      title: "Buy in Bulk",
      description: "Reduce packaging waste by purchasing larger quantities of non-perishables",
      impact: "Save 15-30% on packaging materials"
    },
    {
      icon: "🥬",
      title: "Choose Local Produce",
      description: "Select fruits and vegetables grown within 150 miles of your location",
      impact: "Reduce transportation emissions by 60%"
    },
    {
      icon: "♻️",
      title: "Look for Recyclable Packaging",
      description: "Prioritize products with recyclable or biodegradable packaging",
      impact: "Divert 85% more waste from landfills"
    },
    {
      icon: "🌱",
      title: "Organic When Possible",
      description: "Choose organic options for the 'Dirty Dozen' fruits and vegetables",
      impact: "Reduce pesticide exposure by 90%"
    }
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <Lightbulb className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Smart Recommendations</h2>
          </div>
          <p className="text-green-100">
            Discover greener alternatives to improve your eco score and reduce environmental impact
          </p>
        </CardContent>
      </Card>

      {/* Recommendations List */}
      <div className="space-y-6">
        {recommendations.map((rec) => (
          <Card key={rec.id} className="bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {rec.category}
                </Badge>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(rec.id)}
                  className={favorites.has(rec.id) ? "text-red-500 hover:text-red-600" : "text-gray-400 hover:text-red-500"}
                >
                  <Heart className={`h-4 w-4 ${favorites.has(rec.id) ? 'fill-current' : ''}`} />
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Current Product */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    Currently Using
                  </div>
                  <h3 className="font-semibold text-gray-900">{rec.currentProduct}</h3>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-red-100 text-red-800 border-red-200">
                      {rec.currentScore}/10 Eco Score
                    </Badge>
                    <span className="text-lg font-bold text-gray-900">{rec.currentPrice}</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden lg:flex items-center justify-center">
                  <ArrowRight className="h-8 w-8 text-green-500" />
                </div>

                {/* Recommended Product */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Recommended Alternative
                  </div>
                  <h3 className="font-semibold text-gray-900">{rec.recommendedProduct}</h3>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {rec.recommendedScore}/10 Eco Score
                    </Badge>
                    <span className="text-lg font-bold text-gray-900">{rec.recommendedPrice}</span>
                  </div>
                </div>
              </div>

              {/* Impact Details */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">Environmental Impact</h4>
                <p className="text-sm text-green-700 mb-3">{rec.impact}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(rec.savings).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-green-800">{value}</div>
                      <div className="text-xs text-green-600 capitalize">{key} Saved</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
                <Button variant="outline" className="flex-1 border-green-200 text-green-700 hover:bg-green-50">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Tips Section */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            Quick Eco Tips
          </CardTitle>
          <CardDescription>
            Simple changes for immediate environmental impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickTips.map((tip, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border border-green-100">
                <div className="text-2xl">{tip.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{tip.description}</p>
                  <div className="text-xs text-green-600 font-medium">💡 {tip.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recommendations;
