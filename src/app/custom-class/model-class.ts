export class ModelClass {
  showDetails: boolean;
  constructor(
    public userName: string,
    public quote: string,
    public author: string,
    public date: Date
  ) {
    this.showDetails = false;
  }
}
