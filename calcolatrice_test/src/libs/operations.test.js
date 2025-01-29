import { describe, expect } from "vitest";
import { mul, sub, sum, div } from "./operations";

describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    });
    it('adds 2 + 0 to equal 2', () => {
        expect(sum(2,0)).toBe(2);
    });
    it('adds 0 + (-2) to equal -2', () => {
        expect(sum(0,-2)).toBe(-2);
    });
});

describe('sub', () => {
    it('subtracts 2 - 1 to equal 1', () => {
        expect(sub(2,1)).toBe(1);
    });
    it('subtracts 2 - 0 to equal 2', () => {
        expect(sub(2,0)).toBe(2);
    });
    it('subtracts 2 - (-1) to equal 3', () => {
        expect(sub(2,-1)).toBe(3);
    });
});

describe('mul', () => {
    it('multiplies 2 * 3 to equal 6', () => {
        expect(mul(2,3)).toBe(6);
    });
    it('multiplies 2 * 0 to equal 0', () => {
        expect(mul(2,0)).toBe(0);
    });
    it('multiplies 2 * (-2) to equal -4', () => {
        expect(mul(2,-2)).toBe(-4);
    });
});

describe('div', () => {
    it('divides 6 / 2 to equal 3', () => {
        expect(div(6,2)).toBe(3);
    });
    it('divides 6 / -2 to equal -3', () => {
        expect(div(6,-2)).toBe(-3);
    });
    it('divides 6 / 0 to equal \'Error\'', () => {
        expect(div(6,0)).toBe('Error');
    });
})