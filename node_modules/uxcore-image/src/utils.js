
const getDPR = () => {
  if (typeof window !== 'undefined') { return window.devicePixelRatio || 1; }
  return 1;
};

const handleImageSrc = (props, adapter) => {
  const {
    enableUrlAdapter, adapterType, src,
    width = '', height = '', type,
  } = props;

  const options = {
    multiple: getDPR(),
    type,
    adapterType,
    width,
    height,
  };

  if (enableUrlAdapter) {
    // 如果指定了适配器类型，那么直接使用
    if (adapterType) {
      return adapter[adapterType](src, options);
    }

    // 如果没有指定适配器类型，那么遍历所有适配器
    const adapterKeys = Object.keys(adapter);
    for (let i = 0; i < adapterKeys.length; i++) {
      const newUrl = adapter[adapterKeys[i]](src, options);

      if (newUrl !== src) {
        return newUrl;
      }
    }
  }
  return src;
};

const isDocumentLoaded = () => {
  if (typeof document !== 'undefined') {
    return document.readyState === 'complete';
  }
  return true;
};


const getParams = (url, key) => {
  const modifiedUrl = url.slice(url.indexOf('?') + 1);

  const list = modifiedUrl.split('&');
  const params = {};

  list.forEach((item) => {
    const tmp = item.split('=');
    const [paramsKey, value] = tmp;
    params[paramsKey] = value;
  });

  return key ? params[key] : params;
};

const urlSetParams = (url, data) => {
  let anchor = '';

  let modifiedUrl = url;

  if (modifiedUrl.indexOf('#') > -1) {
    anchor = modifiedUrl.slice(modifiedUrl.indexOf('#'));
    modifiedUrl = modifiedUrl.slice(0, modifiedUrl.indexOf('#'));
  }

  if (modifiedUrl.indexOf('?') > -1) {
    const path = modifiedUrl.slice(0, modifiedUrl.indexOf('?'));

    // 获取目标url的参数
    const params = getParams(modifiedUrl);

    // 删掉同名参数
    Object.keys(params).forEach((key) => {
      Object.keys(data).forEach((k) => {
        if (key.toLowerCase() === k.toLowerCase()) {
          delete params[key];
        }
      });
    });

    // 添加data
    Object.keys(data).forEach((k) => {
      params[k] = data[k];
    });

    const paramsList = [];

    Object.keys(params).forEach((key) => {
      paramsList.push(`${key}=${params[key]}`);
    });

    return `${path}?${paramsList.join('&')}${anchor}`;
  }
  const paramsList = [];

  Object.keys(data).forEach((k) => {
    paramsList.push(`${k}=${data[k]}`);
  });
  return `${modifiedUrl}?${paramsList.join('&')}${anchor}`;
};

export {
  getDPR,
  handleImageSrc,
  isDocumentLoaded,
  getParams,
  urlSetParams,
};
