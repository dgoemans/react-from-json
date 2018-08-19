import Button from '../components/button';
import LayoutGroup from '../components/layoutGroup';


export default class Registry {
    _components = {};

    constructor() {

        this.register('CoolButton', Button);
        this.register('Group', LayoutGroup);

    }

    register(name, componentClass) {
        this._components[name] = componentClass;
    }

    unregister(name) {
        delete this._components[name];
    }

    get(name) {
        return this._components[name];
    }

}