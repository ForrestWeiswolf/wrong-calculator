import React from 'react'
import { render, screen } from '@testing-library/react'
import Keypad from './Keypad'

it('renders buttons 0-9', () => {
  render(<Keypad />)

  for (let i = 0; i < 10; i++) {
    expect(screen.getByRole('button', { name: i.toString() })).toBeInTheDocument()
  }
})

it('renders buttons for operations', () => {
  render(<Keypad />)

  expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '*' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: '/' })).toBeInTheDocument()
})
