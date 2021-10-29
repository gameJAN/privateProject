module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "commonjs": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
      'semi': [0, 'always'],
      // 强制在 function的左括号之前使用一致的空格
      'space-before-function-paren': [1, 'always'],
      'lines-around-comment': 1,
      // 操作符前后要加空格
      'space-infix-ops': 1,
      // 关键字前后必须有空格
      'keyword-spacing': 2,
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
      // 'prettier/prettier': 'error'
    }
};