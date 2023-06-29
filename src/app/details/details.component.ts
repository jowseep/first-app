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

  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  constructor(private route: ActivatedRoute) {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    
    this.housingService.getAllHousingLocationById(housingLocationId).then(housingLocation => {
        this.housingLocation = housingLocation;
    });
  }

}