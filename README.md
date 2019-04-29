# README

## how to

### local app 起動

memory を使っての開発

```
$ yarn run build:local

$ yarn run start:local
```

/api/users/:id, /api/users に access 可能

### Docker の起動

```
# コンテナイメージの作成
$ sudo docker build -t sadness_ojisan/mysql .

# コンテナ起動
$ sudo docker run -i -p 3306:3306 -t sadness_ojisan/mysql
```

```
$ docker-compose up -d

$ docker-compose ps

# コンテナに入る
$ docker exec -it ${container名} bash

$ docker-compose down
```

```
> SHOW DATABASES;
```

## curl test

```
# user作成
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"aho", "age":100}' localhost:3000/api/users

# user全件取得
$ curl localhost:3000/api/users

# user1件取得
$ curl localhost:3000/api/users/1

# user1件修正
$ curl -X PATCH -H "Content-Type: application/json" -d '{"age":100}' localhost:3000/api/users/2

# user削除
$ curl -X DELETE localhost:3000/api/users/2

# post作成
$ curl -X POST -H "Content-Type: application/json" -d '{"content":"aho", "userId":1}' localhost:3000/api/posts

# post全件取得
$ curl localhost:3000/api/posts

# post1件取得
$ curl localhost:3000/api/posts/1

# post削除
$ curl -X DELETE localhost:3000/api/posts/2
```

## todo

- [ ] swagger (いまはやらない（やり方わからない）。nestjs に移植した時にする)
- [ ] user の crud を完成
- [ ] post の crud を完成
- [ ] login 実装
- [ ] 画像投稿を実装
- [ ] sql の導入
- [ ] どこかに deploy(terraform 使いたいなぁ)
- [ ] test 書く
- [ ] builder ptn を作る
- [ ] express の res を作って response を作る

## ts + express で厳しいと思ったところ

- validation めんどくさい
- 例外を上にあげるのめんどくさい
- inteliJ の自動生成ほしい
- swagger ほしい
