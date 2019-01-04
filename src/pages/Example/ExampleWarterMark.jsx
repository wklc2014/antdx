import React, { Component } from 'react';
import propTypes from 'prop-types';
import HForm from '../../lib/HForm/HForm.jsx';
import WarterMark from '../../lib/WarterMark/WarterMark.jsx';

class ExampleWarterMark extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      src: '',
      text: 'wangkun',
      fontSize: 22,
      textRotate: -20,
    }
  }

  componentDidMount() {
    // generateWarterMarkImageByCanvas({
    //   url: '/img/pic.jpg',
    //   text: 'JIAO ZU'
    // }).then((resp) => {
    //   this.setState({ src: resp });
    // })
  }

  onChange = ({ id, value }) => {
    this.setState({ [id]: value });
  }

  render() {
    const { text, fontSize, textRotate } = this.state;

    const HFormProps = {
      configs: [
        {
          config: {
            id: 'text',
            type: 'input',
          },
          extMap: {
            label: '水印文字',
          },
        },
        {
          config: {
            id: 'fontSize',
            type: 'number',
          },
          extMap: {
            label: '字体大小',
          }
        },
        {
          config: {
            id: 'textRotate',
            type: 'number',
          },
          extMap: {
            label: '旋转角度',
          }
        }
      ],
      onChange: this.onChange,
      values: {
        text,
        fontSize,
        textRotate,
      },
    }

    const WarterMarkProps = {
      text,
      fontSize,
      textRotate,
    }

    return (
      <div>
        <WarterMark {...WarterMarkProps} />
        <HForm {...HFormProps} />
      </div>
    )
  }

}

ExampleWarterMark.propTypes = {

}

export default ExampleWarterMark;
