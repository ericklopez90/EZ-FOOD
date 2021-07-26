import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '@interfaces/server-response.interface';
import { ServiceUtil } from '@utils/classes/service.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  colors: string[] = [
    '#FFFAFA',
    '#F0FFF0',
    '#F5FFFA',
    '#F0FFFF',
    '#F0F8FF',
    '#F8F8FF',
    '#F5F5F5',
    '#FFF5EE',
    '#F5F5DC',
    '#FDF5E6',
    '#FFFAF0',
    '#FFFFF0',
    '#FAEBD7',
    '#FAF0E6',
    '#FFF0F5',
    '#fff',
    '#FFE4E1']


  serviceUtil: ServiceUtil;
  endpointRoute: string;

  constructor(private http: HttpClient) { 
    this.serviceUtil = new ServiceUtil();
    this.endpointRoute = this.serviceUtil.createRoute('dispatch-categories');
  }

  getCategories(): Observable<ServerResponse>{
    const url = `${this.endpointRoute}`

    return this.http.get<ServerResponse>(url)
  }
}
