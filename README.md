# README

## how to

Docker の起動

```
# コンテナイメージの作成
$ sudo docker build -t sadness_ojisan/mysql .

# コンテナ起動
$ sudo docker run -i -p 3306:3306 -t sadness_ojisan/mysql
```

```
$ docker-compose up -d

$ docker-compose ps

$ docker exec -it ${container名} bash
```

```
SHOW DATABASES
```
