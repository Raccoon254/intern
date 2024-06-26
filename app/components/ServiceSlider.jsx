'use client'
import React, { useEffect } from 'react';

const ServiceSlider = ({ services }) => {
    useEffect(() => {
        const slider = document.getElementById('slider-content');
        const clone = slider.innerHTML;
        slider.innerHTML += clone;
    }, []);

    return (
        <div className="slider-container relative">
            <span className="bg-gradient-to-r z-50 from-gray-100 to-transparent absolute w-10 top-0 left-0 h-10"></span>
            <div id="slider-content" className="slider-content">
                {services.map((service, index) => (
                    <div key={index} className="ring-1 ring-green-500 badge-custom">
                        <i className={service.icon}></i> {service.name}
                    </div>
                ))}
            </div>
            <span className="bg-gradient-to-r absolute from-transparent to-gray-100 h-10 w-10 top-0 right-0"></span>
        </div>
    );
};

export default ServiceSlider;
