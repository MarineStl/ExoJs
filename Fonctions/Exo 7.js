function description (age, genre ) {


if ((genre == "femme") && (age => 18)) {
console.log("Vous êtes une femme et vous êtes majeur")

}

if ((genre == "femme") && (age <= 18)) {
    console.log("Vous êtes une femme et vous êtes mineur")
}

if ((genre == "homme") && (age => 18)) {
    console.log("Vous êtes un homme et vous êtes majeur")
}

if ((genre == "homme") && (age <= 18)) {
    console.log("Vous êtes un homme et vous êtes mineur")
}
}