import React from 'react';

import { render, screen } from '@testing-library/react'; import '@testing-library/jest-dom';

import Resume from './Resume';


test('test scenario 1', () => {
    render(<Resume />);
    const element = screen.getByText(/Formations/i);
    expect(element).toBeInTheDocument();
 });