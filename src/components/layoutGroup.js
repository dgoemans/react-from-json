import React from 'react';
import Screen from '../system/screen';
import Registry from '../system/registry';

export default class LayoutGroup extends React.Component {

    constructor(props) {
        super(props);
        this._screen = new Screen(props.config, new Registry());
    }

    render() {
        return (<div>
            LAYOUT GROUP
            {this._screen.render()}
        </div>)
    }
}