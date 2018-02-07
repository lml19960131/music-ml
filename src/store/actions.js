import * as types from './mutation-types'
import {playMode} from '../common/js/config'
import {shuffle} from '../common/js/util'
import {saveSearch, deleteSearch, clearSearchList} from '../common/js/cache'

function findIndex(list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST,list);
  if(state.mode === playMode.random){
    let randomList = shuffle(list);
    commit(types.SET_PLAYLIST, randomList);
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list);
  }
  commit(types.SET_CURRENT_INDEX, index);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random);
  commit(types.SET_SEQUENCE_LIST, list);
  let randomList = shuffle(list);
  commit(types.SET_PLAYLIST, list);
  commit(types.SET_CURRENT_INDEX, 0);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};

export const insertSong = function ({commit, state}, song) {
  let playlist = state.playlist.slice();
  let sequencelist = state.sequenceList.slice();
  let currentIndex= state.currentIndex;
  let currentSong = playlist[currentIndex];//记录当前歌曲
  let findEqualIndex = findIndex(playlist, song); //判断当前列表中是否有要插入的歌曲
  currentIndex++;
  playlist.splice(currentIndex, 0, song);//插入歌曲到初始位置
  if(findEqualIndex > -1) {
    if(currentIndex > findEqualIndex) {
      playlist.splice(findEqualIndex, 1);
      currentIndex--
    } else {
      playlist.splice(findEqualIndex + 1, 1);
    }
  }//判断插入的播放位置和插入位置的关系，并删除已有的歌曲
  let currentSIndex = findIndex(sequencelist, currentSong) + 1;//获取插入位置
  let findESIndex = findIndex(sequencelist, song);
  sequencelist.splice(currentSIndex, 0, song);
  if(findESIndex > -1){
    if(currentSIndex > findESIndex){
      sequencelist.splice(findESIndex, 1);
    } else {
      sequencelist.splice(findESIndex+1, 1);
    }
  }
  commit(types.SET_PLAYLIST, playlist);
  commit(types.SET_SEQUENCE_LIST,sequencelist);
  commit(types.SET_CURRENT_INDEX, currentIndex);
  commit(types.SET_FULL_SCREEN, true);
  commit(types.SET_PLAYING_STATE, true);
};

export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
};

export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
};

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearchList())
};

export const deleteSong = function ({commit, state}, song) {
  let playlist = state.playlist.slice();
  let sequencelist = state.sequenceList.slice();
  let currentIndex= state.currentIndex;
  let pIndex = findIndex(playlist, song);
  playlist.splice(pIndex, 1);
  let sIndex = findIndex(sequencelist, song);
  sequencelist.splice(sIndex, 1);
  if(currentIndex > pIndex || currentIndex === playlist.length){
    currentIndex--
  }
  commit(types.SET_PLAYLIST, playlist);
  commit(types.SET_SEQUENCE_LIST, sequencelist);
  commit(types.SET_CURRENT_INDEX, currentIndex);
  if(!playlist.length){
    commit(types.SET_PLAYING_STATE, false)
  } else {
    commit(types.SET_PLAYING_STATE, true);
  }
};

export const deleteSongList = function ({commit}) {
  commit(types.SET_SEQUENCE_LIST, []);
  commit(types.SET_PLAYLIST, []);
  commit(types.SET_CURRENT_INDEX, -1);
  commit(types.SET_PLAYING_STATE, false);
};
