// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line

console.log(galleryItems);


//dom links
const galleryContainer = document.querySelector('.gallery');

const markupGallery = createGaleryMarkup(galleryItems);

//events

galleryContainer.insertAdjacentHTML('beforeend', markupGallery);


//functions

function createGaleryMarkup(galleryItems) {
   return  galleryItems.map(({ preview, original, description }) => {
       return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" 
                />
            </a>
        </li> 
    `;
    }).join('');
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition : "bottom",
  captionDelay: 250,
  closeOnEscape: true
})