ALTER TABLE "myfirstmodule$person" DROP CONSTRAINT "uniq_myfirstmodule$person_customerid";
DELETE FROM "mendixsystem$unique_constraint" 
 WHERE "name" = 'uniq_myfirstmodule$person_customerid';
UPDATE "mendixsystem$version"
 SET "versionnumber" = '4.2', 
"lastsyncdate" = '20200212 14:47:22';
