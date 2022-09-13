const MODULE_NAME$1 = 'gurps-mage-ascension-wizard';
const functionsToRegister = {
  nothing,
};
function nothing() {
  console.log('Do nothing');
}
function registerFunctions() {
  console.log('REGISTRO LAS OPCIONES');
  GurpsMageAscensionWizard.socket = socketlib.registerModule(MODULE_NAME$1);
  for (const [alias, func] of Object.entries(functionsToRegister)) {
    console.log(alias, func);
    GurpsMageAscensionWizard.socket.register(alias, func);
  }
}

const MODULE_NAME = 'gurps-mage-ascension-wizard';
const SPELLS = {
  SPEED: 'Aceleración',
  PHYSICAL_SHIELD: 'Escudo físico',
  MENTAL_SHIELD: 'Escudo Mental',
  KINETIC_DODGE: 'Esquiva kinética',
};

const NUMBER_OF_SPHERES = [
  {
    value: 1,
    mod: 0,
    desc: 'Una esfera',
  },
  {
    value: 2,
    mod: -1,
    desc: 'Dos esferas',
  },
  {
    value: 3,
    mod: -2,
    desc: 'Tres esferas',
  },
  {
    value: 4,
    mod: -3,
    desc: 'Cuatro esferas',
  },
  {
    value: 5,
    mod: -4,
    desc: 'Cinco esferas',
  },
];
const HIGHEST_SPHERE = [
  {
    value: 1,
    mod: -1,
    desc: 'Nivel 1',
  },
  {
    value: 2,
    mod: -2,
    desc: 'Nivel 2',
  },
  {
    value: 3,
    mod: -3,
    desc: 'Nivel 3',
  },
  {
    value: 4,
    mod: -4,
    desc: 'Nivel 4',
  },
  {
    value: 5,
    mod: -5,
    desc: 'Nivel 5',
  },
];
const NUMBER_OF_TARGETS = [
  {
    valueMin: 1,
    valueMax: 1,
    mod: 0,
    desc: 'Un objetivo',
  },
  {
    valueMin: 2,
    valueMax: 3,
    mod: -2,
    desc: 'Grupo de entre dos y tres objetivos',
  },
  {
    valueMin: 4,
    valueMax: 5,
    mod: -4,
    desc: 'Grupo de entre cuatro o cinco objetivos',
  },
  {
    valueMin: 6,
    valueMax: 7,
    mod: -6,
    desc: 'Grupo de entre seis y siete objetivos',
  },
  {
    valueMin: 8,
    valueMax: 10,
    mod: -8,
    desc: 'Grupo de entre ocho y diez objetivos',
  },
  {
    valueMin: 11,
    valueMax: 15,
    mod: -10,
    desc: 'Grupo de entre diez y quince objetivos',
  },
  {
    valueMin: 16,
    valueMax: 20,
    mod: -12,
    desc: 'Grupo de entre quince y veinte objetivos',
  },
  {
    valueMin: 21,
    valueMax: 30,
    mod: -14,
    desc: 'Grupo de entre veinte y treinta objetivos',
  },
  {
    valueMin: 31,
    valueMax: 50,
    mod: -14,
    desc: 'Grupo de entre treinta y cincuenta objetivos',
  },
];
const DURATION = [
  {
    value: 0,
    mod: 0,
    desc: 'Instantáneo',
  },
  {
    value: 10,
    mod: -1,
    desc: 'Diez segundos',
  },
  {
    value: 60,
    mod: -2,
    desc: 'Un minuto',
  },
  {
    value: 600,
    mod: -4,
    desc: 'Diez minutos',
  },
  {
    value: 1800,
    mod: -5,
    desc: 'Treinta minutos',
  },
  {
    value: 6000,
    mod: -6,
    desc: 'Una hora',
  },
  {
    value: 18000,
    mod: -7,
    desc: 'Tres horas',
  },
  {
    value: 32000,
    mod: -8,
    desc: 'Seis horas',
  },
  {
    value: 64000,
    mod: -9,
    desc: 'Doce horas',
  },
  {
    value: 128000,
    mod: -10,
    desc: 'Un día',
  },
];
const DISTANCE = [
  {
    valueMin: 1,
    valueMax: 1,
    mod: 0,
    desc: 'Una casilla o menos',
  },
  {
    valueMin: 2,
    valueMax: 2,
    mod: -1,
    desc: 'Hasta dos casillas',
  },
  {
    valueMin: 3,
    valueMax: 5,
    mod: -2,
    desc: 'Hasta cinco casillas',
  },
  {
    valueMin: 6,
    valueMax: 8,
    mod: -3,
    desc: 'Hasta ocho casillas',
  },
  {
    valueMin: 9,
    valueMax: 11,
    mod: -4,
    desc: 'Hasta once casillas',
  },
  {
    valueMin: 12,
    valueMax: 15,
    mod: -5,
    desc: 'Hasta quince casillas',
  },
  {
    valueMin: 16,
    valueMax: 20,
    mod: -6,
    desc: 'Hasta veinte casillas',
  },
  {
    valueMin: 21,
    valueMax: 25,
    mod: -7,
    desc: 'Hasta veinticinco casillas',
  },
  {
    valueMin: 26,
    valueMax: 30,
    mod: -8,
    desc: 'Hasta treinta casillas',
  },
];
const AREA = [
  {
    valueMin: 1,
    valueMax: 1,
    mod: 0,
    desc: 'Una casilla o menos',
  },
  {
    valueMin: 2,
    valueMax: 2,
    mod: -1,
    desc: 'Hasta dos casillas',
  },
  {
    valueMin: 3,
    valueMax: 4,
    mod: -2,
    desc: 'Hasta cuatro casillas',
  },
  {
    valueMin: 5,
    valueMax: 6,
    mod: -3,
    desc: 'Hasta seis casillas',
  },
  {
    valueMin: 7,
    valueMax: 8,
    mod: -4,
    desc: 'Hasta ocho casillas',
  },
  {
    valueMin: 9,
    valueMax: 10,
    mod: -5,
    desc: 'Hasta diez casillas',
  },
  {
    valueMin: 11,
    valueMax: 12,
    mod: -6,
    desc: 'Hasta doce casillas',
  },
  {
    valueMin: 13,
    valueMax: 14,
    mod: -7,
    desc: 'Hasta catorce casillas',
  },
  {
    valueMin: 15,
    valueMax: 16,
    mod: -8,
    desc: 'Hasta dieciséis casillas',
  },
  {
    valueMin: 17,
    valueMax: 18,
    mod: -9,
    desc: 'Hasta dieciocho casillas',
  },
  {
    valueMin: 19,
    valueMax: 20,
    mod: -10,
    desc: 'Hasta veinte casillas',
  },
];
const WEIGHT = [
  {
    valueMin: 0,
    valueMax: 5,
    mod: 0,
    desc: 'Hast cinco kilos',
  },
  {
    valueMin: 6,
    valueMax: 10,
    mod: -1,
    desc: 'Hasta diez kilos',
  },
  {
    valueMin: 11,
    valueMax: 50,
    mod: -3,
    desc: 'Hasta cincuenta kilos',
  },
  {
    valueMin: 51,
    valueMax: 100,
    mod: -4,
    desc: 'Hasta cien kilos',
  },
  {
    valueMin: 101,
    valueMax: 250,
    mod: -5,
    desc: 'Hasta doscientos cincuenta kilos',
  },
  {
    valueMin: 251,
    valueMax: 500,
    mod: -6,
    desc: 'Hasta media tonelada',
  },
  {
    valueMin: 501,
    valueMax: 1000,
    mod: -7,
    desc: 'Hasta una tonelada',
  },
  {
    valueMin: 10001,
    valueMax: 2000,
    mod: -8,
    desc: 'Hasta dos toneladas',
  },
  {
    valueMin: 2001,
    valueMax: 3500,
    mod: -9,
    desc: 'Hasta tres toneladas y media',
  },
  {
    valueMin: 3501,
    valueMax: 5000,
    mod: -10,
    desc: 'Hasta cinco toneladas',
  },
];
const DISTANCE_WITH_CORRESPONDENCE = [
  {
    valueMax: 100,
    mod: 0,
    desc: 'Hasta cien metros',
  },
  {
    valueMax: 500,
    mod: -1,
    desc: 'Hasta quinientos',
  },
  {
    valueMax: 1000,
    mod: -3,
    desc: 'Hasta un kilómetro',
  },
  {
    value: 5000,
    mod: -4,
    desc: 'Hasta cinco kilómetros',
  },
  {
    value: 25000,
    mod: -5,
    desc: 'Hasta veinticinco kilómetros',
  },
  {
    value: 100000,
    mod: -6,
    desc: 'Hasta cien kilómetros',
  },
  {
    value: 500000,
    mod: -7,
    desc: 'Hasta quinientos kilómetros',
  },
  {
    value: 1000000,
    mod: -8,
    desc: 'Hasta mil kilómetros',
  },
  {
    value: 5000000,
    mod: -9,
    desc: 'Hasta cinco mil kilómetros',
  },
  {
    value: 10000000,
    mod: -10,
    desc: 'Hasta diez mil kilómetros',
  },
];
const TIME_WITH_TIME = [
  {
    valueMax: 1,
    mod: 0,
    desc: 'Hasta un día',
  },
  {
    valueMax: 7,
    mod: -1,
    desc: 'Hasta una semana',
  },
  {
    valueMax: 31,
    mod: -2,
    desc: 'Hasta un mes',
  },
  {
    value: 365,
    mod: -4,
    desc: 'Hasta un año',
  },
  {
    value: 365 * 5,
    mod: -5,
    desc: 'Hasta cinco años',
  },
  {
    value: 365 * 15,
    mod: -6,
    desc: 'Hasta quince años',
  },
  {
    value: 365 * 50,
    mod: -7,
    desc: 'Hasta cincuenta años',
  },
  {
    value: 365 * 100,
    mod: -8,
    desc: 'Hasta cien años',
  },
  {
    value: 365 * 250,
    mod: -9,
    desc: 'Hasta doscientos años',
  },
  {
    value: 365 * 500,
    mod: -10,
    desc: 'Hasta quinientos',
  },
];
var CONTENT = {
  NUMBER_OF_SPHERES,
  HIGHEST_SPHERE,
  NUMBER_OF_TARGETS,
  DURATION,
  DISTANCE,
  AREA,
  WEIGHT,
  DISTANCE_WITH_CORRESPONDENCE,
  TIME_WITH_TIME,
};

function getPriority(user, actor) {
  let priority = 0;
  if (user.character === actor) priority += 100;
  if (actor.testUserPermission(user, 'OWNER')) priority += 10;
  if (user.isGM) priority -= 1;
  if (!user.active) priority -= 1000;
  return priority;
}
function highestPriorityUsers(actor) {
  if (!game?.users) return [];
  const priorities = new Map(game.users.map((user) => [user, getPriority(user, actor)]));
  const maxPriority = Math.max(...priorities.values());
  return game.users.filter((user) => priorities.get(user) === maxPriority);
}
function getControlledToken() {
  const controlled = game?.canvas?.tokens?.controlled;
  if (controlled && controlled.length === 1) {
    const token = controlled[0];
    return token;
  }
  return undefined;
}
function getTargetsFromToken(token) {
  if (!token?.actor) return undefined;
  const user = highestPriorityUsers(token.actor)[0] || undefined;
  return user?.targets;
}
function getSelectedTokenTargets() {
  const controlledToken = getControlledToken();
  if (controlledToken) {
    return getTargetsFromToken(controlledToken);
  }
  return undefined;
}
function getObjectSpell(name) {
  const item = game?.items?.getName(name);
  if (!item) return;
  const changes = item.toObject();
  changes._id = makeid(16);
  changes.data.globalid = `item.${changes._id}`;
  return changes;
}
function getToken() {
  return game?.canvas?.tokens?.controlled[0];
}
function getMargin() {
  const margin = GURPS?.lastTargetedRoll?.margin || undefined;
  if (!margin) return undefined;
  return margin;
}
function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function deleteObject(objectName) {
  const myToken = getToken();
  if (!myToken) return;
  const actor = myToken?.actor;
  if (!actor) return;
  const equipment = actor?.data?.data?.equipment?.carried || {};
  Object.keys(equipment).forEach((key) => {
    const object = equipment[key];
    if (object.name.toUpperCase() === objectName.toUpperCase()) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      actor.deleteEquipment(`data.equipment.carried.${key}`);
    }
  });
}

function addUpdateFiltersOnSelected(params) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return TokenMagic.addUpdateFiltersOnSelected(params);
}
function removeFiltersOnSelected() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return TokenMagic.deleteFiltersOnSelected();
}
function addMentalShieldFilter() {
  const params = [
    {
      filterType: 'field',
      filterId: 'myGridField',
      shieldType: 11,
      gridPadding: 2,
      color: 0xc1c1c1,
      time: 0,
      blend: 2,
      intensity: 1,
      lightAlpha: 0,
      lightSize: 0.3,
      scale: 0.5,
      radius: 0.3,
      chromatic: true,
      alphaDiscard: true,
      discardThreshold: 0.3,
      zOrder: 512,
      animated: {
        time: {
          active: true,
          speed: 0.0009,
          animType: 'move',
        },
      },
    },
  ];
  return addUpdateFiltersOnSelected(params);
}
function addPhysicalShieldFilter() {
  const params = [
    {
      filterType: 'liquid',
      filterId: 'mySpectralBody',
      color: 0x20aaee,
      time: 0,
      blend: 8,
      intensity: 4,
      spectral: true,
      scale: 0.9,
      animated: {
        time: {
          active: true,
          speed: 0.001,
          animType: 'move',
        },
        color: {
          active: true,
          loopDuration: 6000,
          animType: 'colorOscillation',
          val1: 0xffffff,
          val2: 0x00aaff,
        },
      },
    },
  ];
  return addUpdateFiltersOnSelected(params);
}
function addSpeedFilter() {
  const params = [
    {
      filterType: 'blur',
      filterId: 'myBlur',
      padding: 10,
      quality: 4.0,
      blur: 0,
      blurX: 0,
      blurY: 0,
      animated: {
        blurX: {
          active: true,
          animType: 'syncCosOscillation',
          loopDuration: 500,
          val1: 0,
          val2: 6,
        },
        blurY: {
          active: true,
          animType: 'syncCosOscillation',
          loopDuration: 750,
          val1: 0,
          val2: 6,
        },
      },
    },
  ];
  return addUpdateFiltersOnSelected(params);
}
function addKineticDodgeFilter() {
  const params = [
    {
      filterType: 'blur',
      filterId: 'myBlur',
      padding: 10,
      quality: 4.0,
      blur: 0,
      blurX: 0,
      blurY: 0,
      animated: {
        blurX: {
          active: true,
          animType: 'syncCosOscillation',
          loopDuration: 500,
          val1: 0,
          val2: 6,
        },
        blurY: {
          active: true,
          animType: 'syncCosOscillation',
          loopDuration: 750,
          val1: 0,
          val2: 6,
        },
      },
    },
  ];
  return addUpdateFiltersOnSelected(params);
}

async function addSpeed() {
  const margin = getMargin();
  if (!margin) return;
  const value = Math.trunc((margin === 0 ? 1 : margin) / 5 + 1);
  const myToken = getControlledToken();
  if (!myToken) return;
  ui?.notifications?.info(`Añado una aceleración con margen de ${margin} (${value})`);
  await removeSpeed();
  const changes = getObjectSpell(SPELLS.SPEED);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGESPEED', value * 5);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGEDODGE', value);
  myToken.actor.addNewItemData(changes);
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
  const myToken = getControlledToken();
  if (!myToken) return;
  ui?.notifications?.info('Añadido un escudo con un margen de ' + margin);
  await removePhysicalShield();
  const changes = getObjectSpell(SPELLS.PHYSICAL_SHIELD);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGE', value);
  myToken.actor.addNewItemData(changes);
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
  const myToken = getControlledToken();
  if (!myToken) return;
  ui?.notifications?.info('Añadido un escudo con un margen de ' + margin);
  await removePhysicalShield();
  const changes = getObjectSpell(SPELLS.MENTAL_SHIELD);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGE', value);
  myToken.actor.addNewItemData(changes);
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
  const myToken = getControlledToken();
  if (!myToken) return;
  ui?.notifications?.info('Añado una esquiva escudo con un margen de ' + margin);
  await removeKineticDodge();
  const changes = getObjectSpell(SPELLS.KINETIC_DODGE);
  changes.data.bonuses = changes.data.bonuses.replace('CHANGE', value);
  myToken.actor.addNewItemData(changes);
  addKineticDodgeFilter();
}
async function removeKineticDodge() {
  await deleteObject(SPELLS.KINETIC_DODGE);
  await removeFiltersOnSelected();
}
function registerSpells() {
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
  const myToken = getControlledToken();
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
function getSpells() {
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

function getModifiersFromSpell(html) {
  const numberOfSpheres = Number($('#numberOfSpheres').val());
  const textNumberOfSpheres = $('#numberOfSpheres option:selected').text();
  const highestSphere = Number($('#highestSphere').val());
  const textHighestSphere = $('#highestSphere option:selected').text();
  const numberOfObjectives = Number($('#numberOfObjectives').val());
  const textNumberOfObjectives = $('#numberOfObjectives option:selected').text();
  const time = Number($('#time').val());
  const textTime = $('#time option:selected').text();
  const distance = Number($('#distance').val());
  const textDistance = $('#distance option:selected').text();
  const effectArea = Number($('#effectArea').val());
  const textEffectArea = $('#effectArea option:selected').text();
  const weight = Number($('#weight').val());
  const textWeight = $('#weight option:selected').text();
  const distanceByCorrespondence = Number($('#distanceByCorrespondence').val());
  const textDistanceByCorrespondence = $('#distanceByCorrespondence option:selected').text();
  const timeByTime = Number($('#timeByTime').val());
  const textTimeByTime = $('#timeByTime option:selected').text();
  const modifiers = [];
  if (numberOfSpheres) modifiers.push({ mod: numberOfSpheres, desc: `por número de esferas (${textNumberOfSpheres})` });
  if (highestSphere) modifiers.push({ mod: highestSphere, desc: `por esfera más alta (${textHighestSphere})` });
  if (numberOfObjectives)
    modifiers.push({
      mod: numberOfObjectives,
      desc: `por número de objetivos (${textNumberOfObjectives})`,
    });
  if (time) modifiers.push({ mod: time, desc: `por duración del conjuro (${textTime})` });
  if (distance) modifiers.push({ mod: distance, desc: `por distancia (${textDistance})` });
  if (effectArea) modifiers.push({ mod: effectArea, desc: `por área de efecto (${textEffectArea})` });
  if (weight) modifiers.push({ mod: weight, desc: `por peso (${textWeight})` });
  if (distanceByCorrespondence)
    modifiers.push({
      mod: distanceByCorrespondence,
      desc: `por distancia de Correspondencia (${textDistanceByCorrespondence})`,
    });
  if (timeByTime)
    modifiers.push({ mod: timeByTime, desc: `por distancia temporal en esfera de tiempo (${textTimeByTime})` });
  const customModifiers = $('#customModifiers').val();
  if (customModifiers) {
    customModifiers.split('\n').forEach((line) => {
      const values = line.split(' ');
      const mod = Number(values.shift());
      const desc = values.join(' ');
      modifiers.push({ mod, desc });
    });
  }
  return modifiers;
}
function getGridValue(template) {
  let total = 0;
  if (!template) return 0;
  if (!template.shape) return 0;
  if (!game?.canvas) return 0;
  const canvas = game.canvas;
  if (!canvas?.grid) return 0;
  if (!canvas?.grid?.grid) return 0;
  const grid = canvas.grid;
  const d = canvas.dimensions;
  if (!grid?.grid) return 0;
  if (!d) return 0;
  // Get number of rows and columns
  const [maxr, maxc] = grid.grid.getGridPositionFromPixels(d.width, d.height);
  let nr = Math.ceil((template.data.distance * 1.5) / d.distance / (d.size / grid.h));
  let nc = Math.ceil((template.data.distance * 1.5) / d.distance / (d.size / grid.w));
  nr = Math.min(nr, maxr);
  nc = Math.min(nc, maxc);
  // Get the offset of the template origin relative to the top-left grid space
  const [tx, ty] = canvas.grid.getTopLeft(template.data.x, template.data.y);
  const [row0, col0] = grid.grid.getGridPositionFromPixels(tx, ty);
  const hx = Math.ceil(canvas.grid.w / 2);
  const hy = Math.ceil(canvas.grid.h / 2);
  const isCenter = template.data.x - tx === hx && template.data.y - ty === hy;
  // Identify grid coordinates covered by the template Graphics
  for (let r = -nr; r < nr; r++) {
    for (let c = -nc; c < nc; c++) {
      const [gx, gy] = canvas.grid.grid.getPixelsFromGridPosition(row0 + r, col0 + c);
      const testX = gx + hx - template.data.x;
      const testY = gy + hy - template.data.y;
      const contains = (r === 0 && c === 0 && isCenter) || template.shape.contains(testX, testY);
      if (!contains) continue;
      total += 1;
    }
  }
  return total;
}
function getDistanceFromAreaOrTargets(type) {
  if (!game?.canvas?.grid) return 0;
  const controlledToken = getControlledToken();
  if (!controlledToken) return 0;
  const lastArea = window?.GurpsMageAscensionWizard?.lastAreaCreated;
  const currentUserTargets = game?.user?.targets;
  const currentSelectedTargetTargets = getSelectedTokenTargets();
  if (lastArea && type.toUpperCase() === 'AREA') {
    return (
      game.canvas.grid.measureDistance(
        { x: controlledToken.x, y: controlledToken.y },
        {
          x: lastArea.data.x,
          y: lastArea.data.y,
        },
        {
          gridSpaces: true,
        },
      ) || 0
    );
  }
  const targets = currentUserTargets || currentSelectedTargetTargets;
  if (!targets) return 0;
  let maxDistance = 0;
  for (const target of targets) {
    const distanceTarget =
      game.canvas.grid.measureDistance(
        { x: controlledToken.x, y: controlledToken.y },
        {
          x: target.x,
          y: target.y,
        },
        {
          gridSpaces: true,
        },
      ) || 0;
    if (maxDistance < distanceTarget) {
      maxDistance = distanceTarget;
    }
  }
  return maxDistance;
}
class BaseSpellCasting extends Application {
  constructor(options) {
    super({
      title: `Lanzamiento de conjuro`,
      template: `modules/${MODULE_NAME}/module/templates/baseSpellCasting.hbs`,
      resizable: true,
      width: 650,
      height: 575,
      ...options,
    });
    this.numberOfSpheres = 0;
    this.highestSphere = 0;
    this.numberOfObjectives = 0;
    this.time = 0;
    this.distance = 0;
    this.effectArea = 0;
    this.weight = 0;
    this.distanceByCorrespondence = 0;
    this.timeByTime = 0;
    this.dataModifiers = {};
  }
  extractEffectAreaFromLastArea() {
    if (!window?.GurpsMageAscensionWizard?.lastAreaCreated) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const total = getGridValue(window?.GurpsMageAscensionWizard?.lastAreaCreated?._object);
    if (total === 0) return;
    const finalNumber = Math.ceil(Math.sqrt(total));
    const found = CONTENT.AREA.find(({ valueMin, valueMax }) => valueMin <= finalNumber && valueMax >= finalNumber);
    if (found) {
      this.effectArea = found.mod;
      this.render();
    }
    game?.canvas?.scene?.deleteEmbeddedDocuments(
      'MeasuredTemplate',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      canvas.scene.templates.map((i) => window?.GurpsMageAscensionWizard?.lastAreaCreated?.id),
    );
  }
  extractDistanceFromTargetsOrArea(type) {
    const distance = getDistanceFromAreaOrTargets(type);
    const found = CONTENT.DISTANCE.find(({ valueMin, valueMax }) => valueMin <= distance && valueMax >= distance);
    if (found) {
      this.distance = found.mod;
      this.render();
    }
  }
  extractNumberOfObjectivesFromSelectedToken() {
    const totalCurrentUserTargets = game?.user?.targets?.size || 0;
    const totalSelectedTokenTargets = getSelectedTokenTargets()?.size || 0;
    const totalTargets = totalCurrentUserTargets || totalSelectedTokenTargets;
    const found = CONTENT.NUMBER_OF_TARGETS.find(
      ({ valueMin, valueMax }) => valueMin <= totalTargets && valueMax >= totalTargets,
    );
    if (found) {
      this.numberOfObjectives = found.mod;
      this.render();
    }
  }
  getData(options) {
    Object.keys(CONTENT).forEach((key) => {
      const content = CONTENT[key];
      const objectValues = {};
      content.forEach((record) => (objectValues[record.mod] = record.desc));
      this.dataModifiers[key] = objectValues;
    });
    return {
      dataModifiers: this.dataModifiers,
      numberOfSpheres: this.numberOfSpheres,
      highestSphere: this.highestSphere,
      numberOfObjectives: this.numberOfObjectives,
      time: this.time,
      distance: this.distance,
      effectArea: this.effectArea,
      weight: this.weight,
      distanceByCorrespondence: this.distanceByCorrespondence,
      timeByTime: this.timeByTime,
    };
  }
  activateListeners(html) {
    $('#getModifiersFromSpell').on('click', () => {
      GURPS.ModifierBucket.clear();
      const modifiers = getModifiersFromSpell();
      for (const modifier of modifiers) {
        GURPS.ModifierBucket.addModifier(modifier.mod, modifier.desc);
      }
    });
    $('#extractNumberOfObjectives').on('click', () => {
      this.extractNumberOfObjectivesFromSelectedToken();
      return false;
    });
    $('#extractEffectAreaFromLastArea').on('click', () => {
      this.extractEffectAreaFromLastArea();
      this.extractDistanceFromTargetsOrArea('area');
      return false;
    });
    $('#extractDistanceFromTargetsOrArea').on('click', () => {
      this.extractDistanceFromTargetsOrArea('tokens');
      return false;
    });
    $('.spellClickable').on('click', (evt) => {
      debugger;
      const id = $(evt.target).attr('id');
      if (!id) return;
      const spells = getSpells();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const spellFunc = spells[id];
      if (spellFunc) {
        spellFunc();
      }
      return false;
    });
  }
  async _updateObject(event, formData) {
    // normal updateObject stuff
    this.render(); // rerenders the FormApp with the new data.
  }
}

class GurpsMageAscensionLayer extends CanvasLayer {
  async draw() {
    await super.draw();
    return this;
  }
  static async doMagick() {
    this.baseSpellCasting = new BaseSpellCasting();
    this.baseSpellCasting.render(true);
  }
}
function addGurpsMageAscensionButtons(buttons) {
  const tokenLayer = buttons.find((b) => b.name === 'token');
  if (tokenLayer) {
    tokenLayer.tools.push({
      name: 'spell',
      title: 'Prepara tu hechizo',
      icon: 'fas fa-book-reader',
      visible: true,
      button: true,
      onClick: () => GurpsMageAscensionLayer.doMagick(),
    });
  }
}

function registerHooks() {
  console.log('LLEGO A HOOKS');
  Hooks.once('socketlib.ready', registerFunctions);
  Hooks.on('getSceneControlButtons', (buttons) => addGurpsMageAscensionButtons(buttons));
  Hooks.on('createMeasuredTemplate', (config) => {
    window.GurpsMageAscensionWizard.lastAreaCreated = config;
  });
}

function registerConfig() {
  CONFIG.Canvas.layers['GurpsMageAscensionWizard'] = {
    layerClass: GurpsMageAscensionLayer,
    group: 'primary',
  };
}

// Import TypeScript modules
const globals = {
  lastAreaCreated: null,
  spellFunctions: {},
};
window.GurpsMageAscensionWizard = globals;
registerConfig();
registerHooks();
registerSpells();
//# sourceMappingURL=gurps-mage-ascension-wizard.js.map
