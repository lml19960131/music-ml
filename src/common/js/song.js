// import {getLyric} from 'api/song'
import {ERR_OK} from '../../../src/api/config'
// import {Base64} from 'js-base64'

//对象改设计成类
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid, //url有时用id的数据有时用mid的数据
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=5301976172&vkey=E1C98BD6D3381E680B97D2F8EA2A2C76BA0D605C76927FE17250B066552F14CC95EAB9BCEEA00AEEEB4BFB7D60E81E46B24FEA8FA522D2BA&uin=0&fromtag=999`
  })
}

export function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  });
  return ret.join('/')
}

