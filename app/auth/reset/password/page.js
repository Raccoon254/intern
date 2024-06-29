'use client'
import React, { useState, useEffect } from 'react';
import { signOut, useSession } from "next-auth/react";
import axios from 'axios';
import { useSnackbar } from 'notistack';
import Link from "next/link";

const ResetPassword = () => {
    const { data: session } = useSession();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordType, setPasswordType] = useState('password');
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const resetToken = urlParams.get('token');
        if (resetToken) {
            setToken(resetToken);
        } else {
            enqueueSnackbar('Invalid or missing token', { variant: 'error' });
            enqueueSnackbar('Redirecting to login page...', { variant: 'info' });
            setTimeout(() => {
                window.location.href = '/login';
            }, 3000);
        }
    }, [enqueueSnackbar]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            enqueueSnackbar('Passwords do not match', { variant: 'error' });
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/reset-password', {
                token,
                password,
            });
            enqueueSnackbar(response.data.message, { variant: 'success' });
            window.location.href = '/login';
        } catch (error) {
            enqueueSnackbar(error.response?.data?.message || 'Error resetting password', { variant: 'error' });
        } finally {
            setLoading(false);
        }
    };

    if (session) {
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
                            <div className="absolute top-[35px] right-0 mb-4 text-xs font-medium text-orange-800">
                                By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace</a>
                            </div>
                        </div>
                    </center>
                    <div className="w-full flex justify-center items-center flex-col mt-8">
                        <center>
                            <div
                                className="flex w-full items-center justify-center rounded-lg py-12 px-4 sm:px-6 lg:px-8">
                                <div className="max-w-md w-full space-y-8">
                                    <div>
                                        <div className="avatar">
                                            <i className={'fas fa-user-circle fa-5x'}></i>
                                        </div>
                                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                                            You are signed in as
                                        </h2>
                                        <p className="mt-2 text-center text-sm text-gray-600">
                                            {session.user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </center>
                        <div className="flex mt-4 flex-col sm:flex-row w-9/12 gap-3 items-center justify-between">
                            <div className="w-full">
                                <button className={'btn btn-outline text-red-600 ring-2  ring-offset-1 w-full'}
                                        onClick={() => signOut()}>
                                    Sign Out <i className="fas fa-sign-out-alt"> </i>
                                </button>
                            </div>
                            <Link className={'w-full'} href={'/intern/dashboard'}>
                                <button className={'btn btn-outline btn-secondary ring-2  ring-offset-1 w-full'}>
                                    Dashboard <i className="fas fa-arrow-right"> </i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <div className="min-h-screen grid place-items-center w-full">
            <div className="w-full max-w-md m-4 p-4 ">
                <center>
                    <h2 className="mb-6">
                        Reset Password
                    </h2>
                </center>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-gray-700">New Password</label>
                        <input
                            type={passwordType}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered mt-2 input-md w-full max-w-md"
                            required
                        />
                        <span className="absolute right-0 top-[33px] mt-2 mr-2">
                            <button type="button" className="btn btn-xs btn-circle btn-ghost"
                                    onClick={() => {
                                        setIsPasswordVisible(!isPasswordVisible);
                                        setPasswordType(isPasswordVisible ? 'password' : 'text');
                                    }}>
                                <i className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </span>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            type={passwordType}
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="input mt-2 input-bordered input-md w-full max-w-md"
                            required
                        />
                        <span className="absolute right-0 top-[33px] mt-2 mr-2">
                            <button type="button" className="btn btn-xs btn-circle btn-ghost"
                                    onClick={() => {
                                        setIsPasswordVisible(!isPasswordVisible);
                                        setPasswordType(isPasswordVisible ? 'password' : 'text');
                                    }}>
                                <i className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </span>

                        { passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p> }
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-outline btn-secondary ring-2  ring-offset-1 w-full"
                            disabled={loading}
                        >
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
