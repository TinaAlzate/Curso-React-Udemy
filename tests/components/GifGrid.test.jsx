import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Test in <GifGrid />', () => {
  const category = 'One Punch'

  test('Should displayed the loading inicially', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render( <GifGrid category={ category }/> );

    expect( screen.getByText( 'Loading...' ) );
    expect( screen.getByText( category ) )
  })

  test('Should displayed items when useFetchGifs images are loaded', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Valentina',
        url: 'https://images.valentina.png'
      },
      {
        id: '123',
        title: 'Saitama',
        url: 'https://images.saitama.png'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })
    
    render( <GifGrid category={category} /> );

    expect( screen.getAllByRole('img').length ).toBe(2)
  });
  
});
