import { WalkStep } from './walk-step';

export interface WalkRoute {
  distance: number;
  time: number;
  steps: WalkStep[];
}
