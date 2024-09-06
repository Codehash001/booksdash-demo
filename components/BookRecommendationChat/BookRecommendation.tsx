"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from './types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Apple, PlayCircle, BookOpen } from 'lucide-react';

const BookRecommendation: React.FC<Book> = ({ title, author, forWhom, summary, imageUrl }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Card className="mb-4 hover:shadow-lg transition-shadow duration-300 dark:bg-stone-900">
      <CardContent className="p-4 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 sm:pr-4">
          <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded" />
        </div>
        <div className="w-full sm:w-2/3">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2"><strong>For:</strong> {forWhom}</p>
          <p className="text-sm mt-2 mb-4"><strong>Summary:</strong> {summary}</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="default" size="sm" className="w-full sm:w-auto mb-2 sm:mb-0">Buy Now</Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="default" size="sm" className="w-full sm:w-auto mb-2 sm:mb-0">Full summary</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-4">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">Unlock Full Summaries</DialogTitle>
                </DialogHeader>
                <div className="py-6 flex flex-col items-center">
                <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full">
            <BookOpen size={20} />
          </div>
                  <p className="text-center mb-6">
                    Get instant access to comprehensive book summaries with our BooksDash app. 
                    Download now and start reading smarter!
                  </p>
                  <div className="flex justify-center space-x-4 w-full">
                    <a 
                      href="https://play.google.com/store" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center space-x-2 w-1/2 p-3 border rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-background'><path d="m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z"></path></svg>
                      <span>Google Play</span>
                    </a>
                    <a 
                      href="https://www.apple.com/app-store/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center space-x-2 w-1/2 p-3 border rounded-md bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-background'><path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path></svg>
                      <span>App Store</span>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm" className="w-full sm:w-auto">More Details</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookRecommendation;