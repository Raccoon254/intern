const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

async function main() {
    // Create Users
    for (let i = 0; i < 10; i++) {
        await prisma.user.create({
            data: {
                email: faker.internet.email(),
                password: faker.internet.password(),
                role: faker.helpers.randomize(['STUDENT', 'ORG_ADMIN', 'DEPT_ADMIN', 'SUPER_ADMIN']),
            },
        });
    }

    // Create Organizations
    for (let i = 0; i < 5; i++) {
        const organization = await prisma.organization.create({
            data: {
                name: faker.company.name(),
                logo: faker.image.business(),
                banner: faker.image.business(),
                website: faker.internet.url(),
                employees: faker.datatype.number({ min: 50, max: 1000 }).toString(),
                email: faker.internet.email(),
                address: faker.address.streetAddress(),
                contactInfo: faker.phone.number(),
                bio: faker.lorem.paragraph(),
                departments: {
                    create: Array.from({ length: 3 }).map(() => ({
                        name: faker.commerce.department(),
                        description: faker.lorem.paragraph(),
                    })),
                },
                services: {
                    create: Array.from({ length: 3 }).map(() => ({
                        name: faker.commerce.productName(),
                        icon: faker.internet.avatar(),
                        description: faker.lorem.paragraph(),
                    })),
                },
                locations: {
                    create: Array.from({ length: 2 }).map(() => ({
                        name: faker.address.cityName(),
                        address: faker.address.streetAddress(),
                        city: faker.address.city(),
                        state: faker.address.state(),
                        zip: faker.address.zipCode(),
                        country: faker.address.country(),
                        contactInfo: faker.phone.number(),
                        description: faker.lorem.paragraph(),
                    })),
                },
            },
        });

        // Create Job Postings for the Organization
        for (let j = 0; j < 3; j++) {
            await prisma.jobPosting.create({
                data: {
                    title: faker.name.jobTitle(),
                    description: faker.lorem.paragraph(),
                    requirements: faker.lorem.paragraph(),
                    type: faker.helpers.randomize(['ATTACHMENT', 'INTERNSHIP', 'JOB']),
                    location: faker.helpers.randomize(['ONSITE', 'REMOTE', 'HYBRID']),
                    status: 'PENDING',
                    applicationDeadline: faker.date.future(),
                    departmentId: organization.departments[0].id, // Use one of the created department ids
                },
            });
        }
    }

    // Create Students
    for (let i = 0; i < 10; i++) {
        await prisma.student.create({
            data: {
                user: {
                    create: {
                        email: faker.internet.email(),
                        password: faker.internet.password(),
                        role: 'STUDENT',
                    },
                },
                name: faker.name.findName(),
                phone: faker.phone.number(),
                course: faker.random.word(),
                university: faker.company.companyName(),
                bio: faker.lorem.paragraph(),
            },
        });
    }

    console.log('Database seeded successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
