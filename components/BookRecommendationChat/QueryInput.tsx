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
      <div className="max-w-4xl mx-auto flex items-center space-x-2 p-0 md:px-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask for a book recommendation..."
          className="flex-grow rounded-xl shadow-md h-10 dark:bg-black dark:text-gray-100 ring-gray-400 ring-1"
          onKeyPress={(e) => e.key === 'Enter' && handleQuerySubmit()}
        />
        <div className='rounded-full h-10 w-10 flex items-center justify-center border bg-primary' onClick={handleQuerySubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='fill-primary-foreground' ><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path></svg>
        </div>
      </div>
      <p className='text-xs font-medium opacity-75 w-full text-center mt-2'>Each query is not dependent on previous context.</p>
    </motion.div>
  );
};

export default QueryInput;