import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
  public phones:any=[
    {company:'samsung',price:18789790},
    {company:'mi',price:9790},
    {company:'iphone',price:789790},
    {company:'vivo',price:18790},
  ];

  constructor() { }
}
