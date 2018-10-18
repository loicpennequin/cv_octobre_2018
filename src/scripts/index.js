import 'normalize.css/normalize.css';
import './../styles/main.sass';

import smoke from './modules/smoke';

function start() {
    smoke.init();
}

document.addEventListener('DOMContentLoaded', start);
