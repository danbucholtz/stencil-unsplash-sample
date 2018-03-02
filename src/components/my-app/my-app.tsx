import '@ionic/core';
import '@stencil/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  render() {
    return (
      <ion-app>
        <ion-nav root="list-page"></ion-nav>
      </ion-app>
    );
  }
}
