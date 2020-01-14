import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Image Adapter Django', () => {
    const url = 'https://dl.django.t.taobao.com/rest/1.0/image?fileIds=IRj9SMzrT-mcifkVw_rEswAAACAAAQED&acl=43496dac05a29fe5043e2fa8283c455d&token=B1lIu_0jZUaOn3rFgnoq4wABUYAAAAFkrNL2pwAAACAAAQED&timestamp=1531982807064';
    const expectedUrl = `${url}&zoom=200x200`;
    const options = {
        width: 200,
        height: 200,
        multiple: 1,
    };

    const adapter = Image.adapter.django;

    it('auto adapter width/height', () => {
        expect(adapter(url, options)).to.equal(expectedUrl);
    });

    it('use adapterType', () => {
        expect(adapter(url, Object.assign({}, options, {
            adapterType: 'django',
        }))).to.equal(expectedUrl);
    });

    it('use other adapterType', () => {
        const tfsUrl = 'https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg';
        expect(adapter(tfsUrl, Object.assign({}, options, {
            adapterType: 'tfs',
        }))).to.equal(tfsUrl);
    })

    it('not django type', () => {
        const tfsUrl = 'https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg';
        expect(adapter(tfsUrl, options)).to.equal(tfsUrl);
    })

    it('support daily url', () => {
        const dailyUrl = 'https://dl-daily.django.alibaba.net/rest/1.0/image?fileIds=IRj9SMzrT-mcifkVw_rEswAAACAAAQED&acl=43496dac05a29fe5043e2fa8283c455d&token=B1lIu_0jZUaOn3rFgnoq4wABUYAAAAFkrNL2pwAAACAAAQED&timestamp=1531982807064';
        expect(adapter(dailyUrl, options)).to.equal(`${dailyUrl}&zoom=200x200`);
    });

    it('has anchor', () => {
        const changedUrl = `${url}#a=1`;
        expect(adapter(changedUrl, options)).to.equal(expectedUrl + '#a=1');
    });

    it('support px', () => {
        expect(adapter(url, Object.assign({}, options, {
            width: '200px',
            height: '200px'
        }))).to.equal(expectedUrl);
    });

    it('gif not change', () => {
        expect(adapter(url, Object.assign({}, options, {
            type: 'gif',
        }))).to.equal(url);
    });

    it('illegal width/height not change', () => {
        expect(adapter(url, Object.assign({}, options, {
            width: '100%',
            height: '100px'
        }))).to.equal(url);

        expect(adapter(url, Object.assign({}, options, {
            width: 100,
            height: '100%'
        }))).to.equal(url);

        expect(adapter(url, Object.assign({}, options, {
            width: '100em',
            height: 100,
        }))).to.equal(url);

        expect(adapter(url, Object.assign({}, options, {
            width: 100,
            height: '80rem'
        }))).to.equal(url);

        expect(adapter(url, Object.assign({}, options, {
            width: 'auto',
            height: '100px'
        }))).to.equal(url);

        expect(adapter(url, Object.assign({}, options, {
            width: 'auto',
            height: 'auto'
        }))).to.equal(url);
    });

    it('has changed size', () => {
        const changedUrl = `${url}&zoom=500x500`;
        expect(adapter(changedUrl, options)).to.equal(expectedUrl);
    });

    it('support multiple', () => {
        expect(adapter(url, Object.assign({}, options, {
            multiple: 2
        }))).to.equal(`${url}&zoom=400x400`);
        expect(adapter(url, Object.assign({}, options, {
            multiple: 3
        }))).to.equal(`${url}&zoom=600x600`);
    })

});
