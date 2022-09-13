import { MODULE_NAME } from '../util/setup/constants';
import CONTENT from '../data/content';
import { DataModifiers, Modifier, NameModifiers, Selectors } from '../types';
import { getControlledToken, getSelectedTokenTargets } from '../util/auxiliar';
import { MeasuredTemplateData } from '@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs';
import { getSpells } from './spellFunctions';

function getModifiersFromSpell(html: JQuery): Modifier[] {
  const numberOfSpheres = Number($('#numberOfSpheres').val());
  const textNumberOfSpheres: string = $('#numberOfSpheres option:selected').text() as string;
  const highestSphere = Number($('#highestSphere').val());
  const textHighestSphere: string = $('#highestSphere option:selected').text() as string;
  const numberOfObjectives = Number($('#numberOfObjectives').val());
  const textNumberOfObjectives: string = $('#numberOfObjectives option:selected').text() as string;
  const time = Number($('#time').val());
  const textTime: string = $('#time option:selected').text() as string;
  const distance = Number($('#distance').val());
  const textDistance: string = $('#distance option:selected').text() as string;
  const effectArea = Number($('#effectArea').val());
  const textEffectArea: string = $('#effectArea option:selected').text() as string;
  const weight = Number($('#weight').val());
  const textWeight: string = $('#weight option:selected').text() as string;
  const distanceByCorrespondence = Number($('#distanceByCorrespondence').val());
  const textDistanceByCorrespondence: string = $('#distanceByCorrespondence option:selected').text() as string;
  const timeByTime = Number($('#timeByTime').val());
  const textTimeByTime: string = $('#timeByTime option:selected').text() as string;

  const modifiers: Modifier[] = [];

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
  const customModifiers: string = $('#customModifiers').val() as string;
  if (customModifiers) {
    customModifiers.split('\n').forEach((line: string) => {
      const values: string[] = line.split(' ');
      const mod = Number(values.shift());
      const desc: string = values.join(' ');
      modifiers.push({ mod, desc });
    });
  }

  return modifiers;
}

function getGridValue(template: MeasuredTemplate): number {
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

function getDistanceFromAreaOrTargets(type: string): number {
  if (!game?.canvas?.grid) return 0;
  const controlledToken: Token | undefined = getControlledToken();
  if (!controlledToken) return 0;
  const lastArea: any | null = window?.GurpsMageAscensionWizard?.lastAreaCreated;
  const currentUserTargets: UserTargets | undefined = game?.user?.targets;
  const currentSelectedTargetTargets: UserTargets | undefined = getSelectedTokenTargets();
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
  const targets: UserTargets | undefined = currentUserTargets || currentSelectedTargetTargets;
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

export default class BaseSpellCasting extends Application {
  dataModifiers: DataModifiers | Record<string, never>;
  numberOfSpheres = 0;
  highestSphere = 0;
  numberOfObjectives = 0;
  time = 0;
  distance = 0;
  effectArea = 0;
  weight = 0;
  distanceByCorrespondence = 0;
  timeByTime = 0;

  constructor(options?: Partial<Application>) {
    super({
      title: `Lanzamiento de conjuro`,
      template: `modules/${MODULE_NAME}/module/templates/baseSpellCasting.hbs`,
      resizable: true,
      width: 650,
      height: 575,
      ...options,
    });
    this.dataModifiers = {};
  }

  extractEffectAreaFromLastArea() {
    if (!window?.GurpsMageAscensionWizard?.lastAreaCreated) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const total = getGridValue(window?.GurpsMageAscensionWizard?.lastAreaCreated?._object);
    if (total === 0) return;
    const finalNumber: number = Math.ceil(Math.sqrt(total));
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

  extractDistanceFromTargetsOrArea(type: string) {
    const distance: number = getDistanceFromAreaOrTargets(type);
    const found = CONTENT.DISTANCE.find(({ valueMin, valueMax }) => valueMin <= distance && valueMax >= distance);
    if (found) {
      this.distance = found.mod;
      this.render();
    }
  }

  extractNumberOfObjectivesFromSelectedToken() {
    const totalCurrentUserTargets = game?.user?.targets?.size || 0;
    const totalSelectedTokenTargets = getSelectedTokenTargets()?.size || 0;
    const totalTargets: number = totalCurrentUserTargets || totalSelectedTokenTargets;
    const found = CONTENT.NUMBER_OF_TARGETS.find(
      ({ valueMin, valueMax }) => valueMin <= totalTargets && valueMax >= totalTargets,
    );

    if (found) {
      this.numberOfObjectives = found.mod;
      this.render();
    }
  }

  getData(options?: Partial<ApplicationOptions>): any {
    Object.keys(CONTENT).forEach((key: string) => {
      const content = CONTENT[key as NameModifiers];
      const objectValues: Record<number, string> = {};
      content.forEach((record: Selectors) => (objectValues[record.mod] = record.desc));
      this.dataModifiers[key as NameModifiers] = objectValues;
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

  activateListeners(html: JQuery): void {
    $('#getModifiersFromSpell').on('click', () => {
      GURPS.ModifierBucket.clear();
      const modifiers: Modifier[] = getModifiersFromSpell(html);
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

  async _updateObject(event: Event, formData: Application.RenderOptions) {
    // normal updateObject stuff
    this.render(); // rerenders the FormApp with the new data.
  }
}
