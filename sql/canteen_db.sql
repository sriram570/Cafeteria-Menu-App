use a3832190_Menu;

create table if not exists CanteenMenu(
id int not null AUTO_INCREMENT,
item_name varchar(255) not null,
price int not null,
canteen varchar(255) not null,
rating float,
counter int,
mini int,
date_time varchar(10),
primary key(id)
);


insert into CanteenMenu (item_name , price , canteen, rating , counter , mini , date_time) values('Noodles',10,'MBA',2.5,1,1,'12:10');
insert into CanteenMenu (item_name , price , canteen, rating , counter , mini , date_time) values('Rice',20,'Main',5.0,2,5,'16:20');
insert into CanteenMenu (item_name , price , canteen, rating , counter , mini , date_time) values('Parotta',30,'IT',4.5,2,3,'08:00');


