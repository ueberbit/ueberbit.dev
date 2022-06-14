// // @ts-expect-error
// import Swup from "swup/lib/index.js"
// // @ts-expect-error
// import SwupProgressPlugin from "@swup/progress-plugin"
// // @ts-expect-error
// import SwupScrollPlugin from '@swup/scroll-plugin'

// /**
//  * Define Swup options. Don't use swup for drupal admin links and edit linsk.
//  */
//  const swupOptions = {
//   containers: ["[data-router]"],
//   linkSelector:
//     'a[href^="' +
//     window.location.origin +
//     '"]:not([data-no-swup]):not([data-drupal-link-system-path]):not([href^="/admin"]), ' +
//     'a[href^="/"]:not([data-no-swup]):not([href^="/admin"]):not([href*="/edit/"]):not([href$="/edit"]), ' +
//     'a[href^="#"]:not([data-no-swup])',
// };

// /**
//  * Init swup instance and attach it to window, thus other components have access to it.
//  */
// const swup = new Swup({
//   ...swupOptions,
//   plugins: [
//     new SwupProgressPlugin(),
//     new SwupScrollPlugin({
//       animateScroll: false
//     })],
// });
// window.swup = swup

// /**
//  * Rerun drupal behaviors after swup navigation.
//  */
// swup.on("contentReplaced", () => {
//   swup.options.containers.forEach((container: string) => {
//     const context = document.querySelectorAll(container);
//     context.forEach((element) => {
//       if(window.hasOwnProperty('Drupal')) {
//         Drupal.attachBehaviors(element, drupalSettings);
//       }
//     });
//   });
// });
