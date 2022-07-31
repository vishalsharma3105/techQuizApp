import axios from "axios";
import keyDemo from '../netlify/functions/quizAppNetlify.js'

export default axios.create({
    
    baseURL:"https://quizapi.io/api/v1",
    headers:{
        
        'X-Api-Key':  keyDemo
    }

});

