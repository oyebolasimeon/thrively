import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  BASE_URL = "https://oyebolasimeon.cloud/thrivelyapi/Api";
}
