/**
 * Created by xy on 15/4/16.
 */

let Validator = {};

const PATTERN = {
    EMAIL: /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,7})$/,
    URL: /^https?:\/\/(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}/,
    HEX: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i,
    NUM: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
    IDCARD: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i,
    CNMOBILE: /^(0|86|17951)?(13[0-9]|14[5-9]|15[0-9]|16[124567]|17[0-8]|18[0-9]|19[0-9]|92[0-9]|98[0-9])[0-9]{8}$/,
};

Validator.isNotEmpty = (value) => {
    // empty means empty string, empty array, empty object & null & undefined
    if (typeof value == "string") {
        return value.length !== 0
    }
    else if (typeof value == 'object') {
        if (value instanceof Array) {
            return value.length !== 0
        }
        else {
            let i = 0;
            for (let key in value) {
                i++;
            }
            return !!i;
        }
    }
    else if (typeof value == 'number') {
        return true;
    }
    else {
      if (value === false) {
        console.error('当您看到本提示时，意味着在您的表单校验代码中存在将boolean值false判断为空的情况（isNotEmpty方法），基础组件将在不久的将来更新这一错误逻辑，请及时联系褚天qili.taoqili进行升级或者使用isNotEmptyIncludeFalse代替')
      }
      return !!value;
    }
}

Validator.isNotEmptyIncludeFalse = (value) => {
  if (value === false) {
    return true
  }
  return Validator.isNotEmpty(value)
}

Validator.isNum = (value) => {
    return PATTERN.NUM.test(value);
}

Validator.isInt = (value) => {
    return Validator.isNum(value) && parseInt(value) == value;
};

Validator.isDecimal = (value) => {
    return Validator.isNum(value) && !Validator.isInt(value);
};

Validator.isArray = (value) => {
    return Array.isArray(value);
};

Validator.isRegExp = (value) => {
    if (value instanceof RegExp) {
        return true;
    }

    try {
        return !!new RegExp(value);
    } catch (e) {
        return false;
    }
};

Validator.isObject = (value) => {
    return typeof(value) === 'object' && !Validator.isArray(value);
};

Validator.isFunc = (value) => {
    return typeof(value) === 'function';
};

Validator.isEmail = (value) => {
    return typeof(value) === 'string' && PATTERN.EMAIL.test(value);
};

Validator.isUrl = (value) => {
    return typeof(value) === 'string' && PATTERN.URL.test(value);
};

Validator.isHex = (value) => {
    return typeof(value) === 'string' && PATTERN.HEX.test(value);
};

Validator.isIdCard = (value) => {
    return typeof(value) === 'string' && PATTERN.IDCARD.test(value);
};

Validator.isCNMobile = (value) => {
    return typeof(value) === 'string' && PATTERN.CNMOBILE.test(value);
};

export default Validator;
