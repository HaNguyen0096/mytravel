import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import MapView from './MapView'

describe('MapView component', () => {
  const viewPath = 'MapView'
  const testLogs = [
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
    },
    {
      id: 2,
      latitude: '48.8584',
      longitude: '2.2945',
      title: 'Eiffel Tower',
      description: 'The tower is so tall',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
      rating: 10,
      visited_day: '2020-03-18T07:55:12.825Z',
      public: true,
      date_created: '2020-03-18T07:55:12.825Z'
    },
  ]
  it('renders MapView without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <MapView viewPath={viewPath} logs={testLogs}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for MapView as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <MapView viewPath={viewPath} logs={testLogs}/>
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders MapView by default', () => {
    const wrapper = shallow(<MapView  viewPath={viewPath} logs={testLogs}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})