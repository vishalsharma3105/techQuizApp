import axios from "axios";

export default axios.create({
   
    baseURL:"https://quizapi.io/api/v1",
    headers:{
        
        'X-Api-Key':  process.env.REACT_APP_API_KEY
    }

});

