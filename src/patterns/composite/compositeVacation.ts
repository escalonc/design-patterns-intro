interface VacationComponent {
  readonly name: string;
  readonly isComposite: boolean;
  readonly price: number;
  readonly quantity: number;
  readonly discount: number;
  readonly subTotal: number;
  add(component: VacationComponent): void;
}

class ProductComposite implements VacationComponent {
  private readonly vacations: VacationComponent[];
  private readonly defaultPrice: number;

  readonly name: string;
  readonly isComposite: boolean;
  readonly quantity: number;
  readonly discount: number;

  constructor(name?: string);
  constructor(
    name?: string,
    price?: number,
    quantity?: number,
    discount?: number,
    isComposite?: boolean
  ) {
    this.name = name || "";
    this.discount = discount ?? 0;
    this.isComposite = isComposite ?? false;
    this.defaultPrice = price ?? 500;
    this.quantity = quantity ?? 1;
    this.discount = discount ?? 0;
    this.vacations = [];
  }

  add(vacation: VacationComponent): void {
    this.vacations.push(vacation);
  }

  get price() {
    return this.isComposite
      ? this.vacations.reduce(
          (previous, current) => previous + current.price,
          0
        )
      : this.defaultPrice;
  }

  get subTotal() {
    if (this.isComposite) {
      return this.price * this.quantity;
    }

    return (
      this.vacations.reduce(
        (previous, current) => previous + current.subTotal,
        0
      ) *
        this.quantity -
      this.discount
    );
  }
}

const vaction = new ProductComposite("Room 3", 900);
