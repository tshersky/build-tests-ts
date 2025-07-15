import Line from '../modules/ecs6-class/line';
import Point from '../modules/ecs6-class/point';

describe('Line', () => {
    let line: Line;
    const pointA = new Point({ x: 2, y: 3 });
    const pointB = new Point({ x: 5, y: 11 });

    beforeEach(() => {
        line = new Line({ point1: pointA, point2: pointB });
    });

    test('calculates slope correctly', () => {
        line.calculateSlope();
        expect(line.slope).toBeCloseTo(2.6667, 4); 
    });

    test('calculates n of line function correctly', () => {
        line.calculateNOfLineFunction();
        expect(line.n).toBeCloseTo(-2.3333, 4); 
    });

    test('gets point on X axis correctly', () => {
        const pointOnXAxis = line.getPointOnXAsis();
        expect(pointOnXAxis?.x).toBeCloseTo(0.875, 4);
        expect(pointOnXAxis?.y).toBeCloseTo(0, 4);
    });

    test('gets point on Y axis correctly', () => {
        const pointOnYAxis = line.getPointOnYAsis();
        expect(pointOnYAxis?.x).toBeCloseTo(0, 4);
        expect(pointOnYAxis?.y).toBeCloseTo(-2.3333, 4);
    });

    test('gets point by X correctly', () => {
        const pointByX = line.getPointByX(10);
        expect(pointByX?.x).toBeCloseTo(10, 4);
        expect(pointByX?.y).toBeCloseTo(24.3333, 4);
    });

    test('gets point by Y correctly', () => {
        const pointByY = line.getPointByY(11);
        expect(pointByY?.x).toBeCloseTo(5, 4);
        expect(pointByY?.y).toBeCloseTo(11, 4);
    });

    test('calculateSlope should calculate the correct slope', () => {
        line.calculateSlope();
        expect(line.slope).toBe(2.6666666666666665); // (11 - 3) / (5 - 2) = 8 / 3
    });

    test('calculateNOfLineFunction should calculate the correct n', () => {
        line.calculateNOfLineFunction();
        expect(line.n).toBe(-2.333333333333333); // 3 - (8/3) * 2
    });

   

    test('getPointOnYAsis should return the correct point on Y axis', () => {
        line.calculateNOfLineFunction();
        const pointOnYAxis = line.getPointOnYAsis();
        expect(pointOnYAxis).toEqual(new Point({ x: 0, y: -2.333333333333333 })); // n = -2.333333333333333
    });

   

    test('getPointByY should return the correct point for a given y', () => {
        line.calculateNOfLineFunction();
        const pointByY = line.getPointByY(11);
        expect(pointByY).toEqual(new Point({ x: 5, y: 11 })); // Should return the original point2
    });



test('getPointOnXAsis should return undefined for horizontal line', () => {
    const horizontalLine = new Line({ point1: new Point({ x: 1, y: 4 }), point2: new Point({ x: 3, y: 4 }) });
    const pointOnXAxis = horizontalLine.getPointOnXAsis();
    expect(pointOnXAxis).toBeUndefined(); // שיפוע אפס
});



test('calculateSlope should return correct slope for negative slope', () => {
    const negativeSlopeLine = new Line({ point1: new Point({ x: 5, y: 5 }), point2: new Point({ x: 2, y: 8 }) });
    negativeSlopeLine.calculateSlope();
    expect(negativeSlopeLine.slope).toBe(-1); // (8 - 5) / (2 - 5) = -1
});

test('getPointByX should handle edge cases', () => {
    const edgeCaseLine = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
    const pointByX = edgeCaseLine.getPointByX(0); // x = 0
    expect(pointByX).toEqual(new Point({ x: 0, y: 0 })); // y should be 0
});

test('getPointByY should handle edge cases', () => {
    const edgeCaseLine = new Line({ point1: new Point({ x: 0, y: 0 }), point2: new Point({ x: 1, y: 1 }) });
    const pointByY = edgeCaseLine.getPointByY(1); // y = 1
    expect(pointByY).toEqual(new Point({ x: 1, y: 1 })); // x should be 1
});




test('calculateSlope should calculate correct slope', () => {
                line = new Line({ point1: new Point({ x: 2, y: 3 }), point2: new Point({ x: 5, y: 11 }) });

    line.calculateSlope();
        expect(line.slope).toBeCloseTo(2.67, 2); // חישוב שיפוע נכון
    });

    

    

    

   
    

  
});