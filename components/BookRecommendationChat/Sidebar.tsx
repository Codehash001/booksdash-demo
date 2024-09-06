import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, MessageSquare, X } from 'lucide-react';
import useUser from '@/app/hook/useUser';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { SignOutButton } from '../supaauth/signin';
import { useTranslation } from 'react-i18next';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface SidebarProps {
  isSidebarCollapsed: boolean;
  isDrawerOpen: boolean;
  closeDrawer: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarCollapsed, isDrawerOpen, closeDrawer }) => {
  const { t } = useTranslation();
  const { data: user, error } = useUser();

  const chatHistory = [
    { id: 1, title: t('Fantasy recommendations') },
    { id: 2, title: t('Sci-fi books from 2023') },
    { id: 3, title: t('Classic literature') },
  ];

  if (error) {
    return <div>{t('Error loading user data')}</div>;
  }

  const Content = () => (
    <>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-full">
            <BookOpen size={20} />
          </div>
          {!isSidebarCollapsed && <span className="text-xl font-semibold">{t('Booksdash')}</span>}
        </div>
      </div>
      <nav className="flex-grow overflow-y-auto p-4">
        {chatHistory.map((chat) => (
          <Button
            key={chat.id}
            variant="ghost"
            className={`w-full justify-start mb-2 ${isSidebarCollapsed ? 'px-2 hidden' : 'px-4'}`}
            aria-label={chat.title}
          >
            <MessageSquare size={20} />
            {!isSidebarCollapsed && <span className="ml-2 truncate">{chat.title}</span>}
          </Button>
        ))}
      </nav>
      <Popover>
        <PopoverTrigger>
          <div className={isSidebarCollapsed ? `p-2` : 'p-4'}>
            <div className={`flex items-start rounded-lg border p-2 dark:border-gray-700 ${isSidebarCollapsed ? 'border-none' : 'border space-x-2'}`}>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt={t('User avatar')} />
                <AvatarFallback>{t('U')}</AvatarFallback>
              </Avatar>
              {!isSidebarCollapsed && <p className="md:text-sm text-xs text-start mt-2 font-medium">{user?.user_metadata.name}</p>}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-auto max-w-40 p-1'><SignOutButton /></PopoverContent>
      </Popover>
    </>
  );

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className={`bg-white dark:bg-stone-900 shadow-md transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'w-[68px]' : 'w-64'} flex-col hidden lg:flex`}>
        <Content />
      </aside>

      {/* Drawer for mobile/tablet screens */}
      <Sheet open={isDrawerOpen} onOpenChange={closeDrawer}>
        <SheetContent side="left" className="p-0 w-[240px]">
          <div className="bg-white dark:bg-stone-900 h-full flex flex-col">
            <Content />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;