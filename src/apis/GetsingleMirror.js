import axios from "axios";

export default async function GetsingleMirror(id) {
    
    const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/Mirrors/'+id);
    return response;
}