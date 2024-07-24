'use client'
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useSnackbar } from 'notistack'
import LoggedInNotification from '@/app/components/notifications/LoggedInNotification'

const ForgotPassword = () => {
	const { data: session } = useSession()
	const [email, setEmail] = React.useState('')
	const [emailError, setEmailError] = React.useState('')
	const { enqueueSnackbar } = useSnackbar()

	const resetPassword = async () => {
		if (!validateEmail(email)) {
			setEmailError('Invalid email')
			enqueueSnackbar('Invalid email', { variant: 'error' })
			return
		}
		const data = {
			email: email,
		}
		fetch('/api/auth/reset', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(async (response) => {
				const res = await response.json()
				if (res.error) {
					console.error(res.error)
					enqueueSnackbar('Failed to reset password [' + res.error + ']', { variant: 'error' })
					return
				}
				enqueueSnackbar('Password reset link sent to your email', { variant: 'success' })
			})
			.catch((error) => {
				console.error(error)
				enqueueSnackbar('Failed to reset password  [' + error + ']', { variant: 'error' })
			})
	}

	const validateEmail = (email) => {
		const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
		return re.test(email)
	}

	if (session) {
		return <LoggedInNotification />
	}

	return (
		<div className="min-h-screen grid place-items-center w-full">
			<div className="w-full max-w-md m-4 p-4 ">
				<center>
					<h2 className="">Forgot Password</h2>
				</center>
				<div className="w-full mt-4">
					<form className="p-6 rounded">
						<p className="text-xs max-w-md mb-6 overflow-ellipsis text-gray-500">
							Enter your email address and we will send you a link to reset your password.
						</p>
						<div className="mb-4">
							<label className="block text-gray-700 text-sm mb-2" htmlFor="email">
								Email
							</label>
							<input
								className="input input-bordered input-md w-full max-w-md"
								value={email}
								autoComplete="email"
								onChange={(e) => {
									setEmail(e.target.value)
									validateEmail(e.target.value) ? setEmailError('') : setEmailError('Invalid email')
								}}
								id="email"
								required
								type="email"
								placeholder="Email"
							/>
							{emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
						</div>
						<div className="flex items-center justify-between">
							<button
								className="btn btn-outline btn-secondary ring-2 ring-offset-1 w-full"
								onClick={() => {
									resetPassword().then((r) => console.log(r))
								}}
								type="button"
							>
								Submit <i className="fas fa-paper-plane"> </i>
							</button>
						</div>
					</form>
				</div>
			</div>

			<p className="text-center text-gray-500 bottom-0 py-8 bg-green-300 w-full absolute text-sm">
				&copy;{new Date().getFullYear()} kenTom™. All rights reserved.
			</p>
		</div>
	)
}

export default ForgotPassword
