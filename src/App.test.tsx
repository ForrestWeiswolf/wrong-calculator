import React from 'react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import App from './App'

it('renders an input', () => {
  render(<App />)
  const input = screen.getByRole('textbox')
  expect(input).toBeInTheDocument()
})

it('renders an enter button', () => {
  render(<App />)
  const buttons = screen.getByRole('button')
  expect(within(buttons).getByText('Enter')).toBeInTheDocument()
})


it('calculates the result of the input when the button is clicked', async () => {
  render(<App />)

  const input = screen.getByRole('textbox')
  const enterButton = within(screen.getByRole('button')).getByText('Enter')

  await fireEvent.change(input, { target: { value: '12*12' } })
  await fireEvent.click(enterButton)

  expect(screen.getByText('144')).toBeInTheDocument()
})

// TODO: enter key