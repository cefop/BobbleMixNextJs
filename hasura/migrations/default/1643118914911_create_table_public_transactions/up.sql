CREATE TABLE "public"."transactions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "shop_id" uuid NOT NULL, "recipe_id" uuid NOT NULL, "validated" boolean NOT NULL DEFAULT false, "user_phone" text, PRIMARY KEY ("id") , FOREIGN KEY ("shop_id") REFERENCES "public"."shops"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("recipe_id") REFERENCES "public"."recipes"("id") ON UPDATE restrict ON DELETE restrict);COMMENT ON TABLE "public"."transactions" IS E'shops transactions';
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
CREATE TRIGGER "set_public_transactions_updated_at"
BEFORE UPDATE ON "public"."transactions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_transactions_updated_at" ON "public"."transactions" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
