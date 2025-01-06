import axios from 'axios';

const BASE_URL = 'http://localhost:8080'

export const fetchJobApplications = async () => {
    const response = await axios.get(`${BASE_URL}/job-applications`);
    return response.data
}

export const fetchJobApplicationById = async (id) => {
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

export const updateJobApplication = async (id, application) => {
    const response = await axios.put(`${BASE_URL}/job-applications/${id}`, application);
    // console.log(response.data);
    return response.data;
}

export const fetchStats = async () => {
    const response = await axios.get(`${BASE_URL}/stats/summary`);
    console.log(response.data);
    return response.data;
}