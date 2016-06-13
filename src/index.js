/**
 * core ua
 * @link https://github.com/fex-team/ua-device/blob/master/lib/ua-device.js
 * @author ydr.me
 * @create 2016-04-09 15:53
 */



'use strict';

var uaTest = require('./_ua-test.js');


/**
 * 解析 ua
 * @type function
 * @returns {{browser: {}, engine: {}, os: {}, device: {} }}
 *
 * @example
 * ```
 * ua('Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3');
 *
 * {
 *     browser: {  //浏览器信息
 *         name: 'Chrome',
 *         version: {
 *             original: '19.0.1084.60',
 *         }
 *     },
 *     engine: {   //浏览器内核
 *         name: 'Webkit',
 *         version: {
 *             original: '534.46.0',
 *         }
 *     },
 *     os: {       //操作系统
 *         name: 'iOS',
 *         version: {
 *             original: '5.1.1',
 *         }
 *     },
 *     device: {   //硬件信息
 *         type: 'mobile',
 *         manufacturer: 'Apple',
 *         model: 'IPHONE'
 *     }
 * }
 * ```
 */
module.exports = function (ua) {
   return uaTest(ua);
};
