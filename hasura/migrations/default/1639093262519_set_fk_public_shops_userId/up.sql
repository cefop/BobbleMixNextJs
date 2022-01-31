alter table "public"."shops"
  add constraint "shops_userId_fkey"
  foreign key ("userId")
  references "public"."users"
  ("id") on update restrict on delete restrict;
