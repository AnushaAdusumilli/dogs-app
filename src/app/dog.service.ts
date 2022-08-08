import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const RANDOM_DOG_API = 'https://dog.ceo/api/breeds/image/random';
const MULTIPLE_RANDOM_DOGS_API = 'https://dog.ceo/api/breeds/image/random/10';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(private http: HttpClient) { }

  getRandomDog() {
    return this.http.get(RANDOM_DOG_API);
  }

  getMultipleRandomDogs() {
    return this.http.get(MULTIPLE_RANDOM_DOGS_API);
  }
}
