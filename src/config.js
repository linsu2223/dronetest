'use strict'
import merge from 'lodash/merge'

const isDev = process.env.NODE_ENV === 'development'
const CONFIG = {
    projectName: '',
    baseURL: 'http://localhost:7569',
    tokenKey: 'Authorization',
    tokenPrefix: 'Bearer ',
    isDev,
    copyright: '--',
    version: '2.6.20190525',
    apiEncryptEnable: true
}

try {
    let pri = require('./private.js')
    merge(CONFIG, pri.default)
} catch (e) {
    // console.info('Failed to load private configuration!')
}

export default CONFIG
