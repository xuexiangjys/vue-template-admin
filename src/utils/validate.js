/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validName(str) {
  return /^[a-zA-Z0-9_-]{4,16}$/.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validMobile(str) {
  return /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(16[6])|(17[0,1,3,5-8])|(18[0-9])|(19[8,9]))\d{8}$/.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validIP(str) {
  return /\b((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\.((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\.((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\.((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\b/.test(str)
}

export function isEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return true;
  } else {
    return false;
  }
}