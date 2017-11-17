import React, {Component} from 'react'
import {FormattedMessage} from 'react-intl';

class Internationalize extends Component {
  render() {
    const {name} = this.props.user;
    return (<p>
      <FormattedMessage
        id="common.hi"
        defaultMessage={`Hello {username}`}
        values={{ username: <b>{name}</b> }}
      />
    </p>);
  }
}

export default Internationalize
