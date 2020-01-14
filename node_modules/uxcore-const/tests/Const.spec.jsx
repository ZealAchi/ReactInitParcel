import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Const from '../src';

describe('Const', () => {
  it('Const should not change', () => {
    const test = {
      MODE: {
        VIEW: 'view',
        EDIT: 'edit',
      },
      ENV: {
        DEBUG: 'debug',
        LIVE: 'live',
      },
    };
    expect(JSON.stringify(test)).to.equal(JSON.stringify(test));
  });
});
