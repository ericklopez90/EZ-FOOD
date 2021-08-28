import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceUtil } from '@utils/classes/service.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortcutService {
  serviceUtil: ServiceUtil;
  endpointRoute: string;

  constructor(private http: HttpClient) { 
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('shortcut');
  }

  fetch(id:string): Observable<any> {
    return this.http.get( `${this.endpointRoute}/${id}` );
  }
}