export default class Router {
    constructor () {
        this._updateView = this._updateView.bind(this);

        window.addEventListener('popstate', this._updateView);

        this._routes = new Map();
        this._clearRoutes();
        this._addRoutes();
        this._updateView();
    }

    go (url) {
        window.history.pushState(null, null, url);
        this._updateView()
    }

    addRoute (route, view) {
        if (this._routes.has(route))
            console.warn(`The route ${route} already exists`);

        this._routes.set(route, view);
    }

    _clearRoutes () {
        this._routes.delete();
    }

    _addRoutes () {
        let views = document.querySelectorAll('app-view');
        for (let view of views) {
            if (!view.getAttribute('route'))
                return;

            this.addRoute(new RegExp(view.getAttribute('route'), 'i'), view);
        }
    }

    _updateView () {
        const path = window.location.pathname;
        const routes = Array.from(this._routes.keys());
        const route = routes.find(r => r.test(path));
        const view = this._routes.get(route);

        if (this._currentView) {
            this._currentView.visible = false;
        }

        view.visible = true;
        this._currentView = view;
    }
}