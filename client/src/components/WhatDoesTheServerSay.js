import React from 'react';
import axios from 'axios';

class WhatDoesTheServerSay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: null,
      message: 'Trying to connect...',
      host: null
    };
  }

  async componentDidMount() {
    try {
      const resp = await axios.get(this.props.url);

      this.setState({
        code: 'HTTP '+resp.status,
        message: resp.data.message,
        host: 'Host: '+resp.data.host
      });
    } catch (error) {
      this.setState({
        message: 'Could not connect to ' + this.props.url
      });
    }
  }

  render() {
    return (
      <div className="what-does-the-server-say">
        <br />
        <div className="speech-bubble">
          <pre>{this.state.code}</pre>
          <div className="message">{this.state.message}</div>
          <div className="host">{this.state.host}</div>
        </div>
      </div>
    );
  }
}

export default WhatDoesTheServerSay;
