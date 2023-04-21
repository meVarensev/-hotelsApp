import axios from "axios";

interface LoginFormInputs {
    email: string;
    password: string;
}
//http://localhost:8080/
export const requestPost = (data:LoginFormInputs) => {

    axios.post('https://majestic-speculoos-05b0be.netlify.app/register', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
