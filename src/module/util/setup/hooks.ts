import { registerFunctions } from './socketkib';
import { addGurpsMageAscensionButtons } from '../../layer/gurpsMageAscensionLayer';

export function registerHooks(): void {
  console.log('LLEGO A HOOKS');
  Hooks.once('socketlib.ready', registerFunctions);
  Hooks.on('getSceneControlButtons', (buttons) => addGurpsMageAscensionButtons(buttons));
  Hooks.on('createMeasuredTemplate', (config: any) => {
    window.GurpsMageAscensionWizard.lastAreaCreated = config;
  });
}
