'use client';

import { Button, Checkbox, Input,  Card } from '@heroui/react';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-white">
      <div className="flex flex-col md:flex-row items-center max-w-5xl w-full mx-4">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2">
          <Image
            src="/images/auth/login.svg"
            alt="Property Management Illustration"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Login Form */}
        <Card className="md:w-1/2 p-8 ml-28 shadow-lg rounded-xl bg-white">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">Property Management System</h1>
          <p className="text-yellow-500 flex item-center justify-center mb-6">
            <span className="mr-2">🎉</span> Welcome back! Please login to your account.
          </p>

          <form className="space-y-4">
            <div>
              <p htmlFor="email" className="text-gray-700">Email</p>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <p htmlFor="password" className="text-gray-700">Password</p>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 border-gray-300 rounded-lg"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Checkbox id="remember" />
                <p htmlFor="remember" className="ml-2 text-gray-600">Remember Me</p>
              </div>
              <a href="/auth/forget-password" className="text-sm text-gray-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Sign Up
            </Button>

            <p className="text-center text-sm text-gray-600 mt-4">
              If you haven’t account.{' '}
              <a href="/auth/sign-up" className="text-green-600 hover:underline">
                Create new account
              </a>
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}