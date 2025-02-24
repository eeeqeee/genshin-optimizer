// WARNING: Generated file, do not modify
export const conditionals = {
  AstralVoice: {
    astral: {
      sheet: 'AstralVoice',
      name: 'astral',
      type: 'num',
      int_only: true,
      min: 1,
      max: 3,
    },
  },
  BranchBladeSong: {
    apply_or_trigger: {
      sheet: 'BranchBladeSong',
      name: 'apply_or_trigger',
      type: 'bool',
    },
  },
  ChaosJazz: {
    while_off_field: {
      sheet: 'ChaosJazz',
      name: 'while_off_field',
      type: 'bool',
    },
  },
  ChaoticMetal: {
    trigger_corruption: {
      sheet: 'ChaoticMetal',
      name: 'trigger_corruption',
      type: 'bool',
    },
  },
  FangedMetal: {
    inflict_assault: {
      sheet: 'FangedMetal',
      name: 'inflict_assault',
      type: 'bool',
    },
  },
  HormonePunk: {
    entering_combat: {
      sheet: 'HormonePunk',
      name: 'entering_combat',
      type: 'bool',
    },
  },
  InfernoMetal: {
    hitting_burning_enemy: {
      sheet: 'InfernoMetal',
      name: 'hitting_burning_enemy',
      type: 'bool',
    },
  },
  PolarMetal: {
    freeze_shatter: {
      sheet: 'PolarMetal',
      name: 'freeze_shatter',
      type: 'bool',
    },
  },
  ProtoPunk: {
    def_assist_or_evasive_assist: {
      sheet: 'ProtoPunk',
      name: 'def_assist_or_evasive_assist',
      type: 'bool',
    },
  },
  PufferElectro: {
    launching_ult: {
      sheet: 'PufferElectro',
      name: 'launching_ult',
      type: 'bool',
    },
  },
  SwingJazz: {
    chain_or_ult: { sheet: 'SwingJazz', name: 'chain_or_ult', type: 'bool' },
  },
  ThunderMetal: {
    enemy_shocked: {
      sheet: 'ThunderMetal',
      name: 'enemy_shocked',
      type: 'bool',
    },
  },
  WoodpeckerElectro: {
    crit_basic_dodge_ex: {
      sheet: 'WoodpeckerElectro',
      name: 'crit_basic_dodge_ex',
      type: 'num',
      int_only: true,
      min: 1,
      max: 3,
    },
  },
} as const
export const formulas = {
  Anby: {
    anomalyDmgInst: {
      sheet: 'Anby',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Anby',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Anby',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Anby',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Anton: {
    anomalyDmgInst: {
      sheet: 'Anton',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Anton',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Anton',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Anton',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Astra: {
    anomalyDmgInst: {
      sheet: 'Astra',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Astra',
        attribute: 'ether',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Astra',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Astra',
        attribute: 'ether',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Ben: {
    anomalyDmgInst: {
      sheet: 'Ben',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Ben',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Ben',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Ben',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Billy: {
    anomalyDmgInst: {
      sheet: 'Billy',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Billy',
        attribute: 'physical',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Billy',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Billy',
        attribute: 'physical',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Burnice: {
    anomalyDmgInst: {
      sheet: 'Burnice',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Burnice',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Burnice',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Burnice',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Caesar: {
    anomalyDmgInst: {
      sheet: 'Caesar',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Caesar',
        attribute: 'physical',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Caesar',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Caesar',
        attribute: 'physical',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Corin: {
    anomalyDmgInst: {
      sheet: 'Corin',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Corin',
        attribute: 'physical',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Corin',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Corin',
        attribute: 'physical',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Ellen: {
    anomalyDmgInst: {
      sheet: 'Ellen',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Ellen',
        attribute: 'ice',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Ellen',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Ellen',
        attribute: 'ice',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Evelyn: {
    anomalyDmgInst: {
      sheet: 'Evelyn',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Evelyn',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Evelyn',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Evelyn',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Grace: {
    anomalyDmgInst: {
      sheet: 'Grace',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Grace',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Grace',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Grace',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Harumasa: {
    anomalyDmgInst: {
      sheet: 'Harumasa',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Harumasa',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Harumasa',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Harumasa',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Jane: {
    anomalyDmgInst: {
      sheet: 'Jane',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Jane',
        attribute: 'physical',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Jane',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Jane',
        attribute: 'physical',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Koleda: {
    anomalyDmgInst: {
      sheet: 'Koleda',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Koleda',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Koleda',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Koleda',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Lighter: {
    anomalyDmgInst: {
      sheet: 'Lighter',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Lighter',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Lighter',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Lighter',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Lucy: {
    anomalyDmgInst: {
      sheet: 'Lucy',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Lucy',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Lucy',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Lucy',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Lycaon: {
    anomalyDmgInst: {
      sheet: 'Lycaon',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Lycaon',
        attribute: 'ice',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Lycaon',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Lycaon',
        attribute: 'ice',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Miyabi: {
    anomalyDmgInst: {
      sheet: 'Miyabi',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Miyabi',
        attribute: 'ice',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Miyabi',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Miyabi',
        attribute: 'ice',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Nekomata: {
    anomalyDmgInst: {
      sheet: 'Nekomata',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Nekomata',
        attribute: 'physical',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Nekomata',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Nekomata',
        attribute: 'physical',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Nicole: {
    anomalyDmgInst: {
      sheet: 'Nicole',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Nicole',
        attribute: 'ether',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Nicole',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Nicole',
        attribute: 'ether',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Piper: {
    anomalyDmgInst: {
      sheet: 'Piper',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Piper',
        attribute: 'physical',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Piper',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Piper',
        attribute: 'physical',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  QingYi: {
    anomalyDmgInst: {
      sheet: 'QingYi',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'QingYi',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'QingYi',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'QingYi',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Rina: {
    anomalyDmgInst: {
      sheet: 'Rina',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Rina',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Rina',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Rina',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Seth: {
    anomalyDmgInst: {
      sheet: 'Seth',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Seth',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Seth',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Seth',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Soldier11: {
    anomalyDmgInst: {
      sheet: 'Soldier11',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Soldier11',
        attribute: 'fire',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Soldier11',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Soldier11',
        attribute: 'fire',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Soukaku: {
    anomalyDmgInst: {
      sheet: 'Soukaku',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Soukaku',
        attribute: 'ice',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Soukaku',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Soukaku',
        attribute: 'ice',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  Yanagi: {
    anomalyDmgInst: {
      sheet: 'Yanagi',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'Yanagi',
        attribute: 'electric',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'Yanagi',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'Yanagi',
        attribute: 'electric',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
  ZhuYuan: {
    anomalyDmgInst: {
      sheet: 'ZhuYuan',
      name: 'anomalyDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'anomalyDmg',
        sheet: 'ZhuYuan',
        attribute: 'ether',
        damageType1: 'anomaly',
        name: 'anomalyDmgInst',
      },
    },
    standardDmgInst: {
      sheet: 'ZhuYuan',
      name: 'standardDmgInst',
      tag: {
        et: 'own',
        qt: 'formula',
        q: 'standardDmg',
        sheet: 'ZhuYuan',
        attribute: 'ether',
        damageType1: 'elemental',
        name: 'standardDmgInst',
      },
    },
  },
} as const
export const buffs = {
  AstralVoice: {
    set4_team_dmg_: {
      sheet: 'AstralVoice',
      name: 'set4_team_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'common_dmg_',
        sheet: 'AstralVoice',
        name: 'set4_team_dmg_',
      },
    },
  },
  BranchBladeSong: {
    set4_cond: {
      sheet: 'BranchBladeSong',
      name: 'set4_cond',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'crit_',
        sheet: 'BranchBladeSong',
        name: 'set4_cond',
      },
    },
    set4_passive: {
      sheet: 'BranchBladeSong',
      name: 'set4_passive',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'crit_dmg_',
        sheet: 'BranchBladeSong',
        name: 'set4_passive',
      },
    },
  },
  ChaosJazz: {
    set4_off_field_assist_dmg_: {
      sheet: 'ChaosJazz',
      name: 'set4_off_field_assist_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'ChaosJazz',
        dst: null,
        skillType: 'assistSkill',
        name: 'set4_off_field_assist_dmg_',
      },
    },
    set4_off_field_special_dmg_: {
      sheet: 'ChaosJazz',
      name: 'set4_off_field_special_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'ChaosJazz',
        dst: null,
        damageType1: 'special',
        name: 'set4_off_field_special_dmg_',
      },
    },
    set4_passive_electric_dmg_: {
      sheet: 'ChaosJazz',
      name: 'set4_passive_electric_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'ChaosJazz',
        dst: null,
        attribute: 'electric',
        name: 'set4_passive_electric_dmg_',
      },
    },
    set4_passive_fire_dmg_: {
      sheet: 'ChaosJazz',
      name: 'set4_passive_fire_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'ChaosJazz',
        dst: null,
        attribute: 'fire',
        name: 'set4_passive_fire_dmg_',
      },
    },
  },
  ChaoticMetal: {
    set4_cond_trigger_corruption: {
      sheet: 'ChaoticMetal',
      name: 'set4_cond_trigger_corruption',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'crit_dmg_',
        sheet: 'ChaoticMetal',
        name: 'set4_cond_trigger_corruption',
      },
    },
    set4_passive: {
      sheet: 'ChaoticMetal',
      name: 'set4_passive',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'crit_dmg_',
        sheet: 'ChaoticMetal',
        name: 'set4_passive',
      },
    },
  },
  FangedMetal: {
    set4_cond_inflict_assault: {
      sheet: 'FangedMetal',
      name: 'set4_cond_inflict_assault',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'common_dmg_',
        sheet: 'FangedMetal',
        name: 'set4_cond_inflict_assault',
      },
    },
  },
  HormonePunk: {
    set4_cond_entering_combat: {
      sheet: 'HormonePunk',
      name: 'set4_cond_entering_combat',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'atk_',
        sheet: 'HormonePunk',
        name: 'set4_cond_entering_combat',
      },
    },
  },
  InfernoMetal: {
    set4_cond_hitting_burning_enemy: {
      sheet: 'InfernoMetal',
      name: 'set4_cond_hitting_burning_enemy',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'crit_',
        sheet: 'InfernoMetal',
        name: 'set4_cond_hitting_burning_enemy',
      },
    },
  },
  PolarMetal: {
    set4_basic_dmg_: {
      sheet: 'PolarMetal',
      name: 'set4_basic_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'PolarMetal',
        damageType1: 'basic',
        name: 'set4_basic_dmg_',
      },
    },
    set4_dash_dmg_: {
      sheet: 'PolarMetal',
      name: 'set4_dash_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'PolarMetal',
        damageType1: 'dash',
        name: 'set4_dash_dmg_',
      },
    },
  },
  ProtoPunk: {
    set4_cond_def_assist_or_evasive_assist_dmg_: {
      sheet: 'ProtoPunk',
      name: 'set4_cond_def_assist_or_evasive_assist_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'common_dmg_',
        sheet: 'ProtoPunk',
        name: 'set4_cond_def_assist_or_evasive_assist_dmg_',
      },
    },
  },
  PufferElectro: {
    set4_cond_launching_ult_atk_: {
      sheet: 'PufferElectro',
      name: 'set4_cond_launching_ult_atk_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'atk_',
        sheet: 'PufferElectro',
        name: 'set4_cond_launching_ult_atk_',
      },
    },
    set4_dmg_: {
      sheet: 'PufferElectro',
      name: 'set4_dmg_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'dmg_',
        sheet: 'PufferElectro',
        damageType1: 'ult',
        name: 'set4_dmg_',
      },
    },
  },
  ShockstarDisco: {
    set4_basic_daze_: {
      sheet: 'ShockstarDisco',
      name: 'set4_basic_daze_',
      tag: {
        et: 'display',
        qt: 'common',
        q: 'stun_',
        sheet: 'ShockstarDisco',
        damageType1: 'basic',
        name: 'set4_basic_daze_',
      },
    },
    set4_dash_daze_: {
      sheet: 'ShockstarDisco',
      name: 'set4_dash_daze_',
      tag: {
        et: 'display',
        qt: 'common',
        q: 'stun_',
        sheet: 'ShockstarDisco',
        damageType1: 'dash',
        name: 'set4_dash_daze_',
      },
    },
    set4_dodgeCounter_daze_: {
      sheet: 'ShockstarDisco',
      name: 'set4_dodgeCounter_daze_',
      tag: {
        et: 'display',
        qt: 'common',
        q: 'stun_',
        sheet: 'ShockstarDisco',
        damageType1: 'dodgeCounter',
        name: 'set4_dodgeCounter_daze_',
      },
    },
  },
  SwingJazz: {
    set4_cond_chain_or_ult: {
      sheet: 'SwingJazz',
      name: 'set4_cond_chain_or_ult',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'atk_',
        sheet: 'SwingJazz',
        name: 'set4_cond_chain_or_ult',
      },
    },
  },
  ThunderMetal: {
    set4_cond_enemy_shocked_atk_: {
      sheet: 'ThunderMetal',
      name: 'set4_cond_enemy_shocked_atk_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'atk_',
        sheet: 'ThunderMetal',
        name: 'set4_cond_enemy_shocked_atk_',
      },
    },
  },
  WoodpeckerElectro: {
    set4_cond_crit_basic_dodge_ex_atk_: {
      sheet: 'WoodpeckerElectro',
      name: 'set4_cond_crit_basic_dodge_ex_atk_',
      tag: {
        et: 'display',
        qt: 'combat',
        q: 'atk_',
        sheet: 'WoodpeckerElectro',
        name: 'set4_cond_crit_basic_dodge_ex_atk_',
      },
    },
  },
} as const
