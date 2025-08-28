INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16,"casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(5, 14,"mrinal", "mrinal@email.com", 290, 80),
(6, 16, "arvind", "avind456@gmail.com", 900, 1200);

select * from user ;
select name from user where age > 14;

select * from user where age + 1 =  18;

select max(followers) from user;

select count(age) from user where age = 14;
select min(age) from user;
select max(age) from user;

select sum(followers) from user;


select age,max(followers) from user GROUP BY age having max(followers) > 200 order by age DESC;


UPDATE user SET followers = 600 where age = 16;
select * from user ;


SET SQL_SAFE_UPDATES = 0;

delete from user where age = 14;
select * from user ;


alter table user add column city varchar(30) default "SURAT";

alter table user drop column age;

alter table user rename to AllUser;
select * from AllUser;


alter table users rename to user;


alter table user change column followers subs INT default 0;
select * from user;

alter table user modify subs INT default 0;
select * from user;

truncate table user;
select * from user;

drop table t2;

