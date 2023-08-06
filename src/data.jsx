
const getNewTimelineSection = (name ='NAME', date = 'Year', address = 'Location', description = 'description') => {
    return {
        name: name,
        year: date,
        location: address,
        description: description 
    }
}

const addHighlight = (sectionName = 'Section', sectionList =['']) => {
    const createList = [...sectionList]
    return {
        name : sectionName,
        list : createList
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
        img: './src/static/img.jpg'
    },
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos non repellendus eligendi quam tenetur provident.',
    highlights: [
            {
                name: 'Skills',
                list: [
                    'Problem-solving',
                    'Javascript',
                    'Python',
                    'HTML',
                    'CSS'
                ]
            },
            {
                name: 'Language',
                list: [
                    'English',
                    'Italian',
                    'Montenegrin'
                ]
            },
            addHighlight('hey', ['asd','asdd'])
        ],
    timelines : [
        {
            section: 'Education',
            list: [
                {
                    name : 'CS50',
                    year : '2023',
                    location: 'Harvard - Online',
                    description:`An introduction to computer science and programming, covering topics in web development, algorithms.
                    Learned essential computer science concepts and gained hands-on experience with programming languages such as C, Python, and web technologies like HTML, CSS, and JavaScript. Additionally, the course covered algorithms, data structures, and introduced me to the world of web development with practical projects using frameworks like Flask and SQL for database management.`
                },
                getNewTimelineSection()
            ]
        },
        {
            section: 'Experience',
            list: [
                getNewTimelineSection('a', 'z', 1), 
                getNewTimelineSection('b','y',2), 
                getNewTimelineSection()
            ]
    }]
    
}

export default person