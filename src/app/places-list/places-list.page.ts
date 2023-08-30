import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.page.html',
  styleUrls: ['./places-list.page.scss'],
})
export class PlacesListPage implements OnInit {

  getPlaces: any=[];

  constructor(private placesService: PlacesService) { }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places =>{
      this.getPlaces = places;
    })
  }

}
