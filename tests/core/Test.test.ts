import { Test } from "../../src";

describe( 'Test', () => {

	let testClass: Test;
	
	beforeAll(() => {

		testClass = new Test();
		
	} )
	
	describe( 'print()', () => {

		it( 'should print "Hello"', () => {

			expect(testClass.getHello()).toBe('Hello');
			
		} );
		
	})
	
} )