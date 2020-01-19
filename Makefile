# Webサーバ起動
.PHONY: start
start:
	REACT_APP_ENVCODE=local \
	yarn start

# Lintチェック
.PHONY: lint
lint:
	yarn run eslint --ext .ts,.tsx,.json,.js,.jsx src/

# 型チェック
.PHONY: tsc
tsc:
	yarn run tsc --noEmit

# 各環境ビルド
.PHONY: dev
dev:
	REACT_APP_ENVCODE=dev yarn build

.PHONY: stg
stg:
	REACT_APP_ENVCODE=stg yarn build

.PHONY: prd
prd:
	REACT_APP_ENVCODE=prd yarn build