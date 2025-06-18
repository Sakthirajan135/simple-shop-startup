
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignup) {
      const result = signup(email, password, name);
      if (result.success) {
        toast({
          title: "Account created!",
          description: "Welcome to ShopEase!",
        });
        navigate('/');
      }
    } else {
      const result = login(email, password);
      if (result.success) {
        toast({
          title: "Welcome back!",
          description: `Logged in as ${result.user.name}`,
        });
        
        // Redirect based on role
        if (result.user.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        toast({
          title: "Login failed",
          description: result.error,
          variant: "destructive"
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ShopEase
          </Link>
          <h2 className="mt-4 text-xl font-semibold">
            {isSignup ? 'Create Account' : 'Sign In'}
          </h2>
        </div>

        <div className="mb-4 p-3 bg-blue-50 rounded-md text-sm">
          <p className="font-medium">Demo Accounts:</p>
          <p>Admin: admin@shop.com / admin123</p>
          <p>Customer: customer@shop.com / customer123</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            {isSignup ? 'Create Account' : 'Sign In'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsSignup(!isSignup)}
            className="text-blue-600 hover:text-blue-700 text-sm"
          >
            {isSignup 
              ? 'Already have an account? Sign in' 
              : "Don't have an account? Sign up"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
