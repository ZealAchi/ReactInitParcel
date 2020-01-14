const locale = {
  'en-us': {
    items_per_page: '/Page',
    jump_to: 'Page',
    page: '',
    total: total => `Total ${total} items`,
    item: ' entries',
    pageNo: page => `Page ${page}`,
    ok: 'Go',
  },
  'zh-cn': {
    items_per_page: '条/页',
    jump_to: '跳至',
    page: '页',
    total: total => `共 ${total} 条`,
    item: '条',
    pageNo: page => `第 ${page} 页`,
    ok: '确定',
  },
};
locale.en = locale['en-us'];

export default locale;
