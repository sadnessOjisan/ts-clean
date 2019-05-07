# README

## how to

### local app 起動

memory を使っての開発

```
$ yarn run build:local

$ yarn run start:local
```

### Docker の起動

```
$ docker-compose build

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
$ curl -X POST -H "Content-Type: application/json" -d '{"name":"hanako", "age":100}' localhost:3000/api/users

# user全件取得
$ curl localhost:3000/api/users

# user1件取得
$ curl localhost:3000/api/users/1

# user1件修正
$ curl -X PATCH -H "Content-Type: application/json" -d '{"age":100}' localhost:3000/api/users/2

# user削除
$ curl -X DELETE localhost:3000/api/users/2

# post作成
$ curl -X POST -H "Content-Type: application/json" -d '{"content":"人生つらぽよ", "userId":1}' localhost:3000/api/posts

# post全件取得
$ curl localhost:3000/api/posts

# post1件取得
$ curl localhost:3000/api/posts/1

# post削除
$ curl -X DELETE localhost:3000/api/posts/2
```

## ts + express で厳しいと思ったところ

- validation めんどくさい
- 例外を上にあげるのめんどくさい
- inteliJ + lombok の自動生成ほしい
- swagger ほしい

つぎ、Nest やる。
