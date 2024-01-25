'use strict';

let calculatedPastLivesBonuses;
let reincarnationOptions = [];
let numberOfReincarnations = 0;
let reincarnatedClassesArray = [];
const maxNumberOfReincarnations = 186;
const numberOfHeroicClassesInDDO = 15; // archetypes not included
const numberOfRacesInDDO = 14;

let pastLivesPassiveBonuses = {
    bonusDcTrasmutation: 0,
    maximumSpellPoint: 0,
    bonusIntelligenceSkills: 0,
    bonusUmd: 0,
    bonusHitPoints: 0,
    bonusSavesEnchIll: 0,
    bonusBardSongUsage: 0,
    bonusDcConjuration: 0,
    turnUndeadAttempt: 0,
    turnUndeadHigher: 0,
    bonusSummon: 0,
    bonusSpellPen: 0,
    bonusAttackRoll: 0,
    bonusDcTactical: 0,
    bonusDamageRolls: 0,
    bonusPositiveHealAmp: 0,
    bonusDmgRanged: 0,
    elementResistance: 0,
    bonusSavedTrap: 0,
    bonusDmgSneak: 0,
    bonusAttackSneak: 0,
    bonusDcEvocation: 0,
    bonusMrr: 0,
    bonusDcWands: 0,
    bonusHaggle: 0,
    bonusBalance: 0,
    bonusMoveSilently: 0,
    bonusSpot: 0,
    bonusSpellcraft: 0,
    bonusHeal: 0,
    bonusSearch: 0,
    bonusDiplomacy: 0,
    bonusIntimidate: 0,
    bonusRepair: 0,
    bonusTumble: 0,
    bonusWisdom: 0,
    bonusCharisma: 0,
    bonusIntelligence: 0,
    bonusConstitution: 0,
    bonusDexterity: 0,
    bonusStrength: 0,
    bonusRacialActionPoint: 0,
    bonusFortitudeSave: 0,
    bonusFortification: 0,
    bonusPrr: 0,
    bonusWillSave: 0,
    bonusReflexSave: 0,
    bonusDodge: 0,
    bonusPositiveSpellPower: 0,
    bonusElementAbsorption: 0,
    bonusAcFlat: 0,
    bonusAcPerTen: 0,
    bonusHpEpicFlat: 0,
    bonusHpEpicPerTen: 0,
    bonusNegativeHealAmp: 0,
    bonusNegativeSpellPower: 0,
    bonusLightningSpellPower: 0,
    bonusSonicSpellPower: 0,
    bonusDestinyPoint: 0,
    bonusAllSkills: 0,
    bonusPoisonSpellPower: 0,
    bonusAcidSpellPower: 0,
    bonusFireSpellPower: 0
}

function calculateReincarnations() {
    calculatedPastLivesBonuses = Object.create(pastLivesPassiveBonuses);
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
    let tabaxiReinc = 0;
    let epicReinc = 0;
    let heroicCompletionistArray = [];
    let racialCompletionistArray = [];
    // calculate only so many past lives, that was chosen
    for (let i = 0; i < numberOfReincarnations; i++) {
        switch (reincarnatedClassesArray[i]) {
            case '-':
                break;
            case 'Alchemist':
                calculatedPastLivesBonuses.bonusDcTrasmutation += 1;
                calculatedPastLivesBonuses.maximumSpellPoint += 20;
                heroicCompletionistArray.push('Alchemist');
                break;
            case 'Artificer':
                calculatedPastLivesBonuses.bonusIntelligenceSkills += 1;
                calculatedPastLivesBonuses.bonusUmd += 1;
                heroicCompletionistArray.push('Artificer');
                break;
            case 'Barbarian':
                calculatedPastLivesBonuses.bonusHitPoints += 10;
                heroicCompletionistArray.push('Barbarian');
                break;
            case 'Bard':
                calculatedPastLivesBonuses.bonusSavesEnchIll += 2;
                calculatedPastLivesBonuses.bonusBardSongUsage += 1;
                heroicCompletionistArray.push('Bard');
                break;
            case 'Cleric':
                calculatedPastLivesBonuses.bonusDcConjuration += 1;
                calculatedPastLivesBonuses.turnUndeadAttempt += 1;
                calculatedPastLivesBonuses.turnUndeadHigher += 2;
                heroicCompletionistArray.push('Cleric');
                break;
            case 'Druid':
                calculatedPastLivesBonuses.bonusSummon += 2;
                heroicCompletionistArray.push('Druid');
                break;
            case 'Favored Soul':
                calculatedPastLivesBonuses.bonusSpellPen += 1;
                calculatedPastLivesBonuses.maximumSpellPoint += 20;
                heroicCompletionistArray.push('Favored Soul');
                break;
            case 'Fighter':
                calculatedPastLivesBonuses.bonusAttackRoll += 1;
                calculatedPastLivesBonuses.bonusDcTactical += 1;
                heroicCompletionistArray.push('Fighter');
                break;
            case 'Monk':
                calculatedPastLivesBonuses.bonusDamageRolls += 1;
                heroicCompletionistArray.push('Monk');
                break;
            case 'Paladin':
                calculatedPastLivesBonuses.bonusPositiveHealAmp += 10;
                heroicCompletionistArray.push('Paladin');
                break;
            case 'Ranger':
                calculatedPastLivesBonuses.bonusDmgRanged += 2;
                calculatedPastLivesBonuses.elementResistance += 2;
                heroicCompletionistArray.push('Ranger');
                break;
            case 'Rogue':
                calculatedPastLivesBonuses.bonusSavedTrap += 2;
                calculatedPastLivesBonuses.bonusDmgSneak += 1;
                heroicCompletionistArray.push('Rogue');
                break;
            case 'Sorcerer':
                calculatedPastLivesBonuses.bonusDcEvocation += 1;
                calculatedPastLivesBonuses.maximumSpellPoint += 20;
                heroicCompletionistArray.push('Sorcerer');
                break;
            case 'Warlock':
                calculatedPastLivesBonuses.bonusMrr += 3;
                heroicCompletionistArray.push('Warlock');
                break;
            case 'Wizard':
                calculatedPastLivesBonuses.bonusSpellPen += 2;
                calculatedPastLivesBonuses.bonusDcWands += 2;
                heroicCompletionistArray.push('Wizard');
                break;
            case 'Dark Apostate':
                calculatedPastLivesBonuses.bonusNegativeHealAmp += 5;
                calculatedPastLivesBonuses.bonusNegativeSpellPower += 5;
                heroicCompletionistArray.push('Cleric');
                break;
            case 'Stormsinger':
                calculatedPastLivesBonuses.bonusLightningSpellPower += 5;
                calculatedPastLivesBonuses.bonusSonicSpellPower += 5;
                heroicCompletionistArray.push('Bard');
                break;
            case 'Sacred Fist':
                calculatedPastLivesBonuses.bonusPositiveHealAmp += 5;
                calculatedPastLivesBonuses.bonusPositiveSpellPower += 5;
                heroicCompletionistArray.push('Paladin');
                break;
            case 'Blight Caster':
                calculatedPastLivesBonuses.bonusPoisonSpellPower += 5;
                calculatedPastLivesBonuses.bonusAcidSpellPower += 5;
                heroicCompletionistArray.push('Druid');
                break;
            case 'Dark Hunter':
                calculatedPastLivesBonuses.bonusDmgSneak += 1;
                calculatedPastLivesBonuses.bonusAttackSneak += 1;
                heroicCompletionistArray.push('Ranger');
                break;
            case 'Acolyte of the Skin':
                calculatedPastLivesBonuses.bonusMrr += 1;
                calculatedPastLivesBonuses.bonusFireSpellPower += 5;
                heroicCompletionistArray.push('Warlock');
                break;
            case 'Human':
                racialCompletionistArray.push('Human');
                switch (humanReinc) {
                    case 0:
                        humanReinc += 1;
                        calculatedPastLivesBonuses.bonusHaggle += 1;
                        break;
                    case 1:
                        humanReinc += 1;
                        calculatedPastLivesBonuses.bonusWisdom += 1;
                        break;
                    case 2:
                        humanReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Human');
                }
                break;
            case 'Dwarf':
                racialCompletionistArray.push('Dwarf');
                switch (dwarfReinc) {
                    case 0:
                        dwarfReinc += 1;
                        calculatedPastLivesBonuses.bonusBalance += 1;
                        break;
                    case 1:
                        dwarfReinc += 1;
                        calculatedPastLivesBonuses.bonusConstitution += 1;
                        break;
                    case 2:
                        dwarfReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Dwarf');
                }
                break;
            case 'Elf':
                racialCompletionistArray.push('Elf');
                switch (elfReinc) {
                    case 0:
                        elfReinc += 1;
                        calculatedPastLivesBonuses.bonusSpot += 1;
                        break;
                    case 1:
                        elfReinc += 1;
                        calculatedPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        elfReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Elf');
                }
                break;
            case 'Halfling':
                racialCompletionistArray.push('Halfling');
                switch (halflingReinc) {
                    case 0:
                        halflingReinc += 1;
                        calculatedPastLivesBonuses.bonusMoveSilently += 1;
                        break;
                    case 1:
                        halflingReinc += 1;
                        calculatedPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        halflingReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Halfling');
                }
                break;
            case 'Dragonborn':
                racialCompletionistArray.push('Dragonborn');
                switch (dragonbornReinc) {
                    case 0:
                        dragonbornReinc += 1;
                        calculatedPastLivesBonuses.bonusSpellcraft += 1;
                        break;
                    case 1:
                        dragonbornReinc += 1;
                        calculatedPastLivesBonuses.bonusCharisma += 1;
                        break;
                    case 2:
                        dragonbornReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Dragonborn');
                }
                break;
            case 'Aasimar':
                racialCompletionistArray.push('Aasimar');
                switch (aasimarReinc) {
                    case 0:
                        aasimarReinc += 1;
                        calculatedPastLivesBonuses.bonusHeal += 1;
                        break;
                    case 1:
                        aasimarReinc += 1;
                        calculatedPastLivesBonuses.bonusWisdom += 1;
                        break;
                    case 2:
                        aasimarReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Aasimar');
                }
                break;
            case 'Drow':
                racialCompletionistArray.push('Drow');
                switch (drowReinc) {
                    case 0:
                        drowReinc += 1;
                        calculatedPastLivesBonuses.bonusSearch += 1;
                        break;
                    case 1:
                        drowReinc += 1;
                        calculatedPastLivesBonuses.bonusIntelligence += 1;
                        break;
                    case 2:
                        drowReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Drow');
                }
                break;
            case 'Gnome':
                racialCompletionistArray.push('Gnome');
                switch (gnomeReinc) {
                    case 0:
                        gnomeReinc += 1;
                        calculatedPastLivesBonuses.bonusUmd += 1;
                        break;
                    case 1:
                        gnomeReinc += 1;
                        calculatedPastLivesBonuses.bonusIntelligence += 1;
                        break;
                    case 2:
                        gnomeReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Gnome');
                }
                break;
            case 'Half-Elf':
                racialCompletionistArray.push('Half-Elf');
                switch (halfelfReinc) {
                    case 0:
                        halfelfReinc += 1;
                        calculatedPastLivesBonuses.bonusDiplomacy += 1;
                        break;
                    case 1:
                        halfelfReinc += 1;
                        calculatedPastLivesBonuses.bonusCharisma += 1;
                        break;
                    case 2:
                        halfelfReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Half-Elf');
                }
                break;
            case 'Half-Orc':
                racialCompletionistArray.push('Half-Orc');
                switch (halforcReinc) {
                    case 0:
                        halforcReinc += 1;
                        calculatedPastLivesBonuses.bonusIntimidate += 1;
                        break;
                    case 1:
                        halforcReinc += 1;
                        calculatedPastLivesBonuses.bonusStrength += 1;
                        break;
                    case 2:
                        halforcReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Half-Orc');
                }
                break;
            case 'Shifter':
                racialCompletionistArray.push('Shifter');
                switch (shifterReinc) {
                    case 0:
                        shifterReinc += 1;
                        calculatedPastLivesBonuses.bonusSpot += 1;
                        break;
                    case 1:
                        shifterReinc += 1;
                        calculatedPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        shifterReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Shifter');
                }
                break;
            case 'Tiefling':
                racialCompletionistArray.push('Tiefling');
                switch (tieflingReinc) {
                    case 0:
                        tieflingReinc += 1;
                        calculatedPastLivesBonuses.bonusSpellcraft += 1;
                        break;
                    case 1:
                        tieflingReinc += 1;
                        calculatedPastLivesBonuses.bonusCharisma += 1;
                        break;
                    case 2:
                        tieflingReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Tiefling');
                }
                break;
            case 'Warforged':
                racialCompletionistArray.push('Warforged');
                switch (warforgedReinc) {
                    case 0:
                        warforgedReinc += 1;
                        calculatedPastLivesBonuses.bonusRepair += 1;
                        break;
                    case 1:
                        warforgedReinc += 1;
                        calculatedPastLivesBonuses.bonusConstitution += 1;
                        break;
                    case 2:
                        warforgedReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Warforged');
                }
                break;
            case 'Tabaxi':
                racialCompletionistArray.push('Tabaxi');
                switch (tabaxiReinc) {
                    case 0:
                        tabaxiReinc += 1;
                        calculatedPastLivesBonuses.bonusTumble += 1;
                        break;
                    case 1:
                        tabaxiReinc += 1;
                        calculatedPastLivesBonuses.bonusDexterity += 1;
                        break;
                    case 2:
                        tabaxiReinc += 1;
                        calculatedPastLivesBonuses.bonusRacialActionPoint += 1;
                        break;
                    default:
                        numberOfReincarnationError('Tabaxi');
                }
                break;
            case 'Aasimar Scourge':
                calculatedPastLivesBonuses.bonusFortitudeSave += 1;
                break;
            case 'Bladeforged':
                calculatedPastLivesBonuses.bonusFortification += 5;
                break;
            case 'Deep Gnome':
                calculatedPastLivesBonuses.bonusMrr += 3;
                break;
            case 'Purple Dragon Knight':
                calculatedPastLivesBonuses.bonusPrr += 3;
                break;
            case 'Razorclaw Shifter':
                calculatedPastLivesBonuses.bonusWillSave += 1;
                break;
            case 'Tiefling Scoundrel':
                calculatedPastLivesBonuses.bonusReflexSave += 1;
                break;
            case 'Shadar-Kai':
                calculatedPastLivesBonuses.bonusDodge += 1;
                break;
            case 'Morninglord':
                calculatedPastLivesBonuses.bonusPositiveSpellPower += 3;
                break;
            case 'Tabaxi Trailblazer':
                calculatedPastLivesBonuses.bonusSavedTrap += 1;
                break;
            case 'Energy Criticals':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case 'Enchant Weapon':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case 'Arcane Alacrity':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case 'Ancient Knowledge':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case 'Eclipse Power':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusElementAbsorption += 1;
                break;
            case 'Power Over Life and Death':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusPrr += 3;
                break;
            case 'Brace':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusPrr += 3;
                break;
            case 'Block Energy':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusPrr += 3;
                break;
            case 'Ancient Blessing':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusPrr += 3;
                break;
            case 'Doublestrike':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusAcFlat += 2;
                calculatedPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case 'Skill Mastery':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusAcFlat += 2;
                calculatedPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case 'Fortification':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusAcFlat += 2;
                calculatedPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case 'Ancient Tactics':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusAcFlat += 2;
                calculatedPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case 'Trap Damage Absorption':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusAcFlat += 2;
                calculatedPastLivesBonuses.bonusAcPerTen += 1;
                break;
            case 'Doubleshot':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusHitPoints += 3;
                calculatedPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            case 'Fast Healing':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusHitPoints += 3;
                calculatedPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            case 'Colors of the Queen':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusHitPoints += 3;
                calculatedPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            case 'Ancient Power':
                epicReinc += 1;
                calculatedPastLivesBonuses.bonusHitPoints += 3;
                calculatedPastLivesBonuses.bonusHpEpicPerTen += 4;
                break;
            default:
                console.log('error: Past Life not found in the switch for feats calculation' + pastLife);
        }
    };
    calculateEpicCompletionist(epicReinc);
    calculateHeroicCompletionist(heroicCompletionistArray);
    calculateRacialCompletionist(racialCompletionistArray);
}

function calculateEpicCompletionist(epicReinc) {
    // for every 12 of any epic past lives
    let bonusDestinyPoint = Math.floor(epicReinc/12)
    calculatedPastLivesBonuses.bonusDestinyPoint += bonusDestinyPoint;
}

function calculateHeroicCompletionist(heroicCompletionistArray) {
    // one of each classes
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const heroicCompletionistArrayUnique = heroicCompletionistArray.filter(unique);
    if (heroicCompletionistArrayUnique.length >= numberOfHeroicClassesInDDO) {
        calculatedPastLivesBonuses.bonusStrength += 2;
        calculatedPastLivesBonuses.bonusDexterity += 2;
        calculatedPastLivesBonuses.bonusConstitution += 2;
        calculatedPastLivesBonuses.bonusIntelligence += 2;
        calculatedPastLivesBonuses.bonusWisdom += 2;
        calculatedPastLivesBonuses.bonusCharisma += 2;
        calculatedPastLivesBonuses.bonusAllSkills += 2;
    }
}

function calculateRacialCompletionist(racialCompletionistArray) {
    // three of each races
    if (racialCompletionistArray.length >= numberOfRacesInDDO * 3) {
        calculatedPastLivesBonuses.bonusStrength += 2;
        calculatedPastLivesBonuses.bonusDexterity += 2;
        calculatedPastLivesBonuses.bonusConstitution += 2;
        calculatedPastLivesBonuses.bonusIntelligence += 2;
        calculatedPastLivesBonuses.bonusWisdom += 2;
        calculatedPastLivesBonuses.bonusCharisma += 2;
        calculatedPastLivesBonuses.bonusAllSkills += 2;
    }
}

// generate select boxes when the page load
function generateSelectBoxes(minIndex, maxIndex, idOfColumn) {
    for (let index = minIndex; index <= maxIndex; index++) {
        // <label class='col-sm-5 col-form-label' for='reincarnation001'>1st reincarnation</label>
        var label = document.createElement('label');
        label.textContent = 'Past Life Feat ' + index;
        label.className = 'col-sm-5 col-form-label';
        label.htmlFor = 'pastLive' + index;
        document.getElementById(idOfColumn).appendChild(label);

        /*
            <div class='col-sm-6'>
                <select class='form-select form-select-sm reincarnationSelect'
                    aria-label='.form-select-sm example' id='reincarnation001'
                    name='reincarnation001'>
                    <option value='defaultClassOption' disabled selected value>-
                    </option>
                </select>
            </div>
        */

        // div
        var div = document.createElement('div');
        div.className = 'col-sm-7';

        // select
        var select = document.createElement('select');
        select.className = 'form-select form-select-sm reincarnationSelect';
        select.id = 'reincarnation' + index;
        select.name = 'reincarnation' + index;

        // option
        var option = document.createElement('option');
        option.value = 'defaultClassOption';
        option.innerText = '-'

        select.append(option);
        div.appendChild(select);
        document.getElementById(idOfColumn).appendChild(div);
    }
}

// add past lifes to all generated select boxes
function createReincarnationOptions() {
    // iterate over all selects
    reincarnationOptions.forEach(function (reincarnationOptionId) {
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
    reincarnationOptions.forEach(function (reincarnationOptionId) {
        let option = document.getElementById(reincarnationOptionId);
        option.addEventListener('change', () => {
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
    for (const selection of selectionsArray) {
        reincarnationOptions.push(selection.id);
    };
}

// add numbers in dropdown 'Number of Past Life Feats'
function addOptionsForNumberOfReincarnationsSelect() {
    let numberOfReincarnationsSelect = document.getElementById('numberOfReincarnationsSelect');
    for (let i = 1; i <= maxNumberOfReincarnations; i++) {
        numberOfReincarnationsSelect.options[numberOfReincarnationsSelect.options.length] = new Option(i, i);
    };
    numberOfReincarnationsSelect.value = maxNumberOfReincarnations;
    numberOfReincarnations = maxNumberOfReincarnations;
}

// save the number of reincarnations chosen by the user for passive feats calculation
function saveNumberOfReincarnations() {
    numberOfReincarnations = document.getElementById('numberOfReincarnationsSelect').value;
}

// save reincarnated classes in array
function saveReincarnatedClasses() {
    reincarnatedClassesArray = [];
    let selectionsArray = document.getElementsByClassName('reincarnationSelect');
    for (const selection of selectionsArray) {
        let nameOfClass = selection.selectedOptions[0].label;
        reincarnatedClassesArray.push(nameOfClass);
    };
}

// print calculations for feats of all chosen reincarnations
function printFeatsCalculation() {
    let listOfCalculatedPassiveFeats = document.getElementById('passiveFeatsCalculation');
    listOfCalculatedPassiveFeats.innerHTML = '';

    for (const property in calculatedPastLivesBonuses) {
        if (calculatedPastLivesBonuses[property] != 0) {
            const itemOfCalculatedPassiveFeats = document.createElement('li');

            const boldNumber = document.createElement('span');
            boldNumber.setAttribute('id', 'boldNumber');
            const textNode = document.createTextNode(calculatedPastLivesBonuses[property]);
            boldNumber.appendChild(textNode)

            itemOfCalculatedPassiveFeats.appendChild(document.createTextNode('+ '));
            itemOfCalculatedPassiveFeats.appendChild(boldNumber);
            itemOfCalculatedPassiveFeats.appendChild(document.createTextNode(' ' + textForPastLivePassiveBonus[property]));
            listOfCalculatedPassiveFeats.appendChild(itemOfCalculatedPassiveFeats);
        }
    }
}

function checkMaximumNumberOfReincarnationsForOneClass() {
    let counts = {}
    for (const pastLife of reincarnatedClassesArray) {
        if (counts[pastLife]) {
            counts[pastLife] += 1
        } else {
            counts[pastLife] = 1
        }
    }
    for (let prop in counts) {
        // disable all options that should be disabled
        if (counts[prop] >= 3 && prop != '-') {
            // iterate over all selects
            for (const reincarnationOption of reincarnationOptions) {
                // iterate over options of given select
                for (let o = 0; o < document.getElementById(reincarnationOption).options.length; o++) {
                    if (document.getElementById(reincarnationOption).options[o].label === prop) {
                        document.getElementById(reincarnationOption).options[o].disabled = true;
                    }
                }
            }
        // enable all options that should be enabled
        } else {
            // iterate over all selects
            for (const reincarnationOption of reincarnationOptions) {
                // iterate over options of given select
                for (let o = 0; o < document.getElementById(reincarnationOption).options.length; o++) {
                    if (document.getElementById(reincarnationOption).options[o].label === prop) {
                        document.getElementById(reincarnationOption).options[o].disabled = false;
                    }
                }
            }
        }
    }
}

function changeSelectColorForDefaultValue() {
    let selectionsArray = document.getElementsByClassName('reincarnationSelect');
    for (const selection of selectionsArray) {
        let nameOfClass = selection.selectedOptions[0].label;
        if (nameOfClass === '-') {
            selection.style.backgroundColor = '#f7e98e';
        } else {
            selection.style.backgroundColor = 'white';
        }
    };
}

function enableAllOptions() {
    for (const reincarnationOption of reincarnationOptions) {
        for (let o = 0; o < document.getElementById(reincarnationOption).options.length; o++) {
            document.getElementById(reincarnationOption).options[o].disabled = false;
        }
    }
}

function numberOfReincarnationError(race) {
    console.log('error: number of ' + race + ' reincarnation is  not 1, 2 or 3');
}

generateSelectBoxes(1, 47, 'columnFormOne');
generateSelectBoxes(48, 94, 'columnFormTwo');
generateSelectBoxes(95, 140, 'columnFormThree');
generateSelectBoxes(141, 186, 'columnFormFour');
addOptionsForNumberOfReincarnationsSelect();
saveReincarnationOptionsIds();
createEventListenerForNumberofReincarnationsSelect();
createEventListenerForReincarnationOptions();
changeSelectColorForDefaultValue();
createReincarnationOptions();