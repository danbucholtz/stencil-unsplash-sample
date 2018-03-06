import { Component } from '@stencil/core';

@Component({
  tag: 'select-image',
})
export class SelectImage {

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Image Details</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <h2>Select an Image to begin</h2>
      </ion-content>
    ];
  }
}
