'use client'
import React, {useState} from 'react';
import Link from "next/link";
import { useSnackbar } from 'notistack';
import {signOut, useSession} from "next-auth/react";
import LoggedInNotification from "@/app/components/LoggedInNotification";

const validateInput = (input, setInputError, validationFunction) => {
    setInputError(validationFunction(input) ? '' : 'Invalid input');
};

const setInput = (value, setState, setInputError, validationFunction) => {
    setState(value);
    validateInput(value, setInputError, validationFunction);
}

const RegisterPage = () => {

    const { data: session} = useSession()
    const [name, setFirstName] = useState('');
    const [nameError, setFirstNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [university, setUniversity] = useState('');
    const [universityError, setUniversityError] = useState('');
    const [courseOfStudy, setCourseOfStudy] = useState('');
    const [courseOfStudyError, setCourseOfStudyError] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordType, setPasswordType] = useState('password');


    function validateAll() {
        if (name.trim() === '') {
            setFirstNameError('First name is required');
        }
        if (email.trim() === '') {
            setEmailError('Email is required');
        }
        if (university.trim() === '') {
            setUniversityError('University is required');
        }
        if (courseOfStudy.trim() === '') {
            setCourseOfStudyError('Course of study is required');
        }
        if (phoneNumber.trim() === '') {
            setPhoneNumberError('Phone number is required');
        }

        if (password.trim() === '') {
            setPasswordError('Password is required');
        }

        //if any error is present, return false
        if (nameError.trim() !== '' || emailError.trim() !== '' || universityError.trim() !== '' || courseOfStudyError.trim() !== '' || phoneNumberError.trim() !== '' || passwordError.trim() !== '') {
            return false;
        }

        return name.trim() !== '' && email.trim() !== '' && university.trim() !== '' && courseOfStudy.trim() !== '' && phoneNumber.trim() !== '' && password.trim() !== '';
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (!validateAll()) {
            enqueueSnackbar('Please fill in all the required fields', { variant: 'error' });
            return;
        }

        setIsLoading(true);

        const formData = {
            name: name,
            email: email,
            university: university,
            course: courseOfStudy,
            phone: phoneNumber,
            password: password,
        }

        fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),

        }).then(async (response) => {
            const data = await response.json();
            setIsLoading(false);
            if (response.ok) {
                enqueueSnackbar('Registration successful', { variant: 'success' });
                location.href = '/auth/login';
            } else {
                throw new Error(data.error || 'An error occurred while processing your request');
            }
        }).catch((error) => {
            console.error(error);
            enqueueSnackbar(error.message, { variant: 'error' });
            setIsLoading(false);
        });
    }

    if (session) {
        return (<LoggedInNotification/>);
    }

    if (isLoading) {
        return (
            <main className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </main>
        );
    }

    return (
        <main className="min-h-screen grid place-items-center w-full">
            <div className="w-full max-w-md m-4 p-4 ">

                <center>
                    <div className="w-fit relative flex flex-col items-center">
                        <h2 className="">
                            <span className="text-green-400">
                                Intern
                            </span>
                            Link&trade; Auth
                        </h2>
                        <div className="absolute top-[35px] right-0 mb-2 text-xs font-semibold text-orange-800">
                            By <a className={'text-blue-700'} href="https://futurespace.vercel.app">FutureSpace </a>
                            and <a className={'text-blue-700'} href="https://stevetom.vercel.app">kenTom</a>
                        </div>
                    </div>
                </center>

                <div className="w-full mt-8">
                    <form className="p-6 rounded">
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="name" autoComplete={'name'} required type="text" placeholder="Future Space"
                                   value={name}
                                   onChange={(e) => {
                                       setInput(e.target.value, setFirstName, setFirstNameError, (input) => {
                                           return input.trim() !== '';
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (nameError ? '' : 'none')}>
                                {nameError}
                            </p>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                                Email
                            </label>
                            <input className="input input-bordered input-md w-full"
                                   id="email" required type="email" placeholder="user@gmail.com"
                                   autoComplete={'email'}
                                   value={email}
                                   onChange={(e) => {
                                       setInput(e.target.value, setEmail, setEmailError, (input) => {
                                           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                           return emailRegex.test(input);
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (emailError ? '' : 'none')}>
                                {emailError}
                            </p>
                        </div>
                        <div className={'flex gap-3'}>
                            <div className="mb-2 w-1/2">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="university">
                                    University
                                </label>
                                <input className="input input-bordered input-md w-full"
                                       id="university" required type="text" placeholder="ie: Chuka University"
                                       value={university}
                                       autoComplete={'university'}
                                       onChange={(e) => {
                                           setInput(e.target.value, setUniversity, setUniversityError, (input) => {
                                               return input.trim() !== '';
                                           })
                                       }}
                                />
                                <p className={'text-red-400 text-sm font-semibold p-1 ' + (universityError ? '' : 'none')}>
                                    {universityError}
                                </p>
                            </div>
                            <div className="mb-2">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="courseOfStudy">
                                    Course of Study
                                </label>
                                <input className="input input-bordered input-md w-full max-w-md"
                                       id="courseOfStudy" required type="text" placeholder="Computer Science"
                                       value={courseOfStudy}
                                       autoComplete={'course'}
                                       onChange={(e) => {
                                           setInput(e.target.value, setCourseOfStudy, setCourseOfStudyError, (input) => {
                                               return input.trim() !== '';
                                           })
                                       }}
                                />
                                <p className={'text-red-400 text-sm font-semibold p-1 ' + (courseOfStudyError ? '' : 'none')}>
                                    {courseOfStudyError}
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="phoneNumber">
                                Phone Number
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md"
                                   id="phoneNumber" required type="text" placeholder="07********"
                                   value={phoneNumber}
                                   autoComplete={'tel'}
                                   onChange={(e) => {
                                       let value = e.target.value;
                                       if (value.startsWith('0')) {
                                           value = '254' + value.slice(1);
                                       }
                                       setInput(value, setPhoneNumber, setPhoneNumberError, (input) => {
                                           const phoneRegex = /^254\d{9}$/;
                                           return phoneRegex.test(input);
                                       })
                                   }}
                            />
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (phoneNumberError ? '' : 'none')}>
                                {phoneNumberError}
                            </p>

                        </div>
                        <div className="mb-6 relative">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="input input-bordered input-md w-full max-w-md" id="password"
                                   type={passwordType} placeholder="************"
                                   value={password}
                                   onChange={(e) => {
                                       setInput(e.target.value, setPassword, setPasswordError, (input) => {
                                           return input.trim() !== '';
                                       })
                                   }}
                            />
                            <span className="absolute right-0 top-[30px] mt-2 mr-2">
                                <button type="button" className="btn btn-xs btn-circle btn-ghost"
                                        onClick={() => {
                                            setIsPasswordVisible(!isPasswordVisible);
                                            setPasswordType(isPasswordVisible ? 'password' : 'text');
                                        }
                                        }>
                                    <i className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </span>
                            <p className={'text-red-400 text-sm font-semibold p-1 ' + (passwordError ? '' : 'none')}>
                                {passwordError}
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                                    onClick={submitForm}
                                    type="button">
                                Register
                            </button>
                        </div>
                        <div className="flex text-[12px] underline underline-offset-2 gap-3">
                            <Link className="inline-block align-baseline my-2 text-blue-500 hover:text-blue-800"
                                  href={"/auth/recovery"}>
                                Forgot Password?
                            </Link>
                            <Link className={'inline-block align-baseline my-2 text-blue-500 hover:text-blue-800'}
                                  href={'/auth/login'}>
                                Already have an account? Sign In
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default RegisterPage;
