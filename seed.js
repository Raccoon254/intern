require('dotenv').config();
const { PrismaClient, UserRole, ApplicationStatus, JobPostingType, JobLocation, JobStatus } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const NUM_USERS = 50;
const NUM_ORGANIZATIONS = 5;
const NUM_DEPARTMENTS_PER_ORG = 3;
const NUM_SERVICES_PER_ORG = 3;
const NUM_LOCATIONS_PER_ORG = 2;
const NUM_JOB_POSTINGS = 20;
const NUM_STUDENTS = 10;

const REALISTIC_COMPANIES = [
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
        departments: ["Cloud & AI", "Experiences & Devices", "Gaming"],
        services: ["Microsoft 365", "Azure", "Windows"],
        locations: [
            { name: "Redmond", address: "One Microsoft Way", city: "Redmond", state: "Washington", zip: "98052", country: "USA" },
            { name: "Silicon Valley", address: "1065 La Avenida St", city: "Mountain View", state: "California", zip: "94043", country: "USA" },
        ],
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
        departments: ["Search", "Ads", "Cloud"],
        services: ["Google Search", "Google Ads", "Google Cloud"],
        locations: [
            { name: "Mountain View", address: "1600 Amphitheatre Parkway", city: "Mountain View", state: "California", zip: "94043", country: "USA" },
            { name: "New York", address: "111 8th Avenue", city: "New York", state: "New York", zip: "10011", country: "USA" },
        ],
    },
    {
        name: "Apple",
        logo: "https://logo.clearbit.com/apple.com",
        banner: "https://images.unsplash.com/photo-1516245834210-c4c142787335",
        website: "https://www.apple.com",
        employees: "137,000",
        email: "media.help@apple.com",
        address: "One Apple Park Way, Cupertino, CA 95014, USA",
        contactInfo: "+1 (408) 996-1010",
        bio: "Apple Inc. is an American multinational technology company that specializes in consumer electronics, software and online services.",
        departments: ["Hardware Engineering", "Software Engineering", "Machine Learning and AI"],
        services: ["iPhone", "Mac", "iCloud"],
        locations: [
            { name: "Cupertino", address: "One Apple Park Way", city: "Cupertino", state: "California", zip: "95014", country: "USA" },
            { name: "Austin", address: "12545 Riata Vista Circle", city: "Austin", state: "Texas", zip: "78727", country: "USA" },
        ],
    },
    {
        name: "Amazon",
        logo: "https://logo.clearbit.com/amazon.com",
        banner: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2",
        website: "https://www.amazon.com",
        employees: "1,608,000",
        email: "press@amazon.com",
        address: "410 Terry Ave. North, Seattle, WA 98109, USA",
        contactInfo: "+1 (206) 266-1000",
        bio: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        departments: ["Retail", "AWS", "Devices"],
        services: ["Amazon.com", "Amazon Web Services", "Alexa"],
        locations: [
            { name: "Seattle", address: "410 Terry Ave. North", city: "Seattle", state: "Washington", zip: "98109", country: "USA" },
            { name: "Arlington", address: "1400 S Eads St", city: "Arlington", state: "Virginia", zip: "22202", country: "USA" },
        ],
    },
    {
        name: "Facebook",
        logo: "https://logo.clearbit.com/facebook.com",
        banner: "https://images.unsplash.com/photo-1622570940050-c79cbc1468a7",
        website: "https://www.facebook.com",
        employees: "71,469",
        email: "press@fb.com",
        address: "1 Hacker Way, Menlo Park, CA 94025, USA",
        contactInfo: "+1 (650) 543-4800",
        bio: "Facebook, Inc. is an American social media conglomerate corporation based in Menlo Park, California.",
        departments: ["Engineering", "Product", "Data & Analytics"],
        services: ["Facebook", "Instagram", "WhatsApp"],
        locations: [
            { name: "Menlo Park", address: "1 Hacker Way", city: "Menlo Park", state: "California", zip: "94025", country: "USA" },
            { name: "New York", address: "770 Broadway", city: "New York", state: "New York", zip: "10003", country: "USA" },
        ],
    },
    {
        name: "Netflix",
        logo: "https://logo.clearbit.com/netflix.com",
        banner: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85",
        website: "https://www.netflix.com",
        employees: "12,135",
        email: "pr@netflix.com",
        address: "100 Winchester Circle, Los Gatos, CA 95032, USA",
        contactInfo: "+1 (408) 540-3700",
        bio: "Netflix, Inc. is an American content platform and production company headquartered in Los Gatos, California.",
        departments: ["Content", "Engineering", "Marketing"],
        services: ["Streaming", "Content Production", "DVD Rental"],
        locations: [
            { name: "Los Gatos", address: "100 Winchester Circle", city: "Los Gatos", state: "California", zip: "95032", country: "USA" },
            { name: "Los Angeles", address: "5808 Sunset Blvd", city: "Los Angeles", state: "California", zip: "90028", country: "USA" },
        ],
    },
    {
        name: "Tesla",
        logo: "https://logo.clearbit.com/tesla.com",
        banner: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
        website: "https://www.tesla.com",
        employees: "99,290",
        email: "press@tesla.com",
        address: "3500 Deer Creek Road, Palo Alto, CA 94304, USA",
        contactInfo: "+1 (888) 518-3752",
        bio: "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.",
        departments: ["Vehicle Engineering", "Energy", "Autopilot"],
        services: ["Electric Vehicles", "Solar Panels", "Energy Storage"],
        locations: [
            { name: "Palo Alto", address: "3500 Deer Creek Road", city: "Palo Alto", state: "California", zip: "94304", country: "USA" },
            { name: "Fremont", address: "45500 Fremont Blvd", city: "Fremont", state: "California", zip: "94538", country: "USA" },
        ],
    },
    {
        name: "IBM",
        logo: "https://logo.clearbit.com/ibm.com",
        banner: "https://images.unsplash.com/photo-1569017388730-020b5f80a004",
        website: "https://www.ibm.com",
        employees: "350,000",
        email: "press@us.ibm.com",
        address: "1 New Orchard Road, Armonk, NY 10504, USA",
        contactInfo: "+1 (914) 499-1900",
        bio: "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York.",
        departments: ["Cloud & Cognitive Software", "Global Technology Services", "Systems"],
        services: ["IBM Cloud", "Watson", "Blockchain"],
        locations: [
            { name: "Armonk", address: "1 New Orchard Road", city: "Armonk", state: "New York", zip: "10504", country: "USA" },
            { name: "Austin", address: "11501 Burnet Road", city: "Austin", state: "Texas", zip: "78758", country: "USA" },
        ],
    },
    {
        name: "Intel",
        logo: "https://logo.clearbit.com/intel.com",
        banner: "https://images.unsplash.com/photo-1591405351990-4726e331f141",
        website: "https://www.intel.com",
        employees: "110,600",
        email: "newsroom@intel.com",
        address: "2200 Mission College Blvd, Santa Clara, CA 95054, USA",
        contactInfo: "+1 (408) 765-8080",
        bio: "Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California.",
        departments: ["Client Computing", "Data Center", "Internet of Things"],
        services: ["Processors", "Memory & Storage", "FPGAs"],
        locations: [
            { name: "Santa Clara", address: "2200 Mission College Blvd", city: "Santa Clara", state: "California", zip: "95054", country: "USA" },
            { name: "Hillsboro", address: "2111 NE 25th Ave", city: "Hillsboro", state: "Oregon", zip: "97124", country: "USA" },
        ],
    },
    {
        name: "NVIDIA",
        logo: "https://logo.clearbit.com/nvidia.com",
        banner: "https://images.unsplash.com/photo-1611282712338-63a58e8d43a3",
        website: "https://www.nvidia.com",
        employees: "18,975",
        email: "nvidiapr@nvidia.com",
        address: "2788 San Tomas Expressway, Santa Clara, CA 95051, USA",
        contactInfo: "+1 (408) 486-2000",
        bio: "NVIDIA Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California.",
        departments: ["GPU Technology", "AI & Deep Learning", "Self-Driving Cars"],
        services: ["GeForce", "CUDA", "SHIELD"],
        locations: [
            { name: "Santa Clara", address: "2788 San Tomas Expressway", city: "Santa Clara", state: "California", zip: "95051", country: "USA" },
            { name: "Westford", address: "2 Technology Park Dr", city: "Westford", state: "Massachusetts", zip: "01886", country: "USA" },
        ],
    },
];

async function main() {
    // Create users
    const users = await Promise.all(
        Array.from({ length: NUM_USERS }).map(async () => {
            const role = faker.helpers.arrayElement(Object.values(UserRole));
            const password = 'password';
            const user = await prisma.user.create({
                data: {
                    email: faker.internet.email(),
                    password: await bcrypt.hash(password, 10),
                    role: role,
                    resetToken: faker.string.uuid(),
                    resetTokenExpiry: faker.date.future(),
                },
            });

            if (role === UserRole.STUDENT) {
                await prisma.student.create({
                    data: {
                        userId: user.id,
                        name: faker.person.fullName(),
                        phone: faker.phone.number(),
                        course: faker.lorem.word(),
                        university: faker.company.name(),
                        photo: faker.image.avatar(),
                        bio: faker.lorem.paragraph(),
                    },
                });
            }

            return user;
        })
    );

    // Fetch students to ensure we can reference them later
    const students = await prisma.student.findMany();

    // Create organizations with departments, services, and locations
    const organizations = await Promise.all(
        REALISTIC_COMPANIES.map(async (company) => {
            return prisma.organization.create({
                data: {
                    name: company.name,
                    logo: company.logo,
                    banner: company.banner,
                    website: company.website,
                    employees: company.employees,
                    email: company.email,
                    address: company.address,
                    contactInfo: company.contactInfo,
                    bio: company.bio,
                    departments: {
                        create: company.departments.map((dept) => ({
                            name: dept,
                            description: faker.lorem.paragraph(),
                        })),
                    },
                    services: {
                        create: company.services.map((service) => ({
                            name: service,
                            icon: faker.image.avatar(),
                            description: faker.lorem.paragraph(),
                        })),
                    },
                    locations: {
                        create: company.locations.map((loc) => ({
                            name: loc.name,
                            address: loc.address,
                            city: loc.city,
                            state: loc.state,
                            zip: loc.zip,
                            country: loc.country,
                            contactInfo: faker.phone.number(),
                            description: faker.lorem.paragraph(),
                        })),
                    },
                },
            });
        })
    );
    // Fetch departments to link job postings
    const departments = await prisma.department.findMany();

    // Create job postings
    const jobPostings = await Promise.all(
        Array.from({ length: NUM_JOB_POSTINGS }).map(async () => {
            const department = faker.helpers.arrayElement(departments);
            return prisma.jobPosting.create({
                data: {
                    title: faker.person.jobTitle(),
                    description: faker.lorem.paragraph(),
                    requirements: faker.lorem.paragraph(),
                    type: faker.helpers.arrayElement(Object.values(JobPostingType)),
                    location: faker.helpers.arrayElement(Object.values(JobLocation)),
                    status: faker.helpers.arrayElement(Object.values(JobStatus)),
                    applicationDeadline: faker.date.future(),
                    departmentId: department.id,
                    skills: {
                        create: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }).map(() => ({
                            name: faker.hacker.verb(),
                            description: faker.lorem.sentence(),
                            icon: faker.image.avatar(),
                        })),
                    },
                },
            });
        })
    );

    // Create applications for students and job postings
    await Promise.all(
        jobPostings.map((jobPosting) => {
            const student = faker.helpers.arrayElement(students);
            return prisma.application.create({
                data: {
                    coverLetter: faker.lorem.paragraph(),
                    resume: faker.internet.url(),
                    status: faker.helpers.arrayElement(Object.values(ApplicationStatus)),
                    studentId: student.id,
                    jobPostingId: jobPosting.id,
                },
            });
        })
    );

    console.log('Database has been seeded with faker data.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
