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

  getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric);
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
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
    url: `http://dl.stream.qqmusic.qq.com/C400${musicData.songmid}.m4a?fromtag=38&vkey=523A53626918AD86E2877A9821F1168C2277D4F2B930F18CBA5CC0D6AD6A3474B9917083EA858F6C8C3E832E68E44778A4C8EE93DC6EA7F9&guid=5301976172`
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

