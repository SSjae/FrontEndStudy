create database test;
use test;

create table tb_user (
	user_idx bigint primary key auto_increment,
    user_email varchar(100) not null,
    user_pw varchar(100) not null
);

-- Alter --
-- 컬럼 추가 --
alter table tb_user add column user_name varchar(22) not null;
select * from tb_user;
-- 컬럼 변경 --
alter table tb_user modify column user_name varchar(16);
-- 컬럼 삭제 --
alter table tb_user drop column user_name;

-- 테이블 이름 변경 --
alter table tb_user rename tb_user2;
alter table tb_user2 rename tb_user;
select * from tb_user;

create table tb_post (
	post_idx bigint primary key auto_increment,
    post_title varchar(200) not null,
    post_content text not null,
    user_idx bigint,
    foreign key(user_idx) references tb_user(user_idx) on delete cascade
);

/*
insert into tb_post(post_title, post_content, user_idx) values("안녕하세요", "test", 10);
error - foregin key로 테이블이 연관되어 잇끼 때문에 tb_user에 없는 idx 값은 저장할 수 없다.
*/
insert into tb_post(post_title, post_content, user_idx) values("안녕하세요", "test", 2);
select * from tb_post;
select * from tb_post inner join tb_user on tb_post.user_idx = tb_user.user_idx;
/*
함께 가지고 올 table의 데이터를 가지고 온다.
on이라는 조건에 tb_post와 tb_user 모두에 있는 데이터를 가지고 옴
*/

-- 서브 쿼리 --
select * from tb_post where user_idx in (select user_idx from tb_user where user_pw = "test");

-- on cascade --
delete from tb_user where user_idx = 2;
select * from tb_user;
select * from tb_post;

-- foregin key와 join은 관계가 없다.












