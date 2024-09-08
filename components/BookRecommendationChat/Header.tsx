import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, Moon, Sun, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import BetaAlert from '../alert';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarCollapsed: boolean;
  openDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  toggleSidebar, 
  isSidebarCollapsed, 
  openDrawer
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full absolute top-0 z-10"><BetaAlert /></div>
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
          <LanguageSelector/>
        </div>
      </header>
      <Separator />
    </>
  );
};

export default Header;