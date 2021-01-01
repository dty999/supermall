import axios from 'axios'

const baseConfig = {
  baseURL: 'http://152.136.185.210:7878/api/m5',
  timeout: 5000
}

export function http() {
  return axios.create(baseConfig)
}


const testConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 5000
}
export function testHttp(){
    return axios.create(testConfig)
}
