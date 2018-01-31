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
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?guid=5301976172&vkey=5673D6083584F272217FF6BCA215D6011A58022CFFDD2D87E3529E94299AF26ADDC281D4EE6E74903C83320E1738639E8BAA6AB59B54FC2A&uin=0&fromtag=999`
  })
}

function filterSinger(singer) {
  let ret = [];
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  });
  return ret.join('/')
}

