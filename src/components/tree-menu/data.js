const data = [
    {
        id: "1",
        label: 'Home',
        path: '/home',
    },
    {
        id: "2",
        label: 'About Us',
        path: '/about',
    },
    {
        id: "3",
        label: 'Services',
        path: '/services',
        children: [
            {
                id: "4",
                label: 'Web Development',
                path: 'web',
            },
            {
                id: "5",
                label: 'Mobile App Development',
                path: 'mobile',
            },
        ],
    },
    {
        id: "6",
        label: 'Contact',
        path: '/contact',
        children: [
            {
                id: "7",
                label: 'Phone',
                path: 'phone',
            },
            {
                id: "8",
                label: 'Social Apps',
                path: 'social',
                children: [
                    {
                        id: "9",
                        label: 'FB',
                        path: 'fb',
                    },
                    {
                        id: "10",
                        label: 'Insta',
                        path: 'isnta',
                    },
                ],
            },
        ],
    }
];

export default data;