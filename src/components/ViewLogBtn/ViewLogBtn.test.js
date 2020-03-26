import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ViewLogBtn from './ViewLogBtn'

describe('ViewLogBtn component', () => {

  it('renders ViewLogBtn without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <ViewLogBtn />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for ViewLogBtn as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <ViewLogBtn />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders ViewLogBtn by default', () => {
    const wrapper = shallow(<ViewLogBtn  />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });

})