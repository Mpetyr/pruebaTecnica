import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AcronimeService {


  private api = environment.apiNode;

  constructor(private http: HttpClient) { }

  public async getAcronime (acronimo: string){
    return await axios.post(`${this.api}/acronime`,{acronimo})
  }

  public async getAcronimeHistory (){
    return await axios.post(`${this.api}/history`)
  }

  public async saveAcronimeHistory(acronimo: string){
    return await axios.post(`${this.api}/createHistory`,{acronimo})
  }
}
