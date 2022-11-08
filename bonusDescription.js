'use strict';

function textForPastLivePassiveBonus(pastLivePassiveBonus) {
    let text;
    switch (pastLivePassiveBonus) {
        case 'bonusDcTrasmutation':
            text = 'bonus to DC\'s of your Transmutation spells';
            break;
        case 'maximumSpellPoint':
            text = 'bonus to maximum spell points (SP)'
            break;
        case 'bonusIntelligenceSkills':
            text = 'bonus to all intelligence based skills'
            break;
        case 'bonusUmd':
            text = 'bonus to Use Magic Device Skill'
            break;
        case 'bonusHitPoints':
            text = 'bonus to total hit points (HP)'
            break;
        case 'bonusSavesEnchIll':
            text = 'bonus to saves vs. enchantments and illusions'
            break;
        case 'bonusBardSongUsage':
            text = 'bard song usage'
            break;
        case 'bonusDcConjuration':
            text = 'bonus to DC\'s of your Conjuration spells'
            break;
        case 'turnUndeadAttempt':
            text = 'Turn Undead attempt'
            break;
        case 'turnUndeadHigher':
            text = 'you Turn Undead as if you were for that many levels higher'
            break;
        case 'bonusSummon':
            text = 'your summoned creatures, charmed minions, and hirelings gain to all ability scores bonus'
            break;
        case 'bonusSpellPen':
            text = 'bonus to spell penetration'
            break;
        case 'bonusAttackRoll':
            text = 'bonus to attack rolls'
            break;
        case 'bonusDcTactical':
            text = 'bonus to DC\'s of your tactical feats'
            break;
        case 'bonusDamageRolls':
            text = 'bonus to damage rolls'
            break;
        case 'bonusPositiveHealAmp':
            text = 'bonus to positive healing amplification'
            break;
        case 'bonusDmgRanged':
            text = 'bonus to damage with ranged weapons (not thrown)'
            break;
        case 'elementResistance':
            text = 'bonus to elemental resistances'
            break;
        case 'bonusSavedTrap':
            text = 'bonus to saves vs. traps'
            break;
        case 'bonusDmgSneak':
            text = 'bonus to damage when sneaking'
            break;
        case 'bonusDcEvocation':
            text = 'bonus to DC\'s of your Evocations spells'
            break;
        case 'bonusMrr':
            text = 'bonus to magical resistance rating (MRR)'
            break;
        case 'bonusDcWands':
            text = 'bonus to DC\'s of your wands'
            break;
        case 'bonusHaggle':
            text = 'bonus to Haggle'
            break;
        case 'bonusBalance':
            text = 'bonus to Balance'
            break;
        case 'bonusMoveSilently':
            text = 'bonus to Move Silently'
            break;
        case 'bonusSpot':
            text = 'bonus to Spot'
            break;
        case 'bonusSpellcraft':
            text = 'bonus to Spellcraft'
            break;
        case 'bonusHeal':
            text = 'bonus to Heal'
            break;
        case 'bonusSearch':
            text = 'bonus to Search'
            break;
        case 'bonusDiplomacy':
            text = 'bonus to Diplomacy'
            break;
        case 'bonusIntimidate':
            text = 'bonus to Intimidate'
            break;
        case 'bonusTumble':
            text = 'bonus to Tumble'
            break;
        case 'bonusCharisma':
            text = 'bonus to Charisma'
            break;
        case 'bonusIntelligence':
            text = 'bonus to Intelligence'
            break;
        case 'bonusWisdom':
            text = 'bonus to Wisdom'
            break;
        case 'bonusConstitution':
            text = 'bonus to Constitution'
            break;
        case 'bonusDexterity':
            text = 'bonus to Dexterity'
            break;
        case 'bonusStrength':
            text = 'bonus to Strength'
            break;
        case 'bonusRacialActionPoint':
            text = 'bonus points to Racial Enhancement Tree'
            break;
        case 'bonusFortitudeSave':
            text = 'bonus to fortitude save'
            break;
        case 'bonusFortification':
            text = 'percentage bonus to fortification'
            break;
        case 'bonusPrr':
            text = 'bonus to physical resistance rating (PRR)'
            break;
        case 'bonusWillSave':
            text = 'bonus to will save'
            break;
        case 'bonusReflexSave':
            text = 'bonus points to reflex save'
            break;
        case 'bonusDodge':
            text = 'percentage bonus to dodge'
            break;
        case 'bonusPositiveSpellPower':
            text = 'bonus to positive spell power'
            break;
        case 'bonusElementAbsorption':
            text = 'percentage bonus to Absorption of Acid, Cold, Electric, and Fire damage'
            break;
        case 'bonusAcFlat':
            text = 'bonus to AC'
            break;
        case 'bonusAcPerTen':
            text = 'bonus to AC per 10 character levels'
            break;
        case 'bonusHpEpicPerTen':
            text = 'bonus to HP per 10 character levels'
            break;
        case 'bonusRepair':
            text = 'bonus to Repair'
            break;
        case 'bonusNegativeHealAmp':
            text = 'bonus to negative healing amplification'
            break;
        case 'bonusNegativeSpellPower':
            text = 'bonus to negative spell power'
            break;
        case 'bonusLightningSpellPower':
            text = 'bonus to lightning spell power'
            break;
        case 'bonusSonicSpellPower':
            text = 'bonus to sonic spell power'
            break;
        case 'bonusDestinyPoint':
            text = 'bonus destiny points'
            break;
        case 'bonusAllSkills':
            text = 'bonus to all skills'
            break;
        default:
            text = 'error (text for feat not found) '
    }
    return text;
}