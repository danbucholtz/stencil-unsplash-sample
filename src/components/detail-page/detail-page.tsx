import { Component, Event, EventEmitter, Prop } from '@stencil/core';

import { UnsplashDto } from '../../utils/interfaces';

@Component({
  tag: 'detail-page',
  styleUrl: 'detail-page.css'
})
export class DetailPage {

  @Event() close: EventEmitter<any>;

  @Prop() selectedPhoto: UnsplashDto = null;

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Photo Details</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <div class="detail-image">
          <img src={this.selectedPhoto.thumbUrl}></img>
        </div>
        <h2>{this.selectedPhoto.name}</h2>
        <p class="subtitle">{this.selectedPhoto.location}</p>
        <p class="subtitle">{this.selectedPhoto.bio}</p>
        <div class="close-btn-container">
          <ion-button class="close-btn" onClick={() => {
            this.close.emit();
          }}>Close</ion-button>
        </div>
      </ion-content>
    ];
  }
}
