import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = "+254758481320";
    const emailAddress = "contact@intern.co.ke";

    const whatsappMessage = encodeURIComponent("Hi InternLink! I'm interested in your services.");
    const emailSubject = encodeURIComponent("Inquiry about InternLink Services");
    const emailBody = encodeURIComponent("Hello InternLink team,\n\nI'm reaching out to learn more about your services.\n\nBest regards,\n[Your Name]");

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">About InternLink</h3>
                        <p className="mb-4">
                            InternLink streamlines the journey for students to secure internships and attachments. Our platform simplifies the application process, enabling students to effortlessly explore and apply for opportunities.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">For Students</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">For Employers</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i> 123 Innovation St, Tech City, TC 12345</p>
                        <p className="mb-2"><i className="fas fa-phone mr-2"></i> +1 (555) 123-4567</p>
                        <p className="mb-4"><i className="fas fa-envelope mr-2"></i> {emailAddress}</p>
                        <div className="flex space-x-4 mb-4">
                            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                                <i className="fab fa-whatsapp mr-2"></i> WhatsApp Us
                            </a>
                            <a href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                <i className="far fa-envelope mr-2"></i> Email Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p>&copy; {currentYear} InternLink. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
                        <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
