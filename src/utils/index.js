import * as axios from './axios';
import { createBrowserHistory } from "history";

const isAuthenticated = () => {
    let token = localStorage.getItem('token');
    return ( token ? 1 : 0 );
}

const history = createBrowserHistory()

export {
    axios,
    isAuthenticated,
    history
}