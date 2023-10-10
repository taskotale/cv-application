import { v4 as uuid } from 'uuid';
import image from './static/img.jpg'

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
                name: 'Skills',
                list: [
                    'Problem-solving',
                    'Javascript',
                    'Python',
                    'HTML',
                    'CSS'
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
                    start: '2023-10',
                    end: '2023-10',
                    location: 'Harvard - Online',
                    description:`An introduction to computer science and programming, covering topics in web development, algorithms.
                    Learned essential computer science concepts and gained hands-on experience with programming languages such as C, Python, and web technologies like HTML, CSS, and JavaScript. Additionally, the course covered algorithms, data structures, and introduced me to the world of web development with practical projects using frameworks like Flask and SQL for database management.`,
                    key: uuid()
                },
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
                    position: 'operation',
                    start: '2022',
                    end: '2023',
                    company: 'perf',
                    responsibilities: 'asdujejbff',
                    key: uuid()
                },
                {
                    position: 'sales',
                    start: '2021',
                    end: '',
                    company: 'perf',
                    responsibilities: 'sellisng stuff',
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