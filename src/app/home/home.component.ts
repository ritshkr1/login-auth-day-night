import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  matchesdata = undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com',
      'x-rapidapi-key': '000b81d7e7mshe122427e6c15571p1a868bjsn185aca34e5cf',
    });
    this.http
      .get<any>('https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent', {
        headers: headers,
      })
      .subscribe((data) => {
        let response = data;
        this.matchesdata = response.typeMatches;
        console.log(data, this.matchesdata);
      });
  }
}
