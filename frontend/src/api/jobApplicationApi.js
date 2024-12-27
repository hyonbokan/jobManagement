import axios from 'axios';

const BASE_URL = 'http://localhost:8080/'

export const fetchJobApplications = async () => {
    const response = await axios.get(`${BASE_URL}/job-applications`);
    return response.data
}

export const fetchJobApplicationsById = async (id) => {
    const response = await axios.get(`${BASE_URL}/job-applications/${id}`);
    return response.data;
}

export const deleteJobApplication = async (id) => {
    try {
        // await axios.delete(`${BASE_URL}/job-applications/${id}`);
        const resposne = await axios.delete(`${BASE_URL}/job-applications/${id}`);
        return resposne.status
    } catch (error) {
        throw error;
    }
}

export const createJobApplication = async (application) => {
    const response = await axios.post(`${BASE_URL}/job-applications/create-application`, application);
    return response.data;
}