const Education = {
    categoryName: 'Education',
    iconName: 'FaGraduationCap',
    details: [
        {
            id: 2,
            title: 'UNIVERSITY OF TECHNOLOGY (HCMUT)',
            fromDate: '',
            toDate: '',
            iconName: 'BiBuildingHouse',
            projects: [
                {
                    id: 1,
                    title: 'Master of Computer Sciences',
                    fromDate: 'Sep. 2020',
                    toDate: 'Now',
                    descriptions: [],
                    skills: []
                },
            ],
        },
        {
            id: 2,
            title: 'UNIVERSITY OF INFORMATION TECHNOLOGY (UIT)',
            fromDate: '',
            toDate: '',
            iconName: 'BiBuildingHouse',
            projects: [
                {
                    id: 1,
                    title: 'Complete a bachelor\'s degree of Computer Engineering',
                    fromDate: 'Sep. 2012',
                    toDate: 'May. 2017',
                    descriptions: [
                        'Team size: 2.',
                        'Thesis\'s name: Researching to integrate algorithm into Raspberry.',
                        'Description: Using Haar feature to detect face and HoG features to detect human. Then, both will be integrated into Raspberry Pi 3.',

                    ],
                    skills: ['Jessies Raspbian (Linux)', 'OpenCV', 'C/C++', 'Raspberry Pi 3']
                },
                {
                    id: 1,
                    title: 'Eureka Competition',
                    fromDate: 'Jun. 2015',
                    toDate: 'Nov. 2015',
                    descriptions: [
                        'Team size: 2.',
                        'Description: Our project is Galvanic Skin Response. The prototype is based heavily on the Truth Meter circuit. Then it will detect the person’s happy or normal status. Use KIT KML46Z of Freescale.',
                    ],
                    skills: ['KIT KML46Z', 'C/C++']
                },
                {
                    id: 1,
                    title: 'Project FPT: Bootloader in KML46Z Freescale.',
                    fromDate: 'Jun. 2015',
                    toDate: 'Sep. 2015',
                    descriptions: [
                        'Team size: 4.',
                        'Load another application from PC via UART to RAM finally jumps to the application to run it. Language: C/C++.',
                    ],
                    skills: ['KIT KML46Z', 'C/C++']
                },
            ],
        }
    ],
}

const Company = {
    categoryName: 'Company',
    iconName: 'BiBuildingHouse',
    details: [
        {
            id: 1,
            title: 'AUTONOMOUS COMPANY',
            fromDate: '',
            toDate: '',
            projects: [
                {
                    id: 1,
                    title: 'HYBRID & SMART DESK CONNECT',
                    fromDate: 'Jan. 2021',
                    toDate: 'Now',
                    descriptions: [
                        'Description: Mobile app connects to a lot of smart devices as Smart Desk, Smart Frame, Heating & Cooling, Smart Light, ... . Then, connect already, we can control them via mobile app',
                        'Position: Mobile Developer'
                    ],
                    skills: ['Javascript', 'React Native', 'Redux Saga', 'MQTT']
                },
                {
                    id: 1,
                    title: 'AUTONOMOUS WEBSITE ',
                    fromDate: 'Jun. 2019',
                    toDate: 'Jan. 2021',
                    descriptions: [
                        'Description: Developing and improving features for the website of company. This website provides all pieces of furniture are built around this way of thinking - simple, sleek lines with a great deal of technological innovation in their design and functionality, all to provide people with some of the most advanced and ergonomic desks and chairs on the market.',
                        'Position: Front End Developer (ReactJS)'
                    ],
                    skills: ['Javascript', 'Reactjs', 'Redux Thunk']
                },
                {
                    id: 3,
                    title: 'SMART DESK CONNECT',
                    fromDate: 'Mar. 2019',
                    toDate: 'Jun. 2019',
                    descriptions: [
                        'Description: Using mobile app to control desks. Firstly, mobile app will be connected to desks via Bluetooth. After setup done, we can use mobile app to control desks. In additional, app has other features as scheduling, reporting and notification.',
                        'Position: Mobile Developer'
                    ],
                    skills: ['Javascript', 'React Native', 'Redux Saga', 'MQTT']
                },
            ],
        },
        {
            id: 1,
            title: 'SAI GON TECHNOLOGY SOLUTIONS (STS)',
            fromDate: '',
            toDate: '',
            projects: [
                {
                    id: 4,
                    title: 'EVD (Sweden)',
                    fromDate: 'April. 2019',
                    toDate: 'May. 2019',
                    descriptions: [
                        'Description: Deatures of buying vouchers and reports, printing reports via wifi, Bluetooth connection',
                        'Position: Mobile developer.',
                        'Responsibility:',
                        '- Init project for coding.',
                        '- Implement local data for the app.',
                        '- Communicate with client in person for getting requirements and dealing with difficulties.',
                        '- Build and upload the app to Apple Store and Play Store.'
                    ],
                    skills: ['React Native', 'One Signal', 'Realm', 'Redux Saga']
                },
                {
                    id: 3,
                    title: 'KALMS (Singapore)',
                    fromDate: 'Sep. 2018',
                    toDate: 'Nov. 2018',
                    descriptions: [
                        'Description: Mobile app which will be sold on vending machines and orders of users',
                        'Position: Mobile developer',
                        'Responsibility:',
                        '- Implement features as buying products, scanning QR Code, getting transaction histories.',
                        '- Maintain and refactor code.',
                        '- Build and upload Kalms to Apple Store and GG Play Store.'
                    ],
                    skills: [ 'React Native', 'Redux Thunk']
                },
                {
                    id: 1,
                    title: 'CHAT-HUB',
                    fromDate: 'April. 2018',
                    toDate: 'Oct. 2018',
                    descriptions: [
                        'Description: This is a internal project in STS including a lot of features: calling personal/group; chat; sending videos, images',
                        'Position: Mobile developer',
                        'Responsibility:',
                        '- Send/ receive message in real time with signalR.',
                        '- Implement offline mode for mobile.',
                        '- Fix the calling features'
                    ],
                    skills: ['Javascript', 'React Native', 'Firebase', 'Agora']
                },
            ],
        },
    ]
}

const OtherExperience = {
    categoryName: 'Other Experience',
    iconName: 'DiGitBranch',
    details: [
        {
            id: 1,
            title: 'Management Software: Trello, Jira',
            fromDate: '',
            toDate: '',
            projects: [],
        },
        {
            id: 2,
            title: 'IDEs: Webstorm, Visual Studio',
            fromDate: '',
            toDate: '',
            projects: [],
        },
        {
            id: 3,
            title: 'Version-controlling Software: Github, Bibucket, Gitlab',
            fromDate: '',
            toDate: '',
            projects: [],
        }
    ],
}

export const TimeLineResponse = [ Company, Education, OtherExperience]
