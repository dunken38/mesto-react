function Main() {
  return (
  <main>
    <section class="profile">
      <button class="profile__avatar-edit">
        <img class="profile__avatar" alt="Аватар"/>
      </button>
      <div class="profile__info">
        <h1 class="profile__info-name"></h1>
        <button type="button" class="profile__info-edit-button" title="Редактировать"></button>
        <p class="profile__info-about"></p>
      </div>
      <button type="button" class="profile__add-button" title="Добавить"></button>
    </section>
    <section class="gallery">
      <ul class="elements">
      </ul>
    </section>
  </main>
 )};

export default Main;
