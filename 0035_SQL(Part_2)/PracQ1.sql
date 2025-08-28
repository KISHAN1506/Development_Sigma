create database if not exists college;

use college;

create table teacher(
	id INT,
    name varchar(50),
    subject varchar(50),
    salary INT
);


insert into teacher values
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);

select * from teacher;

ALTER TABLE teacher MODIFY id INT NOT NULL;
ALTER TABLE teacher ADD PRIMARY KEY (id);

select * from teacher;

Alter table teacher 
change column salary ctc INT;
select * from teacher;


update teacher set ctc = ctc+(0.25*ctc);
select * from teacher;


alter table teacher add column city varchar(50) default "Gurgaon";
select * from teacher;

alter table teacher drop column ctc;
select * from teacher;


