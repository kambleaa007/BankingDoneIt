// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';



import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


// NOT WORKING WORKS WHEN PLACED IN .test.js FILE ONLY
// import Enzyme from 'Enzyme';
// import { configure  } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adaptor : new Adapter() });
// NOT WORKING WORKS WHEN PLACED IN .test.js FILE ONLY


// import * as enzyme from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
// enzyme.configure({ adapter: new Adapter() });