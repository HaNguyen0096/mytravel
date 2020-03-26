import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ListView from './ListView'

describe('ListView component', () => {

  const testLog = [
    {
      id: 1,
      latitude: '42.3554',
      longitude: '-71.0640',
      title: 'Boston Common',
      description: 'This is a beautiful place',
      image: 'https://en.wikipedia.org/wiki/File:Aerial_View_Parkman_Bandstand_at_Boston_Common.jpg',
      rating: 10,
      visited_day: '2020-03-18T07:55:12.825Z',
      public: false,
      date_created: '2020-03-18T07:55:12.825Z',
    }
  ]
  
  it('renders ListView without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <ListView log={testLog}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for ListView as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <ListView log={testLog}/>
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders ListView by default', () => {
    const wrapper = shallow(<ListView  log={testLog}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})