import React from 'react';
import DisableForSeconds from '../behaviors/disableForSeconds';

export default class Screen {

    _components = [];
    _registry = null;

    constructor(config, registry) {
        this._registry = registry;
        this._components = this.getContent(config);
    }

    getContent(content) {
        const result = [];
        if(typeof content === 'string') {
            result.push(content);
        } else if (typeof content === 'object') {
            content.forEach(item => {
                result.push(this.createComponent(item));
            })
        }

        return result;
    }

    createComponent(componentConfig) {
        let result, componentType, props, behavior = null;
        const content = this.getContent(componentConfig.content);
        switch(componentConfig.type) {
        case 'p':
            result = <p className={componentConfig.className}>{content}</p>;
            break;
        case 'div':
            result = <div className={componentConfig.className}>{content}</div>;
            break;
        case 'h4':
            result = <h4 className={componentConfig.className}>{content}</h4>;
            break;
        default:
            componentType = this._registry.get(componentConfig.type);
            console.log(componentType);
            behavior = this.getBehavior(componentConfig.behaviorName, componentConfig);
            props = Object.assign({behavior:behavior}, componentConfig.props);
            result = React.createElement(componentType, props);
        }

        return result;
    }

    getBehavior(name, config) {
        switch(name) {
            case 'disableForSeconds':
                return new DisableForSeconds(config.props.disabledSeconds);
        }
        return null;
    }

    render() {
        return this._components;
    }
}