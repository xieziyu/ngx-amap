import { DriveStep } from './drive-step';

export interface DriveRoute {
  distance: number;
  time: number;
  policy: string;
  tolls: number;
  tolls_distance: number;
  steps: DriveStep[];
  restriction: number;
}
