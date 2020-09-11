import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogEntry from './LogEntry';

describe('<LogEntry />', () => {
  test('it should mount', () => {
    render(<LogEntry />);
    
    const logEntry = screen.getByTestId('LogEntry');

    expect(logEntry).toBeInTheDocument();
  });
});