import { ReactNode } from 'react';
export interface TitleDescriptionProps {
  title?: string | ReactNode;
  description?: string | ReactNode;
  href?: string;
  hrefText?: string;
}
