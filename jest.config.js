module.exports = {
  verbose: true,
  setupFiles: ['./scripts/jest/setup.js'],
  roots: ['<rootDir>/components'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^components$': '<rootDir>/components/index.tsx',
    '^components(.*)$': '<rootDir>/components/$1',
  },
  testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};


// https://github.com/wjq990112/Learning-React-Test
// module.exports = {
//   // roots 是用于指定 Jest 的根目录的，Jest 只会检测在根目录下的测试用例并运行。
//   roots: ['<rootDir>/src'],
//   // collectCoverageFrom 是用于指定测试覆盖率统计范围的：src 下的所有 js,jsx,ts,tsx 文件，同时排除 .d.ts 类型声明文件。
//   collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
//   // setupFiles 是用于指定创建测试环境前的准备文件的，这里引入 react-app-polyfill/jsdom 解决 jsdom 的兼容性问题。
//   setupFiles: ['react-app-polyfill/jsdom'],
//   // setupFilesAfterEnv 是用于指定测试环境创建完成后为每个测试文件编写的配置文件。
//   setupFilesAfterEnv: [
//     './node_modules/jest-enzyme/lib/index.js',
//     '<rootDir>/src/utils/testSetup.js', // 在测试环境创建完成后为每一个测试文件都引入 该文件，为 Jest 提供了更多适配 React 的匹配器。
//   ],
//   // testMatch 是用于配置 Jest 匹配测试文件的规则的，这里我们看到配置项中填写的是在 __tests__ 文件夹下的所有 js,jsx,ts,tsx 以及以 .spec/.test 结尾的 js,jsx,ts,tsx 文件。
//   testMatch: [
//     '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
//     '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
//   ],
//   // testEnvironment 应该能见名知义了，就是用于指定测试用例运动的环境的
//   // 我们知道 Jest 是运行在 node 环境的，但是我们的前端代码却是运行在浏览器环境中，因此我们必须使用一些方法在 node 环境下模拟浏览器环境。
//   testEnvironment: 'jest-environment-jsdom-fourteen',
//   /**
//    * 我们在测试的过程中，其实是需要去掉 CSS 和其他与组件逻辑相关性不大的静态资源的，但是在我们的组件代码中有时候又需要引入这些代码。
//     那么在我们测试的时候，就需要指定一些模块来处理/代替这些文件，不然就可能以为找不到模块的问题报错。
//     这部分的代码就是指定了所有的 js,jsx,ts,tsx 使用 babel-jest 的插件做处理，
//     所有的 css 文件使用 <rootDir>/config/jest/cssTransform.js 模块做处理，
//     所有的非 js,jsx,ts,tsx,css,json 文件，都使用 <rootDir>/config/jest/fileTransform.js 模块做处理。
//    */

//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
//     '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
//     '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)':
//       '<rootDir>/config/jest/fileTransform.js',
//   },
//   //  用于配置文件处理模块应该忽略的文件，React 官方的配置是忽略 node_modules 文件夹下的所有 js,jsx,ts,tsx，忽略所有的 CSS Module 文件。
//   transformIgnorePatterns: [
//     '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
//     '^.+\\.module\\.(css|sass|scss)$',
//   ],
//   // modulePaths 用于指定模块的查找路径，默认会在 node_modules 下查找，如果需要在其他的文件路径下查找模块，可以手动指定文件路径。
//   modulePaths: [],
//   /**
//    * moduleNameMapper 用于对模块映射处理。'^react-native$': 'react-native-web' 是对 React Native 做配置的，Web 应用可以删除，
//    * '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy' 是对 CSS Module 做映射，将 CSS Module 转换成键值对的形式。
//    */
//   moduleNameMapper: {
//     '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
//   },
//   // moduleFileExtensions 用于配置需要查找的文件后缀名
//   moduleFileExtensions: ['js', 'ts', 'tsx', 'json', 'jsx'],
//   // watchPlugins 用于指定 Jest 在 watch 模式下的插件
//   watchPlugins: [
//     'jest-watch-typeahead/filename',
//     'jest-watch-typeahead/testname',
//   ],
// };
