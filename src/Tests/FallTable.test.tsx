import React from "react";
import { render, screen } from "@testing-library/react";
import { FallTable } from "../Components/FallTable";
import userEvent from "@testing-library/user-event";

const setFallElement = () => {
    return;
};

describe("FallDataToArrayTests", () => {
    beforeEach(() => {
        render(
            <FallTable
                setFall={setFallElement}
                Visible={true}
                SearchVisible={true}
            />
        );
    });
    test("Search Courses button works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        expect(searchBar).toBeInTheDocument();

        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        expect(DataList).toBeInTheDocument();

        DataList.click();
        const AddButton: HTMLElement = screen.getByTestId("add-button");
        expect(AddButton).toBeInTheDocument();

        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");
        expect(courseInTable).toBeInTheDocument();
    });
    test("Delete Course works", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByTestId("add-button");
        AddButton.click();
        const courseInTable: HTMLElement = screen.getByTestId("CISC 275");

        const deleteCourse: HTMLElement = screen.getByTestId("CISC 275 delete");
        expect(deleteCourse).toBeInTheDocument();
        deleteCourse.click();
        expect(courseInTable).not.toBeInTheDocument();
    });
    test("Clear Courses to work", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByTestId("add-button");
        AddButton.click();
        const course275: HTMLElement = screen.getByTestId("CISC 275");
        searchBar.click();
        userEvent.type(searchBar, "CISC 220");
        DataList.click();
        AddButton.click();
        const course220: HTMLElement = screen.getByTestId("CISC 220");
        const clearButton = screen.getByTestId("clearFall");
        clearButton.click();

        expect(course275).not.toBeInTheDocument();
        expect(course220).not.toBeInTheDocument();
    });
    test("Courses cannot be duplicated in table", () => {
        const searchBar: HTMLElement = screen.getByTestId("searchIDFall");
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        const DataList: HTMLElement = screen.getByTestId("searchList");
        DataList.click();
        const AddButton: HTMLElement = screen.getByTestId("add-button");
        AddButton.click();
        searchBar.click();
        userEvent.type(searchBar, "CISC 275");
        DataList.click();
        AddButton.click();
        const nodes = screen.queryAllByTestId("CISC 275");
        expect(nodes.length).toEqual(1);
    });
});
