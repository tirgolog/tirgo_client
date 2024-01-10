export function dataMediaQueries(array: any, dataSetValue: any) {
   // Получение объектов с медиа запросами
   const media = Array.from(array).filter(function (item: any, index: any, self: any) {
      if (item.dataset[dataSetValue]) {
         return item.dataset[dataSetValue].split(",")[0];
      }
   });
   // Инициализация объектов с медиа запросами
   if (media.length) {
      const breakpointsArray: any[] = [];
      media.forEach((item: any) => {
         const params: any = item.dataset[dataSetValue];
         const breakpoint: any = {};
         const paramsArray = params.split(",");
         breakpoint.value = paramsArray[0];
         breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
         breakpoint.item = item;
         breakpointsArray.push(breakpoint);
      });
      // Получаем уникальные брейкпоинты
      let mdQueries = breakpointsArray.map(function (item) {
         return '(' + item.type + "-width: " + item.value + "px)," + item.value + ',' + item.type;
      });
      mdQueries = uniqArray(mdQueries);
      const mdQueriesArray: any[] = [];

      if (mdQueries.length) {
         // Работаем с каждым брейкпоинтом
         mdQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(",");
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);
            // Объекты с нужными условиями
            const itemsArray = breakpointsArray.filter(function (item: any) {
               if (item.value === mediaBreakpoint && item.type === mediaType) {
                  return true;
               } return false
            });
            mdQueriesArray.push({
               itemsArray,
               matchMedia
            })
         });
         return mdQueriesArray;
      }
   }
   return false
}

export function uniqArray(array: any) {
   return array.filter(function (item: any, index: any, self: any) {
      return self.indexOf(item) === index;
   });
}

export function spollers() {
   
   
   const spollersArray = document.querySelectorAll('[data-spollers]');
   
   if (spollersArray.length > 0) {
      // Получение обычных слойлеров
      const spollersRegular = Array.from(spollersArray).filter(function (item: any, index, self) {
         return !item.dataset.spollers.split(",")[0];
      });
      // Инициализация обычных слойлеров
      if (spollersRegular.length) {
         initSpollers(spollersRegular);
      }
      // Получение слойлеров с медиа запросами
      let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
      if (mdQueriesArray && mdQueriesArray.length) {
         mdQueriesArray.forEach((mdQueriesItem: any) => {
            // Событие
            mdQueriesItem.matchMedia.addEventListener("change", function () {
               initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            });
            initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
         });
      }
      // Инициализация
      function initSpollers(spollersArray: any, matchMedia: any = false) {
         spollersArray.forEach((spollersBlock: any) => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
               spollersBlock.classList.add('_spoller-init');
               initSpollerBody(spollersBlock);
               spollersBlock.addEventListener("click", setSpollerAction);
            } else {
               spollersBlock.classList.remove('_spoller-init');
               initSpollerBody(spollersBlock, false);
               spollersBlock.removeEventListener("click", setSpollerAction);
            }
         });
      }
      // Работа с контентом
      function initSpollerBody(spollersBlock: any, hideSpollerBody = true) {
         let spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
         if (spollerTitles.length) {
            spollerTitles = Array.from(spollerTitles).filter((item: any) => item.closest('[data-spollers]') === spollersBlock);
            spollerTitles.forEach((spollerTitle: any) => {
               if (hideSpollerBody) {
                  spollerTitle.removeAttribute('tabindex');
                  if (!spollerTitle.classList.contains('_spoller-active')) {
                     spollerTitle.nextElementSibling.hidden = true;
                  }
               } else {
                  spollerTitle.setAttribute('tabindex', '-1');
                  spollerTitle.nextElementSibling.hidden = false;
               }
            });
         }
      }
      function setSpollerAction(e: any) {
         const el = e.target;
         if (el.closest('[data-spoller]')) {
            const spollerTitle = el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            const oneSpoller = spollersBlock.hasAttribute('data-one-spoller');
            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
            if (!spollersBlock.querySelectorAll('._slide').length) {
               if (oneSpoller && !spollerTitle.classList.contains('_spoller-active')) {
                  hideSpollersBody(spollersBlock);
               }
               spollerTitle.classList.toggle('_spoller-active');
               slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
            }
            e.preventDefault();
         }
      }
      function hideSpollersBody(spollersBlock: any) {
         const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._spoller-active');
         const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
         if (spollerActiveTitle && !spollersBlock.querySelectorAll('._slide').length) {
            spollerActiveTitle.classList.remove('_spoller-active');
            slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
         }
      }
      // Закрытие при клике вне спойлера
      const spollersClose = document.querySelectorAll('[data-spoller-close]');
      if (spollersClose.length) {
         document.addEventListener("click", function (e) {
            const el: any = e.target;
            console.log(1);
            
            if (!el?.closest('[data-spollers]')) {
               spollersClose.forEach(spollerClose => {
                  const spollersBlock: any = spollerClose.closest('[data-spollers]');
                  if (spollersBlock.classList.contains('_spoller-init')) {
                     const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                     spollerClose.classList.remove('_spoller-active');
                     slideUp(spollerClose.nextElementSibling, spollerSpeed);
                  }
               });
            }
         });
      }
   }
}

export function slideUp(target: any, duration = 300, showmore = 0) {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.style.transitionProperty = 'height, margin, padding';
      target.style.transitionDuration = duration + 'ms';
      target.style.height = `${target.offsetHeight}px`;
      target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
         target.hidden = !showmore ? true : false;
         !showmore ? target.style.removeProperty('height') : null;
         target.style.removeProperty('padding-top');
         target.style.removeProperty('padding-bottom');
         target.style.removeProperty('margin-top');
         target.style.removeProperty('margin-bottom');
         !showmore ? target.style.removeProperty('overflow') : null;
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
         // Создаем событие 
         document.dispatchEvent(new CustomEvent("slideUpDone", {
            detail: {
               target: target
            }
         }));
      }, duration);
   }
}

export function slideDown(target: any, duration = 300, showmore = 0) {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      target.hidden = target.hidden ? false : null;
      showmore ? target.style.removeProperty('height') : null;
      let height = target.offsetHeight;
      target.style.overflow = 'hidden';
      target.style.height = showmore ? `${showmore}px` : `0px`;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + 'ms';
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      window.setTimeout(() => {
         target.style.removeProperty('height');
         target.style.removeProperty('overflow');
         target.style.removeProperty('transition-duration');
         target.style.removeProperty('transition-property');
         target.classList.remove('_slide');
         // Создаем событие 
         document.dispatchEvent(new CustomEvent("slideDownDone", {
            detail: {
               target: target
            }
         }));
      }, duration);
   }
}

export function slideToggle(target: any, duration = 300) {
   if (target.hidden) {
      return slideDown(target, duration);
   } else {
      return slideUp(target, duration);
   }
}

