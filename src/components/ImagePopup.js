function ImagePopup(props) {
  return (
    <section className="popup popup-zoom">
      <figure className="popup-zoom__container">
        <button
          type="button"
          className="button popup__close-btn"
          aria-label="Вернуться на страницу"
        />
        <img src="#" alt="name" className="popup-zoom__image" />
        <figcaption className="popup-zoom__caption">name</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
