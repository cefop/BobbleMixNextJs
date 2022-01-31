alter table "public"."shops" alter column "web" drop not null;
alter table "public"."shops" add column "web" text;
