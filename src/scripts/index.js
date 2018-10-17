import 'normalize.css/normalize.css';
import './../styles/main.sass'

import { sketch } from './modules/header';

function start(){
    sketch.init();
}

document.addEventListener('DOMContentLoaded', start);
