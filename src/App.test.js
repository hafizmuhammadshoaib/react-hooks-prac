import React, { /* useState as useStateMock, */ useContext as useContextMock } from 'react';

import { mount } from 'enzyme';
import Index from './pages/index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  //state mocked and tested
  // useState: jest.fn(),
  useContext: jest.fn()
}));


describe('<Index />', () => {
  let wrapper;
  const setUser = jest.fn();
  //state mocked and tested
  // useStateMock.mockImplementation(init => [init, setUser]);


  describe('check login button clicked and context state', () => {
    it('test user', async () => {
      useContextMock.mockImplementation(init => ({ user: null, setUser }))
      wrapper = mount(<Index />);
      wrapper.find('#login').props().onClick();
      await Promise.resolve()
      expect(setUser).toHaveBeenCalledWith({
        id: 4,
        username: "bob",
        email: "bob@bob.com"
      });
    });
  });


  describe('check logout button clicked and context state', () => {
    it('test null', async () => {
      useContextMock.mockImplementation(init => ({
        user: {
          id: 4,
          username: "bob",
          email: "bob@bob.com"
        }, setUser
      }))
      wrapper = mount(<Index />);
      wrapper.find('#logout').props().onClick();
      await Promise.resolve()
      expect(setUser).toHaveBeenCalledWith(null);
    });
  });

  //state mocked and tested
  // describe('state mocked', () => {
  //   it('calls setCount with count + 1', async () => {
  //     wrapper.find('#login').simulate('click');
  //     await Promise.resolve()
  //     expect(setUser).toHaveBeenCalledWith({
  //       id: 4,
  //       username: "bob",
  //       email: "bob@bob.com"
  //     });
  //   });
  // });



});