import './app/styles/index.scss';
import './app/styles/slider-styles.scss';
import './app/styles/header-slider-styles.scss';
import reportWebVitals from './reportWebVitals';
import {initSlider} from "./app/widgets/lib/slider/model/slider";
import {gallerySliderElements, workersSliderElements} from "./app/widgets/lib/slider/model/scrollbars";
import {initHeaderSlider} from "./app/widgets/lib/slider/model/header-slider";

reportWebVitals();

window.addEventListener("resize", initSlider(gallerySliderElements));
window.addEventListener("load", initSlider(gallerySliderElements));

window.addEventListener("resize", initSlider(workersSliderElements));
window.addEventListener("load", initSlider(workersSliderElements));

window.addEventListener("resize", initHeaderSlider);
window.addEventListener("load", initHeaderSlider);