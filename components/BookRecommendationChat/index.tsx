"use client"

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ChatWindow from './Chatwindow';
import QueryInput from './QueryInput';
import { ChatMessage } from './types';
import { useTranslation } from 'react-i18next';

const BookRecommendationChat: React.FC = () => {
  const { t } = useTranslation();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatStarted, setChatStarted] = useState<boolean>(false);

  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleQuerySubmit = () => {
    if (!query.trim()) return;

    if (!chatStarted) {
      setChatStarted(true);
    }

    setChatMessages(prev => [...prev, { type: 'user', content: query }]);

    setTimeout(() => {
      const recommendations = {
        books: [
          {
            category: t('Most Trending'),
            title: t('The Lean Startup'),
            author: t('Eric Ries'),
            forWhom: t('Entrepreneurs and business innovators'),
            summary: t('A new approach to business that\'s being adopted around the world.'),
            imageUrl: 'https://static-01.daraz.lk/p/ec7cf79d40178dcae04f367394a6629d.jpg'
          },
          {
            category: t('Most Trending'),
            title: t('Pride and Prejudice'),
            author: t('Jane Austen'),
            forWhom: t('Literary fiction enthusiasts'),
            summary: t('A classic novel of manners, morality, and marriage in Georgian England.'),
            imageUrl:'https://m.media-amazon.com/images/I/81NLDvyAHrL._AC_UF1000,1000_QL80_.jpg'
          },
          {
            category: t('Most Popular'),
            title: t('Good to Great'),
            author: t('Jim Collins'),
            forWhom: t('Business leaders and managers'),
            summary: t('Why some companies make the leap and others don\'t.'),
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3n8RwP-yKPKfSLFLKPgppOEXmtSE3ykk9A&s'
          },
          {
            category: t('Most Popular'),
            title: t('To Kill a Mockingbird'),
            author: t('Harper Lee'),
            forWhom: t('Readers interested in social justice themes'),
            summary: t('A powerful exploration of racial injustice and loss of innocence in the American South.'),
            imageUrl:'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg'
          },
          {
            category: t('Most Recent'),
            title: t('The Innovator\'s Dilemma'),
            author: t('Clayton M. Christensen'),
            forWhom: t('Business strategists and technology enthusiasts'),
            summary: t('When new technologies cause great firms to fail.'),
            imageUrl:'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347654027i/2615.jpg'
          }
        ],
        resources: [
          {
            type: 'podcast' as const,
            title: t('Masters of Scale'),
            summary: t('Reid Hoffman\'s podcast on how companies grow from zero to a gazillion.')
          },
          {
            type: 'video' as const,
            title: t('TED Talk: The single biggest reason why startups succeed'),
            summary: t('Bill Gross has founded a lot of startups, and incubated many others — and he got curious about why some succeeded and others failed.')
          },
          {
            type: 'article' as const,
            title: t('The Trillion-Dollar Vision of Dee Hock'),
            summary: t('The founder of Visa has a radical new approach to business that could reshape the economy.')
          }
        ]
      };
      setChatMessages(prev => [...prev, { type: 'bot', content: recommendations }]);
    }, 1000);

    setQuery('');
  };

  const handleExampleQueryClick = (exampleQuery: string) => {
    setQuery(exampleQuery);
    handleQuerySubmit();
  };

  return (
    <div className={`flex h-screen bg-secondary md:p-0 p-2`}>
      <Sidebar 
        isSidebarCollapsed={isSidebarCollapsed}
        isDrawerOpen={isDrawerOpen}
        closeDrawer={closeDrawer}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          toggleDarkMode={toggleDarkMode} 
          isSidebarCollapsed={isSidebarCollapsed}
          darkMode={darkMode}
          openDrawer={openDrawer}
        />
        <ChatWindow 
          chatStarted={chatStarted}
          chatMessages={chatMessages}
          handleExampleQueryClick={handleExampleQueryClick}
          query={query}
          setQuery={setQuery}
          handleQuerySubmit={handleQuerySubmit}
        />
        {chatStarted && (
          <QueryInput 
            query={query}
            setQuery={setQuery}
            handleQuerySubmit={handleQuerySubmit}
          />
        )}
      </main>
    </div>
  );
};

export default BookRecommendationChat;