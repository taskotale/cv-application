import { v4 as uuid } from 'uuid';


const addHighlight = (sectionName = 'Section', sectionList =[''], key = null) => {
    const createList = [...sectionList]
    return {
        name : sectionName,
        list : createList,
        key : key
    }
}


const person = {
    info: {
        name : 'Tahir Mujic',
        profession: 'Software Developer',
        phone: '+19176052887',
        email: 'taskotale@gmail.com',
        web: 'mujic.me',
        address: 'Carlstadt, NJ',
        image: './src/static/img.jpg',
        description: 'Experienced and detail-oriented professional transitioning into software development. Strong problem-solving skills, adept at multitasking. Enthusiastic team player committed to seamless operations and impactful contributions in software development.',
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
            },
            addHighlight('hey', ['asd','asd'],uuid())
        ],
    timelines : [
        {
            name: 'Education',
            list: [
                {
                    name : 'CS50',
                    date : '2023',
                    location: 'Harvard - Online',
                    description:`An introduction to computer science and programming, covering topics in web development, algorithms.
                    Learned essential computer science concepts and gained hands-on experience with programming languages such as C, Python, and web technologies like HTML, CSS, and JavaScript. Additionally, the course covered algorithms, data structures, and introduced me to the world of web development with practical projects using frameworks like Flask and SQL for database management.`
                }
            ]
        },
        {
            name: 'Experience',
            list: [
                {
                    position: 'operation',
                    when: '2022',
                    company: 'perf',
                    responsibilities: 'asdujejbff'
                },
                {
                    position: 'sales',
                    when: '2021',
                    company: 'perf',
                    responsibilities: 'sellisng stuff'
                }
            ]
    }]
    
}

export default person