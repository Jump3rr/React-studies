export const ITEMS: ISectionsItems[] = [
    {
        title: 'Platform',
        items: [
            {
                icon: '../../media/icons/house2.png',
                title: 'Home'
            },
            {
                icon: '../../media/icons/publications.png',
                title: 'Publications'
            },
            {
                icon: '../../media/icons/people.png',
                title: 'People'
            },
            {
                icon: '../../media/icons/entities2.png',
                title: 'Entities'
            },
            {
                icon: '../../media/icons/administration.png',
                title: 'Administration'
            },
        ]
    },
    {
        title: 'Workspaces',
        items: [
            {
                icon: '../../media/icons/house2.png',
                title: 'Client contract'
            },
            {
                icon: '../../media/icons/house2.png',
                title: 'Supplier contract'
            },
            {
                icon: '../../media/icons/entities2.png',
                title: 'Corporate'
            },
            {
                icon: '../../media/icons/publications.png',
                title: 'Group Norms'
            },
            {
                icon: '../../media/icons/house2.png',
                title: 'Real estate contracts'
            },
        ]
    },
    {
        title: 'Account',
        items: [
            {
                icon: '../../media/icons/privacy.png',
                title: 'Privacy'
            },
            {
                icon: '../../media/icons/settings.png',
                title: 'Settings'
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
}