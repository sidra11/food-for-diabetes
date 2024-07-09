import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-native-9927a-default-rtdb.firebaseio.com/',
});

export default instance;