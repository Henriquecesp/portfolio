import { ButtonPrimary } from '@components/button';
import { Footer } from '@components/footer';
import { Hero } from '@components/hero';
import { Header } from '@components/header';
import { ComponentsRenderConfig } from '.';

export const ComponentsHome: ComponentsRenderConfig[] = [
    {
        name: 'Header',
        order: 0,
        Component: Header
    },
    {
        name: 'Hero',
        order: 1,
        Component: Hero
    },
    {
        name: 'Footer',
        order: 2,
        Component: Footer
    }
];
