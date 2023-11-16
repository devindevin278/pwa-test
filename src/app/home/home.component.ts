import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  template: `
    <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter>
      <button class="btn btn-primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
  <div class="mx-auto" *ngIf="filteredLocationList.length == 0">
    <h1> "{{ filter.value }}" Not Found</h1>
  </div>
  <app-housing-location
  *ngFor="let housingLocationItem of filteredLocationList"
  [housingLocationComponent]="housingLocationItem">
</app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationListparam: HousingLocation[]) => {
      this.housingLocationList = housingLocationListparam;
      this.filteredLocationList = housingLocationListparam;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
  }

}
