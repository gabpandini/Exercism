export class Gigasecond {
  private readonly gigaDate: number;
  public constructor(initialDate: Date) {
    this.gigaDate = initialDate.getTime();

  }
  public date(): Date {
   return new Date(this.gigaDate + 1e12);
  }
}
