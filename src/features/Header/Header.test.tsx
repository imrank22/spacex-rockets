import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    test('renders navigation links', () => {
        // Render the component
        render(<Header />);

        // Check if navigation links are present
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Solutions")).toBeInTheDocument();
        expect(screen.getByText("Details")).toBeInTheDocument();
        expect(screen.getByText("Expertise")).toBeInTheDocument();
        expect(screen.getByText("Pricing")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
    });

    test('renders logo image with correct attributes', () => {
        const altText = 'spacex_logo';
        const imgSrc = 'spacex.webp';
        render(<Header />);
        const imgElement = screen.getByAltText(altText);
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', imgSrc);
        expect(imgElement).toHaveAttribute('width', '500');
        expect(imgElement).toHaveAttribute('height', '400');
    });

});
