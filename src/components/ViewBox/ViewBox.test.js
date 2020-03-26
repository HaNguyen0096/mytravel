import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewBox from './ViewBox'

describe('ViewBox component', () => {
  const viewPath = 'MapView'
  it('renders ViewBox without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <ViewBox viewPath={viewPath}/>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for ViewBox as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <ViewBox viewPath={viewPath}/>
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders ViewBox by default', () => {
    const wrapper = shallow(<ViewBox  viewPath={viewPath}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})