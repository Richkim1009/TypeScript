const borough = {name: 'Brooklyn', location: [40.688, -73979]};
const loc = borough.location;
loc[0] = 0;
borough.location; // 값이 바뀐다.

interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?:BoundingBox;
}

function inPointInPolygon(polygon: Polygon, pt: Coordinate) {
  if(polygon.bbox) {
    if(pt.x < polygon.bbox.x[0] || pt.x > polygon.bbox.x[1] || pt.y < polygon.bbox.y[0] || pt.y > polygon.bbox.y[1] ) {
      return false;
    }
  }
}

function inPointInPolygon2(polygon: Polygon, pt: Coordinate) {
  const box = polygon.bbox;
  if(polygon.bbox) {
    if(pt.x < box.x[0] || pt.x > box.x[1] ||
      pt.y < box.y[0] || pt.y > box.y[1]) {
        return false;
      }
  }
}

function inPointInPolygon3(polygon: Polygon, pt: Coordinate) {
  const {bbox} = polygon;
  if(bbox) {
    if(pt.x < bbox.x[0] || pt.x > bbox.x[1] ||
      pt.y < bbox.y[0] || pt.y > bbox.y[1]) {
        return false;
      }
  }
}
