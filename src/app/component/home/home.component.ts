import { Component, OnInit } from '@angular/core';
import { AcronimeService } from "../../services/acronime.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listAcronime: any;
  acronime: any;
  p: number = 1;
  pagination = false;

  notificacion = false;

  constructor(private service: AcronimeService){}
//this.sf
  ngOnInit(): void {
  }

  consultarAcronimo() {

    this.service.getAcronime(this.acronime).then((res) => {
      this.listAcronime = res.data
      this.pagination = true;

      this.service.saveAcronimeHistory(this.acronime).then(() => {
        this.notificacion = true;
        console.log(this.notificacion)
        setTimeout(() => {
          this.notificacion = false;
          console.log(this.notificacion)
        }, 2000)
      })
      .catch((err) => {
        console.log(err)
      })

    }).catch((err)=>{
      console.log(err)
    });
    
      
  }

}
