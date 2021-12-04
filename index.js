"use strict";

let calculatedHeroicPastLivesBonuses;
let reincarnationOptions = [];
let numberOfReincarnations = 1;
let maxNumberOfReincarnations = 156;
let reincarnatedClassesArray = [];

let optionsArray = [
    "Alchemist",
    "Artificer",
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Favored Soul",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorcerer",
    "Warlock",
    "Wizard",
    "Human",
    "Dwarf",
    "Elf",
    "Halfling",
    "Aasimar",
    "Dragonborn",
    "Drow",
    "Gnome",
    "Half-Elf",
    "Half-Orc",
    "Shifter",
    "Tiefling",
    "Warforged",
    "Aasimar Scourge",
    "Bladeforged",
    "Deep Gnome",
    "Purple Dragon Knight",
    "Razorclaw Shifter",
    "Tiefling Scoundrel",
    "Shadar-Kai",
    "Morninglord",
    "Energy Criticals",
    "Enchant Weapon",
    "Arcane Alacrity",
    "Ancient Knowledge",
    "Power Over Life and Death",
    "Brace",
    "Block Energy",
    "Ancient Blessing",
    "Doublestrike",
    "Skill Mastery",
    "Fortification",
    "Ancient Tactics",
    "Doubleshot",
    "Fast Healing",
    "Colors of the Queen",
    "Ancient Power"
]

let heroicPastLivesPassiveBonuses = {
    "bonusDcTrasmutation": 0,
    "maximumSpellPoint": 0,
    "bonusIntelligenceSkills": 0,
    "bonusUmd": 0,
    "bonusHitPoints": 0,
    "bonusSavesEnchIll": 0,
    "bonusBardSongUsage": 0,
    "bonusDcConjuration": 0,
    "turnUndeadAttempt": 0,
    "turnUndeadHigher": 0,
    "bonusSummon": 0,
    "bonusSpellPen": 0,
    "bonusAttackRoll": 0,
    "bonusDcTactical": 0,
    "bonusDamageRolls": 0,
    "healAmp": 0,
    "bonusDmgRanged": 0,
    "elementResistance": 0,
    "bonusSavedTrap": 0,
    "bonusDmgSneak": 0,
    "bonusDcEvocation": 0,
    "bonusMrr": 0,
    "bonusDcWands": 0,
    "bonusHaggle": 0,
    "bonusBalance": 0,
    "bonusMoveSilently": 0,
    "bonusSpot": 0,
    "bonusSpellcraft": 0,
    "bonusHeal": 0,
    "bonusSearch": 0,
    "bonusDiplomacy": 0,
    "bonusIntimidate": 0,
    "bonusRepair": 0,
    "bonusWisdom": 0,
    "bonusCharisma": 0,
    "bonusIntelligence": 0,
    "bonusConstitution": 0,
    "bonusDexterity": 0,
    "bonusStrength": 0,
    "bonusRacialActionPoint": 0,
    "bonusFortitudeSave": 0,
    "bonusFortification": 0,
    "bonusPrr": 0,
    "bonusWillSave": 0,
    "bonusReflexSave": 0,
    "bonusDodge": 0,
    "bonusPositiveSpellPower": 0,
    "bonusElementAbsorption": 0,
    "bonusAcFlat": 0,
    "bonusAcPerTen": 0,
    "bonusHpEpicFlat": 0,
    "bonusHpEpicPerTen": 0,
}

function textForPastLivePassiveBonus(pastLivePassiveBonus) {
    let text;
    switch (pastLivePassiveBonus) {
        case "bonusDcTrasmutation":
            text = "bonus to DC's of your Transmutation spells: +";
            break;
        case "maximumSpellPoint":
            text = "bonus to maximum spell points: +"
            break;
        case "bonusIntelligenceSkills":
            text = "bonus to all intelligence based skills: +"
            break;
        case "bonusUmd":
            text = "bonus to Use Magic Device Skill: +"
            break;
        case "bonusHitPoints":
            text = "bonus to total hit points: +"
            break;
        case "bonusSavesEnchIll":
            text = "bonus to saves vs. enchantments and illusions: +"
            break;
        case "bonusBardSongUsage":
            text = "bard song usage: +"
            break;
        case "bonusDcConjuration":
            text = "bonus to DC's of your Conjuration spells: +"
            break;
        case "turnUndeadAttempt":
            text = "Turn Undead attempt: +"
            break;
        case "turnUndeadHigher":
            text = "you Turn Undead as if you were for that many levels higher: "
            break;
        case "bonusSummon":
            text = "your summoned creatures, charmed minions, and hirelings gain to all ability scores bonus: +"
            break;
        case "bonusSpellPen":
            text = "bonus to spell penetration: +"
            break;
        case "bonusAttackRoll":
            text = "bonus to attack rolls: +"
            break;
        case "bonusDcTactical":
            text = "bonus to DC's of your tactical feats: +"
            break;
        case "bonusDamageRolls":
            text = "bonus to damage rolls: +"
            break;
        case "healAmp":
            text = "bonus to healing amplification: +"
            break;
        case "bonusDmgRanged":
            text = "bonus to damage with ranged weapons (not thrown): +"
            break;
        case "elementResistance":
            text = "bonus to elemental resistances: +"
            break;
        case "bonusSavedTrap":
            text = "bonus to saves vs. traps: +"
            break;
        case "bonusDmgSneak":
            text = "bonus to damage when sneaking: +"
            break;
        case "bonusDcEvocation":
            text = "bonus to DC's of your Evocations spells: +"
            break;
        case "bonusMrr":
            text = "bonus to magical resistance rating (MRR): +"
            break;
        case "bonusDcWands":
            text = "bonus to DC's of your wands: +"
            break;
        case "bonusHaggle":
            text = "bonus to Haggle: +"
            break;
        case "bonusBalance":
            text = "bonus to Balance: +"
            break;
        case "bonusMoveSilently":
            text = "bonus to Move Silently: +"
            break;
        case "bonusSpot":
            text = "bonus to Spot: +"
            break;
        case "bonusSpellcraft":
            text = "bonus to Spellcraft: +"
            break;
        case "bonusHeal":
            text = "bonus to Heal: +"
            break;
        case "bonusSearch":
            text = "bonus to Search: +"
            break;
        case "bonusDiplomacy":
            text = "bonus to Diplomacy: +"
            break;
        case "bonusIntimidate":
            text = "bonus to Intimidate: +"
            break;
        case "bonusCharisma":
            text = "bonus to Charisma: +"
            break;
        case "bonusIntelligence":
            text = "bonus to Intelligence: +"
            break;
        case "bonusWisdom":
            text = "bonus to Wisdom: +"
            break;
        case "bonusConstitution":
            text = "bonus to Constitution: +"
            break;
        case "bonusDexterity":
            text = "bonus to Dexterity: +"
            break;
        case "bonusStrength":
            text = "bonus to Strength: +"
            break;
        case "bonusRacialActionPoint":
            text = "bonus points to Racial Enhancement Tree: +"
            break;
        case "bonusFortitudeSave":
            text = "bonus to fortitude save: +"
            break;
        case "bonusFortification":
            text = "percentage bonus to fortification: +"
            break;
        case "bonusPrr":
            text = "bonus to physical resistance rating (PRR): +"
            break;
        case "bonusWillSave":
            text = "bonus to will save: +"
            break;
        case "bonusReflexSave":
            text = "bonus points to reflex save: +"
            break;
        case "bonusDodge":
            text = "percentage bonus to dodge: +"
            break;
        case "bonusPositiveSpellPower":
            text = "bonus to positive spell power: +"
            break;
        case "bonusElementAbsorption":
            text = "percentage bonus to Absorption of Acid, Cold, Electric, and Fire damage: +"
            break;
        case "bonusAcFlat":
            text = "bonus to AC: +"
            break;
        case "bonusAcPerTen":
            text = "bonus to AC per 10 character levels: +"
            break;
        case "bonusHpEpicPerTen":
            text = "bonus to HP per 10 character levels: +"
            break;
        case "bonusRepair":
            text = "bonus to Repair: +"
            break;
        default:
            text = "error (text for feat not found) "
    }
    return text;
}

function calculateReincarnations() {
    calculatedHeroicPastLivesBonuses = Object.create(heroicPastLivesPassiveBonuses);
    let humanReinc = 0;
    let dwarfReinc = 0;
    let halflingReinc = 0;
    let elfReinc = 0
    let dragonbornReinc = 0;
    let aasimarReinc = 0;
    let drowReinc = 0;
    let gnomeReinc = 0;
    let halfelfReinc = 0;
    let halforcReinc = 0;
    let shifterReinc = 0;
    let tieflingReinc = 0;
    let warforgedReinc = 0;
    // calculate only so many past lives, that was chosen
    for (let i = 0; i < numberOfReincarnations; i++) {
        switch (reincarnatedClassesArray[i]) {
            case "-":
                break;
            case "Alchemist":
                calculatedHeroicPastLivesBonuses.bonusDcTrasmutation += 2;
                calculatedHeroicPastLivesBonuses.maximumSpellPoint += 20;
                break;
            case "Artificer":
                calculatedHeroicPastLivesBonuses.bonusIntelligenceSkills += 1;
                calculatedHeroicPastLivesBonuses.bonusUmd += 1;
                break;
            case "Barbarian":
                calculatedHeroicPastLivesBonuses.bonusHitPoints += 10;
                break;
            case "Bard":
                calculatedHeroicPastLivesBonuses.bonusSavesEnchIll += 2;
                calculatedHeroicPastLivesBonuses.bonusBardSongUsage += 1;
                break;
            case "Cleric":
                calculatedHeroicPastLivesBonuses.bonusDcConjuration += 1;
                calculatedHeroicPastLivesBonuses.turnUndeadAttempt += 1;
                calculatedHeroicPastLivesBonuses.turnUndeadHigher += 2;
                break;
            case "Druid":
                calculatedHeroicPastLivesBonuses.bonusSummon += 2;
                break;
            case "Favored Soul":
                calculatedHeroicPastLivesBonuses.bonusSpellPen += 1;
                calculatedHeroicPastLivesBonuses.maximumSpellPoint += 20;
                break;
            case "Fighter":
                calculatedHeroicPastLivesBonuses.bonusAttackRoll += 1;
                calculatedHeroicPastLivesBonuses.bonusDcTactical += 1;
                break;
            case "Monk":
                calculatedHeroicPastLivesBonuses.bonusDamageRolls += 1;
                break;
            case "Paladin":
                calculatedHeroicPastLivesBonuses.healAmp += 10;
                break;
            case "Ranger":
                calculatedHeroicPastLivesBonuses.bonusDmgRanged += 2;
                calculatedHeroicPastLivesBonuses.elementResistance += 2;
                break;
            case "Rogue":
                calculatedHeroicPastLivesBonuses.bonusSavedTrap += 2;
                calculatedHeroicPastLivesBonuses.bonusDmgSneak += 1;
                break;
            case "Sorcerer":
                calculatedHeroicPastLivesBonuses.bonusDcEvocation += 1;
                calculatedHeroicPastLivesBonuses.maximumSpellPoint += 20;
                break;
            case "Warlock":
                calculatedHeroicPastLivesBonuses.bonusMrr += 3;
                break;
            case "Wizard":
                calculatedHeroicPastLivesBonuses.bonusSpellPen += 2;
                calculatedHeroicPastLivesBonuses.bonusDcWands += 2;
                break;
            case "Human":
                switch (humanReinc) {
                    case 0:
                        humanReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusHaggle += 1;
                        break;
                    case 1:
                        humanReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusWisdom += 1;
                        break;
                    case 2:
                        humanReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of human reincarnation is not 1, 2 or 3");
                }
                break;
            case "Dwarf":
                switch (dwarfReinc) {
                    case 0:
                        dwarfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusBalance += 1;
                        break;
                    case 1:
                        dwarfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusConstitution += 1;
                        break;
                    case 2:
                        dwarfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of dwarf reincarnation is not 1, 2 or 3");
                }
                break;
            case "Elf":
                switch (elfReinc) {
                    case 0:
                        elfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusSpot += 1;
                        break;
                    case 1:
                        elfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        elfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of elf reincarnation is not 1, 2 or 3");
                }
                break;
            case "Halfling":
                switch (halflingReinc) {
                    case 0:
                        halflingReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusMoveSilently += 1;
                        break;
                    case 1:
                        halflingReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        halflingReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of halfling reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Dragonborn":
                switch (dragonbornReinc) {
                    case 0:
                        dragonbornReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusSpellcraft += 1;
                        break;
                    case 1:
                        dragonbornReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusCharisma += 1;
                        break;
                    case 2:
                        dragonbornReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of dragonborn reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Aasimar":
                switch (aasimarReinc) {
                    case 0:
                        aasimarReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusHeal += 1;
                        break;
                    case 1:
                        aasimarReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusWisdom += 1;
                        break;
                    case 2:
                        aasimarReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of aasimar reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Drow":
                switch (drowReinc) {
                    case 0:
                        drowReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusSearch += 1;
                        break;
                    case 1:
                        drowReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusIntelligence += 1;
                        break;
                    case 2:
                        drowReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of drow reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Gnome":
                switch (gnomeReinc) {
                    case 0:
                        gnomeReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusUmd += 1;
                        break;
                    case 1:
                        gnomeReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusIntelligence += 1;
                        break;
                    case 2:
                        gnomeReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of gnome reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Half-Elf":
                switch (halfelfReinc) {
                    case 0:
                        halfelfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusDiplomacy += 1;
                        break;
                    case 1:
                        halfelfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusCharisma += 1;
                        break;
                    case 2:
                        halfelfReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of halfelf reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Half-Orc":
                switch (halforcReinc) {
                    case 0:
                        halforcReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusIntimidate += 1;
                        break;
                    case 1:
                        halforcReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusStrength += 1;
                        break;
                    case 2:
                        halforcReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of halforc reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Shifter":
                switch (shifterReinc) {
                    case 0:
                        shifterReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusSpot += 1;
                        break;
                    case 1:
                        shifterReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        shifterReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of shifter reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Tiefling":
                switch (tieflingReinc) {
                    case 0:
                        tieflingReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusSpellcraft += 1;
                        break;
                    case 1:
                        tieflingReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusCharisma += 1;
                        break;
                    case 2:
                        tieflingReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of tiefling reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Warforged":
                switch (warforgedReinc) {
                    case 0:
                        warforgedReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRepair += 1;
                        break;
                    case 1:
                        warforgedReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusConstitution += 1;
                        break;
                    case 2:
                        warforgedReinc += 1;
                        calculatedHeroicPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        console.log("error: number of warforged reincarnation is  not 1, 2 or 3");
                }
                break;
            case "Aasimar Scourge":
                calculatedHeroicPastLivesBonuses.bonusFortitudeSave += 1;
                break;
            case "Bladeforged":
                calculatedHeroicPastLivesBonuses.bonusFortification += 5;
                break;
            case "Deep Gnome":
                calculatedHeroicPastLivesBonuses.bonusMrr += 3;
                break;
            case "Purple Dragon Knight":
                calculatedHeroicPastLivesBonuses.bonusPrr += 3;
                break;
            case "Razorclaw Shifter":
                calculatedHeroicPastLivesBonuses.bonusWillSave += 1;
                break;
            case "Tiefling Scoundrel":
                calculatedHeroicPastLivesBonuses.bonusReflexSave += 1;
                break;
            case "Shadar-Kai":
                calculatedHeroicPastLivesBonuses.bonusDodge += 1;
                break;
            case "Morninglord":
                calculatedHeroicPastLivesBonuses.bonusPositiveSpellPower += 3;
                break;
            case "Energy Criticals":
                calculatedHeroicPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case "Enchant Weapon":
                calculatedHeroicPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case "Arcane Alacrity":
                calculatedHeroicPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case "Ancient Knowledge":
                calculatedHeroicPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case "Power Over Life and Death":
                calculatedHeroicPastLivesBonuses.bonusPrr += 3;
                break;
            case "Brace":
                calculatedHeroicPastLivesBonuses.bonusPrr += 3;
                break;
            case "Block Energy":
                calculatedHeroicPastLivesBonuses.bonusPrr += 3;
                break;
            case "Ancient Blessing":
                calculatedHeroicPastLivesBonuses.bonusPrr += 3;
                break;
            case "Doublestrike":
                calculatedHeroicPastLivesBonuses.bonusAcFlat += 2;
                calculatedHeroicPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case "Skill Mastery":
                calculatedHeroicPastLivesBonuses.bonusAcFlat += 2;
                calculatedHeroicPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case "Fortification":
                calculatedHeroicPastLivesBonuses.bonusAcFlat += 2;
                calculatedHeroicPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case "Ancient Tactics":
                calculatedHeroicPastLivesBonuses.bonusAcFlat += 2;
                calculatedHeroicPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case "Doubleshot":
                calculatedHeroicPastLivesBonuses.bonusHitPoints += 3;
                calculatedHeroicPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            case "Fast Healing":
                calculatedHeroicPastLivesBonuses.bonusHitPoints += 3;
                calculatedHeroicPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            case "Colors of the Queen":
                calculatedHeroicPastLivesBonuses.bonusHitPoints += 3;
                calculatedHeroicPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            case "Ancient Power":
                calculatedHeroicPastLivesBonuses.bonusHitPoints += 3;
                calculatedHeroicPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            default:
                console.log("error: class not found in the switch for feats calculation" + reincarnatedClassesArray[i]);
        }
    };
}

//
function createReincarnationOptions() {
    // iterate over all selects
    reincarnationOptions.forEach(function (reincarnationOptionId, reincarnationOptionIndex) {
        // every option in array
        optionsArray.forEach(function (optionText) {
            let newOption = new Option(optionText, optionText);
            let selectId = document.getElementById(reincarnationOptionId);
            selectId.add(newOption);
        })
    });
}

// all actions when reincarnation is chosen
function createEventListenerForReincarnationOptions() {
    reincarnationOptions.forEach(function (reincarnationOptionId, reincarnationOptionIndex) {
        //let currentIndex = reincarnationOptions.indexOf(item, 0)
        let option = document.getElementById(reincarnationOptionId);
        option.addEventListener('change', event => {
            saveReincarnatedClasses();
            calculateReincarnations();
            printFeatsCalculation();
            checkMaximumNumberOfReincarnationsForOneClass();
            changeSelectColorForDefaultValue();
        })
    });
}

// all actions when number of reincarnations is chosen
function createEventListenerForNumberofReincarnationsSelect() {
    document.getElementById('numberOfReincarnationsSelect').addEventListener('change', function () {
        saveNumberOfReincarnations();
        saveReincarnatedClasses();
        calculateReincarnations();
        printFeatsCalculation();
    });
}

function saveReincarnationOptionsIds() {
    let selectionsArray = document.getElementsByClassName('reincarnationSelect');
    for (let i = 0; i < selectionsArray.length; i++) {
        let idOfSelection = selectionsArray[i].id;
        reincarnationOptions.push(idOfSelection);
    };
}

function addOptionsForNumberOfReincarnationsSelect() {
    let numberOfReincarnationsSelect = document.getElementById('numberOfReincarnationsSelect');
    for (let i = 1; i <= maxNumberOfReincarnations; i++) {
        numberOfReincarnationsSelect.options[numberOfReincarnationsSelect.options.length] = new Option(i, i);
    };
}

// save the number of reincarnations chosen by the user for passive feats calculation
function saveNumberOfReincarnations() {
    numberOfReincarnations = document.getElementById('numberOfReincarnationsSelect').value;
}

// save reincarnated classes in array
function saveReincarnatedClasses() {
    reincarnatedClassesArray = [];
    let selectionsArray = document.getElementsByClassName('reincarnationSelect');
    for (let i = 0; i < selectionsArray.length; i++) {
        let nameOfClass = selectionsArray[i].selectedOptions[0].label;
        reincarnatedClassesArray.push(nameOfClass);
    };
}

// print calculations for feats of all chosen reincarnations
function printFeatsCalculation() {
    let listOfCalculatedPassiveFeats = document.getElementById("passiveFeatsCalculation");
    listOfCalculatedPassiveFeats.innerHTML = '';

    for (const property in calculatedHeroicPastLivesBonuses) {
        if (calculatedHeroicPastLivesBonuses[property] != 0) {
            let itemOfCalculatedPassiveFeats = document.createElement("li");
            itemOfCalculatedPassiveFeats.appendChild(document.createTextNode(textForPastLivePassiveBonus(property) + calculatedHeroicPastLivesBonuses[property]));
            listOfCalculatedPassiveFeats.appendChild(itemOfCalculatedPassiveFeats);
        }
    }
}

function checkMaximumNumberOfReincarnationsForOneClass() {
    let counts = {}

    for (let i = 0; i < reincarnatedClassesArray.length; i++) {
        if (counts[reincarnatedClassesArray[i]]) {
            counts[reincarnatedClassesArray[i]] += 1
        } else {
            counts[reincarnatedClassesArray[i]] = 1
        }
    }
    for (let prop in counts) {
        if (counts[prop] >= 3 && prop != '-') {
            // iterate over all selects
            for (let s = 0; s < reincarnationOptions.length; s++) {
                // iterate over options of given select
                for (let o = 0; o < document.getElementById(reincarnationOptions[s]).options.length; o++) {
                    if (document.getElementById(reincarnationOptions[s]).options[o].label === prop) {
                        document.getElementById(reincarnationOptions[s]).options[o].disabled = true;
                    }
                }
            }
        } else {
            // iterate over all selects
            for (let s = 0; s < reincarnationOptions.length; s++) {
                // iterate over options of given select
                for (let o = 0; o < document.getElementById(reincarnationOptions[s]).options.length; o++) {
                    if (document.getElementById(reincarnationOptions[s]).options[o].label === prop) {
                        document.getElementById(reincarnationOptions[s]).options[o].disabled = false;
                    }
                }
            }
        }
    }
}

function changeSelectColorForDefaultValue() {
    let selectionsArray = document.getElementsByClassName('reincarnationSelect');
    for (let i = 0; i < selectionsArray.length; i++) {
        let nameOfClass = selectionsArray[i].selectedOptions[0].label;
        if (nameOfClass === '-') {
            selectionsArray[i].style.backgroundColor = "#f7e98e";
        } else {
            selectionsArray[i].style.backgroundColor = "white";
        }
    };
}

addOptionsForNumberOfReincarnationsSelect();
saveReincarnationOptionsIds();
createEventListenerForNumberofReincarnationsSelect();
createEventListenerForReincarnationOptions();
changeSelectColorForDefaultValue();
createReincarnationOptions();

