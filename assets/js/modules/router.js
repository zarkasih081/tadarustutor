import { renderHome, renderTutorList, renderEbook, renderVideo, renderRegister } from './components.js';

const routes = {
    '': renderHome,
    '#home': renderHome,
    '#tutors': renderTutorList,
    '#ebook': renderEbook,
    '#video': renderVideo,
    '#register': renderRegister
};

export function initRouter() {
    const handleRoute = () => {
        const hash = window.location.hash;
        const renderer = routes[hash] || renderHome;
        
        const main = document.getElementById('main-content');
        main.innerHTML = '';
        main.appendChild(renderer());
        
        window.scrollTo(0,0);
    };

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}
