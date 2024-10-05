import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Keypad from './Keypad'

it('renders buttons 0-9', () => {
  render(<Keypad handlePress={() => { }} />)

  for (let i = 0; i < 10; i++) {
    expect(screen.getByRole('button', { name: i.toString() })).toBeInTheDocument()
  }
})

// it('renders `.` button', () => {
//   render(<Keypad handlePress={() => { }} />)

//   expect(screen.getByRole('button', { name: '.' })).toBeInTheDocument()
// })

it('renders buttons for operations', () => {
  render(<Keypad handlePress={() => { }} />)

  expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '*' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '/' })).toBeInTheDocument()
})

it('calls handlePress when a key is pressed', () => {
  const spy: (key: string) => {} = jest.fn()

  render(<Keypad handlePress={spy} />)
  fireEvent.click(screen.getByRole('button', { name: '+' }))

  expect(spy).toHaveBeenCalledWith('+')
})
