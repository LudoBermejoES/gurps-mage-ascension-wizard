import { SPELLS } from '../util/setup/constants';
import { deleteObject, getControlledToken, getMargin, getObjectSpell } from '../util/auxiliar';
import {
  addKineticDodgeFilter,
  addMentalShieldFilter,
  addPhysicalShieldFilter,
  addSpeedFilter,
  removeFiltersOnSelected,
} from './visualFilters';

async function addSpeed() {
  const margin = getMargin();
  if (!margin) return;
  const value = Math.trunc((margin === 0 ? 1 : margin) / 5 + 1);

  const myToken: Token | undefined = getControlledToken();
  if (!myToken) return;

  ui?.notifications?.info(`Añado una aceleración con margen de ${margin} (${value})`);

  await removeSpeed();

  const changes = getObjectSpell(SPELLS.SPEED);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGESPEED', value * 5);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGEDODGE', value);

  (myToken.actor as any).addNewItemData(changes);
  addSpeedFilter();
}

async function removeSpeed() {
  await deleteObject(SPELLS.SPEED);
  await removeFiltersOnSelected();
}

async function addPhysicalShield() {
  const margin = getMargin();
  if (!margin) return;
  const value = Math.trunc((margin + 1) * 1.5);

  const myToken: Token | undefined = getControlledToken();
  if (!myToken) return;
  ('');
  ui?.notifications?.info('Añadido un escudo con un margen de ' + margin);

  await removePhysicalShield();
  const changes = getObjectSpell(SPELLS.PHYSICAL_SHIELD);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGE', value);
  (myToken.actor as any).addNewItemData(changes);
  addPhysicalShieldFilter();
}

async function removePhysicalShield() {
  await deleteObject(SPELLS.PHYSICAL_SHIELD);
  await removeFiltersOnSelected();
}

async function addMentalShield() {
  const margin = getMargin();
  if (!margin) return;
  const value = Math.trunc((margin + 1) * 1.5);

  const myToken: Token | undefined = getControlledToken();
  if (!myToken) return;
  ('');
  ui?.notifications?.info('Añadido un escudo con un margen de ' + margin);

  await removePhysicalShield();
  const changes = getObjectSpell(SPELLS.MENTAL_SHIELD);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGE', value);
  (myToken.actor as any).addNewItemData(changes);
  addMentalShieldFilter();
}

async function removeMentalShield() {
  await deleteObject(SPELLS.MENTAL_SHIELD);
  await removeFiltersOnSelected();
}

function calculateDamage() {
  const margin = getMargin();
  if (!margin) return;
  const damageType = $('input[name="woundmodifier"]:checked').val();
  const baseDamage = Math.ceil(margin / 2);
  const sum1 = margin % 2 ? 1 : 0;
  const totalDamage = `${baseDamage}d+${sum1}`;

  const messages = [
    `Normal [/${totalDamage} ${damageType} Daño normal]`,
    `Fuerzas [/${baseDamage + 1}d+${sum1} ${damageType} Daño con fuerzas]`,
    `Vulgar [/${baseDamage + 1}d+${sum1} ${damageType} Daño con magia vulgar] `,
    `Una esfera superior [/${baseDamage + 1}d+${sum1} ${damageType} Daño con una esfera por encima] `,
    `Dos esferas superior [/${baseDamage + 2}d+${sum1} ${damageType} Daño con dos esferas por encima]`,
  ];

  const token = getControlledToken();
  if (!token?.actor) return;
  ChatMessage.create(
    {
      user: game?.user?.id,
      content: messages.join('<br/>'),
      visible: false,
    },
    {},
  );
}

async function calculateDamageFromSpell() {
  const myContent = `<div name="wounding-modifiers" class="default-wound-modifiers">
		<div class="gurps-3col gurps-radio-col">
		  <header>Damage Type</header>
		  <header>Abbrev</header>
		  <header>Modifier</header>

			<div><label><input type="radio" name="woundmodifier" value="burn">&nbsp;Burning</label>
			</div>
			<div>
			  burn
			</div>
			<div name="burn">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" value="cor">&nbsp;Corrosive</label>
			</div>
			<div>
			  cor
			</div>
			<div name="cor">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" value="cr">&nbsp;Crushing</label>
			</div>
			<div>
			  cr
			</div>
			<div name="cr">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" checked="" value="cut">&nbsp;Cutting</label>
			</div>
			<div>
			  cut
			</div>
			<div name="cut">×1.5
			</div>
			<div><label><input type="radio" name="woundmodifier" value="fat">&nbsp;Fatigue</label>
			</div>
			<div>
			  fat
			</div>
			<div name="fat">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" value="imp">&nbsp;Impaling</label>
			</div>
			<div>
			  imp
			</div>
			<div name="imp">×2
			</div>
			<div><label><input type="radio" name="woundmodifier" value="pi-">&nbsp;Small Piercing</label>
			</div>
			<div>
			  pi-
			</div>
			<div name="pi-">×0.5
			</div>
			<div><label><input type="radio" name="woundmodifier" value="pi">&nbsp;Piercing</label>
			</div>
			<div>
			  pi
			</div>
			<div name="pi">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" value="pi+">&nbsp;Large Piercing</label>
			</div>
			<div>
			  pi+
			</div>
			<div name="pi+">×1.5
			</div>
			<div><label><input type="radio" name="woundmodifier" value="pi++">&nbsp;Huge Piercing</label>
			</div>
			<div>
			  pi++
			</div>
			<div name="pi++">×2
			</div>
			<div><label><input type="radio" name="woundmodifier" value="tox">&nbsp;Toxic</label>
			</div>
			<div>
			  tox
			</div>
			<div name="tox">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" value="dmg">&nbsp;Damage</label>
			</div>
			<div>
			  dmg
			</div>
			<div name="dmg">×1
			</div>
			<div><label><input type="radio" name="woundmodifier" value="ctrl">&nbsp;Control Points</label>
			</div>
			<div>
			  ctrl
			</div>
			<div name="ctrl">×1
			</div>
		</div>
	  </div>`;

  new Dialog({
    title: 'My Dialog Title',
    content: myContent,
    buttons: {
      button1: {
        label: 'OK',
        callback: () => calculateDamage(),
        icon: `<i class="fas fa-check"></i>`,
      },
      button2: {
        label: 'Cancel',
        icon: `<i class="fas fa-times"></i>`,
      },
    },
  }).render(true);
}

async function addKineticDodge() {
  const margin = getMargin();
  if (!margin) return;
  const value = Math.ceil((margin === 0 ? 1 : margin) / 1.5);

  const myToken: Token | undefined = getControlledToken();
  if (!myToken) return;
  ('');
  ui?.notifications?.info('Añado una esquiva escudo con un margen de ' + margin);

  await removeKineticDodge();
  const changes = getObjectSpell(SPELLS.KINETIC_DODGE);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGE', value);
  (myToken.actor as any).addNewItemData(changes);
  addKineticDodgeFilter();
}

async function removeKineticDodge() {
  await deleteObject(SPELLS.KINETIC_DODGE);
  await removeFiltersOnSelected();
}

export default function registerSpells() {
  window.GurpsMageAscensionWizard.spellFunctions = {
    addSpeed,
    removeSpeed,
    addPhysicalShield,
    removePhysicalShield,
    addMentalShield,
    removeMentalShield,
    calculateDamageFromSpell,
    addKineticDodge,
    removeKineticDodge,
  };
}

function calculateHealingFromSpell() {
  const margin = getMargin();
  if (!margin) return;
  const numberOfDice = Math.floor(margin / 3);

  const myToken: Token | undefined = getControlledToken();
  if (!myToken) return;

  const healing = `[/hp +${numberOfDice}d Healing]`;
  ChatMessage.create(
    {
      user: game?.user?.id,
      content: healing,
      visible: false,
    },
    {},
  );
}

export function getSpells() {
  return {
    addSpeed,
    removeSpeed,
    addPhysicalShield,
    removePhysicalShield,
    addMentalShield,
    removeMentalShield,
    calculateDamageFromSpell,
    addKineticDodge,
    removeKineticDodge,
    calculateHealingFromSpell,
  };
}
