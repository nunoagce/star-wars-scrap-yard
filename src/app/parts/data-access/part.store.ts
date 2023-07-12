import { Injectable } from '@angular/core';
import { WattoService } from 'src/app/layout/data-access/watto.service';
import { PartsForm } from '../helpers/part.form';

@Injectable({ providedIn: 'root' })
export class PartStore {

    constructor(private wattoService: WattoService) { }

    placeOrder(order: PartsForm): void {
        this.wattoService.placeOrder();
    }
}