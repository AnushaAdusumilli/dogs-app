import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog.model';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss']
})
export class DogsListComponent implements OnInit {

  public randomDogs: Dog[] | undefined;
  constructor(private dogService: DogService) { }

  getBread(url: string): string {
    const parts = url.replace("https://", '').split('/');
    return parts[2].replace("-", " ");;
  }

  public getRandomDogs(): void {
    this.dogService.getMultipleRandomDogs()
      .subscribe((response: any) => {
        this.randomDogs = response.message.map((res: any) => ({
          bread: this.getBread(res),
          url: res,
      }));
      console.log(this.randomDogs);
    })
  }

  ngOnInit(): void {
    this.getRandomDogs();
  }
}
