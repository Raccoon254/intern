require('dotenv').config();
const { PrismaClient, UserRole, ApplicationStatus, JobPostingType, JobLocation, JobStatus } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const { companies } = require('./data/realistic_companies.js')
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

const NUM_USERS = 50;
const NUM_STUDENTS = 10;

async function main() {
    // Create users (including students)
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

    // Create organizations with departments, services, locations, and job postings
    for (const company of companies) {
        const org = await prisma.organization.create({
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
            },
        });

        // Create departments
        for (const dept of company.departments) {
            await prisma.department.create({
                data: {
                    name: dept.name,
                    description: dept.description,
                    organizationId: org.id,
                },
            });
        }

        // Create services
        for (const service of company.services) {
            await prisma.service.create({
                data: {
                    name: service.name,
                    icon: service.icon,
                    description: faker.lorem.paragraph(),
                    organizationId: org.id,
                },
            });
        }

        // Create locations
        for (const loc of company.locations) {
            await prisma.location.create({
                data: {
                    name: loc.name,
                    address: loc.address,
                    city: loc.city,
                    state: loc.state,
                    zip: loc.zip,
                    country: loc.country,
                    contactInfo: faker.phone.number(),
                    description: faker.lorem.paragraph(),
                    organizationId: org.id,
                },
            });
        }

        // Create job postings
        const departments = await prisma.department.findMany({ where: { organizationId: org.id } });
        for (const job of company.jobPostings) {
            const jobPosting = await prisma.jobPosting.create({
                data: {
                    title: job.title,
                    description: job.description,
                    requirements: job.requirements,
                    type: job.type,
                    location: job.location,
                    status: JobStatus.ACTIVE,
                    applicationDeadline: faker.date.future(),
                    departmentId: faker.helpers.arrayElement(departments).id,
                    skills: {
                        create: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }).map(() => ({
                            name: faker.person.jobArea(),
                            description: faker.lorem.sentence(),
                            icon: faker.image.avatar(),
                        })),
                    },
                },
            });

            // Create some applications for each job posting
            for (let i = 0; i < faker.number.int({ min: 1, max: 5 }); i++) {
                await prisma.application.create({
                    data: {
                        coverLetter: faker.lorem.paragraphs(),
                        resume: faker.internet.url(),
                        status: faker.helpers.arrayElement(Object.values(ApplicationStatus)),
                        studentId: faker.helpers.arrayElement(students).id,
                        jobPostingId: jobPosting.id,
                    },
                });
            }
        }
    }

    console.log('Database has been seeded with realistic company data.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });