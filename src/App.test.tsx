import {describe,test,expect}from 'vitest'
import App from './App'
import {render,screen,userEvent}from './test/utils'

describe('Simple test',()=>{
    test('Title is visible',()=>{
        render(<App/>)
        expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
    })
    test('should increment count on click',async()=>{
        render(<App/>)
        userEvent.click(screen.getByRole('button'))
        expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
    })
})