import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureFlagModel } from '../models/feature-flag.model';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<FeatureFlagModel[]> {
    return this._httpClient.get<FeatureFlagModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags`);
  }
}
