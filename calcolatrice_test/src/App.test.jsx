import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { expect, expectTypeOf } from "vitest";
import { sum } from "./libs/operations";

describe('App', () => {
    it('Renders App component', () => {
        render(<App />);

        expect(screen.getByText('Calcolatrice')).toBeInTheDocument();
    });
    it('Renders Sum of 10 + 22 to equal 32', () => {
        render(<App />);

        const input1 = screen.getByPlaceholderText('primo numero');
        const input2 = screen.getByPlaceholderText('secondo numero');

        fireEvent.change(input1, {target: { value: 10}});
        fireEvent.change(input2, {target: { value: 22}});

        expect(input1).toHaveValue(10);
        expect(input2).toHaveValue(22);

        const sumButton = screen.getByText('+');

        fireEvent.click(sumButton);

        expect(screen.getByText('Risultato: 32')).toBeInTheDocument();
    });
    it('Renders Div of 10 / 0 to throw an Error', () => {
        render(<App />);

        const input1 = screen.getByPlaceholderText('primo numero');
        const input2 = screen.getByPlaceholderText('secondo numero');

        fireEvent.change(input1, {target: { value: 10}});
        fireEvent.change(input2, {target: { value: 0}});

        expect(input1).toHaveValue(10);
        expect(input2).toHaveValue(0);

        const sumButton = screen.getByText('/');

        fireEvent.click(sumButton);

        expect(screen.getByText('Risultato: Errore')).toBeInTheDocument();
    });
});