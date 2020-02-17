interface VacationComponent {
  readonly isComposite: boolean;
  readonly price: number;
  readonly quantity: number;
  readonly discount: number;
  readonly subTotal: number;
  add(component: VacationComponent): void;
}

class ProductComposite implements VacationComponent {
  private vacations: VacationComponent[];

  constructor(
    readonly isComposite: boolean,
    readonly price: number,
    readonly quantity: number,
    readonly discount: number
  ) {
    this.vacations = [];
  }

  add(vacation: VacationComponent): void {
    this.vacations.push(vacation);
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

const vaction = new ProductComposite(false, 900, 2, 0);
