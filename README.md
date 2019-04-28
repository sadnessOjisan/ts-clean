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

## todo

- [ ] swagger (いまはやらない（やり方わからない）。nestjs に移植した時にする)
- [ ] user の crud を完成
- [ ] post と comment の crud を完成
- [ ] login と画像投稿を実装する
- [ ] sql の導入
- [ ] どこかに deploy(terraform 使いたいなぁ)
