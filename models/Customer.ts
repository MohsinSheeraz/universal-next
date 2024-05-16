export interface CustomerSignUp {
  name: string;
  lastname: string;
  companyName: string;
  address: string;
  countryID: number;
  preferredPortId: number;
  email: string;
  phone: string;
  // roles: string[];
}

// export interface UserFormValues {
//   username: string;
//   email: string;
//   password: string;
// }

export interface Customer {
  customerId: number;
  img?: string;
  customerCode: string;
  titleId: number;
  name: string;
  lastName: string;
  companyName: string;
  address: string;
  countryId: number;
  preferredPortId: number;
  email: string;
  email2: string;
  email3: string;
  phone: string;
  phone2: string;
  phone3: string;
  isAssigned: boolean;
  assignedAgentId: number;
  isTrxAccActive: boolean;
  isAdmin: boolean;
  isActive: boolean;
  createdOn: string;
}

export interface ConsigneeCourier {
  id: number;
  customerID: number;
  consigneeName: string;
  consigneeCity: string;
  consigneeAddress: string;
  consigneeCountryId: number;
  consigneeEmail: string;
  consigneePhone: string;
  notifyPartyName: string;
  notifyPartyCity: string;
  notifyPartyAddress: string;
  notifyPartyCountryId: number;
  notifyPartyEmail: string;
  notifyPartyPhone: string;
  isActive: boolean;
  createdOn: string;
}

export interface CourierDispatch {
  id: number;
  customerID: number;
  personName: string;
  courierPersonCity: string;
  courierPersonAddress: string;
  courierPersonCountryId: number;
  courierPersonEmail: string;
  courierPersonPhone: string;
  shippingNote: string;
  isActive: boolean;
  createdOn: string;
}

export interface TransactionInfo {
  voucherCode: string;
  stockCode: string;
  listingName: string;
  runningBalance: string;
  currency: String;
  payerName: String;
  amount: String;
  reference: String;
  TTDocumentPath: String;
  bankName: String;
  transactionDate: String;
  isVoucher: Boolean;
  createdOn: Date;
}

export interface SalesOrderDetail {
  paidPercent: number;
  balancePercent: number;
  allocatedAmount: number;
  balanceAmount: number;
  totalCnf: number;
  afterDue: number;
  releaseDate: string;
  releaseOk: boolean;
  release: boolean;
  listingTitle: string;
  courierAddress: string;
  shipName: string;
  voyageNumber: string;
  etd: string;
  eta: string;
  shipOk: boolean;
  shipOkDate: string;
  createdOn: string;

  billLadingURL: string;
  inspectionCertURL: string;
  exportCertURL: string;
  auctionSheetURL: string;
  invoiceURL: string;

  courierCode: string;
  courierPersonName: string;
  courierPersonCity: string;
  courierPersonAddress: string;
  courierPersonCountryID: number;
  courierPersonEmail: string;
  courierPersonPhone: number;
  shippingNote: string;

  consigneeName: string;
  consigneePhone: number;
  consigneeCity: string;
  consigneeAddress: string;
  consigneeCountryID: number;
  consigneeEmail: string;

  notifyPartyName: string;
  notifyPartyCity: string;
  notifyPartyAddress: string;
  notifyPartyCountryID: number;
  notifyPartyEmail: string;
  notifyPartyPhone: number;
}
