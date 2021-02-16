import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-33dfa-default-rtdb.firebaseio.com/'
});

export default instance;