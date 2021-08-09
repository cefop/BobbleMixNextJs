
DROP TABLE "public"."recipes";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."flavor";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."item_flavor";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."molecule";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- DROP table "public"."flavor_molecule";

alter table "public"."item_flavor"
    add constraint "item_flavor_pkey"
    primary key ("flavor_id", "item_id");

alter table "public"."flavor_molecule"
    add constraint "flavor_molecule_pkey"
    primary key ("molecule_id", "flavor_id");
