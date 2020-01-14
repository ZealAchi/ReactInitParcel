import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Image Adapter TFS', () => {
    const url = 'https://img.alicdn.com/tfs/TB1ltSkD1GSBuNjSspbXXciipXa-300-300.jpg';
    const expectedUrl = `${url}_100x100.jpg`;
    const options = {
        width: 95,
        height: 95,
        multiple: 1,
      };
    
    const adapter = Image.adapter.tfs;

    it('auto adapter width/height', () => {
        expect(adapter(url, options)).to.equal(expectedUrl);
    });

    it('use adapterType', () => {
        expect(adapter(url, Object.assign({}, options, {
            width: '95px',
            height: '95px',
            adapterType: 'tfs',
        }))).to.equal(expectedUrl);
    });

    it('use other adapterType', () => {
        const djangoUrl = 'https://dl.django.t.taobao.com/rest/1.0/image?fileIds=G_zVCbWpRdywlbpyCgq4cQAAACAAAQED&acl=aef1bb1b6fe68d174aa66839833f2c7c&token=bTQHovG1x49ytOnb3xwx8wABUYAAAAFl8CC9yAAAACAAAQED&timestamp=1537407886700&zoom=1000x1000';
        expect(adapter(djangoUrl, Object.assign({}, options, {
            adapterType: 'django',
        }))).to.equal(djangoUrl);
    })

    it('support px', () => {
        expect(adapter(url, Object.assign({}, options, {
            width: '95px',
            height: '95px'
        }))).to.equal(expectedUrl);
    });

    it('svg not change', () => {
        const svgUrl = 'https://img.alicdn.com/tfs/TB1ETQda6DpK1RjSZFrXXa78VXa-80-45.svg'
        expect(adapter(svgUrl, options)).to.equal(svgUrl);
    });

    it('not tfs type', () => {
        const djangoUrl = 'https://dl.django.t.taobao.com/rest/1.0/image?fileIds=G_zVCbWpRdywlbpyCgq4cQAAACAAAQED&acl=aef1bb1b6fe68d174aa66839833f2c7c&token=bTQHovG1x49ytOnb3xwx8wABUYAAAAFl8CC9yAAAACAAAQED&timestamp=1537407886700&zoom=1000x1000';
        expect(adapter(djangoUrl, options)).to.equal(djangoUrl);
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
        const changedUrl = `${url}_200x200.jpg`;
        expect(adapter(changedUrl, options)).to.equal(expectedUrl);
    });

    it('too small/large size', () => {
        expect(adapter(url, Object.assign({}, options, {
            width: 5,
            height: 5
        }))).to.equal(`${url}_16x16.jpg`);

        expect(adapter(url, Object.assign({}, options, {
            width: 5000,
            height: 5000
        }))).to.equal(url);
    });

    it('support multiple', () => {
        expect(adapter(url, Object.assign({}, options, {
            multiple: 2
        }))).to.equal(`${url}_190x190.jpg`);
        expect(adapter(url, Object.assign({}, options, {
            multiple: 3
        }))).to.equal(`${url}_290x290.jpg`);
    })
    
});
