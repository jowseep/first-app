import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getAllHousingLocationsById(housingLocationId);
  }
}
