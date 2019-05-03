-- 大文字・小文字をミスって繋がらなかった
-- maxの計算いらなくなるなこれ
CREATE TABLE Users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    age INT NOT NULL
);