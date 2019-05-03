-- 大文字・小文字をミスって繋がらなかった
CREATE TABLE Users(
    -- maxの計算いらなくなるなこれ
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (32) NOT NULL,
    age INT (32) NOT NULL,
    PRIMARY KEY (id)
);