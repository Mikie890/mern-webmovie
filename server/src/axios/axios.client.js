import axios from "axios";

// Function to make a GET request to the server
const get = async (url) => {
    const res = await axios.get(url); 
    return res.data; 
};

export default get;