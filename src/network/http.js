import axios from 'axios'

const baseConfig = {
  baseURL: 'http://123.207.32.32:8000',
  timeout: 2000
}

export function http() {
  return axios.create(baseConfig)
}


const testConfig = {
  baseURL: 'http://localhost:3000',
  timeout: 2000
}
export function testHttp(){
    return axios.create(testConfig)
}
