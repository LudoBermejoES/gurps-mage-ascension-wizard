const MODULE_NAME = 'gurps-mage-ascension-wizard' as const;

const functionsToRegister = {
  nothing,
} as const;

function nothing() {
  console.log('Do nothing');
}

interface SockerLib {
  registerModule(mudeltName: string): SockerLibSocket;
}
export interface SockerLibSocket {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register(alias: string, func: (...args: any[]) => any): void;
  executeAsUser<T extends keyof typeof functionsToRegister>(
    alias: T,
    userId: string,
    ...args: Parameters<typeof functionsToRegister[T]>
  ): Promise<ReturnType<typeof functionsToRegister[T]>>;
  executeForEveryone<T extends keyof typeof functionsToRegister>(
    alias: T,
    ...args: Parameters<typeof functionsToRegister[T]>
  ): Promise<void>;
}
declare global {
  const socketlib: SockerLib;
}

export function registerFunctions(): void {
  console.log('REGISTRO LAS OPCIONES');
  GurpsMageAscensionWizard.socket = socketlib.registerModule(MODULE_NAME);
  for (const [alias, func] of Object.entries(functionsToRegister)) {
    console.log(alias, func);
    GurpsMageAscensionWizard.socket.register(alias, func);
  }
}
