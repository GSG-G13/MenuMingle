export default class CustomError extends Error {
  constructor(public status: number, msg: string) {
    super(msg);
    this.status = status;
  }
}
