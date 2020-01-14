import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Image Adapter OSS', () => {
    const url = 'https://alinw-oss.alicdn.com/alinw-node-admin-public-oss/2018-7-12/1531372852377/%EF%BC%88%E9%98%BF%E9%87%8C%E5%91%B3%E5%84%BF%E9%A6%96%E9%A1%B5%EF%BC%89%E8%84%B1%E8%B4%ABbanner%EF%BC%88280x180%EF%BC%89.jpg';
    const expectedUrl = `${url}?x-oss-process=image/resize,w_200,h_200`;
    const options = {
        width: 200,
        height: 200,
        multiple: 1,
        adapterType: 'oss', // oss由于其地址没有固定匹配规则，因此必须强制指定
      };
    
    const adapter = Image.adapter.oss;

    it('auto adapter width/height', () => {
        expect(adapter(url, options)).to.equal(expectedUrl);
    });

    it('not use adapterType', () => {
        expect(adapter(url, Object.assign({}, options, {
            adapterType: null
        }))).to.equal(url);
    })

    it('support px', () => {
        expect(adapter(url, Object.assign({}, options, {
            width: '200px',
            height: '200px'
        }))).to.equal(expectedUrl);
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
        const changedUrl = `${url}?x-oss-process=image/resize,w_300,h_300`;
        expect(adapter(changedUrl, options)).to.equal(expectedUrl);
    });

    it('too large size', () => {


        expect(adapter(url, Object.assign({}, options, {
            width: 5000,
            height: 5000
        }))).to.equal(`${url}?x-oss-process=image/resize,w_4096,h_4096`);
    });

    it('support multiple', () => {
        expect(adapter(url, Object.assign({}, options, {
            multiple: 2
        }))).to.equal(`${url}?x-oss-process=image/resize,w_400,h_400`);
        expect(adapter(url, Object.assign({}, options, {
            multiple: 3
        }))).to.equal(`${url}?x-oss-process=image/resize,w_600,h_600`);
    })
    
});
