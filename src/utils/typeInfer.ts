import {CallEffect } from 'redux-saga/effects'

export type SR<T> = T extends Promise<infer A> ? A : T extends Generator<CallEffect<infer B>> ? B : any;