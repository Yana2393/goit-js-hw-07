import { galleryItems } from './gallery-items.js';
console.log(basicLightbox);

// Change code below this line
const galleryList = document.querySelector('.gallery');

const newGallery = galleryItems
    .map(({ preview, original, description }) => `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>
    `)
    .join('');
galleryList.insertAdjacentHTML("beforeend", newGallery)

const galleryLinkCollection = document.getElementsByClassName('gallery__image');
console.log(galleryLinkCollection);


const linkArray = Array.from(galleryLinkCollection);
console.log(linkArray);

linkArray.forEach(element => {
    console.log(element);
const currentImgUrl = element.dataset.source;
const imageInstance = basicLightbox.create(`
    <img src="${currentImgUrl}" width="800" height="600">
`)
    element.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        imageInstance.show();
    })
});

