function addUpdateFiltersOnSelected(params: any): any {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return TokenMagic.addUpdateFiltersOnSelected(params);
}

export function removeFiltersOnSelected() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return TokenMagic.deleteFiltersOnSelected();
}

export function addMentalShieldFilter() {
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

export function addPhysicalShieldFilter() {
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

export function addSpeedFilter() {
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

export function addKineticDodgeFilter() {
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
