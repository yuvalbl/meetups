import { Injectable } from '@angular/core';

@Injectable()
export class SomeService {
  static serverFactory() {
    return new Object();
  }
  constructor() { }

}
