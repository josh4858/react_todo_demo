import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { NewTodoForm } from "../components/NewTodoForm"; // Adjust the path accordingly


test('submit form with non-empty title calls onSubmit function', () => {
  // Mock the onSubmit function
  const mockSubmit = jest.fn();

  // Render the component with the mock function
  render(<NewTodoForm onSubmit={mockSubmit} />);

  // Get input element and type a todo title
  const input = screen.getByLabelText('Title');
  fireEvent.change(input, { target: { value: 'Test Todo' } });

  // Get the submit button and click it
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);

  // Assert that the onSubmit function was called with the correct title
  expect(mockSubmit).toHaveBeenCalledWith('Test Todo');
});
