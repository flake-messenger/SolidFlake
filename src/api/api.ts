import { Axios } from 'axios'

export default class API {
  private readonly axios: Axios = new Axios({
    baseURL: process.env.API_BASE_URL,
    headers: {
      Authorization: `Bearer ${process.env.TEMP_TOKEN}`,
      'Content-Type': 'application/json',
    },
  })
}
