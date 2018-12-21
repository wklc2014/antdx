import { connect } from 'react-redux';
import React, { Component } from 'react';
import propTypes from 'prop-types';
import DemoLines from './DemoLines.jsx';
import DemoWarterMark from './DemoWarterMark.jsx';
import TagEditAble from '../../lib/TagEditAble/TagEditAble.jsx';

class Home extends Component {

  static defaultProps = {

  }

  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {
          id: 1,
          label: 'A',
          closable: true,
        },
        {
          id: 2,
          label: 'B',
          closable: true,
        },
        {
          id: 3,
          label: 'C',
        },
        {
          id: 4,
          label: 'D',
          closable: true,
          editable: true,
        },
      ],
    }
  }

  onChange = (tags) => {
    this.setState({ tags });
  }

  render() {
    const { warterMarkText } = this.props;
    const { tags } = this.state;

    const TagEditAbleProps = {
      tags,
      onChange: this.onChange,
    }

    return (
      <div>
        <DemoLines />
        <DemoWarterMark
          text={warterMarkText}
          onUpdate={this.props.onUpdate}
        />
        <TagEditAble {...TagEditAbleProps} />
      </div>
    )
  }

}

Home.propTypes = {

}

export default Home;
