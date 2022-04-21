/* eslint-disable */
export const SYSTEM_PATH = '/zolonbilling/api/web';
export const SYSTEM_LOGIN_PATH = '/zolonbilling/api/pub';
export const SYSTEM_LOGIN = '/zolonbilling/login';
import axios from "axios"

const HTTP={}

HTTP.get = (url,parms) => {
  axios.get(url)
    .then(function (response) {
      console.log('response',response);
    })
    .catch(function (error) {
      console.log(error.response);
      // if (error.response) {
      //   console.log(error.response.data);
      //   console.log(error.response.headers);
      
      // } else if (error.request) {
      //   console.log(error.request);
      // } else {
      //   console.log('Error', error.message);
      // }
      // console.log(error.config);
    })
}

export default HTTP;