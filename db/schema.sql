DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;
USE blog_db;

CREATE TABLE users(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(30) NOT NULL,
	user_email VARCHAR(10) NOT NULL,
	user_pword VARCHAR(30) NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE posts(
	post_id INT NOT NULL AUTO_INCREMENT,
	post_title VARCHAR(30) NOT NULL,
	post_contents VARCHAR(30) NOT NULL,
	user_id INT NOT NULL REFERENCES users(user_id),
	post_date DATETIME NOT NULL,
	PRIMARY KEY (post_id)
);

CREATE TABLE comments(
	comment_id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL REFERENCES users(user_id),
	post_id INT NOT NULL REFERENCES posts(post_id),
	comment_body VARCHAR(30) NOT NULL,
	comment_date DATETIME NOT NULL,
	PRIMARY KEY (comment_id)
);
