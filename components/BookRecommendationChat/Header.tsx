import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, Moon, Sun, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeaderProps {
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  isSidebarCollapsed: boolean;
  darkMode: boolean;
  openDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleSidebar, 
  toggleDarkMode, 
  isSidebarCollapsed, 
  darkMode,
  openDrawer
}) => {
  const { t } = useTranslation();

  return (
    <>
      <header className="sticky top-0 z-10 bg-secondary p-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={openDrawer}
            className='bg-secondary/10 border rounded-md lg:hidden mr-2'
            aria-label={t('Open menu')}
          >
            <Menu size={20} />
          </Button>
          
          {/* Sidebar toggle button - hidden on mobile/tablet */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className='bg-secondary/10 border rounded-md hidden lg:flex'
            aria-label={t(isSidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar')}
          >
            {isSidebarCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary`}
            role="switch"
            aria-checked={darkMode}
            aria-label={t('Toggle dark mode')}
          >
            <span className="sr-only">{t('Toggle dark mode')}</span>
            <span
              className={`absolute inset-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-secondary shadow-sm transition-transform duration-300 ease-in-out ${
                darkMode ? 'translate-x-5' : 'translate-x-0'
              }`}
            >
              {darkMode ? <Moon size={15} /> : <Sun size={14} />}
            </span>
          </button>
        </div>
      </header>
      <Separator />
    </>
  );
};

export default Header;