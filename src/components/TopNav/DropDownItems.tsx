export const ITEMS: ISectionsItems[] = [
    {
        title: 'Platform',
        items: [
            {
                icon: '../../media/icons/house2.png',
                title: 'Home',
                url: '/'
            },
            {
                icon: '../../media/icons/publications.png',
                title: 'Publications',
                url: '/'
            },
            {
                icon: '../../media/icons/people.png',
                title: 'People',
                url: '/'
            },
            {
                icon: '../../media/icons/entities2.png',
                title: 'Entities',
                url: '/Entities'
            },
            {
                icon: '../../media/icons/administration.png',
                title: 'Administration',
                url: '/'
            },
        ]
    },
    {
        title: 'Workspaces',
        items: [
            {
                icon: '../../media/icons/house2.png',
                title: 'Client contract',
                url: '/'
            },
            {
                icon: '../../media/icons/house2.png',
                title: 'Supplier contract',
                url: '/'
            },
            {
                icon: '../../media/icons/entities2.png',
                title: 'Corporate',
                url: '/'
            },
            {
                icon: '../../media/icons/publications.png',
                title: 'Group Norms',
                url: '/'
            },
            {
                icon: '../../media/icons/house2.png',
                title: 'Real estate contracts',
                url: '/'
            },
        ]
    },
    {
        title: 'Account',
        items: [
            {
                icon: '../../media/icons/privacy.png',
                title: 'Privacy',
                url: '/'
            },
            {
                icon: '../../media/icons/settings.png',
                title: 'Settings',
                url: '/'
            },
        ]
    },
];

export interface ISectionsItems {
    title: string,
    items: IDDItems[],
}

export interface IDDItems {
    icon: string,
    title: string,
    url: string,
}