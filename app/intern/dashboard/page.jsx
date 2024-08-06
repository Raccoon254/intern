"use client";
import {Suspense, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import Link from "next/link";
import Notification from "/app/components/Notification";
import NavBar from "/app/components/NavBar";
import ServiceSlider from "/app/components/ServiceSlider";
import Loading from "/app/loading";
import {formatDistanceToNow} from "date-fns";
import TypewriterEffect from "/app/components/TypewriterEffect";
import CompanyCard from "@/app/components/intern/dashboard/CompanyCard";
import InternshipList from "@/app/components/intern/dashboard/InternshipList";


const Dashboard = () => {
    const {data: session} = useSession();
    const [allCompanies, setAllCompanies] = useState([]);
    const [selectedCompanies, setSelectedCompanies] = useState(null);
    const [internships, setInternships] = useState([]);
    const types = ["Attachments", "Internships", "Opportunities"];
    const [selectedInternships, setSelectedInternships] = useState(null);

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
                setSelectedInternships(data.sort(() => Math.random() - Math.random()).slice(0, 10));
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
            <main>
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

                <div className="flex flex-col justify-center p-2 md:p-4">
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
                        Trending opportunities
                    </h1>

                    <a href="/intern/jobs" className="underline underline-offset-1">
                        View all jobs
                    </a>

                    <div className="main flex mt-2">

                        { selectedInternships && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedInternships.map((internship, index) => (
                                    <InternshipList key={index} internship={internship}/>
                                ))}
                            </div>
                        )}

                        <div className="right hidden md:w-1/4"></div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
