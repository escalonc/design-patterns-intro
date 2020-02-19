interface Room {
  name: string;
  price: number;
  categories: string[];
  attributes: string[];
}

interface RoomBuilder {
  WithName(name: string): RoomBuilder;
  WithPrice(price: number): RoomBuilder;
  WithCategories(...category: string[]): RoomBuilder;
  AppendAttribute(attribute: string): RoomBuilder;
  Build(): Room;
}

// class BeachesRoomBuilder implements RoomBuilder {
//   private room: Room = {
//     name: "",
//     price: 1,
//     categories: [],
//     attributes: []
//   };

//   WithName(name: string): RoomBuilder {
//     this.room.name = name;
//     return this;
//   }

//   WithPrice(price: number): RoomBuilder {
//     this.room.price = price;
//     return this;
//   }

//   WithCategories(...categories: string[]): RoomBuilder {
//     this.room.categories = categories;
//     return this;
//   }

//   AppendAttribute(attribute: string): RoomBuilder {
//     this.room.attributes.push(attribute);
//     return this;
//   }

//   Build(): Room {
//     return this.room;
//   }
// }

// const builder = new BeachesRoomBuilder();

// const room = builder
//   .WithName("")
//   .WithPrice(2000)
//   .WithCategories("Hi", "Hi2")
//   .AppendAttribute("Att1")
//   .AppendAttribute("Att2")
//   .Build();
