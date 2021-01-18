"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
/*
 * @Author: hzzly
 * @Date: 2021-01-18 15:25:16
 * @LastEditors: hzzly
 * @LastEditTime: 2021-01-18 15:26:25
 * @Copyright: hzzly(hjingren@aliyun.com)
 * @Description: description
 */
/**
 * log调试
 * @param msg
 */
function log() {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i] = arguments[_i];
    }
    console.log.apply(console, msg);
}
exports.log = log;
