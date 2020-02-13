ALTER TABLE "myfirstmodule$person" ADD "customerid" BIGINT NULL;
UPDATE "myfirstmodule$person"
 SET "customerid" = 0;
ALTER TABLE "myfirstmodule$person" ADD CONSTRAINT "uniq_myfirstmodule$person_customerid" UNIQUE ("customerid");
INSERT INTO "mendixsystem$attribute" ("id", 
"entity_id", 
"attribute_name", 
"column_name", 
"type", 
"length", 
"default_value", 
"is_auto_number")
 VALUES ('f631e26e-4cd9-4f84-a525-0c5bbb60045a', 
'abbd64e7-0e22-4cbb-88ab-1c78e68ae267', 
'CustomerId', 
'customerid', 
4, 
0, 
'0', 
false);
INSERT INTO "mendixsystem$unique_constraint" ("name", 
"table_id", 
"column_id")
 VALUES ('uniq_myfirstmodule$person_customerid', 
'abbd64e7-0e22-4cbb-88ab-1c78e68ae267', 
'f631e26e-4cd9-4f84-a525-0c5bbb60045a');
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200212 13:35:51';
