function getPriority(user: User, actor: Actor): number {
  let priority = 0;
  if (user.character === actor) priority += 100;
  if (actor.testUserPermission(user, 'OWNER')) priority += 10;
  if (user.isGM) priority -= 1;
  if (!user.active) priority -= 1000;
  return priority;
}

function highestPriorityUsers(actor: Actor): User[] {
  if (!game?.users) return [];
  const priorities = new Map(game.users.map((user) => [user, getPriority(user, actor)]));
  const maxPriority = Math.max(...priorities.values());
  return game.users.filter((user) => priorities.get(user) === maxPriority);
}

export function getControlledToken(): Token | undefined {
  const controlled: Token[] | undefined = game?.canvas?.tokens?.controlled;
  if (controlled && controlled.length === 1) {
    const token: Token = controlled[0];
    return token;
  }
  return undefined;
}

function getTargetsFromToken(token: Token): UserTargets | undefined {
  if (!token?.actor) return undefined;
  const user: User | undefined = highestPriorityUsers(token.actor)[0] || undefined;
  return user?.targets;
}

export function getSelectedTokenTargets(): UserTargets | undefined {
  const controlledToken = getControlledToken();
  if (controlledToken) {
    return getTargetsFromToken(controlledToken);
  }
  return undefined;
}

export function getObjectSpell(name: string): any {
  const item = game?.items?.getName(name);
  if (!item) return;
  const changes: any = item.toObject();
  changes._id = makeid(16);
  changes.data.globalid = `item.${changes._id}`;
  return changes;
}

function getToken(): Token | undefined {
  return game?.canvas?.tokens?.controlled[0];
}

export function getMargin(): number | undefined {
  const margin = GURPS?.lastTargetedRoll?.margin || undefined;
  if (!margin) return undefined;
  return margin;
}

function makeid(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function deleteObject(objectName: string) {
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
