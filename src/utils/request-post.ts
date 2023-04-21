import events from "events";
import axios from "axios";

interface LoginFormInputs {
    email: string;
    password: string;
}
export const requestPost = (data:LoginFormInputs, event: events) => {
    event.preventDefault();
    axios.post('http://localhost:8080/register', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
