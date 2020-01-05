import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Checkbox from '../components/Checkbox'

beforeEach(cleanup)

jest.mock('../firebase', () => ({
  firestore: () => ({
    collection: jest.fn(() => ({
      doc: jest.fn(() => ({
        update: jest.fn()
      }))
    }))
  })
}))

describe('<Checkbox />', () => {
  describe('Success', () => {
    it('renders the task checkbox ', () => {
      const { queryByTestId } = render(<Checkbox id="1" taskDesc="Test" />)
      expect(queryByTestId('checkbox-action')).toBeTruthy()
    })

    it('renders the task checkbox and accepts a click ', () => {
      const { queryByTestId } = render(<Checkbox id="1" taskDesc="Test" />)
      expect(queryByTestId('checkbox-action')).toBeTruthy()
      fireEvent.click(queryByTestId('checkbox-action'))
    })
  })
})
