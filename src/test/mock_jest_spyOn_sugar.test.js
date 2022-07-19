import * as app from "../app";
import * as math from "../math";

/**
 * Instantiate the original function and then create a mock from it, test it and then ovveride the 
 * function implementation with mock, test it and finally restore de original function an test it
 */
 test("calls math.add", () => {
    // store the original implementation
    const originalAdd = math.add;
    // mock add with the original implementation
    math.add = jest.fn(originalAdd);
    // spy the calls to add
    expect(app.doAdd(1, 2)).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // override the implementation
    math.add.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    expect(math.add).toHaveBeenCalledWith(1, 2);
    // restore the original implementation
    math.add = originalAdd;
    expect(app.doAdd(1, 2)).toEqual(3);
});