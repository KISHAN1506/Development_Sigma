-- /usr/local/mysql/bin/mysql -u root -p
-- show tables;

-- mysql> source schema.sql;
-- Query OK, 0 rows affected (0.000 sec)

-- +-----------------------+
-- | Tables_in_application |
-- +-----------------------+
-- | temp                  |
-- +-----------------------+
-- 1 row in set (0.001 sec)


create table user(
    id varchar(50) PRIMARY KEY,
    username varchar(50) UNIQUE,
    email varchar(50) UNIQUE NOT NULL,
    password varchar(50) NOT NULL
);