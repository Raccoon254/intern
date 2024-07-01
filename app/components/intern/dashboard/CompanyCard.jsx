import React from 'react';
import Link from 'next/link';
import ServiceSlider from '../../ServiceSlider';

const CompanyCard = ({ company }) => {
    return (
        <div className="custom-card cursor-pointer">
            <div className="flex px-3 pt-3 gap-4 items-center">
                <div
                    className="logo ring-1 overflow-hidden ring-offset-2 ring-green-400 logo-sq-14 grid place-items-center bg-green-500 text-white w-14 h-14 rounded-md">
                    <img className="h-14 object-cover object-top" src={company.logo} alt={company.name + '\'s logo'}/>
                </div>
                <div className="info">
                    {/* Limit the name to 13 char and show '...' if longer than that*/}
                    <h1 className="text-2xl font-semibold">{ company.name.length > 13 ? company.name.slice(0, 13) + '...' : company.name }</h1>
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
                <div data-tip={'View ' + company.name}
                     className="px-3 w-full hover:bg-gray-200 tooltip pt-2 rounded-lg mt-1 pb-3">
                    <Link className="flex justify-between items-center"
                          href={`/intern/company?id=${company.id}`}>
            <span
                className="text-sm flex items-start flex-col font-normal hover:underline underline-offset-1">
              <span>
                {company.positions ?? ''} Open Positions
              </span>
              <span className="text-xs font-thin">
                View <span className="text-green-800 font-semibold">{company.name}</span> details
              </span>
            </span>
                        <div className="btn btn-sm btn-circle ring-1 ring-gray-300 center">
                            <i className="fa-solid fa-mountain text-sm"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CompanyCard;
