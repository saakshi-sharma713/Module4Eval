create table vehicle(id uuid primary key default gen_random_uuid(),name TEXT NOT NULL,registration_number TEXT NOT NULL UNIQUE,allowed_passengers int NOT NULL, isAvailable  boolean default true  NOT NULL ,driver_id  TEXT,rate_per_km int,
owner_id uuid  references userr(id) on update cascade on delete cascade,
created_at timestamp default NOW())