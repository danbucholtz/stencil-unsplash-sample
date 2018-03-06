const API_KEY = 'e64814a95e1de4b080b4f3304e3e775c4118cddd9bfe6fc7284ecf85f8f57316';
const API_ENDPOINT = `https://api.unsplash.com/search/photos?client_id=${API_KEY}&per_page=30`;

import { UnsplashDto } from './interfaces';

function fetchUnsplashDataReal(searchTerm) {
  return fetch(`${API_ENDPOINT}&query=${searchTerm}`).then((response) => {


    if (!response.ok) {
      throw new Error('Failed to load unsplash api data');
    }

    return response.json();
  });
}

/*function fetchUnsplashDataLocal(_term: string) {
  return fetch('/assets/unsplash.json').then((response) => {


    if (!response.ok) {
      throw new Error('Failed to load unsplash api data');
    }

    return response.json();
  });
}
*/

export function loadUnsplashData(searchTerm: string): Promise<UnsplashDto[]> {
  const term = searchTerm && searchTerm.trim().length ? searchTerm.trim() : 'surfing';

  return fetchUnsplashDataReal(term).then((rawDataList) => {
    return rawDataList.results.map(rawData => formatUnsplashData(rawData)) as UnsplashDto[];
  }).then((formattedList) => {
    return formattedList.sort((previous: UnsplashDto, next: UnsplashDto) => {
      const previousName = previous.name.toLowerCase();
      const nextName = next.name.toLowerCase();
      if (previousName < nextName) {
        return -1;
      }
      if (previousName > nextName) {
        return 1;
      }
      return 0;
    });
  });
}

export function formatUnsplashData(rawData: any): UnsplashDto {
  const millis = Date.parse(rawData.updated_at);
  const uploadDate = new Date(millis);
  return {
    thumbUrl: rawData.urls['thumb'],
    name: getName(rawData.user.first_name, rawData.user.last_name),
    location: rawData.user.location || 'Earth',
    bio: rawData.user.bio || 'Cosmic Travler',
    uploadDate: uploadDate
  }
}

function getName(firstName: string, lastName: string): string {
  firstName = firstName ? firstName : '';
  lastName = lastName ? lastName : '';
  const givenName = (firstName + ' ' + lastName).trim();
  if (givenName.length) {
    return givenName.charAt(0).toUpperCase() + givenName.slice(1);
  }
  return 'No Name Provided';
}


