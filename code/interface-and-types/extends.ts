interface IceCream {
  flavor: string;
  scoops: number;
}

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
}
