import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html'
})

export class ConsultantComponent {
  public consultants: Consultant[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Consultant[]>(baseUrl + 'api/consultant').subscribe(result => {
      this.consultants = result;
    }, error => console.error(error));
  }
}

interface Consultant {
  id: number;
  firstName: string;
  lastName: string;
  email: string;

}
