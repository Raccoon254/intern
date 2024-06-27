'use client'
import { useState } from 'react';

const ServiceSlider = ({ services }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="relative">
            <div id="slider-content" className="flex flex-wrap gap-2">
                {services.slice(0, 3).map((service, index) => (
                    <div key={index} className="ring-1 ring-green-500 badge-custom">
                        <i className={service.icon}></i> {service.name}
                    </div>
                ))}
                {services.length > 3 && (
                    <button className="badge-custom flex ring-1 ring-blue-900" onClick={toggleModal}>
                        <i className={"fa-solid fa-ellipsis-h"}></i> {services.length - 3} more
                    </button>
                )}
            </div>

            {isModalOpen && (
                <dialog id="services_modal" className="modal p-1 bg-transparent rounded-lg flex flex-col justify-end" open >
                    <div className="modal-box w-full rounded-[8px] h-1/2">
                        <button className="modal-close absolute top-0.5 right-0.5 btn btn-sm btn-circle" onClick={toggleModal}>
                            <i className="fa-solid fa-times"></i>
                        </button>
                        <h3 className="font-bold text-lg">All Services</h3>
                        <div className="py-2 flex gap-2 flex-wrap">
                            {services.map((service, index) => (
                                <div key={index} className="ring-1 ring-green-500 badge-custom">
                                    <i className={service.icon}></i> {service.name}
                                </div>
                            ))}
                        </div>
                        <div className="modal-action">
                            <button className="btn btn-sm btn-warning" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ServiceSlider;
