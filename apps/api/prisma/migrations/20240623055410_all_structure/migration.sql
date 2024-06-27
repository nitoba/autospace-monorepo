-- CreateEnum
CREATE TYPE "SlotType" AS ENUM ('CAR', 'HEAVY', 'BIKE', 'BICYCLE');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('BOOKED', 'VALET_ASSIGNED_FOR_CHECK_IN', 'VALET_PICKED_UP', 'CHECKED_IN', 'VALET_ASSIGNED_FOR_CHECK_OUT', 'CHECKED_OUT', 'VALET_RETURNED');

-- CreateTable
CREATE TABLE "costumers" (
    "uid" TEXT NOT NULL,
    "display_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "costumers_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "managers" (
    "uid" TEXT NOT NULL,
    "display_name" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "company_id" INTEGER,

    CONSTRAINT "managers_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "valets" (
    "uid" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "image" TEXT,
    "licence_id" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "company_id" INTEGER,

    CONSTRAINT "valets_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "display_name" TEXT,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "garages" (
    "id" SERIAL NOT NULL,
    "display_name" TEXT,
    "description" TEXT,
    "images" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "company_id" INTEGER NOT NULL,

    CONSTRAINT "garages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "garage_id" INTEGER NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slots" (
    "id" SERIAL NOT NULL,
    "display_name" TEXT,
    "price_per_hour" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "length" INTEGER,
    "width" INTEGER,
    "height" INTEGER,
    "type" "SlotType" NOT NULL DEFAULT 'CAR',
    "garage_id" INTEGER NOT NULL,

    CONSTRAINT "slots_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" SERIAL NOT NULL,
    "price_per_hour" DOUBLE PRECISION,
    "total_price" DOUBLE PRECISION,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "vehicle_number" TEXT NOT NULL,
    "phone_number" TEXT,
    "passcode" TEXT,
    "status" "BookingStatus" NOT NULL DEFAULT 'BOOKED',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "slot_id" INTEGER NOT NULL,
    "costumer_id" TEXT NOT NULL,

    CONSTRAINT "bookings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking_timelines" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "BookingStatus" NOT NULL,
    "booking_id" INTEGER NOT NULL,
    "valet_id" TEXT,
    "manager_id" TEXT,

    CONSTRAINT "booking_timelines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL DEFAULT 0,
    "comment" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "costumer_id" TEXT NOT NULL,
    "garage_id" INTEGER NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "valet_assignments" (
    "booking_id" INTEGER NOT NULL,
    "pickup_lat" DOUBLE PRECISION,
    "pickup_lng" DOUBLE PRECISION,
    "return_lat" DOUBLE PRECISION,
    "return_lng" DOUBLE PRECISION,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "pickup_valet_id" TEXT,
    "return_valet_id" TEXT,

    CONSTRAINT "valet_assignments_pkey" PRIMARY KEY ("booking_id")
);

-- CreateTable
CREATE TABLE "verifications" (
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "admin_id" TEXT NOT NULL,
    "garage_id" INTEGER NOT NULL,

    CONSTRAINT "verifications_pkey" PRIMARY KEY ("garage_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "managers_company_id_key" ON "managers"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "valets_company_id_key" ON "valets"("company_id");

-- CreateIndex
CREATE UNIQUE INDEX "valets_company_id_uid_key" ON "valets"("company_id", "uid");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_garage_id_key" ON "addresses"("garage_id");

-- CreateIndex
CREATE INDEX "bookings_start_time_end_time_idx" ON "bookings"("start_time", "end_time");

-- CreateIndex
CREATE INDEX "booking_timelines_booking_id_idx" ON "booking_timelines"("booking_id");

-- AddForeignKey
ALTER TABLE "costumers" ADD CONSTRAINT "costumers_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "managers" ADD CONSTRAINT "managers_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "managers" ADD CONSTRAINT "managers_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valets" ADD CONSTRAINT "valets_uid_fkey" FOREIGN KEY ("uid") REFERENCES "users"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valets" ADD CONSTRAINT "valets_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "garages" ADD CONSTRAINT "garages_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_garage_id_fkey" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "slots" ADD CONSTRAINT "slots_garage_id_fkey" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_costumer_id_fkey" FOREIGN KEY ("costumer_id") REFERENCES "costumers"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_timelines" ADD CONSTRAINT "booking_timelines_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_timelines" ADD CONSTRAINT "booking_timelines_valet_id_fkey" FOREIGN KEY ("valet_id") REFERENCES "valets"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_timelines" ADD CONSTRAINT "booking_timelines_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "managers"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_costumer_id_fkey" FOREIGN KEY ("costumer_id") REFERENCES "costumers"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_garage_id_fkey" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valet_assignments" ADD CONSTRAINT "valet_assignments_pickup_valet_id_fkey" FOREIGN KEY ("pickup_valet_id") REFERENCES "valets"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valet_assignments" ADD CONSTRAINT "valet_assignments_return_valet_id_fkey" FOREIGN KEY ("return_valet_id") REFERENCES "valets"("uid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "valet_assignments" ADD CONSTRAINT "valet_assignments_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verifications" ADD CONSTRAINT "verifications_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "verifications" ADD CONSTRAINT "verifications_garage_id_fkey" FOREIGN KEY ("garage_id") REFERENCES "garages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
