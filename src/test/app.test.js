import * as app from "../app";
import * as math from "../math";

math.add = jest.fn();
math.subtract = jest.fn();

// Mock a function with Jest.fn
test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});