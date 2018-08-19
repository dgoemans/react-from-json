
export default class DisableForSeconds {
    constructor(time) {
        this._time = time*1000;
    }

    start(component) {
        component.disable();
        setTimeout(() => {
            component.enable();
        }, this._time)
    }
}