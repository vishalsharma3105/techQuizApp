
const axios = require("axios");

exports.handler = async function (event, context) {
  console.log(event);
  debugger;
  console.log(context);
  try {
    const response = await axios.get(`https://quizapi.io/api/v1/questions`, {headers:{
        
      'X-Api-Key':  process.env.REACT_APP_API_KEY
  }});
    return {
      statusCode: 200,
      body: JSON.stringify({ title: response.data }),
    };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};