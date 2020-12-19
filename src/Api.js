import axios from 'axios'

axios.defaults.withCredentials = true
export const Api = axios.create({
  baseURL:
    process.env.VUE_APP_API_ENDPOINT ||
    'https://api.coronavirus.data.gov.uk/v1/data',
})
