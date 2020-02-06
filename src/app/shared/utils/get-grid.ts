export function getGridLngLats(
  map: AMap.Map,
  size: number,
  colNum: number,
  cellX = 70,
  cellY = 70,
) {
  const center = map.getCenter();
  const pxCenter = map.lnglatToPixel(center);
  const rowNum = Math.ceil(size / colNum);
  const startX = pxCenter.getX();
  const startY = pxCenter.getY();
  const lngLats = [];

  for (let r = 0; r < rowNum; r++) {
    for (let c = 0; c < colNum; c++) {
      const x = startX + (c - (colNum - 1) / 2) * cellX;
      const y = startY + (r - (rowNum - 1) / 2) * cellY;
      lngLats.push(map.pixelToLngLat(new AMap.Pixel(x, y)));
      if (lngLats.length >= size) {
        break;
      }
    }
  }

  return lngLats;
}
