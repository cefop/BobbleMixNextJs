
alter table "public"."users" alter column "email" set not null;

alter table "public"."accounts" alter column "access_token_expires" set not null;

alter table "public"."accounts" alter column "access_token" set not null;

alter table "public"."accounts" alter column "refresh_token" set not null;

alter table "public"."users" alter column "image" set not null;

alter table "public"."users" alter column "email_verified" set not null;

DROP TABLE "public"."verification_requests";

DROP TABLE "public"."users";

DROP TABLE "public"."sessions";

DROP TABLE "public"."accounts";
