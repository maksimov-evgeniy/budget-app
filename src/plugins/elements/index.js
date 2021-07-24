import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en.js'; // так как плагин изначально на китайском, импортируем анг. язык
import locale from "element-ui/lib/locale"; //как я понял это функция, которая позволяет работать с локализацией
import 'element-ui/packages/theme-chalk/lib/index.css'; // стили плагина
// для того чтобы импортировать отдельные компоненты(кнопка, чекбокс и т.д.) из element-ui
// их названия можно посмотреть на сайте плагина
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
} from 'element-ui';

// далее мы объеденим все эти компоненты в единый массив
const elements = [
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert,
];

locale.use(lang) // заставляем работать фреймфорк elements-ui на английском

elements.forEach(El=>Vue.use(El, {locale})) //для того чтобы сделатт компонент глобальным, нужно использовать Vue.use
