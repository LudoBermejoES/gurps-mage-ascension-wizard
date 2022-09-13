// Import TypeScript modules
import { registerHooks } from './util/setup/hooks.js';
import { SockerLibSocket } from './util/setup/socketkib';
import registerSpells from './spells/spellFunctions';
import { registerConfig } from './util/setup/config';
const globals = {
  lastAreaCreated: null,
  spellFunctions: {},
};

declare global {
  const GurpsMageAscensionWizard: typeof globals & { socket: SockerLibSocket };
  interface Window {
    GurpsMageAscensionWizard: typeof globals;
  }
  interface LenientGlobalVariableTypes {
    game: Game;
  }
}

window.GurpsMageAscensionWizard = globals;

registerConfig();

registerHooks();
registerSpells();
