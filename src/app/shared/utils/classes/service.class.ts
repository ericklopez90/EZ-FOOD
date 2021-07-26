import { HttpParams } from "@angular/common/http";
import { KeyValue } from "@interfaces/KeyValue.interface";

export class ServiceUtil {

  private url = 'http://localhost:9000';
  constructor() {}

  createRoute( endpoint: string ): string {
    return `${ this.url }/${ endpoint }`;
  }

  addParamsQuery( params: KeyValue[] ): HttpParams {
    const httpParams = new HttpParams();
    params.forEach( param => httpParams.append( param.key, param.value ) )
    return httpParams;
  }

  validateParams( params: any ): any[] {
    const cleanParams: any = {};
    const invalid = [ undefined, null, '', NaN ];
    const keys    = Object.keys(params);
    keys.forEach( key => {
      if ( !invalid.includes( params[key] ) ) {
        cleanParams[ key ] =params[key];
      }
    });
    return cleanParams;
  }



}
