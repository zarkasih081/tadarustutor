import { initRouter } from './modules/router.js';
import { renderNavbar, renderFooter } from './modules/components.js';

document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    initRouter();
});
