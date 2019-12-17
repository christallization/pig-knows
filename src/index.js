import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
//import * as serviceWorker from './serviceWorker';
import common_en_us from "./translations/en-us/common.json";

let lang = "en-us";

const urlLocaleMatch = window.location.search.match(/locale=(en-us)/i);
if (urlLocaleMatch) {
    lang = urlLocaleMatch[1].toLowerCase();
}

i18next.init({
    interpolation: { escapeValue: false },
    lng: lang,
    resources: {
        "en-US": {
            common: common_en_us
        }
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
