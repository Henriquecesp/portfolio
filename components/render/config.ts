import { Hero } from '@components/hero';
import { Header } from '@components/header';
import { ComponentsRenderConfig } from '.';
import { Logos } from '@components/logos';
import { Projects } from '@components/projects';
import { Contact } from '@components/contact';
import dynamic from 'next/dynamic';
import Github from '@components/github';

const Videos = dynamic(() => import('@components/videos'), {
    ssr: false
});

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
        name: 'Projects',
        order: 2,
        Component: Projects
    },
    {
        name: 'Videos',
        order: 3,
        Component: Videos
    },
    {
        name: 'Github',
        order: 4,
        Component: Github
    },
    {
        name: 'Logos',
        order: 5,
        Component: Logos
    },
    {
        name: 'Contact',
        order: 6,
        Component: Contact
    }
];
