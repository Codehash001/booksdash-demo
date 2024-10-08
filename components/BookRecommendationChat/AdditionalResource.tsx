"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Video, FileText } from 'lucide-react';
import { AdditionalResource as AdditionalResourceType } from './types';

const AdditionalResource: React.FC<AdditionalResourceType> = ({ type, headline, description }) => {
  const IconComponent = type === 'podcast' ? Mic : type === 'video' ? Video : FileText;
  
  return (
    <Card className="mb-2 hover:shadow-md transition-shadow duration-300 dark:bg-stone-900 h-full flex justify-center items-center">
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div>
          <IconComponent className="mr-2 text-blue-500" size={20} />
          </div>
          <h4 className="text-md font-semibold">{headline}</h4>
        </div>
        <h1 className='text-sm'>{description}</h1>
      </CardContent>
    </Card>
  );
};

export default AdditionalResource;