import { Coordinates } from "./types";

export function knightPossibleDestinations(x: number, y: number): number[][] {
  const directions = [];

  x - 2 > 0 && y - 1 > 0 ? directions.push([x - 2, y - 1]) : null;
  x - 2 > 0 && y + 1 < 9 ? directions.push([x - 2, y + 1]) : null;
  x + 2 < 9 && y - 1 > 0 ? directions.push([x + 2, y - 1]) : null;
  x + 2 < 9 && y + 1 < 8 ? directions.push([x + 2, y + 1]) : null;

  x - 1 > 0 && y - 2 > 0 ? directions.push([x - 1, y - 2]) : null;
  x - 1 > 0 && y + 2 < 9 ? directions.push([x - 1, y + 2]) : null;
  x + 1 < 9 && y - 2 > 0 ? directions.push([x + 1, y - 2]) : null;
  x + 1 < 9 && y + 2 < 9 ? directions.push([x + 1, y + 2]) : null;

  return directions;
}

(async () => {
  try {
    const results = await knightPossibleDestinations(1, 1);
    console.log("results-->", results);
  } catch (error) {
    console.log("error--->", error);
  }
})();
