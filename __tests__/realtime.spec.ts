/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */

import { render, cancel } from '../src/';
import { createTimeNode, delay } from './helper';
import { advanceTo, advanceBy, clear } from 'jest-date-mock';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');


const now = Number(new Date());

const time1 = createTimeNode();
const time2 = createTimeNode();
const time3 = createTimeNode();

beforeEach(() => {
advanceTo(0);
time1.setAttribute('datetime', String( now - (15 * 1000 ) ));
time2.setAttribute('datetime', String( now - (20 * 1000 ) ));
time3.setAttribute('datetime', String( now - (20 * 60 * 1000 ) ));

});
afterEach(() => {
  clear();
});
describe('realtime', () => {
  test('render', async () => {
    const nodeList: HTMLElement[] = [time1,time3];

    render(nodeList, 'en_US');
    render(time2, 'zh_CN');

    jest.advanceTimersByTime(2500);

    expect(time1.innerText).toBe('17 seconds ago');
    expect(time2.innerText).toBe('22 秒前');
    expect(time3.innerText).toBe('20 minutes ago');

    jest.advanceTimersByTime(60 * 1000);

    expect(time1.innerText).toBe('1 minute ago');
    expect(time2.innerText).toBe('1 分钟前');
    expect(time3.innerText).toBe('21 minutes ago');
  });

  test('cancel', async () => {

    expect(time1.innerText).toBe('1 minute ago');
    expect(time2.innerText).toBe('1 分钟前');
    expect(time3.innerText).toBe('21 minutes ago');

    // cancel one
    cancel(time1);
    // cancel all
    cancel();

    jest.advanceTimersByTime(60*1000);

    expect(time1.innerText).toBe('1 minute ago');
    expect(time2.innerText).toBe('1 分钟前');
    expect(time3.innerText).toBe('21 minutes ago');

    jest.runOnlyPendingTimers();  //should be no pending timers as we cancelled them

    expect(time1.innerText).toBe('1 minute ago');
    expect(time2.innerText).toBe('1 分钟前');
    expect(time3.innerText).toBe('21 minutes ago');


  });
});
