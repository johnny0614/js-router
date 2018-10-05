import Router from './router.js';

{
    let router = new Router();
    let links = document.querySelectorAll('.js-router-link');
    
    let goTo = (event) => {
        event.preventDefault();
        router.go(event.target.href);
    }
    
    links.forEach(link => {
        link.addEventListener('click', goTo);
    });    
}