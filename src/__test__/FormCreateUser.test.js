import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormCreateUser from "../FormCreateUser";

describe('FormCreateUser component', () => {

    it('Should return a form to create user', () => {
        const { getByTestId } = render(<FormCreateUser />);

        expect(getByTestId("form-user"))
    });

    it('Should return a form with 3 labels and 1 button', () => {
        const { getByText, getByLabelText, debug } = render(<FormCreateUser />);

        const inputName = getByLabelText("Name");
        const inputEmail = getByLabelText("Email");
        const inputPassword = getByLabelText("Password");
        const submitFormButton = getByText("Create user");

        expect(inputName).toHaveValue("")
        expect(inputEmail).toHaveValue("");
        expect(inputPassword).toHaveValue("");
        expect(submitFormButton);

        debug()
    })
})