import { v4 as uuid } from 'uuid';
import image from '../static/img.jpg'

const person = {
    info: {
        name : 'Tahir Mujic',
        profession: 'Software Developer',
        phone: '+19176052887',
        email: 'taskotale@gmail.com',
        web: 'mujic.me',
        address: 'Carlstadt, NJ',
        description: 'Experienced and detail-oriented professional transitioning into software development. Strong problem-solving skills, adept at multitasking. Enthusiastic team player committed to seamless operations and impactful contributions in software development.',
        image: image,
    },
    highlights: [
            {
                name: 'Links',
                list: [
                    'linkedin.com/in/tahirmujic',
                    'github.com/taskotale'
                ],
                key: uuid()
            },
            {
                name: 'Latest Projects',
                list:[
                    'github.com/taskotale/cs50project'
                ],
                key: uuid()
            },
            {
                name: 'Skills',
                list: [
                    'Problem-solving',
                    'Javascript',
                    'Python',
                    'HTML',
                    'CSS',
                    'C',
                    'SQLite',
                    'React',
                    'Flask'
                ],
                key: uuid()
            },
            {
                name: 'Language',
                list: [
                    'English',
                    'Italian',
                    'Montenegrin'
                ],
                key: uuid()
            }
        ],
    timelines : [
        {
            name: 'Education',
            list: [
                {
                    name : 'CS50',
                    start: '2023-03',
                    end: '2023-07',
                    location: 'Harvard University, Cambridge Massachusetts - Online',
                    description:`An introduction to computer science and programming,covering topics in web development, algorithms.
                    Learned essential computer science concepts and gained hands-on experience with programming languages such as C,Python, and web technologies like HTML, CSS, and JavaScript.Additionally, the course covered algorithms, data structures, and introduced me to the world of web development with practical projects using frameworks like Flask and SQL for database management.`,
                    key: uuid()
                },
                {
                    name: 'The Odin Project',
                    start: '2022-08',
                    end: '2023-08',
                    location: 'Online',
                    description: `Comprehensive curriculum on front-end and back-end web development.
                    Gained in-depth knowledge of JavaScript and React, covering topics such as DOM manipulation, asynchronous programming,state management, and component-based development. Iacquired practical experience through building various web projects, honing my skills in front-end and full-stack development and becoming proficient in creating dynamic and interactive web applications.`,
                    key: uuid()
                },
                {
                    name: 'Faculty of Economics',
                    start: '2007-09',
                    end:'',
                    location: 'Podgorica, Montenegro, Europe',
                    description: `Specialized in business and entrepreneurship.`,
                    key: uuid()
                }
            ],
            template: {
                    name : '' ,
                    start : '',
                    end: '',
                    location : '',
                    description: '',
                    key: ''
            },
            key:uuid()
        },
        {
            name: 'Experience',
            list: [
                {
                    position: 'Operation Manager',
                    start: '2022-01',
                    end: '2022-07',
                    company: 'Perfect Moving',
                    responsibilities: `• Successfully managed and orchestrated the organization and efficient movement of more than 30 vehicles and 100 personnel within the moving industry. 
                        • Utilized ad hoc problem-solving skills to ensure smooth operations during high-demand periods and busy days.
                        • Developing and implementing strategies to optimize operational efficiency and productivity.
                    `,
                    key: uuid()
                },
                {
                    position: 'Sales Manager',
                    start: '2021-07',
                    end: '2022-01',
                    company: 'Perfect Moving',
                    responsibilities: `• Formulate and execute targeted sales strategies to drive customer acquisition and meet sales targets.
                        • Develop and implement training programs for sales team to enhance their product knowledge and improve sales techniques.`,
                    key: uuid()
                },
                {
                    position: 'Sales Representative',
                    start: '2021-07',
                    end: '2022-01',
                    company: 'Perfect Moving',
                    responsibilities: `• Developed and executed strategic sales plans, contributing to one-third of overall sales.
                        • Utilized data analysis to identify potential customers and increase sales revenue.`,
                    key: uuid()
                }
            ],
            template: {
                position: '',
                start: '',
                end:'',
                company: '',
                responsibilities: '',
                key:''
            },
            key:uuid()
    }],
    colorScheme : {
        main: 'white',
        alternative: '#474545',
        accent: '#FDD71B'
    }
    
}

export default person