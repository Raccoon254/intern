"use client";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import Link from "next/link";
import Notification from "/app/Notification";
import NavBar from "/app/components/NavBar";
import ServiceSlider from "/app/components/ServiceSlider";
import Loading from "/app/loading";
import {formatDistanceToNow} from "date-fns";
import TypewriterEffect from "/app/components/TypewriterEffect";
import CompanyCard from "@/app/components/CompanyCard";


const Dashboard = () => {
    const {data: session} = useSession();
    const [allCompanies, setAllCompanies] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState(null); // allCompanies[0
    const [internships, setInternships] = useState([]);
    const types = ["Attachments", "Internships", "Opportunities"];

    useEffect(() => {
        document.title = "InternLink™";

        fetch(`/api/organizations`)
            .then(response => response.json())
            .then(data => {
                setAllCompanies(data);
                setSelectedCompanies(data.sort(() => Math.random() - Math.random()).slice(0, 8));
            })
            .catch(error => {
                console.error(error);
            });

        fetch(`/api/postings`)
            .then(response => response.json())
            .then(data => {
                setInternships(data);
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
                <div className="w-full bg-green-100 grid grid-cols-1 place-items-center h-56 md:h-72 gap-6">
                    <div className="landing-page">
                        <div className="text-center">
                            <p className="text-gray-500 text-sm font-semibold sm:text-base">
                                Shape your career with InternLink™
                            </p>
                            <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mt-3 sm:font-black">
                                Find your dream :{" "}
                                <span className="text-green-500">
                                    <TypewriterEffect types={types}/>
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col md:flex-row mb-5 justify-between">
                        <h1 className="text-3xl mb-3 sm:text-4xl font-semibold sm:font-bold">
                            Featured companies hiring now
                        </h1>
                        <div className={'flex text-sm flex-col'}>
                            <span>
                                {allCompanies.length} companies registered
                            </span>
                            <Link href={`companies`} className="underline underline-offset-2 text-blue-900">
                                View all
                            </Link>
                        </div>
                    </div>

                    <div className="cards gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {selectedCompanies.map((company, index) => (
                            <CompanyCard key={index} company={company}/>
                        ))}
                    </div>

                    <div className={'flex mt-4 text-sm flex-col'}>
                        <span>
                            {allCompanies.length - 8} companies remaining
                        </span>
                        <Link href={`companies`} className="underline underline-offset-2 text-blue-900">
                            View all
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col mt-4 justify-center p-4 sm:p-6 md:p-8">
                <h1 className="text-3xl mb-4 sm:text-4xl font-semibold sm:font-bold">
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
                                            className="logo logo-sq-14 cursor-pointer grid place-items-center ring-1 ring-green-500 text-white w-14 p-[2px] h-14 rounded-lg">
                                            <img className={"h-full w-full object-cover rounded-[6px]"}
                                                 src={internship.department.organization.logo}
                                                 alt={internship.department.organization.name}/>
                                        </div>
                                        <div>
                                            <div className="relative md:absolute text-xs flex gap-2 top-1 left-0">
                                                <span
                                                    className="bg-gray-300 px-2 py-1">{internship.type.toLowerCase()}</span>
                                                <span
                                                    className="bg-gray-300 px-2 py-1">{internship.location.toLowerCase()}</span>
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
