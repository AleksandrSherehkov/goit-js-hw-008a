// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import galeryItemsTpl from '../templates/galery-itemes.hbs';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryEl.insertAdjacentHTML('beforeend', galeryItemsTpl(galleryItems));

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
