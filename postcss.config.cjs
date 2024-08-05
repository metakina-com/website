module.exports = {
    plugins: [
      require('postcss-pxtorem')({
        rootValue: 16, // 根元素字体大小，通常设置为 16px
        unitPrecision: 5, // 转换后保留的小数位数
        propList: ['*'], // 可以转换的属性列表，'*' 表示所有属性
        selectorBlackList: [], // 选择器黑名单，可以排除某些选择器
        replace: true, // 是否直接替换，默认为 true
        mediaQuery: false, // 是否允许在媒体查询中转换
        minPixelValue: 0 // 设置要转换的最小像素值
      })
    ]
  };
  