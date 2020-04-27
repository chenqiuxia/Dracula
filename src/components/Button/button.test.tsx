import React from 'react'
import {render} from '@testing-library/react'
import Button from './button'

test('our first test case', () => {
    const wapper = render(<Button>ook</Button>)
    const element = wapper.queryByText('ook')
   expect(element).toBeTruthy()
   expect(element).toBeInTheDocument()
})

describe('test button compoent', () => {
    it('should render defalut props', () => {
        const wapper = render(<Button>ook</Button>)
        const element = wapper.getByText('ook')
       expect(element).toBeInTheDocument()
       expect(element.tagName).toEqual('BUTTON')
       expect(element).toHaveClass('btn')
    })
    it('should render large', () => {
        
    })
})