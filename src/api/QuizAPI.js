import axios from "axios";

export default axios.create({
    baseURL:"https://quizapi.io/api/v1",
    headers:{
        'X-Api-Key':"sHKf2O9bd1zsYmGSuAJHTeeBvGnZJBH1b9T8PLNU"
    }

});

