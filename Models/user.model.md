create table userr(id uuid primary key default gen_random_uuid(),name TEXT NOT NULL,email TEXT NOT NULL UNIQUE,
password TEXT NOT NULL , Role TEXT NOT NULL ,created_at timestamp default NOW())