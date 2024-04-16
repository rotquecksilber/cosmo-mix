export interface AccordionProps {
  data: {
    title: string;
    description: string;
    photo?: string;
    href?: string;
    device: 'mobile' | 'desktop';
  }[];
}


