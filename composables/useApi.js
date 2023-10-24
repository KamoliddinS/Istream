import axios from 'axios' 

export const useApi = () => {
  const baseURL = 'https://BASE_URL.com' 

  return axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer token`
    }
  })
}
