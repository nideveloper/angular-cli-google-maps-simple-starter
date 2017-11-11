import { Component } from '@angular/core';
import { AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Click The Map To Make A Prediction';
  lat: number = 51.678418;
  lng: number = 7.809007; 

  mapClicked ($event: any) {
      let latitude = $event.coords.lat;
      let longitude = $event.coords.lng;
      alert(latitude +" "+ longitude)
  }
}
