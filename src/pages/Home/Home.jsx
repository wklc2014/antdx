import React, { Component } from 'react';
import propTypes from 'prop-types';
import generateDataBase64ByCanvas from '../../lib/WarterMark/utils/generateDataBase64ByCanvas.js';
import generateWarterMarkImageByCanvas from '../../lib/WarterMark/utils/generateWarterMarkImageByCanvas.js';

class Home extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      src: '',
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

  render() {
    const {

    } = this.props;

    const warterMark = generateDataBase64ByCanvas({
      text: 'WangKun',
    });

    return (
      <div>
        <h2>线</h2>
        <div className="line-item line-diagonal">
          <span>对角线</span>
        </div>
        <div className="line-item line-level">
          <span>水平线</span>
        </div>
        <div className="line-item line-vertical">
          <span>垂直线</span>
        </div>
        <div className="item-box" style={{ backgroundImage: `url(${warterMark})` }} />
        <div className="item-box" style={{ backgroundImage: `url(${this.state.src})` }} />
      </div>
    )
  }

}

Home.propTypes = {

}

export default Home;
