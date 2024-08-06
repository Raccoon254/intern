'use client'
import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import axios from 'axios';

const Profile = () => {
    const { data: session } = useSession();
    const { enqueueSnackbar } = useSnackbar();
    const [studentData, setStudentData] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        university: '',
        bio: ''
    });

    useEffect(() => {
        if (session) {
            const fetchStudentData = async () => {
                try {
                    const response = await axios.get(`/api/users/${session.user.id}`);
                    setStudentData(response.data);
                    setFormData({
                        name: response.data.student.name,
                        phone: response.data.student.phone,
                        course: response.data.student.course,
                        university: response.data.student.university,
                        bio: response.data.student.bio || ''
                    });
                } catch (error) {
                    enqueueSnackbar('Failed to load student data', { variant: 'error' });
                }
            };
            fetchStudentData();
        } else {
            enqueueSnackbar('Loading sign in session', { variant: 'info' });
        }
    }, [session, enqueueSnackbar]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        const email = session.user.email;
        const role = session.user.role;
        const student = formData;

        try {
            const response = await axios.put(`/api/users/${session.user.id}`, {
                email,
                role,
                student
            });
            console.log(response.data);
            enqueueSnackbar('Profile updated successfully', { variant: 'success' });
        } catch (error) {
            enqueueSnackbar('Failed to update profile', { variant: 'error' });
        }
    };

    if (!session || !studentData) {
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    return (
        <div className=" my-8 p-6 bg-white rounded-lg max-w-3xl">
        <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="w-40 h-40 mx-auto md:mx-0 mb-6 md:mb-0">
                    <img
                        src={studentData.student.photo}
                        alt="User Profile"
                        className="w-full h-full object-cover rounded-full shadow-md"
                    />
                </div>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Profile</h1>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={session.user.email}
                                readOnly
                                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm text-gray-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
                            <input
                                type="text"
                                id="university"
                                name="university"
                                value={formData.university}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                            <textarea
                                id="bio"
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={handleSave}
                                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;