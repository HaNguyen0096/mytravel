import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import AddLog from './AddLog'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('AddLog component', () => {

  it('renders AddLog without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <AddLog />
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI for AddLog as expected', () => {
    const tree = renderer
      .create(<BrowserRouter>
                <AddLog />
              </BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

  it('renders AddLog by default', () => {
    const wrapper = shallow(<AddLog />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})