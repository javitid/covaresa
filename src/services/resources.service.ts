import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export const URL = 'http://google.com';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private resources: Map<string, Observable<object>> = new Map<string, Observable<object>>();

  constructor(
    private http: HttpClient,
  ) { }

  getResource(resource: string): Observable<object> {
    const url = URL
    const params = {};

    if (!this.resources.has(resource)) {
      this.resources.set(
        resource,
        this.http.post(url, params).pipe(
          map((response: any) => {
            return response;
          }),
          shareReplay(1)
        )
      );
    }
    return this.resources.get(resource) as Observable<object>;
  }
}