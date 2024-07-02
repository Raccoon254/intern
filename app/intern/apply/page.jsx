'use client'
import React, { useState, useEffect } from 'react'
import NavBar from '/app/components/NavBar'
import { useSession } from 'next-auth/react'
import Loading from '/app/loading'
import {useSnackbar} from 'notistack';

const ApplyPage = () => {
	const { data: session } = useSession()
	const [job, setJob] = useState(null)
    const { enqueueSnackbar } = useSnackbar()
	const [formData, setFormData] = useState({
		coverletter: '',
        resume: '',
        studentId: session?.user?.id,
        jobPostingId: ''
	})

	useEffect(() => {
		document.title = 'InternLink™'
		enqueueSnackbar('Fetching job data',{variant: "success"})
		const urlParams = new URLSearchParams(window.location.search)
		const jobID = urlParams.get('internship')

		//fetch the job details
		fetch(`/api/postings/${jobID}`)
			.then((response) => response.json())
			.then((data) => {
				enqueueSnackbar('Details fetch success', {variant: 'success'});
				setJob(data)
				console.log(data)
				/*
                sample data is 
                {
    "id": 20,
    "title": "Operations Manager",
    "description": "Manage day-to-day operations to ensure efficiency and effectiveness.",
    "requirements": "Experience in operations management. Strong organizational skills.",
    "type": "JOB",
    "location": "ONSITE",
    "status": "PENDING",
    "applicationDeadline": "2024-08-10T00:00:00.000Z",
    "departmentId": 9,
    "createdAt": "2024-07-01T06:38:38.718Z",
    "updatedAt": "2024-07-01T06:38:38.718Z",
    "deletedAt": null,
    "department": {
        "id": 9,
        "name": "Development",
        "organizationId": 4,
        "description": "Building advanced financial software",
        "createdAt": "2024-07-01T06:31:55.706Z",
        "updatedAt": "2024-07-01T06:31:55.706Z",
        "deletedAt": null,
        "organization": {
            "id": 4,
            "name": "FinTech",
            "logo": "https://ui-avatars.com/api/?name=FinTech+Innovations",
            "banner": "https://example.com/fintech-banner.png",
            "website": "https://fintechinnovations.com",
            "employees": "200-500",
            "email": "info@fintechinnovations.com",
            "address": "789 Finance St, Business City, CA 94040, USA",
            "contactInfo": "+1 650-789-1234",
            "bio": "Revolutionizing the finance industry with innovative tech.",
            "createdAt": "2024-07-01T06:31:55.706Z",
            "updatedAt": "2024-07-01T06:31:55.706Z",
            "deletedAt": null
        }
    }
}
                */
			})
			.catch((error) => {
				enqueueSnackbar('Error fetching job application '+ error, {variant: 'error'});
			})
	}, [])

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const response = await fetch('/api/applications', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
		const data = await response.json()
		console.log(data)
	}

	if (!job || !session) {
		return (
			<div className="overflow-hidden bg-green-100 min-h-screen">
				<NavBar />
				<div className={`bg-white p-4 sm:p-6 md:p-6`}>
					<Loading />
				</div>
			</div>
		)
	}

	return (
		<div>
			<NavBar />
			<div className="flex flex-col p-4 sm:p-6 md:p-8 gap-4 my-8">
				{/* TODO! Create the application page and display the job posting/internship details */}
			</div>
		</div>
	)
}

export default ApplyPage
