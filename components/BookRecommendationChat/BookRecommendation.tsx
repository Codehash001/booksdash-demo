"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book } from './types';

const BookRecommendation: React.FC<Book> = ({ title, author, forWhom, summary, imageUrl }) => (
  <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
    <CardContent className="p-4 flex">
      <div className="w-1/3 pr-4">
        <img src={imageUrl} alt={title} className="w-full h-auto object-cover rounded" />
      </div>
      <div className="w-2/3">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{author}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2"><strong>For:</strong> {forWhom}</p>
        <p className="text-sm mt-2 mb-4"><strong>Summary:</strong> {summary}</p>
        <div className="flex space-x-2">
          <Button variant="default" size="sm">Buy Now</Button>
          <Button variant="outline" size="sm">More Details</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default BookRecommendation;