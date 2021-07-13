
CREATE TABLE "public"."item" ("id" serial NOT NULL, "name" text NOT NULL, "description" text, "image" text, "nicotine" integer, "pg" integer, "vg" integer, "volume" integer, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_item_updated_at"
BEFORE UPDATE ON "public"."item"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_item_updated_at" ON "public"."item" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."category" ("id" serial NOT NULL, "name" text NOT NULL, "description" text, "images" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_category_updated_at"
BEFORE UPDATE ON "public"."category"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_category_updated_at" ON "public"."category" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."item_category" ("item_id" integer NOT NULL, "category_id" integer NOT NULL, PRIMARY KEY ("item_id","category_id") , FOREIGN KEY ("item_id") REFERENCES "public"."item"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON UPDATE restrict ON DELETE restrict);

CREATE TABLE "public"."flavor" ("id" serial NOT NULL, "name" text NOT NULL, "code" text NOT NULL, "flashpoint" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_flavor_updated_at"
BEFORE UPDATE ON "public"."flavor"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_flavor_updated_at" ON "public"."flavor" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."molecule" ("id" serial NOT NULL, "name" text NOT NULL, "cas" text, "ec" text, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );
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
CREATE TRIGGER "set_public_molecule_updated_at"
BEFORE UPDATE ON "public"."molecule"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_molecule_updated_at" ON "public"."molecule" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TABLE "public"."flavor_molecule" ("flavor_id" integer NOT NULL, "molecule_id" integer NOT NULL, PRIMARY KEY ("flavor_id","molecule_id") , FOREIGN KEY ("molecule_id") REFERENCES "public"."molecule"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("flavor_id") REFERENCES "public"."flavor"("id") ON UPDATE restrict ON DELETE restrict);

CREATE TABLE "public"."item_flavor" ("item_id" integer NOT NULL, "flavor_id" integer NOT NULL, PRIMARY KEY ("item_id","flavor_id") , FOREIGN KEY ("flavor_id") REFERENCES "public"."flavor"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("item_id") REFERENCES "public"."item"("id") ON UPDATE restrict ON DELETE restrict);
