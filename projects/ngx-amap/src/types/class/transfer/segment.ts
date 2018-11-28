export interface Segment {
  instruction: string;
  transit_mode: string;
  time: number;
  transit: any; // TODO: TransitDetail | WalkDetails
  distance: number;
}
