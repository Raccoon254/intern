"use client";
import React, {useEffect, useState} from "react";
import Loading from "/app/loading";
import Notification from "/app/Notification";
import VerticalTabs from "@/app/components/VerticalTabs";
import NavBar from "@/app/components/NavBar";

const Company = () => {

    const [company, setCompany] = useState({});
    const [internships, setInternships] = useState([]);

    useEffect(() => {

        document.title = "Loading Company";
        const id = new URLSearchParams(window.location.search).get("id");
        fetch(`/api/organizations/${id}`)
            .then(response => response.json())
            .then(data => {
                setCompany(data)
                document.title = data.name;
                document.querySelector("meta[name=\"description\"]").setAttribute("content", data.name);
                fetchCompanyInternships(data.id);
            })
            .catch(error => {
                console.error(error);
            });

        //After the company is loaded fetch the internships

    }, []);

    function fetchCompanyInternships(id) {
        console.log("Fetching internships for company with id: ", id);
        fetch(`/api/organizations/internships/${id}`)
            .then(response => response.json())
            .then(data => {
                setInternships(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    }


    if (!company || Object.keys(company).length === 0 || company.departments === undefined) {
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
        <div className="overflow-hidden bg-green-100 min-h-screen">
            <NavBar/>
            <div className={`bg-white p-4 sm:p-6 md:p-6`}>

                <div
                    className="dashboard flex flex-col sm:flex-row sm:items-center border-b pb-10 justify-between gap-4">
                    <div className="company flex gap-4 items-start sm:items-end">

                        <img
                            className="h-16 sm:h-20 cursor-pointer object-cover ring-1 ring-green-500 shadow-md company-logo bg-gray-200 rounded-md"
                            src={company.logo} alt={company.name}/>

                        <div className="info">
                            <div className="name text-2xl font-semibold">
                                {company.name}
                            </div>
                            <div className="description text-sm">
                                {company.description ?? "No description available yet"}
                            </div>
                        </div>

                    </div>

                    <div className="actions flex gap-2">
                        <button data-tip={"Share " + company.name}
                                className="btn btn-outline rounded-md btn-sm tooltip btn-secondary">
                            <i className="fa-solid fa-share-nodes"></i>
                        </button>

                        <button data-tip={"Follow " + company.name}
                                className="btn btn-outline rounded-md btn-sm tooltip btn-secondary">
                            <i className="fa-solid fa-plus"></i>
                            &nbsp;Follow
                        </button>

                    </div>
                </div>
                <div className={"w-full mt-4 h-[50px] rounded-md"}
                     style={{
                         backgroundImage: `url(${company.image})`,
                         backgroundSize: "cover",
                         backgroundPosition: "center",
                     }}>
                </div>

                <div className="flex gap-4 flex-col md:flex-row">

                    <VerticalTabs company={company} internships={internships}/>

                    <div className="company rounded-md mt-12 w-full h-[40vh] relative"
                         style={{
                             backgroundImage: `url(${company.image})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center",
                         }}>
                        <div
                            className={"absolute backdrop-blur-[1px] bg-white bg-opacity-50 rounded-md w-full h-full border p-4"}>
                            <div className="title text-gray-400 font-semibold uppercase text-[10px]">
                                About {company.name}
                            </div>
                            <div className="content flex flex-col gap-2 text-sm">
                                <div className="desc flex items-center gap-2">
                                    <i className="fa-solid fa-info-circle"></i>
                                    <p>
                                        {company.description ?? "No description available yet"}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {company.services.map((service, serviceIndex) => (
                                        <div key={serviceIndex} className="ring-1 btn btn-outline btn-sm">
                                            <i className={service.icon}></i>
                                            {service.name}
                                        </div>
                                    ))}
                                </div>

                                <div className="website flex items-center gap-2">
                                    <i className="fa-solid fa-globe"></i>
                                    <p>
                                        {company.website}
                                    </p>
                                    <a href={company.website} target="_blank" rel="noreferrer">
                                        <button data-tip={"Go to"} className={"tooltip"}>
                                            <i className="fa-solid fa-external-link"></i>
                                        </button>
                                    </a>
                                </div>
                                <div className="location flex items-center gap-2">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>
                                        {company.email}
                                    </p>
                                </div>
                                <div className="email flex items-center gap-2">
                                    <i className="fa-solid fa-map-marker-alt"></i>
                                    <p>
                                        {company.address}
                                    </p>
                                </div>
                                <div className="email flex items-center gap-2">
                                    <i className="fa-solid fa-phone"></i>
                                    <p>
                                        {company.contactInfo}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Company;
