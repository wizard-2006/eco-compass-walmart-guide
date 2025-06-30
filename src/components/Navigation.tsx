
import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, ShoppingCart, LogOut, User, Package } from 'lucide-react';

interface NavigationProps {
  user: any;
  onLogout: () => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ user, onLogout, activeTab, onTabChange }: NavigationProps) => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <ShoppingCart className="h-5 w-5 text-white" />
            </div>
            <Leaf className="h-6 w-6 text-green-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Walmart EcoCompass</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onTabChange('overview')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'overview'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Package className="h-4 w-4" />
              <span>Dashboard</span>
            </button>
            
            <button
              onClick={() => onTabChange('products')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'products'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Products</span>
            </button>

            <button
              onClick={() => onTabChange('history')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'history'
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <Leaf className="h-4 w-4" />
              <span>Purchases</span>
            </button>
          </nav>

          {/* User Info and Logout */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
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
  );
};

export default Navigation;
