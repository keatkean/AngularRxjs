import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularRxjs';

  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //   observer.next('1');
  //   observer.next('2');
  //   observer.next('3');
  //   observer.next('4');
  //   observer.next('5');
  // });

  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //
  //   setTimeout(() => { observer.next('1'); }, 1000);
  //   setTimeout(() => { observer.next('2'); }, 2000);
  //   setTimeout(() => { observer.next('3'); }, 3000);
  //   setTimeout(() => { observer.next('4'); }, 4000);
  //   setTimeout(() => { observer.next('5'); }, 5000);
  //
  // });

  // obs = new Observable((observer) => {
  //   console.log('Observable starts');
  //
  //   setTimeout(() => { observer.next('1'); }, 1000);
  //   setTimeout(() => { observer.next('2'); }, 2000);
  //   setTimeout(() => { observer.next('3'); }, 3000);
  //   setTimeout(() => { observer.error('error emitted'); }, 3500);    // sending error event. observable stops here
  //   setTimeout(() => { observer.next('4'); }, 4000);          // this code is never called
  //   setTimeout(() => { observer.next('5'); }, 5000);
  //
  // });

  obs = new Observable((observer) => {
    console.log('Observable starts');

    setTimeout(() => { observer.next('1'); }, 1000);
    setTimeout(() => { observer.next('2'); }, 2000);
    setTimeout(() => { observer.next('3'); }, 3000);
    setTimeout(() => { observer.complete(); }, 3500);   // sending complete event. observable stops here
    setTimeout(() => { observer.next('4'); }, 4000);    // this code is never called
    setTimeout(() => { observer.next('5'); }, 5000);

  });

  data = [];
  ngOnInit() {

    this.obs.subscribe(
      val => { console.log(val); },                 // next callback
      error => { console.log('error'); },           // error callback
      () => { console.log('Completed'); }           // complete callback
    );

  }
}
