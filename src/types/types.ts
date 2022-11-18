// COMMON

export interface IMostUsedTag {
  tag: string;
  amount: number;
}

export type IDeepestTag = Array<string>;

export type allDomTags = Array<string | null>;

export interface ITableRow {
  [key: string]: string;
}

export type TableRows = Array<ITableRow>;

export interface ICoin {
  code: string;
  description: string;
  rate: string;
  rate_float: number;
  symbol: string;
}

export type CoinsType = Array<ICoin>;

// STORE

// API
export interface IApiTime {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface ICurrencyApi {
  bpi: CoinsType;
  chartName: string;
  disclaimer?: string;
  time: IApiTime;
}
