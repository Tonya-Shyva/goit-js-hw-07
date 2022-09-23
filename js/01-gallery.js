import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const createGalleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt=${description}
            />
          </a>
        </div>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", createGalleryMarkup);

galleryRef.addEventListener("click", onGaleryItemClick);

function onGaleryItemClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width = "1280" height = "854">
`);

  instance.show();

  galleryRef.addEventListener("keydown", onEscPress);

  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
    galleryRef.removeEventListener("keydown", onEscPress);
  }
}
