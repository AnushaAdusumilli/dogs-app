import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  public randomDog: Dog | undefined;
  constructor(private dogService: DogService) { }

  getBread(url: string) {
    const parts = url.replace("https://", '').split('/');
    return parts[2].replace("-", " ");
  }

  public getRandomDog() {
    this.dogService.getRandomDog()
      .subscribe((response: any) => {
        this.randomDog = {
          bread: this.getBread(response.message),
          url: response.message,
        };
      })
  }

  ngOnInit(): void {
    this.getRandomDog();
  }
}
