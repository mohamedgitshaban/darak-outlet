import axios from "axios";
export default async function Addvanity(data) {
    // console.log("in request ");
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/Vanities/',data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }