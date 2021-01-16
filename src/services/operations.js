const axios = require('axios')

export const fetchUsers = () => {
  const baseUrl = "https://api.enye.tech/v1/challenge/records"
  return axios.get(baseUrl)
    .then(res => res)
    .catch(e => console.log(e))
}