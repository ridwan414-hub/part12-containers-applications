import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';

describe('Todo component', () => {
  const mockTodo = {
    text: 'Test todo',
    done: false
  };
  
  const mockDeleteTodo = vi.fn();
  const mockCompleteTodo = vi.fn();

  it('renders todo text', () => {
    render(<Todo 
      todo={mockTodo} 
      deleteTodo={mockDeleteTodo} 
      completeTodo={mockCompleteTodo} 
    />);
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  it('shows correct buttons when todo is not done', () => {
    render(<Todo 
      todo={mockTodo} 
      deleteTodo={mockDeleteTodo} 
      completeTodo={mockCompleteTodo} 
    />);
    
    expect(screen.getByText('Set as done')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('shows correct text when todo is done', () => {
    const doneTodo = { ...mockTodo, done: true };
    render(<Todo 
      todo={doneTodo} 
      deleteTodo={mockDeleteTodo} 
      completeTodo={mockCompleteTodo} 
    />);
    
    expect(screen.getByText('This todo is done')).toBeInTheDocument();
  });

  it('calls completeTodo when Set as done is clicked', () => {
    render(<Todo 
      todo={mockTodo} 
      deleteTodo={mockDeleteTodo} 
      completeTodo={mockCompleteTodo} 
    />);
    
    fireEvent.click(screen.getByText('Set as done'));
    expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo);
  });

  it('calls deleteTodo when Delete is clicked', () => {
    render(<Todo 
      todo={mockTodo} 
      deleteTodo={mockDeleteTodo} 
      completeTodo={mockCompleteTodo} 
    />);
    
    fireEvent.click(screen.getByText('Delete'));
    expect(mockDeleteTodo).toHaveBeenCalledWith(mockTodo);
  });
});