import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  test: any;
  person: any;
  str: string;
  a: number;
  b: number = null;
  c: number; 
  d: number = 1; 

  constructor() {
    this.reset();
    this.str = this.person.name.forename;
  }

  is_empty(x: any | null): boolean {
    if(x == null || x === null || typeof x === 'undefined' || x === '') {
      return true;
    } else {
      return false;
    }
  }

  check(x: any, name: string): void {
      if (x == null) {
          console.log(name + ' == null');
      }

      if (x === null) {
          console.log(name + ' === null');
      }

      if (typeof x === 'undefined') {
          console.log(name + ' is undefined');
      }

      console.log(name + " type of: " + typeof x);
  }

  reset(): void {
    this.test = {
      foo: 4,
      bar: 4,
      zoo: 1,
      locale: 'en'
    };

    this.person = {
      name: {
        forename: 'John',
        surname: 'Doe'
      },
      address: {
        street: 'Lexington Avenue',
        city: 'New York',
        country: 'USA'
      }
    };
  }

  test_check(): void {
    this.check(this.a, 'a');
    this.check(this.b, 'b');
    this.check(this.c, 'c');
    this.check(this.d, 'd');
    this.check(this.test.foo, 'foo');
  }

  get_foo(): any {
    // this.test.foo = this.test.foo | 2;
    if (this.is_empty(this.test.foo)) {
      console.log("Change to default");
      this.test.foo = 2;
    }

    return parseFloat(this.test.foo);
    //return parseFloat(this.test.foo) | 2;
  }

  get_bar(): any {
    this.test.bar = this.test.bar | 0;

    return parseFloat(this.test.bar);
  }

  getir(): any {
    return this.get_foo() + this.get_bar() * this.test.zoo;
  }

  i18n_tr(): void {
    this.test.zoo = 100;
    this.test.locale = 'tr';
  }

  i18n_en(): void {
    this.test.zoo = 1;
    this.test.locale = 'en';
  }
}
