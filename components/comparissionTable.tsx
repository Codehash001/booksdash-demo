import React from 'react';
import { CheckCircle, XCircle, BookOpen } from 'lucide-react';

const ModernTableComponent = () => {
  const features = [
    { name: 'Recommendation Sources', rexplore: 'Books with Categorized as most trending, most popular, and recent', others: 'General book recommendations' },
    { name: 'Additional Recommendation', rexplore: 'Yes, from YouTube videos, podcasts, articles', others: 'No' },
    { name: 'Comprehensive Details', rexplore: 'Single-click access to quick summaries, About author, quote etc', others: 'Not aailable' },
    { name: 'Language Options', rexplore: 'Supports 14 languages', others: 'Only English' },
    { name: 'AI Integration', rexplore: 'AI for Accurate results', others: 'May not use AI' },
    { name: 'Amazon Star Ratings', rexplore: 'Yes,', others: 'no' },
    { name: 'Micro Summaries', rexplore: 'Provides micro summaries to take better decision', others: 'No' },
    { name: 'User Experience', rexplore: 'Offers a diverse content range, including trending media and language flexibility', others: 'Focuses on book summaries and reviews' },
    { name: 'Direct Amazon Buy Now Links', rexplore: 'Available for 9 Countries', others: 'Yes for specific Country' },
  ];

  return (
    <div className="overflow-x-auto shadow-md rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs uppercase bg-stone-200 dark:bg-stone-700 text-stone-700 dark:text-stone-300">
          <tr>
            <th scope="col" className="px-4 py-3 sm:px-6 text-center">Feature</th>
            <th scope="col" className="px-4 py-3 sm:px-6 text-center">
              <div className="flex items-center justify-center space-x-2">
              <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full">
            <BookOpen size={15} />
          </div>
          <h1 className=''>Rexplore</h1>
              </div>
            </th>
            <th scope="col" className="px-4 py-3 sm:px-6 text-center">Others</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-stone-50'} dark:bg-stone-800 border-b dark:border-stone-700`}>
              <th scope="row" className="px-4 py-4 sm:px-6 font-medium text-stone-900 dark:text-white">
                {feature.name}
              </th>
              <td className="px-4 py-4 sm:px-6">
                <div className="flex items-start sm:items-center">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1 sm:mt-0" size={16} />
                  <span className="text-xs sm:text-sm">{feature.rexplore}</span>
                </div>
              </td>
              <td className="px-4 py-4 sm:px-6">
                <div className="flex items-start sm:items-center">
                  {feature.others === 'No' || feature.others === 'no' ? (
                    <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1 sm:mt-0" size={16} />
                  ) : (
                    <CheckCircle className="text-yellow-500 mr-2 flex-shrink-0 mt-1 sm:mt-0" size={16} />
                  )}
                  <span className="text-xs sm:text-sm">{feature.others}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModernTableComponent;