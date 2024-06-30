'use client'
import React, { useState, useEffect } from 'react';
import { signOut, useSession } from "next-auth/react";
import axios from 'axios';
import { useSnackbar } from 'notistack';
import LoggedInNotification from "@/app/components/LoggedInNotification";

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
                window.location.href = '/auth/login';
            }, 3000);
        }
    }, [enqueueSnackbar]);

    const validatePassword = (password) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        return re.test(password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            enqueueSnackbar('Passwords do not match', { variant: 'error' });
            return;
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 6 characters long and contain at least one number, one uppercase and one lowercase letter');
            enqueueSnackbar('Invalid password', { variant: 'error' });
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('/api/auth/reset/password', {
                token,
                password,
            });
            enqueueSnackbar(response.data.message, { variant: 'success' });
            window.location.href = '/auth/login';
        } catch (error) {
            enqueueSnackbar(error.response?.data?.message || 'Error resetting password ['+error+']', { variant: 'error' });
        } finally {
            setLoading(false);
        }
    };

    if (session) {
        return (<LoggedInNotification />);
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
