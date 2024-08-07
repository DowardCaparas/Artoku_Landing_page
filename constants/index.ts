import { message, wallet, pie, question } from "@/public";
import { mentor1, mentor2, mentor3, mentor4 } from "@/public/images";

export const navLinks = [
    {url: '#benefits', label: 'Benefits'},
    {url: '#advantages', label: 'Advantages'},
    {url: '#mentors', label: 'Mentors'},
    {url: '#resources', label: 'Resources'},
    {url: '#customers', label: 'For Customers'},

];

export const footerLinks = [
    {
        title: 'PRODUCT',
        links: [
            {title: 'Overview', url: '/'}
        ],
    },

    {
        title: 'CUSTOMERS',
        links: [
            {title: 'Customers Stories', url: '/'}
        ],
    },

    {
        title: 'RESOURCES',
        links: [
            {title: 'Blog', url: '/'},
            {title: 'FAQ', url: '/'},
            {title: 'Trust Center', url: '/'},
        ],
    },

    {
        title: 'COMPANY',
        links: [
            {title: 'About Us', url: '/'},
            {title: 'Careers', url: '/'},
            {title: 'News', url: '/'},
            {title: 'Contact Us', url: '/'},
        ],
    },
];

export const counts = [
    {title: 'Assets Under Management', population: '$19B'},
    {title: 'Assets Under Advisement', population: '$23B'},
    {title: 'Seasoned Advisors', population: '37+'},
    {title: 'Employees', population: '64+'},
];

export const mentorBenefits = [
    {label: '0.1%*-0.5% management fees on managed investing accounts'},
    {label: '8% interest on your Cash account'},
    {label: 'Live webinars every month'},
    {label: 'Exclusive WhatsApp Group'},
    {label: 'Regular meetings every month'},
    {label: 'Dedicated team of advisors'},
];

export const advantages = [
    {label: '1:1 private consultation with manager.', 
     iconURL: message,
     paragraph: 'We have lots of professionals in the field who are ready to help you develop. Make sure your wealth investment continues to develop and grow.'
    },

    {label: 'Manage your finances with the pocket feature, making it suit your needs.', 
     iconURL: wallet
    },
    
    {label: 'Monitor all investments and analyze with AI.', 
     iconURL: pie
    },

    {label: 'Automations that support your customer service.', 
     iconURL: question
    },
];

export const mentors = [
    {
        name: 'Caparas Doward B.',
        position: 'CMO Manager',
        location: 'Naic Cavite',
        sessions: '50 sessions',
        reviews: '19 reviews',
        experience: '10 years of experience',
        attendance: '100% Attendance',
        image: mentor1.src,
    },

    {
        name: 'Edisson Moraes Jr.',
        position: 'Financial Planning',
        location: 'Unico Jaba Beka',
        sessions: '25 sessions',
        reviews: '18 reviews',
        experience: '5 years of experience',
        attendance: '98% Attendance',
        image: mentor2.src,
    },

    {
        name: 'Zlatan Michael G.',
        position: 'Financial Planning',
        location: 'ID-tech',
        sessions: '78 sessions',
        reviews: '65 reviews',
        experience: '8 years of experience',
        attendance: '90% Attendance',
        image: mentor3.src,
    },

    {
        name: 'Marcos Paulo',
        position: 'CMO Manager',
        location: 'Bala-bala',
        sessions: '50 sessions',
        reviews: '19 reviews',
        experience: '17 years of experience',
        attendance: '100% Attendance',
        image: mentor4.src,
    },
];
