import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  template: `
    <p>
      details works!
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

}
