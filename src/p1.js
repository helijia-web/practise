/**
 * 计算两个集合的并集
 *
 * @param {Array} a  - 集合a
 * @param {Array} b  - 集合b
 * @return {Array}   - 并集
 */
export function union(a, b) {
  // 使用数组方法完成
  return [1, 2, 3, 4, 5, 7];
}


/**
 * 计算两个集合的交集
 *
 * @param {Array} a   - 集合a
 * @param {Array} b   - 集合b
 * @return {Array}    - 交集
 */
export function intersect(a, b) {
  // 要求同上
  return [2, 3];
}


/**
 * 计算两个集合的差集
 *
 * @param {Array} a   - 集合a
 * @param {Array} b   - 集合b
 * @return {Array}    - 差集
 */
export function minus(a, b) {
  // 要求同上
  return [1, 4, 5];
}


/**
 * tags操作
 *
 * @param {Array} origin   - 原tags
 * @param {Array} current  - 目前tags
 */
export function modifyTags(origin, current) {
  // 请修改成正常的函数
  return [
    { value: 'js', op: 'add' },
    { value: 'css', op: 'add' },
    { value: 'webpack', op: 'remove' },
    { value: 'vue', op: 'remove'}
  ]
}
