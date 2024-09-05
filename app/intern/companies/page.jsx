'use client'
import {useEffect, useState} from "react";
import CompanyCard from "@/app/components/intern/dashboard/CompanyCard";
import Notification from "@/app/components/Notification";
import NavBar from "@/app/components/NavBar";
import Loading from "@/app/loading";
import {useSession} from "next-auth/react";
import TypewriterEffect from "@/app/components/TypewriterEffect";
import {useSnackbar} from "notistack";

const Companies = () => {
    const {data: session} = useSession();
    const [companies, setCompanies] = useState([]);
    const types = ["Company", "Internship", "Opportunity"];
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const {enqueueSnackbar} = useSnackbar();

    useEffect(() => {
        fetch(`/api/organizations`)
            .then(response => response.json())
            .then(data => {
                setCompanies(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        try {
            setFilteredCompanies(
                companies.filter(company =>
                    company.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } catch (e) {
            enqueueSnackbar("Failed to filter companies", {variant: "error"});
        }
    }, [searchTerm, companies]);

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

    if (!companies || companies.length === 0) {
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
                <div className="flex flex-col justify-center p-3 sm:p-4 md:p-6">
                    <div className="flex flex-col mb-5 justify-between">
                        <div className="flex my-2 flex-col md:flex-row justify-between">
                            <h1 className="text-3xl mb-3 sm:text-4xl font-semibold md:font-bold sm:font-black">
                                All companies
                            </h1>
                            <input
                                type="text"
                                placeholder="Search companies..."
                                className="mb-4 md:w-1/3 input input-md rounded-lg ring-1 ring-gray-300 md:rounded-xl border"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>


                        <div className="cards gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {filteredCompanies.map((company, index) => (
                                <CompanyCard key={index} company={company}/>
                            ))}
                        </div>

                        {filteredCompanies.length === 0 && (
                            <div className="flex flex-col mt-8 items-center">
                                <h1 className="text-2xl font-bold">
                                    No companies found
                                </h1>
                                <i className={"fa-solid fa-search mt-2 text-4xl text-gray-500"}/>
                                <button
                                    className="btn ring-1 ring-gray-300 mt-2"
                                    onClick={() => setSearchTerm("")}
                                >
                                    Reset filter
                                </button>
                            </div>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}

export default Companies;
