import { urlSetParams } from '../utils';

export default function djangoAdapter(url, options) {
  const {
    multiple, adapterType,
  } = options;

  let {
    width, height,
  } = options;

  // 由于oss的url是可以任意配置的，所以这里必须强制指定
  if (adapterType !== 'oss') {
    return url;
  }

  // 去掉px
  if (width.toString().slice(-2) === 'px') {
    width = width.toString().slice(0, -2);
  }

  if (height.toString().slice(-2) === 'px') {
    height = height.toString().slice(0, -2);
  }

  // 如果传入的width、height 中存在非数字，那么直接返回，比如 100em, 100%, auto, 100rem 等
  if (window.parseInt(width, 10).toString() !== width.toString()
    || window.parseInt(height, 10).toString() !== height.toString()) {
    return url;
  }

  // oss 裁剪最大支持4096
  width = Math.min(width * multiple, 4096);
  height = Math.min(height * multiple, 4096);

  // django的zoom拼接很灵活，服务端会自动处理能够返回的大小
  return urlSetParams(url, {
    'x-oss-process': `image/resize,w_${width},h_${height}`,
  });
}
