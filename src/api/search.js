import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    needNewCode: 1,
    platform: 'h5',
    notice: 0
  });
  return jsonp(url, data, options)
}
