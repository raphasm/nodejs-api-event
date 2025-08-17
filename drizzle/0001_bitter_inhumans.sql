CREATE TABLE "enrollments" (
	"userId" uuid NOT NULL,
	"couseId" uuid NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "enrollments" ADD CONSTRAINT "enrollments_couseId_courses_id_fk" FOREIGN KEY ("couseId") REFERENCES "public"."courses"("id") ON DELETE no action ON UPDATE no action;