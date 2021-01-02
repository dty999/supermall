import {
  http
} from './http.js'

export function getDetailData(iid) {
  const instance = http()
  return instance({
    url:'/detail/'+iid
  })
}
export function getRecommend(){
  const instance = http()
  return instance({
    url:'/recommend'
  })
}
