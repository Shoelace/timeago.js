
const ATTR_TIMEAGO_TID = 'timeago-id';
const ATTR_TIMEAGO_DATETIME = 'datetime';

import {  Opts } from '../interface';

/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @parms opts
 * @returns {*}
 */
export function getDateAttribute(node: HTMLElement, opts?: Opts): string {
  return node.getAttribute(opts?.dateTimeAttributeName ? opts?.dateTimeAttributeName : ATTR_TIMEAGO_DATETIME ) || '';

}

/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
export function setTimerId(node: HTMLElement, timerId: number): void {
  node.setAttribute(ATTR_TIMEAGO_TID, String(timerId));
}

/**
 * get the timer id
 * @param node
 */
export function getTimerId(node: HTMLElement): number {
  return parseInt(node.getAttribute(ATTR_TIMEAGO_TID) || '0', 10);
}
