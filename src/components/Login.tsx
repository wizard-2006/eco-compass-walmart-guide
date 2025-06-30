
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, ShoppingCart, Eye, EyeOff, Loader2 } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login delay with realistic loading
    setTimeout(() => {
      onLogin({
        name: email === 'demo@walmart.com' ? 'Demo User' : 'John Smith',
        email: email,
        joinDate: '2023-01-15'
      });
      setIsLoading(false);
    }, 1500);
  };

  const handleDemo = () => {
    setEmail('demo@walmart.com');
    setPassword('demo123');
    setTimeout(() => {
      onLogin({
        name: 'Demo User',
        email: 'demo@walmart.com',
        joinDate: '2023-01-15'
      });
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        {/* Enhanced Header with Better Branding */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
            <Leaf className="h-10 w-10 text-green-600 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Walmart EcoCompass
            </h1>
            <p className="text-lg text-gray-600 font-medium">Shop Smarter, Live Greener</p>
            <p className="text-sm text-gray-500">Track your sustainable shopping journey</p>
          </div>
        </div>

        {/* Enhanced Login Card with Glass Effect */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md hover:shadow-3xl transition-all duration-300">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-800 mb-2">Welcome Back</CardTitle>
            <CardDescription className="text-base">
              Sign in to access your eco-friendly shopping insights
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base border-2 border-gray-200 focus:border-green-500 focus:ring-green-500/20 transition-all duration-200"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 text-base border-2 border-gray-200 focus:border-green-500 focus:ring-green-500/20 transition-all duration-200 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Sign In to Dashboard'
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500 font-medium">or</span>
              </div>
            </div>
            
            <Button
              onClick={handleDemo}
              variant="outline"
              className="w-full h-12 border-2 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-300 font-semibold text-base transition-all duration-200 transform hover:scale-[1.02]"
            >
              <span className="mr-2">🌱</span>
              Try Demo Account
            </Button>
          </CardContent>
        </Card>

        {/* Enhanced Footer with Better Visual Hierarchy */}
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600 font-medium">
            Powered by Walmart's commitment to sustainability
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 bg-white/80 px-3 py-2 rounded-full shadow-sm">
              <span className="text-lg">🌱</span>
              <span className="font-medium text-gray-700">Carbon Tracking</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 px-3 py-2 rounded-full shadow-sm">
              <span className="text-lg">♻️</span>
              <span className="font-medium text-gray-700">Eco Insights</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 px-3 py-2 rounded-full shadow-sm">
              <span className="text-lg">🏆</span>
              <span className="font-medium text-gray-700">Green Rewards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
