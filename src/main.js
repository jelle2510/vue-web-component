import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';

import ProductBanner from './components/ProductBanner';
const WrappedProductBanner = wrap(Vue, ProductBanner);
window.customElements.define('product-banner', WrappedProductBanner);

import CategoryBanner from './components/CategoryBanner';
const WrappedCategoryBanner = wrap(Vue, CategoryBanner);
window.customElements.define('category-banner', WrappedCategoryBanner);