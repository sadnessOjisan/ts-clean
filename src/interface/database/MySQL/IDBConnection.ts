export abstract class IDBConnection {
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  abstract execute(query: string, params?: any): any;
}
