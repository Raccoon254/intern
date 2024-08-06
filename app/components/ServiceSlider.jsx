'use client'
import { useState } from 'react';

const ServiceSlider = ({ services }) => {

    const ServiceIcon = ({ icon }) => {
        if (icon.startsWith('fas') || icon.startsWith('far') || icon.startsWith('fal') || icon.startsWith('fad') || icon.startsWith('fab')) {
            return (
                <div className="w-6 -ml-1 ring-1 center ring-green-100 rounded-full h-6">
                    <i className={icon}></i>
                </div>
            );
        }else if (icon.startsWith('http')) {
            return (
                <img src={icon} alt={icon} className="w-6 -ml-1 ring-1 ring-green-100 rounded-full h-6"/>
            );
        }
    }

    const getTwoWords = (name) => {
        const words = name.split(' ');
        if (words.length > 1) {
            return words[0] + ' ' + words[1];
        } else {
            return words[0];
        }
    }

    return (
        <div className="relative">
            <div id="slider-content" className="flex flex-wrap gap-2">
                {services.slice(0, 3).map((service, index) => (
                    <div key={index} className="ring-1 ring-green-500 badge-custom">
                        <ServiceIcon icon={service.icon} />
                        <span className="overflow-clip">{
                            getTwoWords(service.name)
                        }</span>
                    </div>
                ))}
                {services.length > 3 && (
                    <button className="badge-custom flex ring-1 ring-blue-900">
                        <i className={"fa-solid fa-ellipsis-h"}></i> {services.length - 3} more
                    </button>
                )}
            </div>
        </div>
    );
};

export default ServiceSlider;
