"use client";
import React, { useEffect, useState } from "react";
import Loading from "/app/loading";
import Notification from "/app/components/Notification";

const VerticalTabs = ({ company: companyProp, internships: internshipsProp }) => {
    const [selectedTab, selectTab] = useState("1");
    const [company, setCompany] = useState({});
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        setCompany(companyProp);
        setInternships(internshipsProp);
    }, [companyProp, internshipsProp]);

    if (Object.keys(company).length === 0 || company.departments === undefined) {
        return (
            <div>
                <div className={`p-4 sm:p-6 md:p-6`}>
                    <Loading />
                </div>
                <span className="absolute w-96 top-20 right-0">
                    <Notification notifications={[{ type: "loading", content: "Fetching Company data" }]} />
                </span>
            </div>
        );
    }

    return (
        <div className="flex flex-col text-xs gap-2 w-full md:w-9/12 mt-4">
            <div className="flex border-b text-sm">
                <button className={`btn tab rounded-none btn-sm ${selectedTab === "1" ? "active" : ""}`}
                        onClick={() => selectTab("1")}>
                    <i className="fa-solid fa-bolt"></i> Overview
                </button>
                <button className={`btn tab relative rounded-none btn-sm ${selectedTab === "2" ? "active" : ""}`}
                        onClick={() => selectTab("2")}>
                    <i className="fa-brands fa-servicestack"></i> Vacancies
                    
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center">
                        {internships.length}
                    </span>
                </button>
            </div>

            <div className="w-full h-full rounded-md sm:p-2 p-1">

                {selectedTab === "1" &&

                    <div>
                        <div className={"text-lg mb-3 font-semibold"}>
                            {company.name} Departments
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {company.departments.map((department) => {
                                const createdAt = new Date(department.createdAt).toLocaleDateString();
                                const updatedAt = new Date(department.updatedAt).toLocaleDateString();

                                return (
                                    <div key={department.id}
                                         className="department cursor-pointer shadow-sm ring-1 ring-offset-1 border ring-gray-50 rounded-lg p-4 transition hover:scale-[1.01] hover:bg-green-100 h-32 flex flex-col justify-between">
                                        <h2 className="department-name flex items-center text-2xl font-bold text-gray-800 mb-2">
                                            <i className="fa-solid text-xs fa-bolt animate-ping text-gray-400 mr-2"></i>
                                            {department.name}
                                        </h2>
                                        <div className="dates flex justify-end items-center gap-2">
                                            <p className="department-date flex items-center text-[10px] text-gray-400">
                                                <i className="fa-regular fa-clock mr-2"></i>
                                                {createdAt}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                }
                {selectedTab === "2" &&
                    <div>
                        <div className={"text-lg mb-3 font-semibold"}>
                            {company.name} Internships
                        </div>
                        <div className={"grid gap-2 grid-cols-1"}>
                            {internships.length > 0 ? (
                                internships.map((job) => (
                                    console.log(job),
                                    <div key={job.id}
                                         className={"shadow-sm ring flex justify-between border border-gray-400 ring-gray-200 rounded-lg p-4 my-2 transition hover:scale-[1.01]"}>
                                        <div>
                                            <h2>{job.title}</h2>
                                            
                                            <div className="text-xl">
                                                <p>{job.description}</p>
                                            </div>
                                            
                                            {/*Skills*/}
                                            
                                            <div className="my-4">
                                                <div className={"grid grid-cols-2 gap-2"}>
                                                    {job.skills.map((skill, skillIndex) => (
                                                        <div key={skillIndex}
                                                             className={"ring w-full border border-customGray ring-customGray ring-opacity-30 flex gap-2 p-2 rounded-md"}>
                                                            <div className="text-3xl">
                                                                {skill.icon.startsWith("devicon") ? (
                                                                    <i className={skill.icon}></i>
                                                                ) : skill.icon.startsWith("fa") ? (
                                                                    <i className={skill.icon}></i>
                                                                ) : (
                                                                    skill.icon
                                                                )}
                                                            </div>
                                                            <div className="overflow-hidden">
                                                                <div className={"font-semibold text-sm"}>
                                                                    {skill.name}
                                                                </div>
                                                                <div>
                                                                    {skill.description.length > 25 ? (
                                                                        <div className={"text-xs text-nowrap"}>
                                                                            {skill.description.substring(0, 25)}...
                                                                        </div>
                                                                    ) : (
                                                                        <div className={"text-xs text-nowrap"}>
                                                                            {skill.description}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div>
                                                <div>
                                                    Requirement
                                                </div>
                                                <div>
                                                    {job.requirements}
                                                </div>
                                            </div>
                                            <p>Status: {job.status.toLowerCase()}</p>
                                            <div>
                                                {/*//this is an internship, a job or an attachment = job.type*/}
                                                This is
                                                {job.type == "internship" ? (
                                                    <span> an internship</span>
                                                ) : job.type == "job" ? (
                                                    <span> a job</span>
                                                ) : job.type == "attachment" ? (
                                                    <span> an attachment</span>
                                                ) : (
                                                    <span> a job</span>
                                                )}
                                                <div>
                                                    {job.location == "remote" ? (
                                                        <span> Available remotely</span>
                                                    ) : job.location == "onsite" ? (
                                                        <span> Available onsite</span>
                                                    ) : job.location == "hybrid" ? (
                                                        <span> Available hybrid</span>
                                                    ) : (
                                                        <span> Available onsite</span>
                                                    )}
                                                </div>
                                            {/*    created at */}
                                                <div>
                                                    Created at: {job.createdAt}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className={"text-xs"}>{company.name} hasn't added any jobs yet <br /> Get notified
                                    when {company.name} posts new jobs.</p>
                            )}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default VerticalTabs;
