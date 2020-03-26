import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import AddLogBtn from './AddLogBtn'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AddLogBtn component', () => {

  it('renders AddLogBtn without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <AddLogBtn />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for AddLogBtn as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <AddLogBtn />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders AddLogBtn by default', () => {
    const wrapper = shallow(<AddLogBtn />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})