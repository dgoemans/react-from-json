import React from 'react';

export default class Button extends React.Component {

    state = {
        enabled: true
    };

    componentDidMount() {
        this.props.behavior && this.props.behavior.start(this);
    }

    enable() {
        this.setState({enabled: true});
    }

    disable() {
        this.setState({enabled: false});
    }

    render() {
        console.log(this.state.enabled);
        return <button className='btn' disabled={!this.state.enabled}>{this.props.text}</button>
    }


}