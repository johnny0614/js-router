class View extends HTMLElement {
    _viewIn () {
        this.classList.add('visible');
    }

    _viewOut () {
        this.classList.remove('visible');
    }

    set visible (val) {
        this._visible = val;

        if (this._visible)
            this._viewIn()
        else
            this._viewOut();
    }

    get visible () {
        return this._visible;
    }
}

customElements.define('app-view', View);