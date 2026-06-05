const portfolioData = {

    experience: [
        {
            id: "CivicPlus",
            company: "CivicPlus",
            role: "Software Engineer",
            badge: "CIVICPLUS — 2025",
            icon: "💼",
            bullets: [
                "Developed, maintained, and owned end-to-end features for Recreation Management and Passlight(financial dashboard) SaaS-based platform enabling local governments to manage recreational activities, facilities and analyze cost recovery and overall financial health",
                "Architected and integrated cross-functional systems — including authentication, payments, and document management — across a distributed microservices environment",
                "Designed and implemented a cost-efficient scheduling algorithm for facility scheduling, optimizing resource allocation and reducing operational overhead"
            ]
        },
        {
            id: "Sports Excitement",
            company: "Sports Excitement",
            role: "Software Engineer Intern",
            badge: "SPORTS EXCITEMENT — 2024",
            icon: "💼",
            bullets: [
                "Collaborated directly with the founder to design and architect a sports-based social platform from the ground up, translating early-stage vision into a functional prototype",
                "Built core matchmaking and discovery features enabling users to find and connect with others for recreational sports activities across a variety of sports",
                "Navigated a fast-paced startup environment, making key technical decisions around stack, architecture, and UX to deliver a working product under tight constraints"
            ]
        },
        {
            id: "Seattle University",
            company: "Seattle University",
            role: "Graduate Teaching Assistant and Information Technology Professional",
            badge: "SEATTLE UNIVERSITY: 2022 - 2024",
            icon: "💼",
            bullets: [
                "Assisted in teaching undergraduate courses in computer science, focusing on software development and data structures",
                "Provided technical support and guidance to students in lab sessions and project work",
                "Contributed to the development and maintenance of university IT systems and infrastructure"
            ]
        },
        {
            id: "Acute Informatics",
            company: "Acute Informatics",
            role: "Software Engineer Intern and Co-Op",
            badge: "ACUTE INFORMATICS: 2019 - 2022",
            icon: "💼",
            bullets: [
                "Architected and maintained a high-throughput Java API processing over 4.2M banking transactions daily, leveraging engineering patterns to eliminate single points of failure and achieve 99.99% uptime",
                "Engineered on-prem infrastructure for 18 bank tenants with PostgreSQL HA clusters and geo-separated disaster recovery, cutting recovery time from 4 hours to 22 minutes",
                "Re-engineered core banking API endpoints, improving p95 response time from 220ms to 80ms and lifting SLA compliance from 91% to 99.3% across 6 contracted banks"
            ]
        }
    ],

    education: [
        {
            id: "edu-seattle-u",
            institution: "Seattle University",
            degree: "Master of Science in Computer Science",
            badge: "SEATTLE UNIVERSITY — 2022–2024",
            icon: "🎓",
            bullets: [
                "Worked as a Graduate Teaching Assistant for multiple computer science courses, providing support and mentorship and gaining experience from University IT department as an Information Technology Professional",
                "Relevant coursework: Distributed Systems, Parallel Computing, Software Architecture and Refactoring, Computer graphics and 3D Game Development",
                "Honors: Dean's List 3 times"
            ]
        },
        {
            id: "edu-ganpat-u",
            institution: "Ganpat University",
            degree: "Bachelor of Science in Information Technology, Major: Infrastructure and Cloud Computing",
            badge: "GANPAT UNIVERSITY — 2018–2021",
            icon: "🎓",
            bullets: [
                "Collaborated with multiple professors to organize and host hackathons while simultaneously gaining hands-on industry experience as a student employee at a banking startup",
                "Relevant coursework: Data Structures and Algorithms, Database Management Systems, Computer Networks, Operating Systems, Cloud Computing",
                "Honors: Dean's List 6 times, Gold Medal for highest GPA in the department"
            ]
        },
    ],

    // Skills are split into 3 marquee rows.
    // Add a new skill object to any row — the JS duplicates it automatically.
    skills: {
        row1: [
            { name: "Python",     icon: "devicon-python-plain"      },
            { name: "JavaScript", icon: "devicon-javascript-plain"  },
            { name: "TypeScript", icon: "devicon-typescript-plain"  },
            { name: "Java",       icon: "devicon-java-plain"        },
            { name: "C++",        icon: "devicon-cplusplus-plain"   },
            { name: "HTML",       icon: "devicon-html5-plain"       },
            { name: "CSS",        icon: "devicon-css3-plain"        },
            { name: "React",      icon: "devicon-react-original"    },
            { name: "Node.js",    icon: "devicon-nodejs-plain"      },
            { name: "Express",    icon: "devicon-express-original"  }
        ],
        row2: [
            { name: "Flask",      icon: "devicon-flask-original"    },
            { name: "Pandas",     icon: "devicon-pandas-plain"      },
            { name: "TensorFlow", icon: "devicon-tensorflow-original"},
            { name: "Git",        icon: "devicon-git-plain"         },
            { name: "GitHub",     icon: "devicon-github-original"   },
            { name: "Docker",     icon: "devicon-docker-plain"      },
            { name: "MongoDB",    icon: "devicon-mongodb-plain"     },
            { name: "PostgreSQL", icon: "devicon-postgresql-plain"  },
            { name: "VS Code",    icon: "devicon-vscode-plain"      },
            { name: "Linux",      icon: "devicon-linux-plain"       }
        ],
        row3: [
            { name: "Docker",     icon: "devicon-docker-plain"      },
            { name: "React",      icon: "devicon-react-original"    },
            { name: "Python",     icon: "devicon-python-plain"      },
            { name: "Git",        icon: "devicon-git-plain"         },
            { name: "TypeScript", icon: "devicon-typescript-plain"  },
            { name: "MongoDB",    icon: "devicon-mongodb-plain"     },
            { name: "Node.js",    icon: "devicon-nodejs-plain"      },
            { name: "Linux",      icon: "devicon-linux-plain"       },
            { name: "TensorFlow", icon: "devicon-tensorflow-original"},
            { name: "PostgreSQL", icon: "devicon-postgresql-plain"  }
        ]
    },

    // 5 project sizes: xl → l → m → s → xs
    // Grid: [XL 2cols×2rows] [L 1col×2rows] then [M][S][XS] fill the third row.
    // Order in this array = order in the grid. Keep xl first, xs last.
    projects: [
        {
            size: "xl",
            title: "AI-Powered E-Commerce Intelligence Platform",
            image: "",
            description: "Built a full-stack e-commerce platform with an AI-powered personal assistant, enabling sellers to query sales performance and trends conversationally via phone in real time. Developed the backend with Node.js, Express, and MongoDB, integrating OpenAI's API for natural language processing. The frontend was built with React, providing a seamless user experience for managing products and interacting with the AI assistant.",
            tags: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
            github: "https://github.com/kapish-patel/Programming-at-SeattleU/tree/main/CPSC-5200%20Software%20Architecture%20and%20Design/Project",
            live: ""
        },
        {
            size: "l",
            title: "Dine-Easy: Restaurant Reservation System",
            description: "Built a full-stack restaurant reservation and online ordering platform that streamlines the dine-in experience for customers while optimizing table turnover and time management for restaurants.",
            tags: ["Angular", "Node.js", "TypeScript", "JavaScript", "MongoDB", "Docker", "Azure"],
            github: "https://github.com/kapish-patel/Dine-Easy",
            live: ""
        },
        {
            size: "m",
            title: "Sip-Snap: Social media app for sharing and discovering coffee shops",
            description: "Built a mobile app for discovering local coffee shops, empowering users to share authentic reviews and recommendations for drinks and menu items.",
            tags: ["Flutter", "Dart", "Firebase", "Google Maps API", "Cloud Functions", "OAuth", "CI/CD", "Unit Testing"],
            github: "https://github.com/kapish-patel/SipSnap",
            live: ""
        },
        {
            size: "s",
            title: "Local Brew: Coffee Shop 2D Game",
            description: "Building a 2D coffee shop simulation game where players manage and grow their own café, brewing and selling coffee in an immersive entrepreneurial experience.",
            tags: ["Java", "Game Design", "Design Patterns", "OOP", "JUnit"],
            github: "https://github.com/kapish-patel/LocalBrew",
            live: ""
        },
        {
            size: "xs",
            // Each entry in `projects` shows as a row: title + link(s)
            projects: [
                { title: "Game Of Life", github: "https://github.com/kapish-patel/Programming-at-SeattleU", live: "" },
                { title: "Health Activity Tracker",    github: "https://github.com/kapish-patel/Programming-at-SeattleU", live: "" },
                { title: "Money Exchange Bot",     github: "https://github.com/kapish-patel/Programming-at-SeattleU", live: "" }
            ]
        }
    ]
};
