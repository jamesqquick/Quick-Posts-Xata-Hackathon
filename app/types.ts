export interface ActionReturnVal {
  errors?: { [key: string]: string };
  errorMsg?: string;
  successMsg?: string;
  data?: any;
}
