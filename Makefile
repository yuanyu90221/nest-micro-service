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