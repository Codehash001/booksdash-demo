'use client'

import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, X } from 'lucide-react';

const BetaAlert = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => setShowAlert(false), 300); // Match this with animation duration
      return () => clearTimeout(timer);
    }
  }, [isClosing]);

  if (!showAlert) return null;

  const handleClose = () => {
    setIsClosing(true);
  };

  return (
    <Alert 
      className={`
        rounded-sm border-b bg-secondary w-full flex justify-center relative 
        text-stone-100 dark:text-stone-900 bg-stone-600 dark:bg-stone-200
        transition-all duration-300 ease-in-out
        ${isClosing 
          ? 'opacity-0 -translate-y-4' 
          : 'opacity-100 translate-y-0 animate-in fade-in slide-in-from-bottom-4'}
      `}
    >
      <AlertDescription className="font-medium flex items-center">
        <Info className="h-4 w-4 mr-2" />
        Welcome to Rexplore beta! We're crafting something special. Stay tuned.
      </AlertDescription>
      <button 
        onClick={handleClose}
        className="
          absolute right-4 top-1/2 transform -translate-y-1/2 
          text-stone-100 dark:text-stone-900 
          hover:text-stone-300 dark:hover:text-stone-700 
          focus:outline-none transition-colors duration-200
        "
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
    </Alert>
  );
};

export default BetaAlert;