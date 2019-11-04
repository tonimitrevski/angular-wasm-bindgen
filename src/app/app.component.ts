import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-webassembly';


  async test() {
    import('../web-assembly/pkg').then((response) => {
      console.log(response.calculate());
    });
  }
}
