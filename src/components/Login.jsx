import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Lock, Eye, EyeOff, Search, Facebook, Apple } from 'lucide-react';
import backgroundImage from '../img/2.jpg';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the unified auth page
    navigate('/auth');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="text-white">Redirecting...</div>
    </div>
  );
};

export default Login;