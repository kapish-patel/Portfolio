const portfolioData = {

    experience: [
        {
            id: "CivicPlus",
            company: "CivicPlus",
            role: "Software Engineer",
            badge: "CIVICPLUS — 2025",
            icon: "💼",
            bullets: [
                "Data analysis and visualization with Python, SQL, Tableau",
                "Cleaned and processed datasets to extract actionable insights",
                "Designed interactive Tableau dashboards for decision-making"
            ]
        },
        {
            id: "Sports Excitement",
            company: "Sports Excitement",
            role: "Software Engineer Intern",
            badge: "SPORTS EXCITEMENT — 2024",
            icon: "💼",
            bullets: [
                "Bullet point one",
                "Bullet point two",
                "Bullet point three"
            ]
        },
        {
            id: "Seattle University",
            company: "Seattle University",
            role: "Graduate Teaching Assistant and Information Technology Professional",
            badge: "SEATTLE UNIVERSITY: 2022 - 2024",
            icon: "💼",
            bullets: [
                "Bullet point one",
                "Bullet point two",
                "Bullet point three"
            ]
        },
        {
            id: "Acute Informatics",
            company: "Acute Informatics",
            role: "Software Engineer Intern and Co-Op",
            badge: "ACUTE INFORMATICS: 2019 - 2022",
            icon: "💼",
            bullets: [
                "Bullet point one",
                "Bullet point two",
                "Bullet point three"
            ]
        }
    ],

    education: [
        {
            id: "edu-uni",
            institution: "University",
            degree: "Bachelor of Engineering — Computer Science",
            badge: "UNIVERSITY NAME — 2022–2026",
            icon: "🎓",
            bullets: [
                "Specialized in AI & Data Science",
                "Relevant coursework: Data Structures, Algorithms, ML, DBMS",
                "Active member of coding and project clubs"
            ]
        },
        {
            id: "edu-school",
            institution: "High School",
            degree: "Higher Secondary Certificate",
            badge: "SCHOOL NAME — 2020–2022",
            icon: "🎓",
            bullets: [
                "Science stream with Mathematics, Physics, Chemistry",
                "Graduated with distinction",
                "Participated in science olympiads"
            ]
        }
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
            title: "Project Alpha",
            image: "",
            description: "A full-stack web application that solves a real-world problem end-to-end. Built with React on the frontend, Node.js and Express on the backend, and MongoDB for data persistence. Features real-time updates via WebSockets, JWT-based auth, and a fully responsive brutalist UI.",
            tags: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "JWT"],
            github: "https://github.com/",
            live: "https://yourproject.com"
        },
        {
            size: "l",
            title: "Project Beta",
            description: "A data pipeline and dashboard built to aggregate and visualise insights from multiple APIs. Python on the backend, Pandas for transformation, and a custom chart renderer on the frontend.",
            tags: ["Python", "Pandas", "Flask", "JavaScript"],
            github: "https://github.com/",
            live: ""
        },
        {
            size: "m",
            title: "Project Gamma",
            description: "CLI tool that automates repetitive dev tasks. Saves roughly 30 minutes per day.",
            tags: [],
            github: "https://github.com/",
            live: ""
        },
        {
            size: "s",
            title: "Project Delta",
            description: "",
            tags: ["TypeScript", "Node.js"],
            github: "https://github.com/",
            live: ""
        },
        {
            size: "xs",
            // Each entry in `projects` shows as a row: title + link(s)
            projects: [
                { title: "Project Epsilon", github: "https://github.com/", live: "" },
                { title: "Project Zeta",    github: "https://github.com/", live: "" },
                { title: "Project Eta",     github: "https://github.com/", live: "" }
            ]
        }
    ]
};
