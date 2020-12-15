import "../pages/index.css";

const Main = (props) => {
  return (
    <main className="main">
      {/* PROFILE */}
      <section className="profile">
        <div className="profile__avatar-area">
          <img src="#src" alt="#alt" className="profile__avatar" />
          <button
            type="button"
            className="profile__avatar-btn"
            aria-label="Редактировать аватар"
            onClick={props.onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__block-name">
            <h1 className="profile__name" id>
              Pavel Khokhlov
            </h1>
            <button
              type="button"
              className="button profile__edit-btn"
              aria-label="кнопка редактировать профиль"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">Web developer</p>
        </div>
        <button
          type="button"
          className="button profile__add-btn"
          aria-label="кнопка добавить место"
          onClick={props.onAddPlace}
        />
      </section>
      {/* PLACES */}
      <ul className="places" />
    </main>
  );
};

export default Main;
