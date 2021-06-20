export const ITEMS: ISectionsItems[] = [
    {
        title: 'Platform',
        items: [
            {
                id: 0,
                icon: '../../media/icons/house2.png',
                title: 'Home',
                url: '/'
            },
            {
                id: 1,
                icon: '../../media/icons/publications.png',
                title: 'Publications',
                url: '/test'
            },
            {
                id: 2,
                icon: '../../media/icons/people.png',
                title: 'People',
                url: '/test'
            },
            {
                id: 3,
                icon: '../../media/icons/entities2.png',
                title: 'Entities',
                url: '/Entities'
            },
            {
                id: 4,
                icon: '../../media/icons/administration.png',
                title: 'Administration',
                url: '/test'
            },
        ]
    },
    {
        title: 'Workspaces',
        items: [
            {
                id: 0,
                icon: '../../media/icons/house2.png',
                title: 'Client contract',
                url: '/workspaces'
            },
            {
                id: 1,
                icon: '../../media/icons/house2.png',
                title: 'Supplier contract',
                url: '/workspaces'
            },
            {
                id: 2,
                icon: '../../media/icons/entities2.png',
                title: 'Corporate',
                url: '/workspaces'
            },
            {
                id: 3,
                icon: '../../media/icons/publications.png',
                title: 'Group Norms',
                url: '/workspaces'
            },
            {
                id: 4,
                icon: '../../media/icons/house2.png',
                title: 'Real estate contracts',
                url: '/workspaces'
            },
            {
                id: 5,
                icon: '../../media/icons/house2.png',
                title: 'Client contract',
                url: '/workspaces'
            },
            {
                id: 6,
                icon: '../../media/icons/house2.png',
                title: 'Supplier contract',
                url: '/workspaces'
            },
            {
                id: 7,
                icon: '../../media/icons/entities2.png',
                title: 'Corporate',
                url: '/workspaces'
            },
            {
                id: 8,
                icon: '../../media/icons/publications.png',
                title: 'Group Norms',
                url: '/workspaces'
            },
            {
                id: 9,
                icon: '../../media/icons/house2.png',
                title: 'Real estate contracts',
                url: '/workspaces'
            }
        ]
    },
    {
        title: 'Account',
        items: [
            {
                id: 1,
                icon: '../../media/icons/privacy.png',
                title: 'Privacy',
                url: '/test'
            },
            {
                id: 2,
                icon: '../../media/icons/settings.png',
                title: 'Settings',
                url: '/test'
            },
        ]
    },
];

export interface ISectionsItems {
    title: string,
    items: IDDItems[],
}

export interface IDDItems {
  id: number;
  icon: string;
  title: string;
  url: string;
}