// 在测试环境创建完成后为每一个测试文件都引入 该文件，为 Jest 提供了更多适配 React 的匹配器。
const Enzyme = require('enzyme');
const Adapter =
  process.env.REACT === '16'
    ? require('enzyme-adapter-react-16')
    : require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });
