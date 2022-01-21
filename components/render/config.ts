import { Footer } from '@components/footer';
import { Hero } from '@components/hero';
import { Header } from '@components/header';
import { ComponentsRenderConfig } from '.';
import { Logos } from '@components/logos';

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
        name: 'Logos',
        order: 2,
        Component: Logos
    },
    {
        name: 'Footer',
        order: 3,
        Component: Footer
    }
];
