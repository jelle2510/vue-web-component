import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

import MyWebComponent from './components/MyWebComponent';
const WrappedMyWebComponent = wrap(Vue, MyWebComponent);
window.customElements.define('my-web-component', WrappedMyWebComponent);

import ProductBanner from './components/ProductBanner';
const WrappedProductBanner = wrap(Vue, ProductBanner);
window.customElements.define('product-banner', WrappedProductBanner);