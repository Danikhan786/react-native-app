import Foundation

@objc(MyNativeModule)
class MyNativeModule: NSObject {

  private var sharedVariable: String?

  @objc
  func receiveVariable(_ variable: String) {
    sharedVariable = variable
  }

  @objc
  func getSharedVariable(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) {
    if let variable = sharedVariable {
      resolve(variable)
    } else {
      reject("no_variable", "No variable received", nil)
    }
  }
}
