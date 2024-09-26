import axios from "axios";

export default async function GetsingleVanity(id) {
    
    const response = await axios.get('https://darakapi.darakoutlet.com/api/v1/Vanities/'+id);

    return response;
}