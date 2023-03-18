import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('renders welcome message', () => {
    render(<Banner />);
    const welcomeMessage = screen.getByText(/Welcome to space!/i);
    expect(welcomeMessage).toBeInTheDocument();
});

test('renders launch into the future message', () => {
    render(<Banner />);
    const launchMessage = screen.getByText(/Launch into the future with SpaceX rockets/i);
    expect(launchMessage).toBeInTheDocument();
});

test('renders experience the future button', () => {
    render(<Banner />);
    const experienceButton = screen.getByRole('button', { name: /experience the future/i });
    expect(experienceButton).toBeInTheDocument();
});

test('renders rocket image', () => {
    render(<Banner />);
    const rocketImage = screen.getByAltText('rocket');
    expect(rocketImage).toBeInTheDocument();
});
