import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // For eye icons

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-b from-yellow-400 to-green-900 p-8">
          <div className="flex justify-center mb-6">
            <img
              src="/public/egerton-logo.png"
              alt="Egerton University"
              className="h-24"
            />
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-white">
                Reg. Number
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Reg. Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-white">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Log In
            </button>
            <div className="text-center">
              <a href="#" className="text-sm text-green-200 hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
        <div className="bg-red-600 text-center text-white text-xs py-2">
          2025 © Designed by DSL Systems
        </div>
      </div>
    </div>
  );
}
