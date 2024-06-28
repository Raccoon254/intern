'use client'
import {useEffect, useState} from "react";
import CompanyCard from "@/app/components/CompanyCard";
import Notification from "@/app/Notification";
import NavBar from "@/app/components/NavBar";
import Loading from "@/app/loading";
import {useSession} from "next-auth/react";

const Companies = () => {
    const {data: session} = useSession();
    const [companies, setCompanies] = useState([]);

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
        <div>
            <div className="cards gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {companies.map((company, index) => (
                    <CompanyCard key={index} company={company}/>
                ))}
            </div>
        </div>
    );
}

export default Companies;
