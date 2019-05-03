-- 大文字・小文字をミスって繋がらなかった
-- maxの計算いらなくなるなこれ
CREATE TABLE Users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    age INT NOT NULL
);

CREATE TABLE Posts (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    content VARCHAR(32) NOT NULL,
    user_id INT NOT NULL,
   FOREIGN KEY fk_userid(user_id) 
   REFERENCES Users (id)
   ON DELETE RESTRICT ON UPDATE RESTRICT
);