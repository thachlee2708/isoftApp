package com.isoftapp;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TestModule extends ReactContextBaseJavaModule {
    public TestModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "HelloTest";
    }

    @ReactMethod
    public void sayHello(String name, Callback callback) {
        try {
            String message = "Hello " + name;
            callback.invoke(null, message);
        } catch (Exception e) {
            callback.invoke(e, null);
        }
    }
}
