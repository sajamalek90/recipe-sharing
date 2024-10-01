import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HttpClientModule,RouterModule, NgFor, NgbRatingModule,RouterModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  data: any;

  constructor(private http: HttpClient,config: NgbRatingConfig) {   
    config.max = 5;
    config.readonly = false;
  }


  ngOnInit(): void {
    this.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.error('Error occurred while fetching data:', error);
      }
    );
  }

  getData(): Observable<any> {
    const apiUrl = 'https://jawadtamer.github.io/recipesApi/api.json'; 
    return this.http.get<any>(apiUrl);
  }

}