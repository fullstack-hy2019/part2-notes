import React from 'react'
import { render, waitForDomChange, waitForElement, wait } from 'react-testing-library'
jest.mock('./services/notes')
import App from './App'

describe('<App />', () => {
  it('renders all notes it gets from backend', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)
    await waitForElement(() => component.container.querySelector('.note'))
    // myös seuraavat toimii
    //await wait(() => component.getByText('HTML on helppoa'))
    //await waitForDomChange({ container: component.container })

    const notes = component.container.querySelectorAll('.note')
    expect(notes.length).toBe(3) 

    expect(component.container).toHaveTextContent('HTML on helppoa')
    expect(component.container).toHaveTextContent('Selain pystyy suorittamaan vain javascriptiä')
    expect(component.container).toHaveTextContent('HTTP-protokollan tärkeimmät metodit ovat GET ja POST')
  })
})