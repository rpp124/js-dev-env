import {expect} from 'chai';
import jsdon from 'jsdon';
import fs from 'fs';

describe('Our first test', () => {
	it('should pass', () => {
		expect(true).to.equal(true);
	});
});

describe('test index', () => {
	it('should say', () => {
		const index = fs.readFileSync('./index.html', 'utf-8');
	})
})
