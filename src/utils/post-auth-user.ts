import axios from "axios";
import {LoginFormInputs} from "./interface";

export const postAuthUser = (data:LoginFormInputs) => {

    axios.post('http://localhost:8080/register', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}
