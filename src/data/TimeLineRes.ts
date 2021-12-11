const Education = {
    categoryName: 'Education',
    iconName: 'FaGraduationCap',
    details: [
        {
            id: 2,
            title: 'University of Technology (HCMUT)',
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
            title: 'University of Information Technology (UIT)',
            fromDate: '',
            toDate: '',
            iconName: 'BiBuildingHouse',
            projects: [
                {
                    id: 1,
                    title: 'Computer Engineering',
                    fromDate: 'Sep. 2012',
                    toDate: 'May. 2017',
                    descriptions: [],
                    skills: []
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
                        'I started to use React to build most new web projects I\'ve initiated, and it\'s been an awesome journey. I also created native mobile apps for iOS and Android using React Native and I think I will never go back to Cordova.',
                    ],
                    skills: ['Javascript', 'React Native', 'Redux Saga', 'Redux Saga', 'Redux Saga', 'Redux Saga', 'Redux Saga']
                },
                {
                    id: 1,
                    title: 'AUTONOMOUS WEBSITE ',
                    fromDate: 'Jun. 2019',
                    toDate: 'Jan. 2021',
                    descriptions: [
                        'I started to use React to build most new web projects I\'ve initiated, and it\'s been an awesome journey. I also created native mobile apps for iOS and Android using React Native and I think I will never go back to Cordova.',
                    ],
                    skills: ['Javascript', 'Reactjs', 'Redux Thunk']
                },
                {
                    id: 3,
                    title: 'SMART DESK CONNECT',
                    fromDate: 'Mar. 2019',
                    toDate: 'Jun. 2019',
                    descriptions: [
                        'I started to use React to build most new web projects I\'ve initiated, and it\'s been an awesome journey. I also created native mobile apps for iOS and Android using React Native and I think I will never go back to Cordova.',
                    ],
                    skills: ['Javascript', 'React Native', 'Redux Saga']
                },
            ],
        },
        {
            id: 1,
            title: 'SAI GON TECHNOLOGY SOLUTIONS',
            fromDate: '',
            toDate: '',
            projects: [
                {
                    id: 1,
                    title: 'CHAT-HUB',
                    fromDate: 'April. 2018',
                    toDate: 'Oct. 2018',
                    descriptions: [
                        'Position: Mobile developer',
                        'Responsible for:',
                        '- Send/ receive message in real time with signalR.',
                        '- Implement offline mode for mobile.',
                        '- Fix the calling features'
                    ],
                    skills: ['Javascript', 'React Native', 'Firebase', 'Agora']
                },
                {
                    id: 3,
                    title: 'KALMS (Singapore)',
                    fromDate: 'Oct. 2018',
                    toDate: 'Dec. 2018',
                    descriptions: [
                        'Position: Mobile developer',
                        'Responsible for:',
                        '- Implement features as buying products, scanning QR Code, getting transaction histories.',
                        '- Maintain and refactor code.',
                        '- Build and upload Kalms to Apple Store and GG Play Store.'
                    ],
                    skills: [ 'React Native', 'Redux Thunk']
                },
                {
                    id: 4,
                    title: 'EVD (Sweden)',
                    fromDate: 'April. 2019',
                    toDate: 'May. 2019',
                    descriptions: [
                        'Position: Mobile developer.',
                        'Responsible for:',
                        '- Init project for coding.',
                        '- Implement local data for the app.',
                        '- Communicate with client in person for getting requirements and dealing with difficulties.',
                        '- Build and upload the app to Apple Store and Play Store.'
                    ],
                    skills: ['React Native', 'One Signal', 'Realm', 'Redux Saga']
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

export const TimeLineResponse = [Education, Company, OtherExperience]
