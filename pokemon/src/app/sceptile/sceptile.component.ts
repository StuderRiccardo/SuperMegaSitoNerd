import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sceptile',
  templateUrl: './sceptile.component.html',
  styleUrls: ['./sceptile.component.css']
})
export class SceptileComponent {
  data!: Object;
  loading!: boolean;
  o !:Observable<Object>;


  constructor(public http: HttpClient) {}
  makeRequest(): void {
    console.log("here");
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    this.o.subscribe(this.getData);
  }
  getData = (d : Object) =>
  {
    this.data = new Object(d);
    this.loading = false;
  }

  makeCompactPost(): void{
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
        )
        .subscribe(data => {
          this.data = data;
          this.loading = false;
        });
  }

}
