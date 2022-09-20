import { Axios } from 'axios'

export default class API {
  protected readonly axios: Axios = new Axios({
    baseURL: import.meta.env.API_BASE_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.TEMP_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
}
