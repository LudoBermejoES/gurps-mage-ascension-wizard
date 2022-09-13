import BaseSpellCasting from '../spells/BaseSpellCasting';

export class GurpsMageAscensionLayer extends CanvasLayer {
  private static baseSpellCasting: BaseSpellCasting | undefined;

  async draw() {
    await super.draw();
    return this;
  }

  static async doMagick() {
    this.baseSpellCasting = new BaseSpellCasting();
    this.baseSpellCasting.render(true);
  }
}

export function addGurpsMageAscensionButtons(buttons: any[]) {
  const tokenLayer: any | undefined = buttons.find((b: any) => b.name === 'token');

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
