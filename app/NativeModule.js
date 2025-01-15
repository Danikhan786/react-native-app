import { NativeModules } from 'react-native';

const { MyNativeModule } = NativeModules;

export const sharedVariable = "Hello from JavaScript";

export const sendVariableToNative = () => {
  if (MyNativeModule) {
    MyNativeModule.receiveVariable(sharedVariable);
  } else {
    console.warn("MyNativeModule is not linked properly.");
  }
};
