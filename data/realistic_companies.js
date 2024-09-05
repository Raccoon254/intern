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
        services: ["Microsoft 365", "Azure", "Windows"],
        locations: [
            { name: "Redmond", address: "One Microsoft Way", city: "Redmond", state: "Washington", zip: "98052", country: "USA" },
            { name: "Silicon Valley", address: "1065 La Avenida St", city: "Mountain View", state: "California", zip: "94043", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop next-generation cloud services.", requirements: "BS in Computer Science, 3+ years experience in cloud technologies.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Azure AI services.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for Windows applications.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["Google Search", "Google Ads", "Google Cloud"],
        locations: [
            { name: "Mountain View", address: "1600 Amphitheatre Parkway", city: "Mountain View", state: "California", zip: "94043", country: "USA" },
            { name: "New York", address: "111 8th Avenue", city: "New York", state: "New York", zip: "10011", country: "USA" },
        ],
        jobPostings: [
            { title: "Machine Learning Engineer", description: "Develop ML models for Google Search.", requirements: "PhD in ML or related field, experience with TensorFlow.", type: "JOB", location: "ONSITE" },
            { title: "Cloud Solutions Architect", description: "Design and implement cloud solutions for enterprise clients.", requirements: "BS in Computer Science, 5+ years in cloud architecture.", type: "JOB", location: "HYBRID" },
            { title: "Android Developer Intern", description: "Contribute to the development of Android features.", requirements: "Pursuing CS degree, experience with Java and Kotlin.", type: "INTERNSHIP", location: "ONSITE" }
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
        services: ["Amazon Prime", "AWS", "Kindle"],
        locations: [
            { name: "Seattle", address: "410 Terry Ave N", city: "Seattle", state: "Washington", zip: "98109", country: "USA" },
            { name: "New York", address: "7 W 34th St", city: "New York", state: "New York", zip: "10001", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Development Engineer", description: "Build scalable web applications for Amazon.com.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" },
            { title: "Cloud Solutions Architect", description: "Design and implement cloud solutions for enterprise clients.", requirements: "BS in Computer Science, 5+ years in cloud architecture.", type: "JOB", location: "HYBRID" },
            { title: "Software Development Engineer Intern", description: "Work on Amazon's core software projects.", requirements: "Pursuing CS degree, experience with Java or C++.", type: "INTERNSHIP", location: "ONSITE" }
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
        services: ["Facebook", "Instagram", "WhatsApp"],
        locations: [
            { name: "Menlo Park", address: "1 Hacker Way", city: "Menlo Park", state: "California", zip: "94025", country: "USA" },
            { name: "New York", address: "770 Broadway", city: "New York", state: "New York", zip: "10003", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for the Facebook app.", requirements: "BS in Computer Science, 3+ years experience in mobile development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Instagram Stories.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for WhatsApp Web.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["iPhone", "Mac", "Apple Watch", "Apple Music"],
        locations: [
            { name: "Cupertino", address: "One Apple Park Way", city: "Cupertino", state: "California", zip: "95014", country: "USA" },
            { name: "Austin", address: "12545 Riata Vista Cir", city: "Austin", state: "Texas", zip: "78727", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for macOS.", requirements: "BS in Computer Science, 3+ years experience in software development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Apple Music.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for Apple Watch.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["Model S", "Powerwall", "Solar Roof"],
        locations: [
            { name: "Palo Alto", address: "3500 Deer Creek Rd", city: "Palo Alto", state: "California", zip: "94304", country: "USA" },
            { name: "Fremont", address: "45500 Fremont Blvd", city: "Fremont", state: "California", zip: "94538", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for Tesla vehicles.", requirements: "BS in Computer Science, 3+ years experience in software development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Powerwall energy storage.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for Tesla Autopilot.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["Netflix Originals", "Streaming", "DVD Rentals"],
        locations: [
            { name: "Los Gatos", address: "100 Winchester Cir", city: "Los Gatos", state: "California", zip: "95032", country: "USA" },
            { name: "Los Angeles", address: "5808 W Sunset Blvd", city: "Los Angeles", state: "California", zip: "90028", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for the Netflix streaming service.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Netflix Originals.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for the Netflix mobile app.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["Twitter", "Twitter Ads", "Twitter Spaces"],
        locations: [
            { name: "San Francisco", address: "1355 Market St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
            { name: "New York", address: "249 W 17th St", city: "New York", state: "New York", zip: "10011", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for the Twitter platform.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Twitter Ads.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for Twitter Spaces.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["Uber Rides", "Uber Eats", "Uber Freight"],
        locations: [
            { name: "San Francisco", address: "1455 Market St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
            { name: "New York", address: "3100 47th Ave", city: "Long Island City", state: "New York", zip: "11101", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for the Uber app.", requirements: "BS in Computer Science, 3+ years experience in mobile development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Uber Eats.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for Uber Freight.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
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
        services: ["Airbnb Homes", "Airbnb Experiences", "Airbnb Luxe"],
        locations: [
            { name: "San Francisco", address: "888 Brannan St", city: "San Francisco", state: "California", zip: "94103", country: "USA" },
            { name: "New York", address: "129 W 29th St", city: "New York", state: "New York", zip: "10001", country: "USA" },
        ],
        jobPostings: [
            { title: "Software Engineer", description: "Develop new features for the Airbnb platform.", requirements: "BS in Computer Science, 3+ years experience in web development.", type: "JOB", location: "ONSITE" },
            { title: "Product Manager", description: "Lead product development for Airbnb Experiences.", requirements: "MBA preferred, 5+ years in tech product management.", type: "JOB", location: "HYBRID" },
            { title: "UX Designer Intern", description: "Design user interfaces for Airbnb Luxe.", requirements: "Enrolled in a design program, proficiency in design tools.", type: "INTERNSHIP", location: "REMOTE" }
        ]
    },
];

module.exports = { companies };