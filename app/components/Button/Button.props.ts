import { ReactNode } from 'react';

export interface ButtonProps {
    size: 'big' | 'middle' | 'small';
    buttonColor: 'white' | 'purple' | 'gradient';
    children: ReactNode;
    aria_label: string;
}
