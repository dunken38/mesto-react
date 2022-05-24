import logo from '../images/logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <body class="page">
	  <Header/>
	  <Main/>
	  <Footer/>

  /*тут хранится окошко popup для правки данных профиля*/
  <div class="popup popup_type_edit" id="popupEdit">
    <div class="popup__content">
      <button type="button" class="popup__cancel-button" id="cancelButtonEdit" title="Отмена"></button>
      <form name="popup-edit-form" class="popup__form popup__form_type_edit" novalidate>
        <h2 class="popup__title">Редактировать профиль</h2>
        <div class="popup__label">
          <input type="text" name="inputNameEdit" id="name-edit" placeholder="Введите ваше имя" required value="" class="popup__input popup__input_type_name-edit" minlength="2" maxlength="40"/>
          <span class="name-edit-error popup__input-error"></span>
        </div>
        <div class="popup__label">
          <input type="text" name="inputAboutEdit" id="about-edit" placeholder="Напишите Ваши увлечения" required value="" class="popup__input popup__input_type_about-edit" minlength="2" maxlength="200"/>
          <span class="about-edit-error popup__input-error"></span>
        </div>
        <button type="submit" class="popup__save-button">Сохранить</button>
      </form>
    </div>
  </div>
  /*тут хранится окошко popup для добавления карточек*/
  <div class="popup popup_type_add" id="popupAdd">
    <div class="popup__content">
      <button type="button" class="popup__cancel-button" id="cancelButtonAdd" title="Отмена"></button>
      <form name="popup-add-form" class="popup__form popup__form_type_add" novalidate>
        <h2 class="popup__title">Новое место</h2>
        <div class="popup__label">
          <input type="text" name="name" id="name-add" placeholder="Название" required value="" class="popup__input popup__input_type_name-add" minlength="2" maxlength="30"/>
          <span class="name-add-error popup__input-error"></span>
        </div>
        <div class="popup__label">
          <input type="url" name="link" id="about-add" placeholder="Ссылка на картинку" required value="" class="popup__input popup__input_type_about-add"/>
          <span class="about-add-error popup__input-error"></span>
        </div>
        <button type="submit" class="popup__save-button">Создать</button>
      </form>
    </div>
  </div>
  /*тут хранится окошко popup для подтверждения удаления карточки*/
  <div class="popup popup_type_remove" id="popupRemove">
    <div class="popup__content">
      <button type="button" class="popup__cancel-button" id="cancelButtonRemove" title="Отмена"></button>
      <h2 class="popup__title" id="popupTitleRemoveWindow">Вы уверены?</h2>
      <button type="submit" class="popup__save-button">Да</button>
    </div>
  </div>
  /*тут хранится окошко popup для редактирования аватарки*/
  <div class="popup popup_type_avatar" id="popupAvatar">
    <div class="popup__content">
      <button type="button" class="popup__cancel-button" id="cancelButtonAvatar" title="Отмена"></button>
      <form name="popup-avatar-form" class="popup__form popup__form_type_avatar" novalidate>
        <h2 class="popup__title">Обновить аватар</h2>
        <div class="popup__label">
          <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required value="" class="popup__input popup__input_type_avatar"/>
          <span class="avatar-error popup__input-error"></span>
        </div>
        <button type="submit" class="popup__save-button">Сохранить</button>
      </form>
    </div>
  </div>
  /*Тут хранится увеличенная картинка*/
  <div class="popup popup_type_image" id="popupZoomImage">
    <div class="popup__image-content">
      <button type="button" class="popup__cancel-button" id="cancelButtonZoomImage" title="Отмена"></button>
      <img class="popup__image" alt="Увеличенное изображение"/>
      <h2 class="popup__image-text"></h2>
    </div>
  </div>
  /*тут хранятся карточки*/
  <template class="template_type_gallery" id="template-gallery">
    <li class="element">
      <button type="button" class="element__trash"></button>
      <img class="element__image" alt="Изображение"/>
      <div class="element__description">
        <h2 class="element__text"></h2>
        <div class="element__like-block">
          <button type="button" class="element__like"></button>
          <span class="element__like-counter"></span>
        </div>
      </div>
    </li>
  </template> 
</body>
  );
}

export default App;
