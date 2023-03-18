// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "jest-matchmedia-mock";
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // for testing purposes only
        removeListener: jest.fn(), // for testing purposes only
        addEventListener: jest.fn(), // for testing purposes only
        removeEventListener: jest.fn(), // for testing purposes only
        dispatchEvent: jest.fn(), // for testing purposes only
    }),
});
