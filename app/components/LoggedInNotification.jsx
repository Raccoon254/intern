import {signOut, useSession} from "next-auth/react";
import Link from "next/link";
import React from "react";

const LoggedInNotification = () => {

    const {data: session} = useSession()

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
                            By <a className={'text-blue-500'} href="https://futurespace.vercel.app">FutureSpace </a>
                            and <a className={'text-blue-500'} href="https://stevetom.vercel.app">kenTom</a>
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
                                        { session.user.email }
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

export default LoggedInNotification;
