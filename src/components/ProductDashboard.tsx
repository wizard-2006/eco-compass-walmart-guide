
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf, Search, Filter, ShoppingCart, Recycle, Zap, Droplets } from 'lucide-react';

const ProductDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Mock Walmart products with environmental data
  const products = [
    {
      id: 1,
      name: "Great Value Organic Bananas (2 lbs)",
      price: "$3.48",
      image: "/placeholder.svg",
      category: "Fresh Produce",
      ecoScore: 9.2,
      isGreen: true,
      co2Saved: "2.1 kg",
      plasticSaved: "0 g",
      recyclable: true,
      organic: true,
      description: "Certified organic bananas with minimal packaging",
      impact: {
        carbonFootprint: "Low",
        packaging: "Minimal/None",
        sourcing: "Organic Farm"
      }
    },
    {
      id: 2,
      name: "Great Value LED Light Bulbs (4-pack)",
      price: "$15.88",
      image: "/placeholder.svg",
      category: "Home Improvement",
      ecoScore: 9.5,
      isGreen: true,
      co2Saved: "45.2 kg/year",
      plasticSaved: "0 g",
      recyclable: true,
      organic: false,
      description: "Energy-efficient LED bulbs that last 25x longer",
      impact: {
        carbonFootprint: "Very Low",
        packaging: "Recyclable Cardboard",
        sourcing: "Energy Star Certified"
      }
    },
    {
      id: 3,
      name: "Great Value Plastic Water Bottles (24-pack)",
      price: "$4.98",
      image: "/placeholder.svg",
      category: "Beverages",
      ecoScore: 3.1,
      isGreen: false,
      co2Saved: "0 kg",
      plasticSaved: "-480 g",
      recyclable: true,
      organic: false,
      description: "Single-use plastic bottles with high environmental impact",
      impact: {
        carbonFootprint: "High",
        packaging: "Single-use Plastic",
        sourcing: "Conventional"
      }
    },
    {
      id: 4,
      name: "Seventh Generation Laundry Detergent",
      price: "$12.97",
      image: "/placeholder.svg",
      category: "Household",
      ecoScore: 8.7,
      isGreen: true,
      co2Saved: "3.4 kg",
      plasticSaved: "120 g",
      recyclable: true,
      organic: false,
      description: "Plant-based formula in recyclable packaging",
      impact: {
        carbonFootprint: "Low",
        packaging: "Recyclable Plastic",
        sourcing: "Plant-based Ingredients"
      }
    },
    {
      id: 5,
      name: "Bamboo Cutting Board Set",
      price: "$24.97",
      image: "/placeholder.svg",
      category: "Kitchen",
      ecoScore: 8.9,
      isGreen: true,
      co2Saved: "5.1 kg",
      plasticSaved: "200 g",
      recyclable: false,
      organic: true,
      description: "Sustainable bamboo alternative to plastic boards",
      impact: {
        carbonFootprint: "Very Low",
        packaging: "Minimal Cardboard",
        sourcing: "Sustainable Bamboo"
      }
    },
    {
      id: 6,
      name: "Disposable Paper Plates (100 count)",
      price: "$8.97",
      image: "/placeholder.svg",
      category: "Party Supplies",
      ecoScore: 4.2,
      isGreen: false,
      co2Saved: "0 kg",
      plasticSaved: "0 g",
      recyclable: false,
      organic: false,
      description: "Single-use paper plates with high waste generation",
      impact: {
        carbonFootprint: "High",
        packaging: "Plastic Wrap",
        sourcing: "Conventional Paper"
      }
    }
  ];

  const categories = ["all", "Fresh Produce", "Home Improvement", "Beverages", "Household", "Kitchen", "Party Supplies"];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getScoreColor = (score) => {
    if (score >= 8) return 'bg-green-100 text-green-800 border-green-200';
    if (score >= 6) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <Card className="bg-white/80 backdrop-blur-sm border-green-100">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-white/80 backdrop-blur-sm border-green-100 hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                  <CardDescription className="mt-1">{product.description}</CardDescription>
                </div>
                {product.isGreen && (
                  <Badge className="bg-green-100 text-green-700 border-green-200 ml-2">
                    <Leaf className="h-3 w-3 mr-1" />
                    Green
                  </Badge>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Price and Category */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                <Badge variant="outline" className="text-xs">
                  {product.category}
                </Badge>
              </div>

              {/* Eco Score */}
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium">Eco Score</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{product.ecoScore}</span>
                  <Badge className={`${getScoreColor(product.ecoScore)} text-xs`}>
                    {product.ecoScore >= 8 ? 'Excellent' : product.ecoScore >= 6 ? 'Good' : 'Poor'}
                  </Badge>
                </div>
              </div>

              {/* Environmental Impact */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-700">Environmental Impact:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Zap className="h-3 w-3 text-blue-500" />
                    <span>CO₂: {product.co2Saved}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Droplets className="h-3 w-3 text-cyan-500" />
                    <span>Plastic: {product.plasticSaved}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Recycle className="h-3 w-3 text-green-500" />
                    <span>{product.recyclable ? 'Recyclable' : 'Not Recyclable'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Leaf className="h-3 w-3 text-green-600" />
                    <span>{product.organic ? 'Organic' : 'Conventional'}</span>
                  </div>
                </div>
              </div>

              {/* Impact Details */}
              <div className="space-y-1 text-xs text-gray-600">
                <div>Carbon: {product.impact.carbonFootprint}</div>
                <div>Packaging: {product.impact.packaging}</div>
                <div>Source: {product.impact.sourcing}</div>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductDashboard;
