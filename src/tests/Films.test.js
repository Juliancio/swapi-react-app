import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Films from "../components/Films" 

test("Films", () => {
    it("displays initial films", () => {
        const { getByTestId } = render(<Films />);
        const films = getByTestId("films");
        expect(films.childElementCount).toBe(7);
      });
}) 