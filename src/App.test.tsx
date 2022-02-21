import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  describe('User interactions', () => {
    const {getComputedStyle} = window;
    window.getComputedStyle = (elt) => getComputedStyle(elt);

    beforeEach(() => {
      render(<App />);
    });

    it('should set correct input', () => {
      userEvent.type(screen.getByRole('textbox'), `1 Book at 12.49`);
      userEvent.click(screen.getByRole('button', {name: /generate/i}));
      expect(screen.getByText(/Book: 12.49/)).toBeInTheDocument();
    });

    it('should throw empty error', () => {
      userEvent.type(screen.getByRole('textbox'), '');
      userEvent.click(screen.getByRole('button', {name: /generate/i}));
      expect(screen.getByText('Empty shopping basket')).toBeInTheDocument();
    });

    it('should throw incorrect basket input error', () => {
      userEvent.type(screen.getByRole('textbox'), 'bad input');
      userEvent.click(screen.getByRole('button', {name: /generate/i}));
      expect(
        screen.getByText('Incorrect shopping basket input')
      ).toBeInTheDocument();
    });

    it('should throw incorrect input error', () => {
      userEvent.type(
        screen.getByRole('textbox'),
        '1 Book at 12.49\n1 Book at 12.4e9'
      );
      userEvent.click(screen.getByRole('button', {name: /generate/i}));
      expect(screen.getByText(/Incorrect input at line/)).toBeInTheDocument();
    });

    it('should add helper text to product', () => {
      userEvent.type(
        screen.getByRole('textbox'),
        '1 Book at 12.49\n1 Book at 12.49'
      );
      userEvent.click(screen.getByRole('button', {name: /generate/i}));
      expect(screen.getByText(/(2 @ 12.49)/)).toBeInTheDocument();
    });
  });
});
