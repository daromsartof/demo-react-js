import React from 'react';
import { render, screen,fireEvent, getByText } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Civils from '../components/Civils';
import { Button, userContext } from '../App';
import { initialData } from '../utils/constants';
import About from '../pages/About';
import { GlobalDataType } from '../utils/TypeInterface';
import Skills from '../components/Skills';

//initiall fake data to test all components
var data = initialData;
data.profils = {
    birthdays: "data de naissance",
    degree: "li"
}

/**
 * custom render with user providers
 * @param ui children of the user providers
 * @param param1 providers options and props
 * @returns render of the components children
 */
const userContextRender = (ui: JSX.Element, { providerProps, ...renderOptions }: {
    providerProps: {
        value:  GlobalDataType 
    }
}) => {
    return render(
        <userContext.Provider {...providerProps}>{ui}</userContext.Provider>
    )
}


test('renders civils components test', () => {
    const providerProps = {
        value: data,
    }
    const { getAllByRole } = userContextRender(<Civils />, { providerProps });
    const listCivil = getAllByRole("list").filter(e => e.getAttribute('class') == 'kl-civil-content');
   
    expect(listCivil).toHaveLength(2);
    listCivil.map(e => expect(e.children).toHaveLength(3))
    expect(listCivil[0].firstChild?.textContent).toBe(`Date de naissance : ${data.profils.birthdays}`);
    expect(listCivil[1].lastChild?.textContent).toBe(`Diplôme :${data.profils.degree}`);
    expect(listCivil[1].children[1].textContent).toBe(`Email : `);
});



test('renders skils components test', () => {
    data.skils = [{
        id: 0,
        uskCategory: "cat-1",
        uskImageUrl: "url",
        uskTitle: "title 2",
        uskValue: 100
    },
    {
        id: 1,
        uskCategory: "cat-2",
        uskImageUrl: "path",
        uskTitle: "title",
        uskValue: 0
    }]
    data.SkilsCategory = [{
        id: 1,
        userSkils: [],
        uskCatTitle: "cat-1"
    }, {
        id: 2,
        userSkils: [],
        uskCatTitle: "cat-2"
    }]
    
    const { getByText } = userContextRender(<Skills />, {
        providerProps: {
            value: data,
        }
    });
    const filter    = document.getElementById("id-filter");
    const listSkils = document.getElementsByClassName('kl-skils-content');
    expect(filter?.children[0].childElementCount).toEqual(data.SkilsCategory.length + 1);
    expect(listSkils[0]).toBeInTheDocument;
    expect(document.getElementById("id-skils-contents")?.children).toHaveLength(data.skils.length);
    fireEvent.click(getByText(`#${data.SkilsCategory[1].uskCatTitle}`))
    //expect(document.getElementById("id-skils-contents")?.children).toHaveLength(1);
});



test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })