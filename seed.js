require('dotenv').config();
const { PrismaClient, UserRole, ApplicationStatus, JobPostingType, JobLocation, JobStatus } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

const NUM_USERS = 50;
const NUM_ORGANIZATIONS = 5;
const NUM_DEPARTMENTS_PER_ORG = 3;
const NUM_SERVICES_PER_ORG = 3;
const NUM_LOCATIONS_PER_ORG = 2;
const NUM_JOB_POSTINGS = 20;
const NUM_STUDENTS = 10;

async function main() {
    // Create users
    const users = await Promise.all(
        Array.from({ length: NUM_USERS }).map(async () => {
            const role = faker.helpers.arrayElement(Object.values(UserRole));
            const user = await prisma.user.create({
                data: {
                    email: faker.internet.email(),
                    password: faker.internet.password(), // Remember to hash passwords in a real application
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
        Array.from({ length: NUM_ORGANIZATIONS }).map(async () => {
            const organization = await prisma.organization.create({
                data: {
                    name: faker.company.name(),
                    logo: faker.image.url(),
                    banner: faker.image.urlLoremFlickr({ category: 'business' }),
                    website: faker.internet.url(),
                    employees: faker.number.int({ min: 50, max: 1000 }).toString(),
                    email: faker.internet.email(),
                    address: faker.location.streetAddress(),
                    contactInfo: faker.phone.number(),
                    bio: faker.lorem.paragraph(),
                    departments: {
                        create: Array.from({ length: NUM_DEPARTMENTS_PER_ORG }).map(() => ({
                            name: faker.commerce.department(),
                            description: faker.lorem.paragraph(),
                        })),
                    },
                    services: {
                        create: Array.from({ length: NUM_SERVICES_PER_ORG }).map(() => ({
                            name: faker.commerce.productName(),
                            icon: faker.image.avatar(),
                            description: faker.lorem.paragraph(),
                        })),
                    },
                    locations: {
                        create: Array.from({ length: NUM_LOCATIONS_PER_ORG }).map(() => ({
                            name: faker.location.city(),
                            address: faker.location.streetAddress(),
                            city: faker.location.city(),
                            state: faker.location.state(),
                            zip: faker.location.zipCode(),
                            country: faker.location.country(),
                            contactInfo: faker.phone.number(),
                            description: faker.lorem.paragraph(),
                        })),
                    },
                },
            });
            return organization;
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
