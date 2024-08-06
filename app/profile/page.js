'use client'
import {useSession} from "next-auth/react";
import {useSnackbar} from "notistack";

const Profile = () => {
    const {data: session} = useSession();
    const { enqueueSnackbar } = useSnackbar()

    if (!session) {
        enqueueSnackbar('Loading sign in session', { variant: 'info' });
        return (
            <div className="min-h-screen grid place-items-center w-full">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

  return(
    <div>
        <h1>Profile</h1>
    </div>
  )
}

export default Profile