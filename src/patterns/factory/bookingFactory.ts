interface Booking {
  hasPrivateTransfer: boolean;
  roomCodes: string[];
  guestsAmount: number;
  discountPercentage: number;
}

interface BookingFactory {
  (guestsAmount: number, roomCodes: string[]): Booking;
}

const bookingFactory: BookingFactory = (
  guestsAmount: number,
  roomCodes: string[]
) => ({
  guestsAmount,
  roomCodes,
  hasPrivateTransfer: roomCodes.includes("ZZZ"),
  discountPercentage: guestsAmount > 10 ? 0.1 : 0
});

const data: { roomCodes: string[]; guestsAmount: number }[] = [
  { guestsAmount: 2, roomCodes: ["BGH", "AAH", "ZZZ"] },
  { guestsAmount: 3, roomCodes: ["SS", "EE", "CC"] },
  { guestsAmount: 20, roomCodes: ["DFF", "WW", "RR"] }
];

for (const { guestsAmount, roomCodes } of data) {
  console.log(bookingFactory(guestsAmount, roomCodes));
}
