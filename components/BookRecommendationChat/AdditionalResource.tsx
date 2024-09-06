"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Video, FileText } from 'lucide-react';
import { AdditionalResource as AdditionalResourceType } from './types';

const AdditionalResource: React.FC<AdditionalResourceType> = ({ type, title, summary }) => {
  const IconComponent = type === 'podcast' ? Mic : type === 'video' ? Video : FileText;
  
  return (
    <Card className="mb-2 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-center mb-2">
          <div>
          <IconComponent className="mr-2 text-blue-500" size={20} />
          </div>
          <h4 className="text-md font-semibold">{title}</h4>
        </div>
        <p className="text-sm">{summary}</p>
      </CardContent>
    </Card>
  );
};

export default AdditionalResource;