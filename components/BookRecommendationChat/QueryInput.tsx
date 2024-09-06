"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';

interface QueryInputProps {
  query: string;
  setQuery: (query: string) => void;
  handleQuerySubmit: () => void;
}

const QueryInput: React.FC<QueryInputProps> = ({ query, setQuery, handleQuerySubmit }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 pb-6 bg-secondary"
    >
      <div className="max-w-4xl mx-auto flex items-center space-x-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask for a book recommendation..."
          className="flex-grow rounded-xl shadow-md h-10 dark:bg-stone-900 dark:text-gray-100 ring-gray-400 ring-1"
          onKeyPress={(e) => e.key === 'Enter' && handleQuerySubmit()}
        />
        <Button size="icon" className='rounded-full h-10 w-10 shadow-md' onClick={handleQuerySubmit}>
          <Send size={16} />
        </Button>
      </div>
      <p className='text-xs font-medium opacity-75 w-full text-center mt-2'>Each query is not dependent on previous context.</p>
    </motion.div>
  );
};

export default QueryInput;