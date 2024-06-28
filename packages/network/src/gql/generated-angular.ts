import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  garage?: Maybe<Garage>;
  garageId?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  garage?: InputMaybe<GarageOrderByWithRelationInput>;
  garageId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export enum AddressScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  UpdatedAt = 'updatedAt'
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  garage?: InputMaybe<GarageRelationFilter>;
  garageId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AddressWhereUniqueInput = {
  id: Scalars['ID']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  verifications: Array<Verification>;
  verificationsCount: Scalars['Float']['output'];
};

export type AdminOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  verifications?: InputMaybe<VerificationOrderByRelationAggregateInput>;
};

export type AdminRelationFilter = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  verifications?: InputMaybe<VerificationListRelationFilter>;
};

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  verifications?: InputMaybe<VerificationListRelationFilter>;
};

export type AdminWhereUniqueInput = {
  uid: Scalars['ID']['input'];
};

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE'
}

export type Booking = {
  __typename?: 'Booking';
  costumer: Customer;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  endTime: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  passcode?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  pricePerHour?: Maybe<Scalars['Float']['output']>;
  slot?: Maybe<Slot>;
  slotId: Scalars['Float']['output'];
  startTime: Scalars['DateTime']['output'];
  status: BookingStatus;
  totalPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  valetAssignment?: Maybe<ValetAssignment>;
  vehicleNumber: Scalars['String']['output'];
};

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>;
  none?: InputMaybe<BookingWhereInput>;
  some?: InputMaybe<BookingWhereInput>;
};

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookingOrderByWithRelationInput = {
  bookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  endTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  passcode?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  pricePerHour?: InputMaybe<SortOrder>;
  slot?: InputMaybe<SlotOrderByWithRelationInput>;
  slotId?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalPrice?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  valetAssignment?: InputMaybe<ValetAssignmentOrderByWithRelationInput>;
  vehicleNumber?: InputMaybe<SortOrder>;
};

export type BookingRelationFilter = {
  is?: InputMaybe<BookingWhereInput>;
  isNot?: InputMaybe<BookingWhereInput>;
};

export enum BookingScalarFieldEnum {
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  EndTime = 'endTime',
  Id = 'id',
  Passcode = 'passcode',
  PhoneNumber = 'phoneNumber',
  PricePerHour = 'pricePerHour',
  SlotId = 'slotId',
  StartTime = 'startTime',
  Status = 'status',
  TotalPrice = 'totalPrice',
  UpdatedAt = 'updatedAt',
  VehicleNumber = 'vehicleNumber'
}

export enum BookingStatus {
  Booked = 'BOOKED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT',
  ValetAssignedForCheckIn = 'VALET_ASSIGNED_FOR_CHECK_IN',
  ValetAssignedForCheckOut = 'VALET_ASSIGNED_FOR_CHECK_OUT',
  ValetPickedUp = 'VALET_PICKED_UP',
  ValetReturned = 'VALET_RETURNED'
}

export type BookingTimeline = {
  __typename?: 'BookingTimeline';
  bookingId: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  managerId?: Maybe<Scalars['String']['output']>;
  status: BookingStatus;
  timestamp: Scalars['DateTime']['output'];
  valetId?: Maybe<Scalars['String']['output']>;
};

export type BookingTimelineListRelationFilter = {
  every?: InputMaybe<BookingTimelineWhereInput>;
  none?: InputMaybe<BookingTimelineWhereInput>;
  some?: InputMaybe<BookingTimelineWhereInput>;
};

export type BookingTimelineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BookingTimelineOrderByWithRelationInput = {
  booking?: InputMaybe<BookingOrderByWithRelationInput>;
  bookingId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  manager?: InputMaybe<ManagerOrderByWithRelationInput>;
  managerId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  valet?: InputMaybe<ValetOrderByWithRelationInput>;
  valetId?: InputMaybe<SortOrder>;
};

export enum BookingTimelineScalarFieldEnum {
  BookingId = 'bookingId',
  Id = 'id',
  ManagerId = 'managerId',
  Status = 'status',
  Timestamp = 'timestamp',
  ValetId = 'valetId'
}

export type BookingTimelineWhereInput = {
  AND?: InputMaybe<Array<BookingTimelineWhereInput>>;
  NOT?: InputMaybe<Array<BookingTimelineWhereInput>>;
  OR?: InputMaybe<Array<BookingTimelineWhereInput>>;
  booking?: InputMaybe<BookingRelationFilter>;
  bookingId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  manager?: InputMaybe<ManagerRelationFilter>;
  managerId?: InputMaybe<StringFilter>;
  status?: InputMaybe<BookingStatus>;
  timestamp?: InputMaybe<DateTimeFilter>;
  valet?: InputMaybe<ValetRelationFilter>;
  valetId?: InputMaybe<StringFilter>;
};

export type BookingTimelineWhereUniqueInput = {
  id: Scalars['Float']['input'];
};

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>;
  NOT?: InputMaybe<Array<BookingWhereInput>>;
  OR?: InputMaybe<Array<BookingWhereInput>>;
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  passcode?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  pricePerHour?: InputMaybe<FloatFilter>;
  slot?: InputMaybe<SlotRelationFilter>;
  slotId?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumBookingStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  valetAssignment?: InputMaybe<ValetAssignmentRelationFilter>;
  vehicleNumber?: InputMaybe<StringFilter>;
};

export type BookingWhereUniqueInput = {
  id: Scalars['Float']['input'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Company = {
  __typename?: 'Company';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CompanyOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  garages?: InputMaybe<GarageOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  managers?: InputMaybe<ManagerOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  valets?: InputMaybe<ValetOrderByRelationAggregateInput>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  displayName?: InputMaybe<StringFilter>;
  garages?: InputMaybe<GarageListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  managers?: InputMaybe<ManagerListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  valets?: InputMaybe<ValetListRelationFilter>;
};

export type CompanyWhereUniqueInput = {
  id: Scalars['Float']['input'];
};

export type CreateAddressInput = {
  address: Scalars['String']['input'];
  garageId?: InputMaybe<Scalars['Float']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type CreateAddressInputWithoutGarageId = {
  address: Scalars['String']['input'];
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
};

export type CreateAdminInput = {
  uid: Scalars['String']['input'];
};

export type CreateBookingInput = {
  customerId: Scalars['String']['input'];
  endTime: Scalars['DateTime']['input'];
  garageId: Scalars['Float']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  pricePerHour?: InputMaybe<Scalars['Float']['input']>;
  startTime: Scalars['DateTime']['input'];
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  type: SlotType;
  valetAssignment?: InputMaybe<CreateValetAssignmentInputWithoutBookingId>;
  vehicleNumber: Scalars['String']['input'];
};

export type CreateBookingTimelineInput = {
  bookingId: Scalars['Float']['input'];
  status: BookingStatus;
};

export type CreateCompanyInput = {
  description: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  managerId: Scalars['ID']['input'];
  managerName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGarageInput = {
  address: CreateAddressInputWithoutGarageId;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  images: Array<Scalars['String']['input']>;
  slots: Array<CreateSlotInputWithoutGarageId>;
};

export type CreateManagerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
};

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  garageId: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
};

export type CreateSlotInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  garageId: Scalars['Float']['input'];
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  pricePerHour: Scalars['Float']['input'];
  type: SlotType;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateSlotInputWithoutGarageId = {
  count: Scalars['Float']['input'];
  displayName?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  pricePerHour: Scalars['Float']['input'];
  type: SlotType;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateValetAssignmentInput = {
  bookingId: Scalars['Float']['input'];
  pickupLat: Scalars['Float']['input'];
  pickupLng: Scalars['Float']['input'];
  pickupValetId?: InputMaybe<Scalars['String']['input']>;
  returnLat?: InputMaybe<Scalars['Float']['input']>;
  returnLng?: InputMaybe<Scalars['Float']['input']>;
  returnValetId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateValetAssignmentInputWithoutBookingId = {
  pickupLat: Scalars['Float']['input'];
  pickupLng: Scalars['Float']['input'];
  returnLat?: InputMaybe<Scalars['Float']['input']>;
  returnLng?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateValetInput = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  displayName: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  licenseID: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type CreateVerificationInput = {
  garageId: Scalars['Float']['input'];
  verified: Scalars['Boolean']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  createdAt: Scalars['DateTime']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
};

export type CustomerOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type CustomerWhereUniqueInput = {
  uid: Scalars['ID']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EnumBookingStatusFilter = {
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<BookingStatus>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type EnumSlotTypeFilter = {
  equals?: InputMaybe<SlotType>;
  in?: InputMaybe<Array<SlotType>>;
  not?: InputMaybe<SlotType>;
  notIn?: InputMaybe<Array<SlotType>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<Scalars['Float']['input']>;
};

export type Garage = {
  __typename?: 'Garage';
  address?: Maybe<Address>;
  company: Company;
  companyId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  images: Array<Scalars['String']['output']>;
  slots: Array<Slot>;
  updatedAt: Scalars['DateTime']['output'];
  verification?: Maybe<Verification>;
};

export type GarageListRelationFilter = {
  every?: InputMaybe<GarageWhereInput>;
  none?: InputMaybe<GarageWhereInput>;
  some?: InputMaybe<GarageWhereInput>;
};

export type GarageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GarageOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>;
  slots?: InputMaybe<SlotOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  verification?: InputMaybe<VerificationOrderByWithRelationInput>;
};

export type GarageRelationFilter = {
  is?: InputMaybe<GarageWhereInput>;
  isNot?: InputMaybe<GarageWhereInput>;
};

export enum GarageScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  Images = 'images',
  UpdatedAt = 'updatedAt'
}

export type GarageWhereInput = {
  AND?: InputMaybe<Array<GarageWhereInput>>;
  NOT?: InputMaybe<Array<GarageWhereInput>>;
  OR?: InputMaybe<Array<GarageWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  displayName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  images?: InputMaybe<StringListFilter>;
  reviews?: InputMaybe<ReviewListRelationFilter>;
  slots?: InputMaybe<SlotListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verification?: InputMaybe<VerificationRelationFilter>;
};

export type GarageWhereUniqueInput = {
  id: Scalars['Float']['input'];
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String']['output'];
  user: User;
};

export type Manager = {
  __typename?: 'Manager';
  company?: Maybe<Company>;
  companyId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ManagerListRelationFilter = {
  every?: InputMaybe<ManagerWhereInput>;
  none?: InputMaybe<ManagerWhereInput>;
  some?: InputMaybe<ManagerWhereInput>;
};

export type ManagerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ManagerOrderByWithRelationInput = {
  bookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type ManagerRelationFilter = {
  AND?: InputMaybe<Array<ManagerWhereInput>>;
  NOT?: InputMaybe<Array<ManagerWhereInput>>;
  OR?: InputMaybe<Array<ManagerWhereInput>>;
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export enum ManagerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>;
  NOT?: InputMaybe<Array<ManagerWhereInput>>;
  OR?: InputMaybe<Array<ManagerWhereInput>>;
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type ManagerWhereUniqueInput = {
  uid: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Address;
  createAdmin: Admin;
  createBooking: Booking;
  createBookingTimeline: BookingTimeline;
  createCompany: Company;
  createCustomer: Customer;
  createGarage: Garage;
  createManager: Manager;
  createReview: Review;
  createSlot: Slot;
  createValet: Valet;
  createValetAssignment: ValetAssignment;
  createVerification: Verification;
  login: LoginOutput;
  registerWithCredentials: User;
  registerWithProvider: User;
  removeAddress: Address;
  removeAdmin: Admin;
  removeBooking: Booking;
  removeBookingTimeline: BookingTimeline;
  removeCompany: Company;
  removeCustomer: Customer;
  removeGarage: Garage;
  removeManager: Manager;
  removeReview: Review;
  removeSlot: Slot;
  removeUser: User;
  removeValet: Valet;
  removeValetAssignment: ValetAssignment;
  removeVerification: Verification;
  updateAddress: Address;
  updateAdmin: Admin;
  updateBooking: Booking;
  updateBookingTimeline: BookingTimeline;
  updateCompany: Company;
  updateCustomer: Customer;
  updateGarage: Garage;
  updateManager: Manager;
  updateReview: Review;
  updateSlot: Slot;
  updateUser: User;
  updateValet: Valet;
  updateValetAssignment: ValetAssignment;
  updateVerification: Verification;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput;
};


export type MutationCreateBookingTimelineArgs = {
  createBookingTimelineInput: CreateBookingTimelineInput;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateGarageArgs = {
  createGarageInput: CreateGarageInput;
};


export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateSlotArgs = {
  createSlotInput: CreateSlotInput;
};


export type MutationCreateValetArgs = {
  createValetInput: CreateValetInput;
};


export type MutationCreateValetAssignmentArgs = {
  createValetAssignmentInput: CreateValetAssignmentInput;
};


export type MutationCreateVerificationArgs = {
  createVerificationInput: CreateVerificationInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRegisterWithCredentialsArgs = {
  registerWithCredentialsInput: RegisterWithCredentialsInput;
};


export type MutationRegisterWithProviderArgs = {
  registerWithProviderInput: RegisterWithProviderInput;
};


export type MutationRemoveAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationRemoveBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type MutationRemoveBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput;
};


export type MutationRemoveCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationRemoveCustomerArgs = {
  where: CustomerWhereInput;
};


export type MutationRemoveGarageArgs = {
  where: GarageWhereUniqueInput;
};


export type MutationRemoveManagerArgs = {
  where: ManagerWhereUniqueInput;
};


export type MutationRemoveReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationRemoveSlotArgs = {
  where: SlotWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationRemoveValetArgs = {
  where: ValetWhereUniqueInput;
};


export type MutationRemoveValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput;
};


export type MutationRemoveVerificationArgs = {
  where: VerificationWhereUniqueInput;
};


export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput;
};


export type MutationUpdateBookingTimelineArgs = {
  updateBookingTimelineInput: UpdateBookingTimelineInput;
};


export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
};


export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateGarageArgs = {
  updateGarageInput: UpdateGarageInput;
};


export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};


export type MutationUpdateSlotArgs = {
  updateSlotInput: UpdateSlotInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateValetArgs = {
  updateValetInput: UpdateValetInput;
};


export type MutationUpdateValetAssignmentArgs = {
  updateValetAssignmentInput: UpdateValetAssignmentInput;
};


export type MutationUpdateVerificationArgs = {
  updateVerificationInput: UpdateVerificationInput;
};

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: Array<Address>;
  admin: Admin;
  admins: Array<Admin>;
  booking: Booking;
  bookingTimeline: BookingTimeline;
  bookingTimelines: Array<BookingTimeline>;
  bookings: Array<Booking>;
  companies: Array<Company>;
  company: Company;
  customer: Customer;
  customers: Array<Customer>;
  garage: Garage;
  garages: Array<Garage>;
  manager: Manager;
  managers: Array<Manager>;
  review: Review;
  reviews: Array<Review>;
  slot: Slot;
  slots: Array<Slot>;
  user: User;
  users: Array<User>;
  valet: Valet;
  valetAssignment: ValetAssignment;
  valetAssignments: Array<ValetAssignment>;
  valets: Array<Valet>;
  verification: Verification;
  verifications: Array<Verification>;
  whoami: User;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type QueryBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput;
};


export type QueryBookingTimelinesArgs = {
  cursor?: InputMaybe<BookingTimelineWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingTimelineScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingTimelineOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<BookingTimelineWhereInput>;
};


export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<BookingWhereInput>;
};


export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryCustomerArgs = {
  where: CustomerWhereInput;
};


export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryGarageArgs = {
  where: GarageWhereUniqueInput;
};


export type QueryGaragesArgs = {
  cursor?: InputMaybe<GarageWhereUniqueInput>;
  distinct?: InputMaybe<Array<GarageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<GarageWhereInput>;
};


export type QueryManagerArgs = {
  where: ManagerWhereUniqueInput;
};


export type QueryManagersArgs = {
  cursor?: InputMaybe<ManagerWhereUniqueInput>;
  distinct?: InputMaybe<Array<ManagerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ManagerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ManagerWhereInput>;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ReviewWhereInput>;
};


export type QuerySlotArgs = {
  where: SlotWhereUniqueInput;
};


export type QuerySlotsArgs = {
  cursor?: InputMaybe<SlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<SlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SlotOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<SlotWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryValetArgs = {
  where: ValetWhereUniqueInput;
};


export type QueryValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput;
};


export type QueryValetAssignmentsArgs = {
  cursor?: InputMaybe<ValetAssignmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<ValetAssignmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ValetAssignmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ValetAssignmentWhereInput>;
};


export type QueryValetsArgs = {
  cursor?: InputMaybe<ValetWhereUniqueInput>;
  distinct?: InputMaybe<Array<ValetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ValetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<ValetWhereInput>;
};


export type QueryVerificationArgs = {
  where: VerificationWhereUniqueInput;
};


export type QueryVerificationsArgs = {
  cursor?: InputMaybe<VerificationWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<VerificationWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  type: AuthProviderType;
  uid: Scalars['ID']['input'];
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customerId: Scalars['String']['output'];
  garageId: Scalars['Float']['output'];
  id: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>;
  none?: InputMaybe<ReviewWhereInput>;
  some?: InputMaybe<ReviewWhereInput>;
};

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReviewOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrder>;
  costumer?: InputMaybe<CustomerOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  garage?: InputMaybe<GarageOrderByWithRelationInput>;
  garageId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ReviewScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  GarageId = 'garageId',
  Id = 'id',
  Rating = 'rating',
  UpdatedAt = 'updatedAt'
}

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  comment?: InputMaybe<StringFilter>;
  costumer?: InputMaybe<CustomerRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<StringFilter>;
  garage?: InputMaybe<GarageRelationFilter>;
  garageId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ReviewWhereUniqueInput = {
  id: Scalars['Float']['input'];
};

export type Slot = {
  __typename?: 'Slot';
  bookings: Array<Booking>;
  createdAt: Scalars['DateTime']['output'];
  displayName?: Maybe<Scalars['String']['output']>;
  garage: Garage;
  garageId: Scalars['Float']['output'];
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Float']['output'];
  length?: Maybe<Scalars['Float']['output']>;
  pricePerHour: Scalars['Float']['output'];
  type: SlotType;
  updatedAt: Scalars['DateTime']['output'];
  width?: Maybe<Scalars['Float']['output']>;
};

export type SlotListRelationFilter = {
  every?: InputMaybe<SlotWhereInput>;
  none?: InputMaybe<SlotWhereInput>;
  some?: InputMaybe<SlotWhereInput>;
};

export type SlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SlotOrderByWithRelationInput = {
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  garage?: InputMaybe<GarageOrderByWithRelationInput>;
  garageId?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  pricePerHour?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SlotRelationFilter = {
  is?: InputMaybe<SlotWhereInput>;
  isNot?: InputMaybe<SlotWhereInput>;
};

export enum SlotScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  GarageId = 'garageId',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  PricePerHour = 'pricePerHour',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Width = 'width'
}

export enum SlotType {
  Bicycle = 'BICYCLE',
  Bike = 'BIKE',
  Car = 'CAR',
  Heavy = 'HEAVY'
}

export type SlotWhereInput = {
  AND?: InputMaybe<Array<SlotWhereInput>>;
  NOT?: InputMaybe<Array<SlotWhereInput>>;
  OR?: InputMaybe<Array<SlotWhereInput>>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  garage?: InputMaybe<GarageRelationFilter>;
  garageId?: InputMaybe<IntFilter>;
  height?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  length?: InputMaybe<IntFilter>;
  pricePerHour?: InputMaybe<FloatFilter>;
  type?: InputMaybe<EnumSlotTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  width?: InputMaybe<IntFilter>;
};

export type SlotWhereUniqueInput = {
  id: Scalars['Float']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  garageId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['Float']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateAdminInput = {
  uid: Scalars['ID']['input'];
};

export type UpdateBookingInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  garageId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  pricePerHour?: InputMaybe<Scalars['Float']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  totalPrice?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<SlotType>;
  valetAssignment?: InputMaybe<CreateValetAssignmentInputWithoutBookingId>;
  vehicleNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookingTimelineInput = {
  bookingId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  status?: InputMaybe<BookingStatus>;
};

export type UpdateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  managerId?: InputMaybe<Scalars['ID']['input']>;
  managerName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateGarageInput = {
  address?: InputMaybe<CreateAddressInputWithoutGarageId>;
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  slots?: InputMaybe<Array<CreateSlotInputWithoutGarageId>>;
};

export type UpdateManagerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['ID']['input'];
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  garageId?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  rating?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateSlotInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  garageId?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  length?: InputMaybe<Scalars['Float']['input']>;
  pricePerHour?: InputMaybe<Scalars['Float']['input']>;
  type?: InputMaybe<SlotType>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateValetAssignmentInput = {
  bookingId: Scalars['ID']['input'];
  pickupLat?: InputMaybe<Scalars['Float']['input']>;
  pickupLng?: InputMaybe<Scalars['Float']['input']>;
  pickupValetId?: InputMaybe<Scalars['String']['input']>;
  returnLat?: InputMaybe<Scalars['Float']['input']>;
  returnLng?: InputMaybe<Scalars['Float']['input']>;
  returnValetId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateValetInput = {
  companyId?: InputMaybe<Scalars['Float']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  licenseID?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['ID']['input'];
};

export type UpdateVerificationInput = {
  garageId: Scalars['ID']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Admin>;
  costumer?: Maybe<Customer>;
  createdAt: Scalars['DateTime']['output'];
  image?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Manager>;
  name: Scalars['String']['output'];
  uid: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  valet?: Maybe<Valet>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  uid: Scalars['ID']['input'];
};

export type Valet = {
  __typename?: 'Valet';
  companyId?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  licenseID: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ValetAssignment = {
  __typename?: 'ValetAssignment';
  bookingId: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  pickupLat: Scalars['Float']['output'];
  pickupLng: Scalars['Float']['output'];
  pickupValet?: Maybe<Valet>;
  pickupValetId?: Maybe<Scalars['String']['output']>;
  returnLat?: Maybe<Scalars['Float']['output']>;
  returnLng?: Maybe<Scalars['Float']['output']>;
  returnValet?: Maybe<Valet>;
  returnValetId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ValetAssignmentListRelationFilter = {
  every?: InputMaybe<ValetAssignmentWhereInput>;
  none?: InputMaybe<ValetAssignmentWhereInput>;
  some?: InputMaybe<ValetAssignmentWhereInput>;
};

export type ValetAssignmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ValetAssignmentOrderByWithRelationInput = {
  booking?: InputMaybe<BookingOrderByWithRelationInput>;
  bookingId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  pickupLat?: InputMaybe<SortOrder>;
  pickupLng?: InputMaybe<SortOrder>;
  pickupValet?: InputMaybe<ValetOrderByWithRelationInput>;
  pickupValetId?: InputMaybe<SortOrder>;
  returnLat?: InputMaybe<SortOrder>;
  returnLng?: InputMaybe<SortOrder>;
  returnValet?: InputMaybe<ValetOrderByWithRelationInput>;
  returnValetId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ValetAssignmentRelationFilter = {
  is?: InputMaybe<ValetAssignmentWhereInput>;
  isNot?: InputMaybe<ValetAssignmentWhereInput>;
};

export enum ValetAssignmentScalarFieldEnum {
  BookingId = 'bookingId',
  CreatedAt = 'createdAt',
  PickupLat = 'pickupLat',
  PickupLng = 'pickupLng',
  PickupValetId = 'pickupValetId',
  ReturnLat = 'returnLat',
  ReturnLng = 'returnLng',
  ReturnValetId = 'returnValetId',
  UpdatedAt = 'updatedAt'
}

export type ValetAssignmentWhereInput = {
  AND?: InputMaybe<Array<ValetAssignmentWhereInput>>;
  NOT?: InputMaybe<Array<ValetAssignmentWhereInput>>;
  OR?: InputMaybe<Array<ValetAssignmentWhereInput>>;
  booking?: InputMaybe<BookingRelationFilter>;
  bookingId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  pickupLat?: InputMaybe<FloatFilter>;
  pickupLng?: InputMaybe<FloatFilter>;
  pickupValet?: InputMaybe<ValetRelationFilter>;
  pickupValetId?: InputMaybe<StringFilter>;
  returnLat?: InputMaybe<FloatFilter>;
  returnLng?: InputMaybe<FloatFilter>;
  returnValet?: InputMaybe<ValetRelationFilter>;
  returnValetId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ValetAssignmentWhereUniqueInput = {
  bookingId: Scalars['Float']['input'];
};

export type ValetListRelationFilter = {
  every?: InputMaybe<ValetWhereInput>;
  none?: InputMaybe<ValetWhereInput>;
  some?: InputMaybe<ValetWhereInput>;
};

export type ValetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ValetOrderByWithRelationInput = {
  bookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayName?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  licenseID?: InputMaybe<SortOrder>;
  pickupAssignments?: InputMaybe<ValetAssignmentOrderByRelationAggregateInput>;
  returnAssignments?: InputMaybe<ValetAssignmentOrderByRelationAggregateInput>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export type ValetRelationFilter = {
  is?: InputMaybe<ValetWhereInput>;
  isNot?: InputMaybe<ValetWhereInput>;
};

export enum ValetScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Image = 'image',
  LicenseId = 'licenseID',
  Uid = 'uid',
  UpdatedAt = 'updatedAt'
}

export type ValetWhereInput = {
  AND?: InputMaybe<Array<ValetWhereInput>>;
  NOT?: InputMaybe<Array<ValetWhereInput>>;
  OR?: InputMaybe<Array<ValetWhereInput>>;
  bookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayName?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  licenseID?: InputMaybe<StringFilter>;
  pickupAssignments?: InputMaybe<ValetAssignmentListRelationFilter>;
  returnAssignments?: InputMaybe<ValetAssignmentListRelationFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type ValetWhereUniqueInput = {
  uid: Scalars['String']['input'];
};

export type Verification = {
  __typename?: 'Verification';
  adminId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  garageId: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type VerificationListRelationFilter = {
  every?: InputMaybe<VerificationWhereInput>;
  none?: InputMaybe<VerificationWhereInput>;
  some?: InputMaybe<VerificationWhereInput>;
};

export type VerificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type VerificationOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  adminId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  garage?: InputMaybe<GarageOrderByWithRelationInput>;
  garageId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verified?: InputMaybe<SortOrder>;
};

export type VerificationRelationFilter = {
  is?: InputMaybe<VerificationWhereInput>;
  isNot?: InputMaybe<VerificationWhereInput>;
};

export enum VerificationScalarFieldEnum {
  AdminId = 'adminId',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  UpdatedAt = 'updatedAt',
  Verified = 'verified'
}

export type VerificationWhereInput = {
  AND?: InputMaybe<Array<VerificationWhereInput>>;
  NOT?: InputMaybe<Array<VerificationWhereInput>>;
  OR?: InputMaybe<Array<VerificationWhereInput>>;
  admin?: InputMaybe<AdminRelationFilter>;
  adminId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  garage?: InputMaybe<GarageRelationFilter>;
  garageId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verified?: InputMaybe<BoolFilter>;
};

export type VerificationWhereUniqueInput = {
  garageId: Scalars['Float']['input'];
};

export type RegisterWithCredentialsMutationVariables = Exact<{
  registerWithCredentialsInput: RegisterWithCredentialsInput;
}>;


export type RegisterWithCredentialsMutation = { __typename?: 'Mutation', registerWithCredentials: { __typename?: 'User', updatedAt: any, uid: string, name: string, image?: string | null, createdAt: any } };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', token: string, user: { __typename?: 'User', uid: string, name: string, image?: string | null } } };

export const RegisterWithCredentialsDocument = gql`
    mutation RegisterWithCredentials($registerWithCredentialsInput: RegisterWithCredentialsInput!) {
  registerWithCredentials(
    registerWithCredentialsInput: $registerWithCredentialsInput
  ) {
    updatedAt
    uid
    name
    image
    createdAt
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterWithCredentialsGQL extends Apollo.Mutation<RegisterWithCredentialsMutation, RegisterWithCredentialsMutationVariables> {
    document = RegisterWithCredentialsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
    user {
      uid
      name
      image
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }