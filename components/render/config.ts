import { Hero } from '@components/hero';
import { ComponentsRenderConfig } from '.';
import { Projects } from '@components/projects';
import { Contact } from '@components/contact';
import Github from '@components/github';
import Videos from '@components/videos';

export const ComponentsHome: ComponentsRenderConfig[] = [
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
        name: 'Contact',
        order: 6,
        Component: Contact
    }
];
