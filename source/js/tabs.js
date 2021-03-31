const placeCards = Array.from(document.querySelectorAll('#place-card'))
const names = Array.from(document.querySelectorAll('#name'));
const tabs = Array.from(document.querySelector('#tabs').children);

/**
 * Функция определяет индекс текущего таба
 *
 * @returns {number} индекс текущего таба
 */
const defineCurrentSlide = () => {
  let currentIndex = 0;
  names.forEach((name, index) => {
    if (name.classList.contains('tabs__name-list-link--current')) {
      currentIndex = index;
    }
  })
  return currentIndex
}

/**
 * Функция делает таб с переданным индексом текущим
 *
 * @param {number} index - индекс таба, который необходимо сделать текущим
 */
const changeCurrentTab = (index) => {
  const currentIndex = defineCurrentSlide();
    names[currentIndex].classList.remove('tabs__name-list-link--current')
    tabs[currentIndex].classList.remove('tab--current')
    names[index].classList.add('tabs__name-list-link--current')
    tabs[index].classList.add('tab--current')
}

/**
 * Функция настраивает смену табов
 */
const setTabsFunctionality = () => {
  names.forEach((name, index) => {
    name.addEventListener('click', (evt) => {
      evt.preventDefault();
      changeCurrentTab(index)
    })
  })

  placeCards.forEach((place, index) => {
    place.addEventListener('click', () => {
      changeCurrentTab(index)
    })
  })
}

export {setTabsFunctionality};
