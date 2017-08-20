/**
 * 计算两个集合的并集
 *
 * @param {Array} a  - 集合a
 * @param {Array} b  - 集合b
 * @return {Array}   - 并集
 */
export function union(a, b) {
  return a.concat(b.filter(k => a.indexOf(k) === -1));
}


/**
 * 计算两个集合的交集
 *
 * @param {Array} a   - 集合a
 * @param {Array} b   - 集合b
 * @return {Array}    - 交集
 */
export function intersect(a, b) {
  return a.filter(k => b.indexOf(k) !== -1);
}


/**
 * 计算两个集合的差集
 *
 * @param {Array} a   - 集合a
 * @param {Array} b   - 集合b
 * @return {Array}    - 差集
 */
export function minus(a, b) {
  return a.filter(k => b.indexOf(k) === -1);
}


/**
 * tags操作
 *
 * @param {Array} origin   - 原tags
 * @param {Array} current  - 目前tags
 * @return {Array}         - 操作数据结构，请参考测试代码
 */
export function modifyTags(origin, current) {
  return minus(current, origin).map(value => ({ value, op: 'add' }))
      .concat(minus(origin, current).map(value => ({ value, op: 'remove' })));
}
