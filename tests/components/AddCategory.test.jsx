import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Test in <AddCategory />', () => {

  const inputValue = 'Valentina'

  test('Should change the value of the text box', () => {

    // 1. We create the test subject
    render( <AddCategory onNewCategory={ () => {} }/> )

    // 2. We extract the input
    const input = screen.getByRole('textbox');

    // 3. We execute the event 'onInputChange'
    fireEvent.input(input, { target: { value: inputValue } } )

    // 4. Assertion of what we expect to happen after the event.
    expect( input.value ).toBe('Valentina')
    
  })

  test('Should call OnNewCategory if the input has a value', () => {

    const onNewCategory = jest.fn();
    // TODO: 

    render(<AddCategory onNewCategory={ onNewCategory } />)

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form')

    fireEvent.input( input, { target: { value: inputValue } } )
    fireEvent.submit( form )

    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
   
  });

  test('Shouldn`t call onNewCategory if the input doesn`t a value', () => {
    
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).not.toHaveBeenCalled();
  });
  
  
});
