import React, { Component } from 'react';
import propTypes from 'prop-types';
import generateDataBase64ByCanvas from '../../lib/WarterMark/utils/generateDataBase64ByCanvas.js';
import generateWarterMarkImageByCanvas from '../../lib/WarterMark/utils/generateWarterMarkImageByCanvas.js';
import HForm from '../../lib/HForm/HForm.jsx';

class DemoWarterMark extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      src: '',
      text: '',
    }
  }

  componentDidMount() {
    generateWarterMarkImageByCanvas({
      url: '/img/pic.jpg',
      text: 'JIAO ZU'
    }).then((resp) => {
      this.setState({ src: resp });
    })
  }

  onChange = ({ id, value }) => {
    if (id === 'btn') {
      this.props.onUpdate({ id: 'warterMarkText', value: this.state.text });
    } else {
      this.setState({ [id]: value });
    }
  }

  render() {

    const warterMark = generateDataBase64ByCanvas({
      text: 'WangKun',
    });

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
            id: 'btn',
            type: 'button',
            api: {
              type: 'primary',
            },
            ext: {
              value: '1',
              label: '提交',
            }
          },
          extMap: {
            label: false,
          }
        }
      ],
      onChange: this.onChange,
      values: {
        text: this.state.text,
      }
    }

    return (
      <div>
        <div className="inline item-box" style={{ backgroundImage: `url(${warterMark})` }} />
        <div className="inline item-box" style={{ backgroundImage: `url(${this.state.src})` }} />
        <HForm {...HFormProps} />
      </div>
    )
  }

}

DemoWarterMark.propTypes = {

}

export default DemoWarterMark;
