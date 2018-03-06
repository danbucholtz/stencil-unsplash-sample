import '@ionic/core';
import '@stencil/core';

import { Component, Listen, State } from '@stencil/core';
import { ItemSelectedEvent, UnsplashDto } from '../../utils/interfaces';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  @State() selectedItem: UnsplashDto = null;
  @State() largeScreen: boolean = isLargeScreen();

  @Listen('selected')
  itemSelected(event: ItemSelectedEvent) {
    this.selectedItem = event.detail;
  }

  @Listen('close')
  deselect() {
    this.selectedItem = null;
  }

  @Listen('window:resize')
  handleResize() {
    // in a real-world situation, you would debounce this, but this is just a simple POC
    // so it's not worth doing right now
    this.largeScreen = isLargeScreen();
  }

  render() {
    let detailPageContent = this.selectedItem?
        <div class="split-content">
          <detail-page class="ion-page" selectedPhoto={this.selectedItem} />
        </div>
           : undefined;

    // if we don't have content and it's a large screen,
    // just show some content about selecting an image
    if (!detailPageContent && this.largeScreen) {
      detailPageContent = <div class="split-content"><select-image class="ion-page"/></div>
    }

    return (
      <ion-app>
        <div class="container">
          <div class="main-content">
            <list-page class="ion-page"></list-page>
          </div>
          {detailPageContent}
        </div>
      </ion-app>
    );
  }
}

function isLargeScreen() {
  return window.matchMedia(largeScreenMediaQuery).matches;;
}
const largeScreenMediaQuery = '(min-width: 768px)';
