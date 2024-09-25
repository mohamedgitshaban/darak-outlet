import axios from "axios";
export default async function AddAccessory(data) {
    console.log(data);
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/accessories/', data);  
          return response;
    } catch (error) {
      console.error(error);
    }
  }