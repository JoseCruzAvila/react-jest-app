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

// Spy a function with Jest.spyOn
test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    // calls the original implementation
    expect(app.doAdd(1, 2)).toEqual(3);
    // and the spy stores the calls to add
    expect(addMock).toHaveBeenCalledWith(1, 2);
});

// Use spy for restore the function behavior after mock
test("calls math.add", () => {
    const addMock = jest.spyOn(math, "add");
    // override the implementation
    addMock.mockImplementation(() => "mock");
    expect(app.doAdd(1, 2)).toEqual("mock");
    // restore the original implementation
    addMock.mockRestore();
    expect(app.doAdd(1, 2)).toEqual(3);
});

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