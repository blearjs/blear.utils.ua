/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var ua = require('../src/index.js');


describe('测试文件', function () {
    var uaList = [
        "vivo_Y628/V1.0 Linux/3.10.28-svn930 Android/4.4.4 Release/09.22.2014 AppleWebKit/537.36 Profile/MIDP-2.0 Configuration/CLDC-1.1 Mobile Safari/537.36 System/Android 4.4.4"
    ];

    it('main', function () {
        for(var i = 0; i < uaList.length; i++){
            console.log(ua(uaList[i]));
        }
    });
});
