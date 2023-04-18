export default interface IApiResponse {
  title?: string;
  apiStatus?: string;
  success?: boolean;
  message?: string;
  total?: number;
  data: any;
  query?: any;
}
