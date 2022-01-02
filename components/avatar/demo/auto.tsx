import React from 'react';
import Avatar from '..';
import '../style';
import './index.less';

const textList = ['Zhong', 'An', 'Component', 'Library', 'Zarm-Web'];
const colorList = ['#48f57b', '#a6e62f', '#ffbf00', '#38ae83', '#34cd83'];

class Demo extends React.Component {
  state = {
    showIndex: 0,
  };

  textListLastIndex = textList.length - 1;

  onChangeTextPlay = () => {
    const { showIndex } = this.state;
    const { textListLastIndex } = this;
    this.setState({
      showIndex: showIndex < textListLastIndex ? showIndex + 1 : 0,
    });
  };

  render() {
    const { showIndex } = this.state;

    return (
      <>
        <Avatar size={'lg'} style={{ backgroundColor: `${colorList[showIndex]}` }}>
          {textList[showIndex]}
        </Avatar>
        <button onClick={this.onChangeTextPlay} style={{ marginLeft: 15 }}>
          Change
        </button>
      </>
    );
  }
}

export default Demo;
