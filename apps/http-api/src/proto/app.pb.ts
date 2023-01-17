/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "app";

/** declare the types used above */
export interface NumberArray {
  data: number[];
}

export interface SumOfNumberArray {
  sum: number;
}

export const APP_PACKAGE_NAME = "app";

/** declare a service for each controller you have */

export interface AppControllerClient {
  /** declare an rpc for each method that is called via gRPC */

  accumulate(request: NumberArray): Observable<SumOfNumberArray>;
}

/** declare a service for each controller you have */

export interface AppControllerController {
  /** declare an rpc for each method that is called via gRPC */

  accumulate(request: NumberArray): Promise<SumOfNumberArray> | Observable<SumOfNumberArray> | SumOfNumberArray;
}

export function AppControllerControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["accumulate"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AppController", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AppController", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const APP_CONTROLLER_SERVICE_NAME = "AppController";
