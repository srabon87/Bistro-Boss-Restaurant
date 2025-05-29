import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-xi-orpin.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;