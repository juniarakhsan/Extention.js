
const restaurant = {
    name: "Coffe degung",
    city: "sukabumi",
    favoriteDrink: "lemon rock",
    favoriteFood: "Nasi goreng",
    isVegan: true
  };
  
  const restaurants = [
    {
      name: "coffe rasa",
      city: "Sukabumi ",
      favoriteDrink: "lemon rock",
      favoriteFood: "Omelet",
      isVegan: true
    },
    {
      name: "coffe riungan",
      city: "Bogor",
      favoriteDrink: "Ice coffe latte",
      favoriteFood: "tahu pedas ",
      isVegan: false
    }
  ];
  
  // Menampilkan informasi restoran objek
  console.log("Informasi Restoran Objek:");
  console.log("Nama Restoran:", restaurant.name);
  console.log("Kota:", restaurant.city);
  console.log("Minuman Favorit:", restaurant.favoriteDrink);
  console.log("Makanan Favorit:", restaurant.favoriteFood);
  console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
  
  // Menampilkan informasi restoran dari array
  console.log("\nInformasi Restoran Array:");
  restaurants.forEach(function(restaurant, index) {
    console.log("Restoran ke-" + (index + 1));
    console.log("Nama Restoran:", restaurant.name);
    console.log("Kota:", restaurant.city);
    console.log("Minuman Favorit:", restaurant.favoriteDrink);
    console.log("Makanan Favorit:", restaurant.favoriteFood);
    console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
    console.log("\n");
  });
