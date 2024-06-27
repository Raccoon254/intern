"use client";
import React, {useEffect} from "react";
import {useSession} from "next-auth/react";
import Link from "next/link";
import Notification from "/app/Notification";
import NavBar from "/app/components/NavBar";
import ServiceSlider from "/app/components/ServiceSlider";
import Loading from "/app/loading";
import {formatDistanceToNow} from "date-fns";
import TypewriterEffect from "/app/components/TypewriterEffect";


const Dashboard = () => {
    const {data: session} = useSession();
    const [allCompanies, setAllCompanies] = React.useState([]);
    const [internships, setInternships] = React.useState([]);
    const types = ["Attachments", "Internships", "Opportunities"];

    useEffect(() => {
        document.title = "InternLink™";

        fetch(`/api/organizations`)
            .then(response => response.json())
            .then(data => {
                setAllCompanies(data);
            })
            .catch(error => {
                console.error(error);
            });

        fetch(`/api/postings`)
            .then(response => response.json())
            .then(data => {
                setInternships(data);
                console.log(data);
                //[
                // 	{
                // 		"id": 1,
                // 		"title": "Software Engineer",
                // 		"description": "We are looking for a skilled software engineer to join our team.",
                // 		"requirements": "Experience with JavaScript, Node.js, and React.",
                // 		"type": "JOB",
                // 		"location": "REMOTE",
                // 		"applicationDeadline": "2024-12-31T23:59:59.000Z",
                // 		"createdAt": "2024-06-27T08:07:01.118Z",
                // 		"updatedAt": "2024-06-27T08:07:01.118Z",
                // 		"department": {
                // 			"id": 1,
                // 			"name": "Research and Development",
                // 			"organization": {
                // 				"id": 1,
                // 				"name": "FutureSpace",
                // 				"logo": "https://ui-avatars.com/api/?name=Future+Space",
                // 				"email": "info@futurespace.com",
                // 				"address": "123 Future Street, Space City, Galaxy",
                // 				"contactInfo": "123-456-7890"
                // 			}
                // 		}
                // 	},
                // 	{
                // 		"id": 2,
                // 		"title": "Data Analyst Intern",
                // 		"description": "We are looking for a data analyst intern to support our data team.",
                // 		"requirements": "Basic understanding of data analysis and experience with Excel.",
                // 		"type": "INTERNSHIP",
                // 		"location": "HYBRID",
                // 		"applicationDeadline": "2024-11-30T23:59:59.000Z",
                // 		"createdAt": "2024-06-27T08:07:12.118Z",
                // 		"updatedAt": "2024-06-27T08:07:12.118Z",
                // 		"department": {
                // 			"id": 3,
                // 			"name": "Human Resources",
                // 			"organization": {
                // 				"id": 1,
                // 				"name": "FutureSpace",
                // 				"logo": "https://ui-avatars.com/api/?name=Future+Space",
                // 				"email": "info@futurespace.com",
                // 				"address": "123 Future Street, Space City, Galaxy",
                // 				"contactInfo": "123-456-7890"
                // 			}
                // 		}
                // 	}
                // ]
            })
            .catch(error => {
                console.error(error);
            });

    }, []);


    if (!session) {
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
                <span className="absolute w-96 top-5 right-0">
                    <Notification notifications={[{type: "loading", content: "Loading sign in session"}]}/>
                </span>
            </div>
        );
    }

    if (!allCompanies || allCompanies.length === 0) {
        return (
            <div className="overflow-hidden bg-green-100 min-h-screen">
                <NavBar/>
                <div className={`bg-white p-4 sm:p-6 md:p-6`}>
                    <Loading/>
                </div>
                <span className="absolute w-96 top-20 right-0">
                    <Notification notifications={[{type: "loading", content: "Fetching Company data"}]}/>
                </span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <NavBar/>
            <main className="">
                <div className="w-full bg-green-100 grid grid-cols-1 place-items-center h-72 gap-6">
                    <div className="landing-page">
                        <div className="text-center">
                            <p
                                className="text-gray-500 text-sm font-semibold sm:text-base"
                            >
                                Shape your career with InternLink™
                            </p>
                            <h1
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:font-black"
                            >
                                Find your dream :{" "}
                                <span className="text-green-500">
                                    <TypewriterEffect types={types}/>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8">
                    <h1 className="text-3xl mb-6 sm:text-4xl font-bold sm:font-black">
                        Featured companies hiring now
                    </h1>

                    <div className="cards gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                        {allCompanies.map((company, index) => (
                            <div key={index} className="custom-card cursor-pointer">
                                <div className="flex px-3 pt-3 gap-4 items-center">
                                    <div
                                        className="logo ring-1 overflow-hidden ring-offset-2 ring-green-400 logo-sq-14 grid place-items-center bg-green-500 text-white w-14 h-14 rounded-md">
                                        <img className={"h-14 object-cover object-top"} src={company.logo}
                                             alt={company.name}/>
                                    </div>
                                    <div className="info">
                                        <h1 className="text-2xl font-bold">{company.name}</h1>
                                        <p className="text-sm text-gray-500">{company.employees}+ partners</p>
                                    </div>
                                </div>
                                <div className="middle">
                                    <div className="mt-4 px-3 font-medium">
                                        {company.description}
                                    </div>

                                    <div className="flex px-3 flex-col gap-2 mt-4">
                                        <h1 className="text-lg font-normal">Services</h1>
                                        <ServiceSlider services={company.services}/>
                                    </div>

                                </div>
                                <div className="bottom">
                                    <div className="border-b-2 border-gray-300 w-full mt-4"></div>
                                    <div className="px-3 hover:bg-gray-200 pt-4 rounded-lg mt-1 pb-3">
                                        <Link className="flex positions-link justify-between items-center"
                                              href={`/intern/company?id=${company.id}`}>
                                            <span className="text-md font-semibold hover:underline underline-offset-1">
                                                {company.positions ?? ''} Open Positions
                                            </span>
                                            <i className="fa-solid fa-chevron-right text-sm"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="flex flex-col mt-4 justify-center p-4 sm:p-6 md:p-8">
                    <h1 className="text-3xl mb-4 sm:text-4xl font-bold sm:font-black">
                        Trending internship opportunities
                    </h1>

                    <a href="/intern/jobs" className="underline underline-offset-1">
                        View all jobs
                    </a>

                    <div className="main flex mt-2">
                        <div className="left w-full md:w-3/4">
                            {internships.map((internship, index) => (
                                <div key={index} className="internship-card flex flex-col gap-4 mb-2 relative">
                                    <div className="start flex flex-col mt-1 md:mt-6 sm:flex-row gap-4">
                                        <div
                                            className="logo logo-sq-14 grid place-items-center bg-secondary text-white w-14 h-14 rounded-lg">
                                            <img className={"h-12 object-cover rounded"} src={internship.department.organization.logo}
                                                 alt={internship.department.organization.name}/>
                                        </div>
                                        <div>
                                            <div className="relative md:absolute flex gap-2 top-1 left-0">
                                                <span
                                                    className="bg-gray-300 px-2">{internship.type.toLowerCase()}</span>
                                                <span
                                                    className="bg-gray-300 px-2">{internship.location.toLowerCase()}</span>
                                            </div>
                                        </div>
                                        <div className="info flex flex-col gap-1">
                                            <h1 className="text-2xl font-semibold">{internship.description}</h1>
                                            <div className="text-[1rem] text-gray-500 flex flex-wrap gap-2 font-medium">
                                                <p className={""}>{internship.department.organization.name}</p>|
                                                <p className={""}>{internship.department.name}</p>
                                                <p className="">{formatDistanceToNow(new Date(internship.createdAt))} ago</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-container flex gap-3">
                                        <Link
                                            className="btn rounded-md ring-1 ring-offset-1 ring-secondary btn-sm btn-primary"
                                            href={"/intern/apply?internship=" + internship.id}>
                                            Apply
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="right hidden md:w-1/4"></div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
