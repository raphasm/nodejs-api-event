ALTER TABLE "enrollments" RENAME COLUMN "couseId" TO "courseId";--> statement-breakpoint
ALTER TABLE "enrollments" DROP CONSTRAINT "enrollments_couseId_courses_id_fk";
--> statement-breakpoint
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_courseId_courses_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "enrollments_userId_courseId_index" ON "enrollments" USING btree ("userId","courseId");