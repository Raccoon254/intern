const companies = [
    {
        name: "Microsoft",
        logo: "https://logo.clearbit.com/microsoft.com",
        banner: "https://img.freepik.com/free-photo/microsoft-logo-building_1268-14361.jpg",
        website: "https://www.microsoft.com",
        employees: "181,000",
        email: "info@microsoft.com",
        address: "One Microsoft Way, Redmond, WA 98052, USA",
        contactInfo: "+1 (800) 642-7676",
        bio: "Microsoft Corporation is an American multinational technology corporation that produces computer software, consumer electronics, and related services.",
        departments: [
            { name: "Cloud & AI", description: "Developing and managing Microsoft's cloud computing platforms and AI technologies." },
            { name: "Experiences & Devices", description: "Creating seamless experiences and innovative devices for our customers." },
            { name: "Gaming", description: "Driving innovation in gaming across Xbox and PC platforms." },
            { name: "Business Development", description: "Identifying and developing strategic partnerships and investment opportunities." },
            { name: "Marketing", description: "Promoting Microsoft's products and services to customers worldwide." }
        ],
        services: [
            { name: "Microsoft Azure", description: "Cloud computing services for building, testing, deploying, and managing applications.", icon: "fas fa-cloud" },
            { name: "Microsoft 365", description: "Integrated productivity apps and cloud services for businesses.", icon: "fas fa-envelope" },
            { name: "Xbox Game Pass", description: "Subscription service for access to a library of games on Xbox consoles and PC.", icon: "fas fa-gamepad" }
        ],
        locations: [
            { name: "Redmond", address: "One Microsoft Way", city: "Redmond", state: "Washington", zip: "98052", country: "USA" },
            { name: "Silicon Valley", address: "1065 La Avenida St", city: "Mountain View", state: "California", zip: "94043", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop next-generation cloud services.", requirements: "BS in Computer Science, 3+ years experience in cloud technologies.", type: "JOB", location: "ONSITE",
                skills: [
                    { name: "C#", icon: "devicon-csharp-plain", description: "Proficient in C# programming language." },
                    { name: "Azure", icon: "devicon-azure-plain", description: "Experience with Microsoft Azure cloud services." },
                    { name: "Docker", icon: "devicon-docker-plain", description: "Familiarity with Docker containerization." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Azure AI services.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID",
                skills: [
                    { name: "AI", icon: "fas fa-robot", description: "Knowledge of artificial intelligence technologies." },
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Agile", icon: "fas fa-infinity", description: "Familiarity with Agile development methodologies." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Windows applications.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Figma", icon: "fas fa-vector-square", description: "Proficiency in Figma design tool." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like InVision." }
                ]
            }
        ]
    },
    {
        name: "Google",
        logo: "https://logo.clearbit.com/google.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.google.com",
        employees: "156,500",
        email: "press@google.com",
        address: "1600 Amphitheatre Parkway, Mountain View, CA 94043, USA",
        contactInfo: "+1 (650) 253-0000",
        bio: "Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, and artificial intelligence.",
        departments: [
            { name: "Search", description: "Improving and expanding Google's core search technology." },
            { name: "Ads", description: "Developing advertising solutions for businesses of all sizes." },
            { name: "Cloud", description: "Building and maintaining Google's cloud infrastructure and services." },
            { name: "Android", description: "Developing and enhancing the Android mobile operating system." },
            { name: "YouTube", description: "Managing and innovating the world's largest video sharing platform." }
        ],
        services: [
            { name: "Google Search", description: "The world's most popular search engine for finding information online.", icon: "fas fa-search" },
            { name: "Google Ads", description: "Online advertising platform for businesses to reach customers across the web.", icon: "fas fa-bullhorn" },
            { name: "Google Cloud", description: "Cloud computing services for building, testing, and deploying applications.", icon: "fas fa-cloud" },
            { name: "Android", description: "Mobile operating system for smartphones, tablets, and other devices.", icon: "fab fa-android" }
        ],
        locations: [
            { name: "Mountain View", address: "1600 Amphitheatre Parkway", city: "Mountain View", state: "California", zip: "94043", country: "USA" },
            { name: "New York", address: "111 8th Avenue", city: "New York", state: "New York", zip: "10011", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Machine Learning Engineer", description: "Develop ML models for Google Search.", requirements: "PhD in ML or related field, experience with TensorFlow.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Machine Learning", icon: "fas fa-robot", description: "Expertise in machine learning algorithms and techniques." },
                    { name: "TensorFlow", icon: "devicon-tensorflow-original", description: "Proficiency in TensorFlow framework." },
                    { name: "Python", icon: "devicon-python-plain", description: "Strong programming skills in Python." }
                ]
            },
            { 
                title: "Cloud Solutions Architect", description: "Design and implement cloud solutions for enterprise clients.", requirements: "BS in Computer Science, 5+ years in cloud architecture.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Cloud Computing", icon: "fas fa-cloud", description: "Knowledge of cloud computing technologies and services." },
                    { name: "Architecture", icon: "fas fa-project-diagram", description: "Experience in designing scalable cloud solutions." },
                    { name: "Customer Engagement", icon: "fas fa-users", description: "Ability to engage with customers to understand their needs." }
                ]
            },
            { 
                title: "Android Developer Intern", description: "Contribute to the development of Android features.", requirements: "Pursuing CS degree, experience with Java and Kotlin.", type: "INTERNSHIP", location: "ONSITE",
                skills: [
                    { name: "Android Development", icon: "fab fa-android", description: "Experience in building Android applications." },
                    { name: "Java", icon: "devicon-java-plain", description: "Proficiency in Java programming language." },
                    { name: "Kotlin", icon: "devicon-kotlin-plain", description: "Familiarity with Kotlin programming language." }
                ]
            }
        ]
    },
    {
        name: "Amazon",
        logo: "https://logo.clearbit.com/amazon.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.amazon.com",
        employees: "1,298,000",
        email: "info@amazon.com",
        address: "410 Terry Ave N, Seattle, WA 98109, USA",
        contactInfo: "+1 (888) 280-4331",
        bio: "Amazon.com, Inc. is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        departments: [
            { name: "Retail", description: "Managing Amazon's online retail platform." },
            { name: "AWS", description: "Developing and maintaining Amazon Web Services cloud infrastructure." },
            { name: "Devices", description: "Creating and selling Amazon's line of consumer electronics." },
            { name: "Studios", description: "Producing original content for Amazon Prime Video." },
            { name: "Logistics", description: "Handling Amazon's global shipping and delivery operations." }
        ],
        services: [
            { name: "Amazon.com", description: "Online marketplace for buying and selling a wide variety of products.", icon: "fas fa-shopping-cart" },
            { name: "Amazon Web Services", description: "Cloud computing services for businesses and developers.", icon: "fas fa-cloud" },
            { name: "Amazon Prime Video", description: "Streaming service for movies, TV shows, and original content.", icon: "fas fa-video" },
            { name: "Kindle", description: "E-reader and tablet devices for reading books and media.", icon: "fas fa-book-reader" }
        ],
        locations: [
            { name: "Seattle", address: "410 Terry Ave N", city: "Seattle", state: "Washington", zip: "98109", country: "USA" },
            { name: "New York", address: "7 W 34th St", city: "New York", state: "New York", zip: "10001", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Development Engineer", description: "Build scalable web applications for Amazon.com.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Cloud Solutions Architect", description: "Design and implement cloud solutions for enterprise clients.", requirements: "BS in Computer Science, 5+ years in cloud architecture.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Cloud Computing", icon: "fas fa-cloud", description: "Knowledge of cloud computing technologies and services." },
                    { name: "Architecture", icon: "fas fa-project-diagram", description: "Experience in designing scalable cloud solutions." },
                    { name: "Customer Engagement", icon: "fas fa-users", description: "Ability to engage with customers to understand their needs." }
                ]
            },
            { 
                title: "Software Development Engineer Intern", description: "Work on Amazon's core software projects.", requirements: "Pursuing CS degree, experience with Java or C++.", type: "INTERNSHIP", location: "ONSITE",
                skills: [
                    { name: "Software Development", icon: "fas fa-code", description: "Experience in software development projects." },
                    { name: "Java", icon: "devicon-java-plain", description: "Proficiency in Java programming language." },
                    { name: "C++", icon: "devicon-cplusplus-plain", description: "Familiarity with C++ programming language." }
                ]
            }
        ]
    },
    {
        name: "Facebook",
        logo: "https://logo.clearbit.com/facebook.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.facebook.com",
        employees: "58,604",
        email: "hello@facebook.com",
        address: "1 Hacker Way, Menlo Park, CA 94025, USA",
        contactInfo: "+1 (650) 543-4800",
        bio: "Facebook, Inc. is an American technology conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his fellow roommates and students at Harvard College, who were Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.",
        departments: [
            { name: "Meta Platforms", description: "Developing the metaverse and related technologies." },
            { name: "Facebook App", description: "Maintaining and enhancing the core Facebook social media platform." },
            { name: "Instagram", description: "Managing the Instagram photo and video sharing platform." },
            { name: "WhatsApp", description: "Overseeing the WhatsApp messaging and calling service." },
            { name: "Oculus", description: "Creating virtual reality hardware and software products." }
        ],
        services: [
            { name: "Facebook", description: "Social media platform for connecting with friends and family.", icon: "fab fa-facebook" },
            { name: "Instagram", description: "Photo and video sharing app for creative expression.", icon: "fab fa-instagram" },
            { name: "WhatsApp", description: "Messaging and calling app for private communication.", icon: "fab fa-whatsapp" },
            { name: "Oculus", description: "Virtual reality headsets for immersive gaming and experiences.", icon: "fab fa-oculus" }
        ],
        locations: [
            { name: "Menlo Park", address: "1 Hacker Way", city: "Menlo Park", state: "California", zip: "94025", country: "USA" },
            { name: "New York", address: "770 Broadway", city: "New York", state: "New York", zip: "10003", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for the Facebook app.", requirements: "BS in Computer Science, 3+ years experience in mobile development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Mobile Development", icon: "fas fa-mobile-alt", description: "Experience in building mobile applications." },
                    { name: "iOS", icon: "devicon-apple-original", description: "Proficiency in iOS app development." },
                    { name: "Android", icon: "devicon-android-plain", description: "Familiarity with Android app development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Instagram Stories.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Social Media", icon: "fas fa-users", description: "Understanding of social media platforms and trends." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for WhatsApp Web.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Web Design", icon: "fas fa-globe", description: "Experience in designing web interfaces." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Apple",
        logo: "https://logo.clearbit.com/apple.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.apple.com",
        employees: "147,000",
        email: "info@apple.com",
        address: "One Apple Park Way, Cupertino, CA 95014, USA",
        contactInfo: "+1 (800) 692-7753",
        bio: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.",
        departments: [
            { name: "Hardware Engineering", description: "Designing and developing Apple's hardware products." },
            { name: "Software Engineering", description: "Creating and maintaining software for Apple's devices." },
            { name: "Services", description: "Delivering digital services like Apple Music and iCloud." },
            { name: "Design", description: "Crafting the user experience and industrial design of Apple products." },
            { name: "Operations", description: "Managing Apple's global supply chain and manufacturing." }
        ],
        services: [
            { name: "iPhone", description: "Apple's flagship smartphone with iOS operating system.", icon: "fas fa-mobile-alt" },
            { name: "MacBook", description: "Apple's line of laptop computers for personal and professional use.", icon: "fas fa-laptop" },
            { name: "Apple Music", description: "Music streaming service with millions of songs and playlists.", icon: "fas fa-music" },
            { name: "iCloud", description: "Cloud storage and backup service for Apple devices.", icon: "fas fa-cloud" }
        ],
        locations: [
            { name: "Cupertino", address: "One Apple Park Way", city: "Cupertino", state: "California", zip: "95014", country: "USA" },
            { name: "Austin", address: "12545 Riata Vista Cir", city: "Austin", state: "Texas", zip: "78727", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for macOS.", requirements: "BS in Computer Science, 3+ years experience in software development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "macOS", icon: "fab fa-apple", description: "Experience in macOS software development." },
                    { name: "Swift", icon: "devicon-swift-plain", description: "Proficiency in Swift programming language." },
                    { name: "Xcode", icon: "devicon-xcode-plain", description: "Familiarity with Xcode development environment." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Apple Music.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Music Industry", icon: "fas fa-music", description: "Understanding of the music industry and streaming services." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Apple Watch.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Sketch." },
                    { name: "Wearable Tech", icon: "fas fa-watch", description: "Interest in wearable technology and smart devices." }
                ]
            }
        ]
    },
    {
        name: "Tesla",
        logo: "https://logo.clearbit.com/tesla.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.tesla.com",
        employees: "70,757",
        email: "help@tesla.inc",
        address: "3500 Deer Creek Rd, Palo Alto, CA 94304, USA",
        contactInfo: "+1 (650) 681-5000",
        bio: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid scale, solar panels and solar roof tiles, as well as other related products and services.",
        departments: [
            { name: "Automotive", description: "Developing and manufacturing electric vehicles." },
            { name: "Energy", description: "Creating sustainable energy solutions for homes and businesses." },
            { name: "Autopilot", description: "Building autonomous driving technology for Tesla vehicles." },
            { name: "Solar", description: "Designing and installing solar energy systems for customers." },
            { name: "Software", description: "Developing software for Tesla's vehicles and energy products." }
        ],
        services: [
            { name: "Tesla Vehicles", description: "Electric cars with cutting-edge technology and performance.", icon: "fas fa-car" },
            { name: "Powerwall", description: "Home battery for storing solar energy and powering your home.", icon: "fas fa-battery-full" },
            { name: "Solar Roof", description: "Roof tiles with integrated solar cells for sustainable energy generation.", icon: "fas fa-solar-panel" },
            { name: "Full Self-Driving", description: "Autonomous driving package for Tesla vehicles.", icon: "fas fa-robot" }
        ],
        locations: [
            { name: "Palo Alto", address: "3500 Deer Creek Rd", city: "Palo Alto", state: "California", zip: "94304", country: "USA" },
            { name: "Fremont", address: "45500 Fremont Blvd", city: "Fremont", state: "California", zip: "94538", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for Tesla vehicles.", requirements: "BS in Computer Science, 3+ years experience in software development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Automotive", icon: "fas fa-car", description: "Interest in automotive technology and electric vehicles." },
                    { name: "Embedded Systems", icon: "fas fa-microchip", description: "Experience with embedded systems and firmware development." },
                    { name: "C++", icon: "devicon-cplusplus-plain", description: "Proficiency in C++ programming language." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Powerwall energy storage.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Energy Storage", icon: "fas fa-battery-full", description: "Understanding of battery technology and energy storage systems." },
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Renewable Energy", icon: "fas fa-leaf", description: "Knowledge of renewable energy sources and sustainability." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Tesla Autopilot.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Automotive", icon: "fas fa-car", description: "Interest in automotive technology and autonomous driving." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Sketch." }
                ]
            }
        ]
    },
    {
        name: "Netflix",
        logo: "https://logo.clearbit.com/netflix.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.netflix.com",
        employees: "9,400",
        email: "hello@netflix.com",
        address: "100 Winchester Cir, Los Gatos, CA 95032, USA",
        contactInfo: "+1 (408) 540-3700",
        bio: "Netflix, Inc. is an American over-the-top content platform and production company headquartered in Los Gatos, California. Netflix was founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California.",
        departments: [
            { name: "Content", description: "Acquiring and producing original TV shows and movies." },
            { name: "Engineering", description: "Developing the technology behind the Netflix streaming service." },
            { name: "Marketing", description: "Promoting Netflix's content to subscribers worldwide." },
            { name: "Product", description: "Designing and enhancing the Netflix user experience." },
            { name: "Finance", description: "Managing the financial operations of Netflix's business." }
        ],
        services: [
            { name: "Netflix Streaming", description: "Subscription service for streaming TV shows and movies.", icon: "fas fa-tv" },
            { name: "Netflix Originals", description: "Exclusive content produced by Netflix for subscribers.", icon: "fas fa-film" },
            { name: "Netflix Kids", description: "Family-friendly shows and movies for younger viewers.", icon: "fas fa-child" },
            { name: "Netflix DVD", description: "DVD rental service for physical media enthusiasts.", icon: "fas fa-dvd" }
        ],
        locations: [
            { name: "Los Gatos", address: "100 Winchester Cir", city: "Los Gatos", state: "California", zip: "95032", country: "USA" },
            { name: "Los Angeles", address: "5808 W Sunset Blvd", city: "Los Angeles", state: "California", zip: "90028", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for the Netflix streaming service.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                    ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Netflix Originals.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Entertainment Industry", icon: "fas fa-film", description: "Understanding of the entertainment industry and content creation." },
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for the Netflix mobile app.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Mobile Design", icon: "fas fa-mobile-alt", description: "Experience in designing mobile interfaces." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Twitter",
        logo: "https://logo.clearbit.com/twitter.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.twitter.com",
        employees: "5,500",
        email: "info@twitter.com",
        address: "1355 Market St, San Francisco, CA 94103, USA",
        contactInfo: "+1 (415) 222-9670",
        bio: "Twitter is an American microblogging and social networking service on which users post and interact with messages known as 'tweets'.",
        departments: [
            { name: "Engineering", description: "Developing and maintaining the Twitter platform." },
            { name: "Design", description: "Crafting the user experience and visual design of Twitter." },
            { name: "Marketing", description: "Promoting Twitter's products and services to users." },
            { name: "Product", description: "Designing and enhancing the Twitter user experience." },
            { name: "Finance", description: "Managing the financial operations of Twitter's business." }
        ],
        services: [
            { name: "Twitter", description: "Social media platform for sharing news and updates with followers.", icon: "fab fa-twitter" },
            { name: "Twitter Spaces", description: "Live audio chat rooms for hosting conversations on Twitter.", icon: "fas fa-headphones" },
            { name: "Twitter Ads", description: "Advertising platform for promoting products and services on Twitter.", icon: "fas fa-bullhorn" },
            { name: "Twitter Blue", description: "Subscription service for premium Twitter features and content.", icon: "fas fa-coins" },
        ],
        locations: [
            { name: "San Francisco", address: "1355 Market St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
            { name: "New York", address: "249 W 17th St", city: "New York", state: "New York", zip: "10011", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for the Twitter platform.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Twitter Ads.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Social Media", icon: "fas fa-users", description: "Understanding of social media platforms and trends." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Twitter Spaces.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Audio Design", icon: "fas fa-headphones", description: "Experience in designing audio interfaces." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Uber",
        logo: "https://logo.clearbit.com/uber.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.uber.com",
        employees: "26,900",
        email: "hello@ubber.inc",
        address: "1455 Market St, San Francisco, CA 94103, USA",
        contactInfo: "+1 (415) 612-8582",
        bio: "Uber Technologies, Inc., commonly known as Uber, is an American technology company. Its services include ride-hailing, food delivery, package delivery, couriers, and a freight transportation.",
        departments: [
            { name: "Rides", description: "Managing Uber's ride-hailing services worldwide." },
            { name: "Eats", description: "Overseeing Uber's food delivery platform." },
            { name: "Freight", description: "Providing logistics and freight transportation services." },
            { name: "ATG", description: "Developing autonomous driving technology for Uber vehicles." },
            { name: "Finance", description: "Managing the financial operations of Uber's business." }
        ],
        services: [
            { name: "Uber Rides", description: "On-demand ride-hailing service for passengers.", icon: "fas fa-car" },
            { name: "Uber Eats", description: "Food delivery service for ordering from local restaurants.", icon: "fas fa-utensils" },
            { name: "Uber Freight", description: "Logistics platform for shipping and transportation of goods.", icon: "fas fa-truck" },
            { name: "Uber ATG", description: "Autonomous driving technology for Uber's self-driving vehicles.", icon: "fas fa-robot" }
        ],
        locations: [
            { name: "San Francisco", address: "1455 Market St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
            { name: "New York", address: "3100 47th Ave", city: "Long Island City", state: "New York", zip: "11101", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for the Uber app.", requirements: "BS in Computer Science, 3+ years experience in mobile development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Mobile Development", icon: "fas fa-mobile-alt", description: "Experience in building mobile applications." },
                    { name: "iOS", icon: "devicon-apple-original", description: "Proficiency in iOS app development." },
                    { name: "Android", icon: "devicon-android-plain", description: "Familiarity with Android app development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Uber Eats.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Food Delivery", icon: "fas fa-utensils", description: "Understanding of food delivery platforms and services." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Uber Freight.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Logistics", icon: "fas fa-truck", description: "Interest in logistics and transportation services." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Airbnb",
        logo: "https://logo.clearbit.com/airbnb.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.airbnb.com",
        employees: "25,000",
        email: "info@airbnb.com",
        address: "888 Brannan St, San Francisco, CA 94103, USA",
        contactInfo: "+1 (415) 800-5959",
        bio: "Airbnb, Inc. is an American vacation rental online marketplace company based in San Francisco, California, United States. Airbnb offers arrangement for lodging, primarily homestays, or tourism experiences.",
        departments: [
            { name: "Homes", description: "Managing Airbnb's vacation rental marketplace." },
            { name: "Experiences", description: "Offering unique travel experiences to Airbnb users." },
            { name: "Luxury", description: "Providing high-end accommodations and services." },
            { name: "Transport", description: "Facilitating transportation options for Airbnb guests." },
            { name: "Finance", description: "Managing the financial operations of Airbnb's business." }
        ],
        services: [
            { name: "Airbnb Homes", description: "Vacation rental platform for booking homes and apartments.", icon: "fas fa-home" },
            { name: "Airbnb Experiences", description: "Travel experiences and activities hosted by locals.", icon: "fas fa-map-marked-alt" },
            { name: "Airbnb Luxe", description: "Luxury accommodations and concierge services for travelers.", icon: "fas fa-gem" },
            { name: "Airbnb Transport", description: "Transportation options for getting around during your stay.", icon: "fas fa-car" }
        ],
        locations: [
            { name: "San Francisco", address: "888 Brannan St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
            { name: "New York", address: "129 W 29th St", city: "New York", state: "New York", zip: "10001", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for the Airbnb platform.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Airbnb Experiences.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Travel Industry", icon: "fas fa-map-marked-alt", description: "Understanding of the travel industry and experiences." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                    ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Airbnb Luxe.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Luxury Design", icon: "fas fa-gem", description: "Experience in designing luxury experiences." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Coca-Cola",
        logo: "https://logo.clearbit.com/coca-cola.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.coca-cola.com",
        employees: "86,200",
        email: "hello@coke.com",
        address: "1 Coca-Cola Plaza, Atlanta, GA 30313, USA",
        contactInfo: "+1 (800) 438-2653",
        bio: "The Coca-Cola Company is an American multinational corporation and manufacturer, retailer, and marketer of nonalcoholic beverage concentrates and syrups.",
        departments: [
            { name: "Beverages", description: "Producing and distributing Coca-Cola's beverage products." },
            { name: "Marketing", description: "Promoting Coca-Cola's brands and campaigns worldwide." },
            { name: "Sales", description: "Managing sales and distribution of Coca-Cola products." },
            { name: "Supply Chain", description: "Handling the logistics and supply chain operations." },
            { name: "Finance", description: "Managing the financial operations of Coca-Cola's business." }
        ],
        services: [
            { name: "Coca-Cola", description: "Classic cola beverage loved by millions around the world.", icon: "fas fa-cocktail" },
            { name: "Sprite", description: "Lemon-lime soda with a crisp, refreshing taste.", icon: "fas fa-lemon" },
            { name: "Fanta", description: "Fruit-flavored soda with bold and vibrant flavors.", icon: "fas fa-apple-alt" },
            { name: "Dasani", description: "Purified water with a clean and refreshing taste.", icon: "fas fa-tint" }
        ],
        locations: [
            { name: "Atlanta", address: "1 Coca-Cola Plaza", city: "Atlanta", state: "Georgia", zip: "30313", country: "USA" },
            { name: "New York", address: "711 5th Ave", city: "New York", state: "New York", zip: "10022", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Marketing Manager", description: "Lead marketing campaigns for Coca-Cola beverages.", requirements: "BS in Marketing, 5+ years in consumer goods marketing.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Marketing Strategy", icon: "fas fa-bullhorn", description: "Experience in developing marketing strategies." },
                    { name: "Brand Management", icon: "fas fa-tags", description: "Managing and promoting brand identity and products." },
                    { name: "Campaign Planning", icon: "fas fa-calendar-alt", description: "Planning and executing marketing campaigns." }
                ]
            },
            { 
                title: "Supply Chain Analyst", description: "Analyze and optimize Coca-Cola's supply chain operations.", requirements: "BS in Supply Chain Management, 3+ years in logistics analysis.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Supply Chain", icon: "fas fa-truck", description: "Understanding of supply chain logistics and operations." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Analyzing and interpreting supply chain data." },
                    { name: "Process Improvement", icon: "fas fa-cogs", description: "Identifying and implementing process improvements." }
                ]
            },
            { 
                title: "Finance Intern", description: "Assist with financial analysis and reporting for Coca-Cola.", requirements: "Enrolled in a finance program, proficiency in Excel.", type: "INTERNSHIP", location: "ONSITE",
                skills: [
                    { name: "Financial Analysis", icon: "fas fa-chart-bar", description: "Analyzing financial data and trends." },
                    { name: "Excel", icon: "fas fa-file-excel", description: "Proficiency in Excel for financial modeling." },
                    { name: "Reporting", icon: "fas fa-file-alt", description: "Preparing financial reports and presentations." }
                ]
            }
        ]
    },
    {
        name: "NVidia",
        logo: "https://logo.clearbit.com/nvidia.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.nvidia.com",
        employees: "18,975",
        email: "hello@nvidia.com",
        address: "2788 San Tomas Expy, Santa Clara, CA 95051, USA",
        contactInfo: "+1 (408) 486-2000",
        bio: "Nvidia Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California. It designs graphics processing units for the gaming and professional markets, as well as system on a chip units for the mobile computing and automotive market.",
        departments: [
            { name: "Graphics", description: "Developing GPUs for gaming and professional applications." },
            { name: "AI", description: "Creating AI solutions and hardware for various industries." },
            { name: "Data Centers", description: "Providing hardware for data center and cloud computing." },
            { name: "Automotive", description: "Developing technology for autonomous vehicles and cars." },
            { name: "Finance", description: "Managing the financial operations of Nvidia's business." }
        ],
        services: [
            { name: "GeForce", description: "Graphics cards for gaming and high-performance computing.", icon: "fas fa-gamepad" },
            { name: "Quadro", description: "Professional graphics cards for design and visualization.", icon: "fas fa-paint-brush" },
            { name: "Tesla", description: "Data center GPUs for AI and high-performance computing.", icon: "fas fa-server" },
            { name: "Drive", description: "AI computing platforms for autonomous vehicles and cars.", icon: "fas fa-car" }
        ],
        locations: [
            { name: "Santa Clara", address: "2788 San Tomas Expy", city: "Santa Clara", state: "California", zip: "95051", country: "USA" },
            { name: "Austin", address: "500 W 2nd St", city: "Austin", state: "Texas", zip: "78701", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for Nvidia's graphics software.", requirements: "BS in Computer Science, 3+ years experience in software development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Graphics Programming", icon: "fas fa-paint-brush", description: "Experience in graphics programming and rendering." },
                    { name: "CUDA", icon: "fas fa-code", description: "Proficiency in CUDA parallel computing platform." },
                    { name: "OpenGL", icon: "devicon-opengl", description: "Familiarity with OpenGL graphics library." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Nvidia AI solutions.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Artificial Intelligence", icon: "fas fa-robot", description: "Understanding of AI technologies and applications." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Nvidia Drive platform.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Automotive", icon: "fas fa-car", description: "Interest in automotive technology and autonomous driving." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Walmart",
        logo: "https://logo.clearbit.com/walmart.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.walmart.com",
        employees: "2.3 million",
        email: "info@walmart.com",
        address: "702 SW 8th St, Bentonville, AR 72712, USA",
        contactInfo: "+1 (800) 925-6278",
        bio: "Walmart Inc. is an American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores.",
        departments: [
            { name: "Retail", description: "Managing Walmart's retail operations and stores." },
            { name: "E-commerce", description: "Overseeing Walmart's online shopping platform." },
            { name: "Supply Chain", description: "Handling logistics and supply chain operations." },
            { name: "Technology", description: "Developing technology solutions for Walmart's business." },
            { name: "Finance", description: "Managing the financial operations of Walmart's business." }
        ],
        services: [
            { name: "Walmart Stores", description: "Physical retail locations for shopping and groceries.", icon: "fas fa-store" },
            { name: "Walmart.com", description: "Online shopping platform for ordering products and groceries.", icon: "fas fa-shopping-cart" },
            { name: "Walmart Pickup", description: "Curbside pickup service for online orders at Walmart stores.", icon: "fas fa-car-side" },
            { name: "Walmart Delivery", description: "Home delivery service for groceries and products from Walmart.", icon: "fas fa-truck" }
        ],
        locations: [
            { name: "Bentonville", address: "702 SW 8th St", city: "Bentonville", state: "Arkansas", zip: "72712", country: "USA" },
            { name: "San Francisco", address: "1800 Harrison St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for Walmart's e-commerce platform.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Walmart Pickup service.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Retail Operations", icon: "fas fa-store", description: "Understanding of retail operations and logistics." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Walmart.com.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "E-commerce", icon: "fas fa-shopping-cart", description: "Experience in designing e-commerce platforms." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Ali Baba",
        logo: "https://logo.clearbit.com/alibaba.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.alibaba.com",
        employees: "252,084",
        email: "info@alibaba.com",
        address: "969 West Wen Yi Road, Hangzhou, Zhejiang, China",
        contactInfo: "+86 571 8502 2088",
        bio: "Alibaba Group Holding Limited, also known as Alibaba Group and Alibaba.com, is a Chinese multinational technology company specializing in e-commerce, retail, Internet, and technology.",
        departments: [
            { name: "E-commerce", description: "Managing Alibaba's online shopping platforms." },
            { name: "Cloud Computing", description: "Providing cloud services and solutions for businesses." },
            { name: "Finance", description: "Managing the financial operations of Alibaba's business." },
            { name: "Logistics", description: "Handling the logistics and supply chain operations." },
            { name: "Technology", description: "Developing technology solutions for Alibaba's business." }
        ],
        services: [
            { name: "Alibaba.com", description: "Global online marketplace for wholesale trade.", icon: "fas fa-globe" },
            { name: "Taobao", description: "China's largest online shopping website.", icon: "fas fa-shopping-cart" },
            { name: "AliExpress", description: "Global online retail service for consumers.", icon: "fas fa-shopping-bag" },
            { name: "Alibaba Cloud", description: "Cloud computing services for businesses and developers.", icon: "fas fa-cloud" }
        ],
        locations: [
            { name: "Hangzhou", address: "969 West Wen Yi Road", city: "Hangzhou", state: "Zhejiang", country: "China" },
            { name: "Shanghai", address: "969 West Wen Yi Road", city: "Shanghai", state: "Shanghai", country: "China" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for Alibaba's e-commerce platforms.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Alibaba Cloud services.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Cloud Computing", icon: "fas fa-cloud", description: "Understanding of cloud services and solutions." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Taobao online shopping.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "E-commerce", icon: "fas fa-shopping-cart", description: "Experience in designing e-commerce platforms." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Walt Disney",
        logo: "https://logo.clearbit.com/disney.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.disney.com",
        employees: "203,000",
        email: "hello@walt.com",
        address: "500 S Buena Vista St, Burbank, CA 91521, USA",
        contactInfo: "+1 (818) 560-1000",
        bio: "The Walt Disney Company, commonly known as Disney, is an American diversified multinational mass media and entertainment conglomerate headquartered at the Walt Disney Studios complex in Burbank, California.",
        departments: [
            { name: "Media Networks", description: "Managing Disney's cable and broadcast networks." },
            { name: "Studio Entertainment", description: "Producing and distributing films and TV shows." },
            { name: "Parks and Resorts", description: "Operating Disney's theme parks and resorts worldwide." },
            { name: "Consumer Products", description: "Developing and licensing Disney merchandise." },
            { name: "Finance", description: "Managing the financial operations of Disney's business." }
        ],
        services: [
            { name: "Disney+", description: "Subscription streaming service for Disney content.", icon: "fas fa-tv" },
            { name: "Disney Studios", description: "Film production and distribution studio for Disney movies.", icon: "fas fa-film" },
            { name: "Disney Parks", description: "Theme parks and resorts for Disney entertainment.", icon: "fas fa-castle" },
            { name: "Disney Store", description: "Retail stores for Disney merchandise and products.", icon: "fas fa-store" }
        ],
        locations: [
            { name: "Burbank", address: "500 S Buena Vista St", city: "Burbank", state: "California", zip: "91521", country: "USA" },
            { name: "Orlando", address: "1180 Seven Seas Dr", city: "Lake Buena Vista", state: "Florida", zip: "32830", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for Disney+ streaming service.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Disney Studios films.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Entertainment Industry", icon: "fas fa-film", description: "Understanding of the entertainment industry and content creation." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Disney Parks mobile app.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Mobile Design", icon: "fas fa-mobile-alt", description: "Experience in designing mobile interfaces." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    },
    {
        name: "Total Energies",
        logo: "https://logo.clearbit.com/total.com",
        banner: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd",
        website: "https://www.total.com",
        employees: "107,776",
        email: "info@total.com",
        address: "2 Place Jean Millier, La Défense, Courbevoie, France",
        contactInfo: "+33 1 47 44 45 46",
        bio: "TotalEnergies SE is a French multinational integrated oil and gas company founded in 1924 and one of the seven 'supermajor' oil companies.",
        departments: [
            { name: "Exploration & Production", description: "Exploring and extracting oil and gas resources." },
            { name: "Refining & Chemicals", description: "Refining petroleum products and producing chemicals." },
            { name: "Renewables & Power", description: "Developing renewable energy and power projects." },
            { name: "Marketing & Services", description: "Selling petroleum products and services to consumers." },
            { name: "Finance", description: "Managing the financial operations of TotalEnergies' business." }
        ],
        services: [
            { name: "Total Oil", description: "Petroleum products for fueling vehicles and machinery.", icon: "fas fa-gas-pump" },
            { name: "Total Gas", description: "Natural gas for heating and power generation.", icon: "fas fa-fire" },
            { name: "Total Renewables", description: "Renewable energy sources like solar and wind power.", icon: "fas fa-sun" },
            { name: "Total Chemicals", description: "Chemical products for various industrial applications.", icon: "fas fa-flask" }
        ],
        locations: [
            { name: "La Défense", address: "2 Place Jean Millier", city: "La Défense", state: "Courbevoie", country: "France" },
            { name: "Houston", address: "1201 Louisiana St", city: "Houston", state: "Texas", zip: "77002", country: "USA" },
        ],
        jobPostings: [
            { 
                title: "Software Engineer", description: "Develop new features for TotalEnergies' digital platforms.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" ,
                skills: [
                    { name: "Web Development", icon: "fas fa-globe", description: "Experience in building web applications." },
                    { name: "JavaScript", icon: "devicon-javascript-plain", description: "Proficiency in JavaScript programming language." },
                    { name: "React", icon: "devicon-react-original", description: "Familiarity with React library for UI development." }
                ]
            },
            { 
                title: "Product Manager", description: "Lead product development for Total Renewables projects.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" ,
                skills: [
                    { name: "Product Management", icon: "fas fa-cogs", description: "Experience in tech product management." },
                    { name: "Renewable Energy", icon: "fas fa-sun", description: "Understanding of renewable energy technologies and projects." },
                    { name: "Data Analysis", icon: "fas fa-chart-line", description: "Ability to analyze user data and metrics." }
                ]
            },
            { 
                title: "UX Designer Intern", description: "Design user interfaces for Total Oil mobile app.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE",
                skills: [
                    { name: "UI/UX", icon: "fas fa-paint-brush", description: "Understanding of user interface and user experience design." },
                    { name: "Energy Industry", icon: "fas fa-fire", description: "Experience in designing energy-related interfaces." },
                    { name: "Prototyping", icon: "fas fa-magic", description: "Experience with prototyping tools like Figma." }
                ]
            }
        ]
    }
];

module.exports = { companies };