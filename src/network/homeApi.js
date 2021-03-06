import {
  http,testHttp
} from './http.js'

const config = {
  url: '/home/multidata'
}
export function getHomeMultidata() {
  const instance = http()

  return instance(config)
}
export function getHomeData(qs){
  const instance = http()
  return instance({
    url:`/home/data?${qs}`
  })
}

export function getDemoData(qs){
  const instance = testHttp()
  return instance({
    url:`/homeGoods?${qs}`
  })
}
