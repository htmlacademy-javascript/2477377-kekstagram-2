import { createPhotoDescriptions } from './photo-description.js';
import { renderPictures } from './thumbnail.js';

const NUMBER_OF_REQUIRED_OBJECTS = 25;
const photoDescriptions = createPhotoDescriptions(NUMBER_OF_REQUIRED_OBJECTS);

renderPictures(photoDescriptions);

console.log(photoDescriptions);

