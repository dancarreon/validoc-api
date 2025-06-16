export function customSerializer(param: any): string {
  return JSON.stringify(param, (key, value) =>
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    typeof value === 'bigint' ? value.toString() : value,
  );
}
