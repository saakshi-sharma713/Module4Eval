create table trip(id uuid primary key default gen_random_uuid(),
customer_id uuid  references userr(id) on update cascade on delete cascade,
vehicle_id  uuid references vehicle(id) on update cascade on delete cascade, 
start_date timestamp default NOW(),end_date timestamp default NOW(),
location TEXT NOT NULL,
distance_km int NOT NULL,
passengers int NOT NULL,
tripCost numeric(10,2),
isCompleted boolean default false,
created_at timestamp default NOW())

