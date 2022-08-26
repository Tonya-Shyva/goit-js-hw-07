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

galleryRef.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = e.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${selectedImage}" width = "1280" height = "854">
`);

  instance.show();
  console.log(instance);

  galleryRef.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});

galleryRef.removeEventListener("click", () => {});
