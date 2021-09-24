import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUtil } from '@utils/classes/service.class';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  serviceUtil: ServiceUtil;
  endpointRoute: string;
  endpointRoute2: string;

  constructor(private http: HttpClient) { 
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('dispatch-meals');
    this.endpointRoute2 = this.serviceUtil.createRoute('meals');
  }

  fetch(id:string): Observable<any> {
    return this.http.get( `${this.endpointRoute}/${id}` );
  }

  search(): Observable<any> {
    return this.http.get( this.endpointRoute2 );
  }
}