import _ from 'lodash';
const fetch = require('node-fetch');

export enum HttpMethods {
  POST = 'POST',
  GET = 'GET'
}

interface FetchInterface {
  method: HttpMethods;
  url: string;
  extraHeaders?: any;
  body?: any;
  queryParamsObject?: any;
  avoidJsonParse?: boolean;
}

function get(url: string, extraHeaders?: object): Promise<any> {
  return performFetch({method: HttpMethods.GET, url, extraHeaders});
}

function post(url: string, extraHeaders: object, body: object): Promise<any> {
  return performFetch({method: HttpMethods.POST, url, extraHeaders, body});
}

function convertObjectToQueryParams(obj: {[details: string]: string}): string {
  return Object
    .keys(obj)
    .map((key: string) => obj[key] === undefined ? null : `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .filter((item: string|null) => item !== null)
    .join('&');
}

async function performFetch(fetchObject: FetchInterface): Promise<object> {
  if (fetchObject.queryParamsObject) {
    const queryParams = convertObjectToQueryParams(fetchObject.queryParamsObject);
    fetchObject.url = `${fetchObject.url}?${queryParams}`;
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    "X-Requested-With": "XMLHttpRequest"
  };
  const response = await fetch(fetchObject.url, {
    method: fetchObject.method,
    headers: _.merge(headers, fetchObject.extraHeaders),
    body: JSON.stringify(fetchObject.body),
  });

  if (fetchObject.avoidJsonParse) {
    return response;
  }
  return response.json();
}

export const http = {
  get,
  post
};
