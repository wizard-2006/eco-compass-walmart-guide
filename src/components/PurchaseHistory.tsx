
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, Search, Filter, ArrowUpDown } from 'lucide-react';

const PurchaseHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const purchases = [
    {
      id: 1,
      productName: "Organic Bananas (2 lbs)",
      purchaseDate: "2024-12-28",
      ecoScore: 9.2,
      category: "Fresh Produce",
      price: "$3.48",
      impact: "Low carbon footprint, organic farming"
    },
    {
      id: 2,
      productName: "Great Value Plastic Water Bottles (24-pack)",
      purchaseDate: "2024-12-27",
      ecoScore: 3.1,
      category: "Beverages",
      price: "$4.98",
      impact: "High plastic waste, consider alternatives"
    },
    {
      id: 3,
      productName: "Seventh Generation Laundry Detergent",
      purchaseDate: "2024-12-26",
      ecoScore: 8.7,
      category: "Household",
      price: "$12.97",
      impact: "Plant-based formula, recyclable packaging"
    },
    {
      id: 4,
      productName: "LED Light Bulbs (4-pack)",
      purchaseDate: "2024-12-25",
      ecoScore: 9.5,
      category: "Home Improvement",
      price: "$15.88",
      impact: "Energy efficient, long lasting"
    },
    {
      id: 5,
      productName: "Disposable Paper Plates (100 count)",
      purchaseDate: "2024-12-24",
      ecoScore: 4.2,
      category: "Party Supplies",
      price: "$8.97",
      impact: "Single-use, high waste generation"
    },
    {
      id: 6,
      productName: "Bamboo Cutting Board",
      purchaseDate: "2024-12-23",
      ecoScore: 8.9,
      category: "Kitchen",
      price: "$24.97",
      impact: "Sustainable bamboo, biodegradable"
    }
  ];

  const getScoreColor = (score) => {
    if (score >= 8) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  const getScoreLabel = (score) => {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Fair';
    return 'Poor';
  };

  const filteredPurchases = purchases.filter(purchase =>
    purchase.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    purchase.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-1" />
                Sort
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Purchase History Table */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            Purchase History & Eco Scores
          </CardTitle>
          <CardDescription>
            Track your shopping impact with detailed eco scores and sustainability insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPurchases.map((purchase) => (
              <div
                key={purchase.id}
                className="flex flex-col lg:flex-row lg:items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-green-200 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex-1 space-y-2 lg:space-y-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {purchase.productName}
                    </h3>
                    <div className="text-right lg:hidden">
                      <div className="text-lg font-bold text-gray-900">{purchase.price}</div>
                      <div className="text-sm text-gray-500">{purchase.purchaseDate}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      {purchase.category}
                    </Badge>
                    <span className="hidden lg:block">•</span>
                    <span className="hidden lg:block">{purchase.purchaseDate}</span>
                    <span className="hidden lg:block">•</span>
                    <span className="hidden lg:block">{purchase.price}</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic">
                    💡 {purchase.impact}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-3 lg:mt-0">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {purchase.ecoScore}
                    </div>
                    <div className="text-xs text-gray-500">/ 10</div>
                  </div>
                  
                  <Badge className={`${getScoreColor(purchase.ecoScore)} px-3 py-1`}>
                    {getScoreLabel(purchase.ecoScore)}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {filteredPurchases.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>No purchases found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-700">
              {purchases.filter(p => p.ecoScore >= 8).length}
            </div>
            <div className="text-sm text-green-600">Excellent Products</div>
          </CardContent>
        </Card>
        
        <Card className="bg-yellow-50 border-yellow-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-700">
              {purchases.filter(p => p.ecoScore >= 6 && p.ecoScore < 8).length}
            </div>
            <div className="text-sm text-yellow-600">Good Products</div>
          </CardContent>
        </Card>
        
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-700">
              {purchases.filter(p => p.ecoScore < 6).length}
            </div>
            <div className="text-sm text-red-600">Needs Improvement</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PurchaseHistory;
