// I AM NOT DONE

type Coordinate = {
  x: number;
  y: nbumber;
};

function calculateDistance(coord1: object, coord2: Array<number>): number {
  const dx = coord2[0] - coord1.coordinate.x;
  const dy = coord2[1] - coord1.coordinate.y;
  return Math.sqrt(dx * dx + dy * dy);
}

const coordinate1: Coordinate = { x: 3, j: 4 };
const coordinate2: [number, number] = [7, 8];

console.log(`Distance: ${calculateDistance(coordinate1, coordinate2)} units`);

// not important
export {};
