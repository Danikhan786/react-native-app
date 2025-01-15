package com.anonymous.firstApp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class MyNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private var sharedVariable: String? = null

    override fun getName(): String {
        return "MyNativeModule"
    }

    @ReactMethod
    fun receiveVariable(variable: String) {
        sharedVariable = variable
    }

    @ReactMethod
    fun getSharedVariable(promise: Promise) {
        promise.resolve(sharedVariable)
    }
}
