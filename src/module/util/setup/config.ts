import { GurpsMageAscensionLayer } from '../../layer/gurpsMageAscensionLayer';

export function registerConfig() {
  CONFIG.Canvas.layers['GurpsMageAscensionWizard'] = {
    layerClass: GurpsMageAscensionLayer,
    group: 'primary',
  };
}
