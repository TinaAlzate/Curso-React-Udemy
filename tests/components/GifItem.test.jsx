import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Test in <GifItem />', () => {
  
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg'

  test('Should be match with the snapshot', () => {
    
    const {container} = render( <GifItem title={title} url={url} /> );
    expect(container).toMatchSnapshot();

  });
  
  test('Should be displayed the image with the specified URL and ALT', () => {

    render(<GifItem title={title} url={url} />);
    // screen.debug(); 
    // expect( screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)

    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  });

  test('Should be displayed the title in the component', () => {
    
    render(<GifItem title={title} url={url} />);
    expect(screen.getByAltText( title )).toBeTruthy();

  });
});
