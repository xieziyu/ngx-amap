import { RideStep } from './ride-step';

export interface RideRoute {
  distance: number;
  time: number;
  steps: RideStep[];
}
