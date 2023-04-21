import test from 'ava';
import { colorFn, pixelFn, square, TheClass } from './ExampleModule';

test('colorFn returns an array of 4 numbers', t => {
    const result = colorFn(5);
    t.is(result.length, 4);
    t.true(result.every(item => typeof item === 'number'));
});

test('pixelFn returns an array of 4 numbers', t => {
    const result1 = pixelFn(5, 6, 7, 0.5, 0.7);
    t.is(result1.length, 4);
    t.true(result1.every(item => typeof item === 'number'));

    const result2 = pixelFn(1, 2, 3, 0.2, 0.6);
    t.is(result2.length, 4);
    t.true(result2.every(item => typeof item === 'number'));
});

test('square returns the square of its input', t => {
    t.is(square(4), 16);
    t.is(square(6), 36);
    t.is(square(0), 0);
});

test('TheClass constructor and getIndex method work correctly', t => {
    const instance = new TheClass(10);
    t.is(instance.getIndex(), 10);
});