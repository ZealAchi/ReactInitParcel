import { urlSetParams } from '../utils';

const DJANGO_URL = 'dl.django.t.taobao.com/rest/1.0/image';
const DJANGO_DAILY_URL = 'dl-daily.django.alibaba.net/rest/1.0/image';

export default function djangoAdapter(url, options) {
  const {
    multiple, type, adapterType,
  } = options;

  let {
    width, height,
  } = options;

  // 如果手动指定了适配类型，但是却不是django，那么直接返回
  if (adapterType && adapterType !== 'django') {
    return url;
  }

  // 如果没有指定适配类型，但是url规则不符合django规则，那么返回
  if (adapterType == null
    && (url.indexOf(DJANGO_URL) === -1 && url.indexOf(DJANGO_DAILY_URL) === -1)) {
    return url;
  }

  // 如果django的图片是gif的，那么缩放有问题，这里先留个口
  if (type && type === 'gif') {
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

  // django的zoom拼接很灵活，服务端会自动处理能够返回的大小
  return urlSetParams(url, {
    zoom: `${width * multiple}x${height * multiple}`,
  });
}
