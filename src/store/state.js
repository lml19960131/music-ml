//1.首先定义和项目相关的数据

import {playMode} from '../common/js/config'
import {loadSearch} from '../common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  topList: {},
  searchHistory: loadSearch()
};

export default state;
