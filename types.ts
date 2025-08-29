
import type React from 'react';

export interface NavItem {
  name: string;
  path: string;
  icon?: React.ReactNode;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
