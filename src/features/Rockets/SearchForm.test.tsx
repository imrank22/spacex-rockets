import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm, { ISearchProps } from "./SearchForm";

const mockFilterActiveRockets = jest.fn();

const defaultProps: ISearchProps = {
    filterActiveRockets: mockFilterActiveRockets,
};

describe("SearchForm", () => {
    beforeEach(() => {
        mockFilterActiveRockets.mockClear();
    });

    test('should render without crashing', () => {
        const wrapper = render(<SearchForm {...defaultProps} />);
        expect(wrapper.baseElement).toBeTruthy();
    });

    test("should render SearchForm component correctly", async () => {
        const { container } = render(<SearchForm {...defaultProps} />);

        expect(screen.getByText(/Filters/i)).toBeInTheDocument();
        expect(container.getElementsByClassName("search-box")).toBeTruthy();
        expect(screen.getByTestId("active-label")).toBeInTheDocument();
    });
});
