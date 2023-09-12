// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Component, OnDestroy, OnInit} from '@angular/core';
import {assetUrl} from 'src/single-spa/asset-url';

// Import for icons
import {faCloudSun, faSnowflake} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root4',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppComponent {
  title = 'weather-app';

  // Attributes for icons
  sunCloudIcon = faCloudSun;
  snowIcon = faSnowflake;

  // For global weather image
  globalWeatherImg = assetUrl('images/globalWeather.png');

  weatherModalId = 'weatherModal_unclicked';

  openWeatherModal = () => (this.weatherModalId = 'weatherModal_clicked');

  ngOnInit(): void {
    // Listener to set the weather modal id correctly to open the weather modal
    window.addEventListener('openWeatherModal', this.openWeatherModal);
  }

  ngOnDestroy(): void {
    // Remove the listener to set the weather modal id correctly to open the weather modal
    window.removeEventListener('openWeatherModal', this.openWeatherModal);
  }

  closeWeatherModal(): void {
    this.weatherModalId = 'weatherModal_unclicked';
    // Now the EventListener is called to communicate the closure of the weather modal
    window.dispatchEvent(new CustomEvent('closeWeatherModal'));
  }
}
