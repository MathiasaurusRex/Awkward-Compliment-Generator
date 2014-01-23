var text = document.getElementById("compliment").textContent;
var button = document.getElementById('button');

/* Capitalizes the first letter of a string. */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

button.onclick = function () {
    /*randomizes the array*/
    var randomVerbing = verbings[Math.floor(Math.random() * verbings.length)];
    var randomVerb = verb[Math.floor(Math.random() * verb.length)];
    var randomCoolAdjective = coolAdjectives[Math.floor(Math.random() * coolAdjectives.length)];
    var randomCreature = creatures[Math.floor(Math.random() * creatures.length)];
    var randomPlace = place[Math.floor(Math.random() * place.length)];
    var randomSentence = Math.floor(Math.random() * 3);

    if (randomSentence === 0) {
        document.getElementById("compliment").textContent = "Your " + randomVerbing + " is " + randomCoolAdjective + " among the " + randomCreature + " of " + randomPlace + ".";
    } else if (randomSentence === 1) {
        document.getElementById("compliment").textContent = "The " + randomCreature + " are " + randomVerbing + " your " + randomVerb + ", it's " + randomCoolAdjective + " in " + randomPlace + ".";
    } else {
        document.getElementById("compliment").textContent = capitalizeFirstLetter(randomCreature) + " from " + randomPlace + " are " + randomVerbing + " your " + randomVerb + " skills.";
    }
};
var adjectives=["smelly","unnattractive","attractive"]
var creatures = ["dogs", "cats", "Humans", "Rabbits", "small children licking lollypops", "cows", "Mutants", "Robots", "Ogres", "Goblins", "Trolls", "Double-decker Bus", "Big Wheels", "Tiny Hats", "telephone booth", "World's Smallest and Lightest DSLR Camera", "Hats emblazoned with 'That Shit Cray'", "puppies", "Scooby Doo Pinatas", "Janitors", "Project Managers", "Redditors", "Sloths", "Chickens", "Kittens", "Production Artists", "Programmers", "Stacy's Mom"];
var place = ["Reddit", "Earth", "the van down by the river", "Middle Earth", "the Emergency Room", "the parking ramp", "the dungeon", "a filthy jacuzzi tub", "the pawn shop", "the thrift shop", "the state fair", "the abominable snowman's cave", "the Death Star", "Tattooine", "Stacy's Mom's room", "Mercury", "Venus", "Mars", "Jupiter", "China", "Minnesnowta", "Wunderman", "Minneapolis", "Hell", "Jamaica", "France"];
var verbings = ["wanking", "drizzling", "karate chopping", "wriggling", "round house kicking", "passive aggressively sighing", "running", "masticating", "parkouring", "jiving", "pancake eating", "robot dancing", "CHIPing", "twerking", "farting", "splooging", "yelping", "flubbing", "tweaking", "proofreading", "sandwich eating", "splurging", "shellacing"];
var verb = ["wank", "drizzle", "karate chop", "wriggle", "round house kick", "extreme type", "run", "mastication", "parkour", "jive", "robot dance", "CHIP", "twerk", "fart", "splooge", "yelp", "flub", "tweak", "proofread", "splurg", "splooge", "shellacing"];
var coolAdjectives = ["all the rage", "legendary", "extraordinary", "totally tubular", "famous", "famed", "celebrated", "renowned", "illustrious", "far-famed", "distinguished", "ionized", "touted"];