// 用于保存搜索结果
import storage from 'good-storage'

const SEARCH_KEY = '_search_';
const SEARCH_MAX_LENGTH = 10;

function insertArray(arr, val, compare, maxLength) {
  const index = arr.findIndex(compare);
  if(index === 0){
    return
  }
  if(index > 0) {
    arr.splice(index,1)
  }
  arr.unshift(val);
  if(maxLength && arr.length > maxLength) {
    arr.pop()
  }
}
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, []);
  insertArray(searches, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH);
  storage.set(SEARCH_KEY, searches);
  return searches
}

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}
