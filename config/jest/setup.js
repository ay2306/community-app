/* global Event, jest */

import _ from 'lodash';

global.window.matchMedia = global.window.matchMedia || function matchMedia() {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

global.window.requestAnimationFrame = _.noop;

global.window.resizeTo = (width, height) => {
  global.window.innerWidth = width || global.window.innerWidth;
  global.window.innerHeight = height || global.window.innerHeight;
  global.window.dispatchEvent(new Event('resize'));
};

jest.mock('services/money');
