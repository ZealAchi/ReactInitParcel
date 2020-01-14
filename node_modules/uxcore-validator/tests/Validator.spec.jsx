import expect from 'expect.js';
import Validator from '../src';

describe('Validator', () => {
    it('should be able to validate not empty', () => {
        expect(Validator.isNotEmpty('foo')).to.be(true);
        expect(Validator.isNotEmpty('')).to.be(false);
        expect(Validator.isNotEmpty(['foo'])).to.be(true);
        expect(Validator.isNotEmpty([])).to.be(false);
        expect(Validator.isNotEmpty({foo: 'bar'})).to.be(true);
        expect(Validator.isNotEmpty({})).to.be(false);
        expect(Validator.isNotEmpty(0)).to.be(true);
        expect(Validator.isNotEmpty(true)).to.be(true);
        expect(Validator.isNotEmpty(false)).to.be(false);
        expect(Validator.isNotEmptyIncludeFalse(false)).to.be(true);
        expect(Validator.isNotEmptyIncludeFalse('')).to.be(false);
    });

    it('should be able to validate number', () => {
        expect(Validator.isNum(123)).to.be(true);
        expect(Validator.isNum('123')).to.be(true);
        expect(Validator.isNum('foo')).to.be(false);
    });

    it('should be able to validate integer', () => {
        expect(Validator.isInt(123)).to.be(true);
        expect(Validator.isInt(12.3)).to.be(false);
    });

    it('should be able to validate decimal', () => {
        expect(Validator.isDecimal(12.3)).to.be(true);
        expect(Validator.isDecimal(123)).to.be(false);
    });

    it('should be able to validate array', () => {
        expect(Validator.isArray([])).to.be(true);
        expect(Validator.isArray({})).to.be(false);
    });

    it('should be able to validate regular expression', () => {
        expect(Validator.isRegExp(/foo/)).to.be(true);
        expect(Validator.isRegExp('bar')).to.be(true);
        expect(Validator.isRegExp('foo[')).to.be(false);
    });

    it('should be able to validate object', () => {
        expect(Validator.isObject({})).to.be(true);
        expect(Validator.isObject([])).to.be(false);
    });

    it('should be able to validate function', () => {
        expect(Validator.isFunc(() => {})).to.be(true);
        expect(Validator.isFunc(function (){})).to.be(true);
        expect(Validator.isFunc({})).to.be(false);
    });

    it('should be able to validate email', () => {
        expect(Validator.isEmail('someone@example.com')).to.be(true);
        expect(Validator.isEmail('SOMEONE@EXAMPLE.COM')).to.be(true);
        expect(Validator.isEmail('123')).to.be(false);
    });

    it('should be able to validate url', () => {
        expect(Validator.isUrl('http://www.taobao.com')).to.be(true);
        expect(Validator.isUrl('www.taobao.com')).to.be(false);
        expect(Validator.isUrl('123')).to.be(false);
    });

    it('should be able to validate hex', () => {
        expect(Validator.isHex('#233')).to.be(true);
        expect(Validator.isHex('foo')).to.be(false);
    });

    it('should be able to validate id card', () => {
        expect(Validator.isIdCard('123456789012345')).to.be(true);
        expect(Validator.isIdCard('12345678901234567X')).to.be(true);
        expect(Validator.isIdCard('foo')).to.be(false);
    });

    it('should be able to validate china mobile', () => {
        expect(Validator.isCNMobile('13000000000')).to.be(true);
        expect(Validator.isCNMobile('8618000000000')).to.be(true);
        expect(Validator.isCNMobile('foo')).to.be(false);
    });
});
