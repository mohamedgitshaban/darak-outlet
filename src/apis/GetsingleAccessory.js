import axios from "axios";

export default async function Getsingleaccessory(id) {
    
    const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/accessories/'+id);
    return response;

}