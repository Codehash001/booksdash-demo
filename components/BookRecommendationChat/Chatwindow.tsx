import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BookRecommendation from './BookRecommendation';
import AdditionalResource from './AdditionalResource';
import { ChatMessage } from './types';

interface ChatWindowProps {
  chatStarted: boolean;
  chatMessages: ChatMessage[];
  handleExampleQueryClick: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  handleQuerySubmit: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ 
  chatStarted, 
  chatMessages, 
  handleExampleQueryClick, 
  query, 
  setQuery, 
  handleQuerySubmit 
}) => {
  const exampleQueries = [
    "I need a book to improve my business",
    "Recommend me a book on personal growth",
    "What's a good book for learning programming?",
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 relative">
      <AnimatePresence>
        {!chatStarted && (
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className='flex items-center justify-center space-x-3 mb-4'>
                <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full">
                  <BookOpen size={20} />
                </div>
                <h1 className="text-3xl font-semibold">Welcome to Booksdash</h1>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">What is on your mind?</p>
            </motion.div>
            <motion.div 
              className="mb-8"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-wrap justify-center">
                {exampleQueries.map((q, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="mr-2 mb-2 text-sm hover:bg-blue-50"
                    onClick={() => handleExampleQueryClick(q)}
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </motion.div>
            <motion.div 
              className="w-full max-w-md"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {chatStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-7xl mx-auto"
          >
            {chatMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex items-start space-x-4 mb-4 ${message.type === 'user' ? 'justify-end' : ''}`}
              >
                {message.type === 'bot' && (
                  <div className='rounded-full p-2 border border-black bg-white'>
                    <BookOpen size={20} />
                  </div>
                )}
                <div className={`flex-1 p-4 rounded-lg ${message.type === 'user' ? 'bg-primary/10 ml-12' : 'bg-secondary border border-gray-200 dark:border-stone-600 mr-12'}`}>
                  {typeof message.content === 'string' ? (
                    <p>{message.content}</p>
                  ) : (
                    <div className="flex flex-col">
                      <p className="mb-4">Here are some book recommendations based on your query:</p>
                      <div className="w-full">
                        {['Most Trending', 'Most Popular', 'Most Recent'].map((category) => (
                          <div key={category}>
                            <h3 className="text-lg font-semibold mb-2">{category}</h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                              {message.content.books.filter(book => book.category === category).map((book, bookIndex) => (
                                <BookRecommendation key={bookIndex} {...book} />
                            ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="w-full">
                        <h3 className="text-sm font-semibold mb-2">Additional Resources</h3>
                        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
                          {message.content.resources.map((resource, resourceIndex) => (
                            <AdditionalResource key={resourceIndex} {...resource} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                                {message.type === 'user' && (
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="User" />
                                    <AvatarFallback>U</AvatarFallback>
                                  </Avatar>
                                )}
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                };
                
                export default ChatWindow;