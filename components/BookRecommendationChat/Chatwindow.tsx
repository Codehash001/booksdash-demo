import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowBigDownDash, ArrowRight, BookOpen, ChevronDown, Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BookRecommendation from './BookRecommendation';
import AdditionalResource from './AdditionalResource';
import { ChatMessage, Book, AdditionalResource as Resource } from './types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ChatWindowProps {
  chatStarted: boolean;
  chatMessages: ChatMessage[];
  handleExampleQueryClick: (query: string) => void;
  query: string;
  setQuery: (query: string) => void;
  handleQuerySubmit: () => void;
}

const isBookRecommendationContent = (
  content: string | { books: Book[]; resources: Resource[] }
): content is { books: Book[]; resources: Resource[] } => {
  return typeof content !== 'string' && content.books !== undefined && content.resources !== undefined;
};

const ChatWindow: React.FC<ChatWindowProps> = ({
  chatStarted,
  chatMessages,
  handleExampleQueryClick,
  query,
  setQuery,
  handleQuerySubmit,
}) => {
  const exampleQueries = [
    "I need a book to improve my business",
    "Recommend me a book on personal growth",
    "What's a good book for learning programming?",
  ];

  return (
    <div className="flex-1 overflow-y-auto md:p-4 relative w-full">
      <AnimatePresence>
        {!chatStarted && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="text-center mb-8 px-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full">
                  <BookOpen size={20} />
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold">Welcome to Rexplore</h1>
              </div>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">What is on your mind?</p>
            </motion.div>
            <motion.div
              className="mb-8 w-full px-4"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-wrap justify-center">
                {exampleQueries.map((q, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="mr-2 mb-2 text-xs sm:text-sm hover:ring-1 ring-stone-300"
                    onClick={() => handleExampleQueryClick(q)}
                  >
                    {q}
                  </Button>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="w-full max-w-md px-4"
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
                        <svg onClick={handleQuerySubmit} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='shadow-xl ml-3 md:ml-4 h-10 w-10 md:h-11 md:w-11 border flex items-center justify-center p-2 rounded-3xl bg-primary fill-primary-foreground' ><path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z" className='shadow-xl'></path></svg>

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
            className="w-full mx-auto "
          >
            {chatMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col sm:flex-row items-start justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 ${
                  message.type === 'user' ? 'self-end w-full' : ''
                }`}
              >
                {message.type === 'bot' && (
                  <div className='w-8 h-8 sm:w-10 sm:h-10 bg-primary text-primary-foreground flex items-center justify-center rounded-full flex-shrink-0 '>
                    <BookOpen size={16} />
                  </div>
                )}
                <div
                  className={`flex-1 p-3 sm:p-4 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary/10  self-end'
                      : 'bg-secondary border border-gray-200 dark:border-stone-600 '
                  } max-w-full sm:max-w-[80%] mt-1`}
                >
                  {typeof message.content === 'string' ? (
                    <p className="text-sm sm:text-base">{message.content}</p>
                  ) : isBookRecommendationContent(message.content) ? (
                    <div className="flex flex-col">
                      <p className="mb-4 text-sm sm:text-base">Here are some book recommendations based on your query:</p>
                      <div className="w-full">
                        {['Most Trending', 'Most Popular', 'Most Recent'].map((category) => (
                          <div key={category} className="mb-4 pb-2">
                            <div className='flex items-end justify-between w-full'>
                            <h3 className="text-base sm:text-lg font-bold mb-2">{category}</h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {message.content.books
                                .filter((book: { category: string; }) => book.category === category)
                                .map((book: React.JSX.IntrinsicAttributes & Book, bookIndex: React.Key | null | undefined) => (
                                  <BookRecommendation key={bookIndex} {...book} />
                                ))}
                            </div>
                            <div className='flex w-full justify-end mt-2 md:mt-1'>
                            <Button className='italic text-xs md:text-sm' variant={"outline"}>Load more {category} books
                              <ArrowRight size={16} className='ml-2'/>
                            </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="additional-resources">
                          <AccordionTrigger className="text-sm font-semibold group">
                            <h3 className="text-base sm:text-lg font-bold mb-2">Explore additional Resources</h3>
                          </AccordionTrigger>
                          <AccordionContent>
                            <AnimatePresence>
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                <motion.div
                                  initial={{ y: -20 }}
                                  animate={{ y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                  className="w-full grid md:grid-flow-col md:grid-cols-3  gap-3"
                                >
                                  {message.content.resources.map((resource, resourceIndex) => (
                                    <motion.div
                                      key={resourceIndex}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: 0.1 + resourceIndex * 0.1 }}
                                    >
                                      <AdditionalResource {...resource} />
                                    </motion.div>
                                  ))}
                                </motion.div>
                              </motion.div>
                            </AnimatePresence>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      </motion.div>
                    </div>
                  ) : null}
                </div>
                {message.type === 'user' && (
                  <div className='flex justify-end order-first sm:order-last flex-shrink-0 w-full sm:w-auto'>
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage
                        src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                        alt="User"
                      />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
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