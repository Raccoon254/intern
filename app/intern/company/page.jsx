"use client";
import React, {useEffect, useState} from "react";
import Loading from "/app/loading";
import Notification from "/app/components/Notification";
import VerticalTabs from "@/app/components/VerticalTabs";
import {useSnackbar} from "notistack";
const Company = () => {

    const [company, setCompany] = useState({});
    const [internships, setInternships] = useState([]);
    const {enqueueSnackbar} = useSnackbar();

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
        fetch(`/api/internships/${id}`)
            .then(response => response.json())
            .then(data => {
                setInternships(data);
            })
            .catch(error => {
                enqueueSnackbar("Failed to fetch internships", {variant: "error"});
            });
    }


    if (!company || Object.keys(company).length === 0 || company.departments === undefined) {
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
        <div className="overflow-hidden bg-white min-h-screen">
            <div className='bg-white w-full flex flex-col'
                 style={{
                    backgroundImage: `url(${company.banner ?? "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>

                <div className="dashboard h-[300px] bg-gradient-to-b from-white p-2 sm:p-4 md:p-6">
                    <div className='justify-between'>
                        <div className='flex mb-40 gap-4 justify-between items-start'>
                            <div className="company flex gap-4 items-start">
                                <img
                                    className="h-16 sm:h-20 cursor-pointer object-cover ring-1 ring-gray-300 company-logo bg-gray-200 rounded-md"
                                    src={company.logo} alt={company.name}/>

                                <div className="info">
                                    <div className="name text-2xl font-semibold">
                                        {company.name}
                                    </div>
                                    <div className="description text-sm">
                                        { company.bio ?? "No description available yet"}
                                    </div>
                                </div>
                            </div>

                            <div className="h-full flex items-start gap-2">
                                <button data-tip={"Share " + company.name}
                                        className="btn btn-square btn-outline rounded-md btn-sm tooltip tooltip-left btn-secondary">
                                    <i className="fa-solid fa-share-nodes"></i>
                                </button>

                                {/*<button data-tip={"Follow " + company.name}*/}
                                {/*        className="btn btn-outline rounded-md btn-sm tooltip btn-secondary">*/}
                                {/*    <i className="fa-solid fa-plus"></i>*/}
                                {/*    &nbsp;Follow*/}
                                {/*</button>*/}

                            </div>
                        </div>
                    </div>

                </div>

                <div className={'bg-gradient-to-t via-20% from-white flex flex-col justify-end'}>
                    <div className="flex gap-4 bg-white h-auto backdrop-blur-[1px] bg-opacity-80 flex-col md:flex-row p-2 sm:p-4 md:p-6">

                        <VerticalTabs company={company} internships={internships}/>

                        <div className="company rounded-md mt-12 w-full relative">
                            <div
                                className={"backdrop-blur-[1px] rounded-md w-full border p-4"}>
                                <div className="title text-gray-400 font-semibold uppercase text-[10px]">
                                    About {company.name}
                                </div>
                                <div className="content flex flex-col gap-2 text-sm">
                                    <div className="desc flex items-center gap-2">
                                        <i className="fa-solid fa-info-circle"></i>
                                        <p>
                                            {company.bio ?? "No description yet"}
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
                                        <i className="fa-solid fa-envelope"></i>
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
        </div>
    );
};

export default Company;
