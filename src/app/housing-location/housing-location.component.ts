import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  template: `
     <section class="listing">
    <img class="listing-photo" [src]="housingLocationComponent.photo" alt="Exterior photo of {{housingLocationComponent.name}}">
    <h2 class="listing-heading">{{ housingLocationComponent.name }}</h2>
    <p class="listing-location">{{ housingLocationComponent.city}}, {{housingLocationComponent.state }}</p>
    <a [routerLink]="['/details', housingLocationComponent.id]">Learn More</a>
  </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocationComponent!: HousingLocation;
}
