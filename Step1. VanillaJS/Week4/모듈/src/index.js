import { DOMAIN_NAME as DN, PORT as P} from './Constants.js'
import App from './App.js'


const $body = document.querySelector('body');

$body.innerHTML = JSON.stringify(DN);
$body.innerHTML += `<div>${P}</div>`

new App()

