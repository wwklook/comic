import axios from 'axios'

export function requests(config) {
  const instance = axios.create({
    baseURL: "http://www.wwklook.com/caricature/",
    timeout: 10000,
  })
  //   instance.interceptors.response.use(res => {
  //     return res.data
  //   })
  return instance(config)
}