# nestjs microservice sample

## architecture

1 http-api: as http server to accept request

2 micro: as micro service that provide service with accumulate function

## initial step

```shell
nest new http-api
cd http-api
nest new micro
```

## TCP

use TCP as Transport Protocol

## REDIS

use Redis as Message broker

## GRPC

use GRPC as Transport Protocol

### install ts-proto for auto-gen client code

```shell
yarn add -D ts-proto
yarn add @grpc/proto-loader
```

### setup nestjs-cli.json for wrap non-ts code

```json
"compilerOptions": {
  "tsConfigPath": "apps/http-api/tsconfig.app.json",
  "assets": ["**/*.proto"],
  "watchAssets": true
}
```

### setup MakeFile for gen client code

```makefile
.PHONY: proto
DIRNAME:= apps/http-api/src/proto

proto:
	protoc --plugin=node_modules/ts-proto/protoc-gen-ts_proto \
			$(DIRNAME)/*.proto -I. \
			--ts_proto_out=. \
			--ts_proto_opt=fileSuffix=.pb \
			--ts_proto_opt=nestJs=true \
			--ts_proto_opt=addGrpcMetadata=false \
			--ts_proto_opt=addNestjsRestParameter=false
clean:
	rm -rf $(DIRNAME)/*.pb.ts
```

### for build client code

need to use 
```shell
make proto
```