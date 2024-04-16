export interface TabItem {
  title: string;
  description: string;
  photo: string;
  href: string;
  device: 'mobile' | 'desktop';
}

export interface OffersDesktopProps {
  selectedTab: TabItem;
}
