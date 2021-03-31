const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');

/**
 * Функция настраивает работу главного меню
 */
const  setMenuFunctionality = () => {
  menu.classList.add('main-header__list--hide');
  toggle.addEventListener('click', () => {
    if (menu.classList.contains('main-header__list--outflow')) {
      menu.classList.remove('main-header__list--outflow');
      toggle.classList.remove('main-header__main-nav-toggle--close');
    }else {
      menu.classList.add('main-header__list--outflow');
      toggle.classList.add('main-header__main-nav-toggle--close');
    }
  })
}

export {setMenuFunctionality};
