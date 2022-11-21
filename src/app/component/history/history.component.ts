import { Component, OnInit } from '@angular/core';
import { AcronimeService } from "../../services/acronime.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  acronimeHistory: any = [];
  p: number = 1;

  constructor(private service: AcronimeService) { }

  ngOnInit(): void {

      this.service.getAcronimeHistory().then((res) => {
        this.acronimeHistory = res.data
        console.log(this.acronimeHistory)
        return this.acronimeHistory

      }).catch((err) => {
        console.log(err)
      });

  }

}
