import { requests } from './index'

export function isLogin() {
  return requests({
    url: '/is_login',
  })
}

export function get_hot_search() {
  return requests({
    url: '/get_hot_search',
  })
}


export function search_cartoon(keyword, orderby='click', pn=1) {
  return requests({
    url: '/search_cartoon',
    params: {
      keyword,
      orderby,
      pn
    }
  })
}

export function get_chapterinfo(comic_id, chapter_newid) {
  return requests({
    url: '/get_chapterinfo',
    params: {
      comic_id,
      chapter_newid
    }
  })
}

export function get_chapter(comic_id) {
  return requests({
    url: '/get_chapter',
    params: {
      comic_id
    }
  })
}