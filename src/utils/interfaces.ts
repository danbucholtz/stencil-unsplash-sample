
export interface ItemSelectedEvent extends CustomEvent {
  detail: UnsplashDto;
}

export interface UnsplashDto {
  thumbUrl: string;
  name: string;
  location: string;
  bio: string;
  uploadDate: Date;
}
