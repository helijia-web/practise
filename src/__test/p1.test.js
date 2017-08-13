import { union, intersect, minus, modifyTags } from '../p1';


it('test', () => {
  const a = union([1, 2, 3, 4], [2, 3, 5, 7])
  expect(a).toEqual([1, 2, 3, 4, 5, 7]);

  const b = intersect([1, 2, 3], [2, 3, 4]);
  expect(b).toEqual([2, 3]);

  const c = minus([1, 2, 3, 4, 5], [2, 3]);
  expect(c).toEqual([1, 4, 5]);


  // 原来的标签
  const origin = ['html', 'webpack', 'react', 'vue'];
  // 现有的标签
  const current = ['html', 'react', 'js', 'css'];

  // 需要的操作
  const oplist = modifyTags(origin, current);
  expect(oplist).toEqual([
    // 即添加两个标签 js,css 删除两个标签 webpack和vue
    { value: 'js', op: 'add' },
    { value: 'css', op: 'add' },
    { value: 'webpack', op: 'remove' },
    { value: 'vue', op: 'remove'}
  ]);
});

