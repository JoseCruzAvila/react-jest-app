import * as app from "../app";
import * as math from "../math";

// Mock a module with Jest.mock
jest.mock("../math.js");
test("calls math.add", () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
});

test("calls math.subtract", () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
});