import axios from 'axios'

const instance = axios.create({

    baseURL: '...' // the api URL (CLOUD FUNCTION)
})

export default instance;