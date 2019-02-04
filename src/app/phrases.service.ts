import { Injectable } from '@angular/core';

@Injectable()
export class PhrasesService {

  constructor() { }

  library: string[] = [
    "A fellow jumped off a high wall, And had a most terrible fall. He went back to bed, With a bump on his head, That's why you don't jump off a wall.",
    "Limericks I cannot compose, With noxious smells in my nose. But this one was easy, I only felt queasy, Because I was sniffing my toes.",
    "There was an odd fellow named Gus, When travelling he made such a fuss. He was banned from the train, Not allowed on a plane, and now travels only by bus."
  ]

  getPhrase() {
    let randomPhrase = Math.floor(Math.random()*3);
    return this.library[randomPhrase];
  }


}
