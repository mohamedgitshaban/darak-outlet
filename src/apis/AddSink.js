import axios from "axios";
export default async function Addsink(data) {
    // console.log("in request ");
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/sink/',data);
      return response;
    } catch (error) {
      console.error(error);
    }
  }