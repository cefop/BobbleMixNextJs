
alter table "public"."flavor_molecule" drop constraint "flavor_molecule_pkey";

alter table "public"."item_flavor" drop constraint "item_flavor_pkey";

DROP table "public"."flavor_molecule";

DROP table "public"."molecule";

DROP table "public"."item_flavor";

DROP table "public"."flavor";

CREATE TABLE "public"."recipes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "fingerprint" text NOT NULL, "name" text NOT NULL, "aromes" jsonb NOT NULL, "molecules" jsonb NOT NULL, "risks" jsonb NOT NULL, "molsum" numeric NOT NULL, "nicotine" numeric NOT NULL, "volume" numeric NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , UNIQUE ("fingerprint"), UNIQUE ("id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_recipes_updated_at"
BEFORE UPDATE ON "public"."recipes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_recipes_updated_at" ON "public"."recipes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
