const ESCAPE_KEY_CODE = 27;
const INDEX_FOCUS_FIELD = 0;

const modal = document.querySelector('#modal');
const buyButtons = Array.from(document.querySelectorAll('#buy-button'));
const feedbackForm = document.querySelector('#feedback-form');
const overlay = modal.querySelector('#modal-overlay');
const message = modal.querySelector('#modal-message');
const modalWrapper = modal.querySelector('#modal-form-wrapper')
const modalForm = modal.querySelector('#modal-form');
const closeButton = modal.querySelector('#modal-close-button');
const modalFields = Array.from(modal.querySelectorAll('#form-field'));


const setFormsFunctionality = () => {
  buyButtons.forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.add('modal--show');
      modalWrapper.classList.add('modal__wrapper--show');
      message.classList.remove('modal__wrapper--show')
      modalFields[INDEX_FOCUS_FIELD].focus();

      document.addEventListener('keydown',(evt) => {
        if (evt.keyCode === ESCAPE_KEY_CODE){
          modal.classList.remove('modal--show');
        }
      }, {once: true});
    })

    modalForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      if (window.localStorage) {
        modalFields.forEach((field) => {
          localStorage.setItem(field.name, field.value)
        })
      }
      modalWrapper.classList.remove('modal__wrapper--show')
      message.classList.add('modal__wrapper--show')
    })
  })

  feedbackForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal--show');
    form.classList.remove('modal__wrapper--show');
    message.classList.add('modal__wrapper--show')

    document.addEventListener('keydown',(evt) => {
      if (evt.keyCode === ESCAPE_KEY_CODE){
        modal.classList.remove('modal--show');
      }
    }, {once: true});
  })

  overlay.addEventListener('click', () => {
    modal.classList.remove('modal--show')
  })

  closeButton.addEventListener('click', () => {
    modal.classList.remove('modal--show')
  })
}

export {setFormsFunctionality};
