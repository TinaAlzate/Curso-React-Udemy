import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"
describe('Test in <GifExpertApp />', () => {

  test('', () => {

    render( <GifExpertApp /> )
    const input = screen.getByRole('textbox');

    const categories = ['One Punch']
    const newCategorieValue = 'Developers'
    
    fireEvent.input(input, { target: { value: newCategorieValue } })

    const setCategories = (newCategorie) => {
      return [newCategorie, ...categories]
    }
    
    const newCategories = setCategories(newCategorieValue)
    
    expect(newCategories).toEqual( [ newCategorieValue, 'One Punch' ] )

  });
  
});
