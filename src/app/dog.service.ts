import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const RANDOM_DOG_API = 'https://dog.ceo/api/breeds/image/random';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) { }

  getRandomDog() {
    return this.http.get(RANDOM_DOG_API);
  }
}
