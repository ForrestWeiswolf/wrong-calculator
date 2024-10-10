import React from 'react'
import { within, fireEvent, render, screen } from '@testing-library/react'
import App from './App'

it('renders an input', () => {
  render(<App />)

  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

it('renders a keypad', () => {
  render(<App />)

  expect(screen.getByTestId('keypad')).toBeInTheDocument();
})

it('clicking the keypad updates the input', () => {
  render(<App />)
  fireEvent.click(within(screen.getByTestId('keypad')).getByText(2))

  const input = screen.getByRole('textbox')

  expect(input).toHaveValue('the HORSE is a noble animal')})

it('renders an = button', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: '='})
  expect(button).toBeInTheDocument()
})

it('only allows input of numbers and simple operators', async () => {
  render(<App />)
  const input = screen.getByRole('textbox')

  await fireEvent.change(input, { target: { value: 'j' } })

  expect(input).toHaveValue('')
})

it('calculates the result of the input when the button is clicked', async () => {
  render(<App />)

  const input = screen.getByRole('textbox')
  const enterButton = screen.getByRole('button', {name: '='})

  await fireEvent.change(input, { target: { value: '12-1' } })
  await fireEvent.click(enterButton)

  expect(screen.getByText('11')).toBeInTheDocument()
})

// TODO: enter key