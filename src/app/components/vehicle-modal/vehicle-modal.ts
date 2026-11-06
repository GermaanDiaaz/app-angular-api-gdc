import { Component, inject, input, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleItemResponse } from '../../interfaces/vehicle-item-response';
import { Vehicle } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-modal',
  styleUrl: './vehicle-modal.css',
  templateUrl: './vehicle-modal.html',
})
export class VehicleModal {
  activeModal = inject(NgbActiveModal);
  vehicle = input<Vehicle>();


  @Input() vehicleDetail: VehicleItemResponse | undefined;
}
