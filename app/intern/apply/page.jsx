'use client'
import React, { useState, useEffect } from 'react'
import NavBar from '/app/components/NavBar'
import { useSession } from 'next-auth/react'
import Loading from '/app/loading'
import { useSnackbar } from 'notistack';

const ApplyPage = () => {
    const { data: session } = useSession()
    const [job, setJob] = useState(null)
    const { enqueueSnackbar } = useSnackbar()
    const [formData, setFormData] = useState({
        coverLetter: '',
        resume: '',
        studentId: session?.user?.id,
        jobPostingId: ''
    })

    useEffect(() => {
        document.title = 'InternLink™'
        const urlParams = new URLSearchParams(window.location.search)
        const jobID = urlParams.get('internship')

        // Fetch the job details
        fetch(`/api/postings/${jobID}`)
            .then((response) => response.json())
            .then((data) => {
                setJob(data)
                setFormData((prevData) => ({ ...prevData, jobPostingId: data.id }))
                console.log(data)
            })
            .catch((error) => {
                enqueueSnackbar('Error fetching job application ' + error, { variant: 'error' });
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
        // If the studentId is not available, return
        if (!formData.studentId) {
            enqueueSnackbar('Error submitting application: Student ID not available', { variant: 'error' });
            return
        }
        const response = await fetch('/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        const data = await response.json()
        if (response.ok) {
            enqueueSnackbar('Application submitted successfully!', { variant: 'success' });
        } else {
            enqueueSnackbar('Failed to submit application: ' + data.error, { variant: 'error' });
        }
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
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p>{job.description}</p>
                <p><strong>Requirements:</strong> {job.requirements}</p>
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p><strong>Status:</strong> {job.status}</p>
                <p><strong>Application Deadline:</strong> {new Date(job.applicationDeadline).toLocaleDateString()}</p>
                
                <h2 className="text-xl font-bold mt-4">Department Details</h2>
                <p><strong>Name:</strong> {job.department.name}</p>
                <p><strong>Description:</strong> {job.department.description}</p>
                
                <h2 className="text-xl font-bold mt-4">Organization Details</h2>
                <p><strong>Name:</strong> {job.department.organization.name}</p>
                <p><strong>Logo:</strong> <img src={job.department.organization.logo} alt={job.department.organization.name} /></p>
                <p><strong>Banner:</strong> <img src={job.department.organization.banner} alt={`${job.department.organization.name} Banner`} /></p>
                <p><strong>Website:</strong> <a href={job.department.organization.website} target="_blank" rel="noopener noreferrer">{job.department.organization.website}</a></p>
                <p><strong>Employees:</strong> {job.department.organization.employees}</p>
                <p><strong>Email:</strong> {job.department.organization.email}</p>
                <p><strong>Address:</strong> {job.department.organization.address}</p>
                <p><strong>Contact Info:</strong> {job.department.organization.contactInfo}</p>
                <p><strong>Bio:</strong> {job.department.organization.bio}</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                    <label>
                        Cover Letter:
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            rows="4"
                            required
                        />
                    </label>
                    <label>
                        Resume (URL):
                        <input
                            type="url"
                            name="resume"
                            value={formData.resume}
                            onChange={handleChange}
                            className="border p-2 w-full"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ApplyPage