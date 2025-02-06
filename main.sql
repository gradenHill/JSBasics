CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255), --VARCHAR = TEXT array (255 is out max)
    email VARCHAR(255),
    password TEXT,
    age INT
);