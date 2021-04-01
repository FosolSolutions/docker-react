export class NotFoundError extends Error {
  status: number;
  constructor(message?: string) {
    super(message ?? 'Object not found for the specified key.');
    this.status = 204;
  }
}
