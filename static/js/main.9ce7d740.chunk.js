(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[6],{17:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var i=r(16),a=r(31),_=r(32),n=r(6),o=function(){function e(){if(Object(a.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")}return Object(_.a)(e,null,[{key:"registerListener",value:function(t){e.listener.push(t)}},{key:"unregisterListener",value:function(t){e.listener=e.listener.filter((function(e){return e!==t}))}},{key:"emitEvent",value:function(){e.listener.forEach((function(t){return t(e.characterDatabase)}))}},{key:"registerCharListener",value:function(t,r){e.charListener[t]?e.charListener[t].push(r):e.charListener[t]=[r]}},{key:"unregisterCharListener",value:function(t,r){var i;e.charListener[t]=null===(i=e.charListener[t])||void 0===i?void 0:i.filter((function(e){return e!==r}))}},{key:"emitCharEvent",value:function(t,r){var i;null===(i=e.charListener[t])||void 0===i||i.forEach((function(e){return e(r)}))}}]),e}();o.initiated=!1,o.characterDatabase={},o.listener=[],o.charListener=[],o.isInvalid=function(e){return!e||!e.characterKey||!e.levelKey},o.getCharacterDatabase=function(){return Object(n.f)(o.characterDatabase)},o.getCharacterKeyList=function(){return Object.keys(o.characterDatabase)},o.getIdList=function(){return Object.keys(o.characterDatabase)},o.populateDatebaseFromLocalStorage=function(){return!o.initiated&&(Object.keys(localStorage).filter((function(e){return e.startsWith("char_")})).forEach((function(e){var t=e.split("char_"),r=Object(i.a)(t,2)[1];if(!o.characterDatabase[r]){var a=Object(n.n)(e);if(!a)return;o.characterDatabase[r]=a}})),o.initiated=!0,o.emitEvent(),!0)},o.update=function(e){if(!o.isInvalid(e)){var t=Object(n.f)(e);Object(n.r)("char_".concat(e.characterKey),t),o.characterDatabase[e.characterKey]=t,o.emitEvent(),o.emitCharEvent(t.characterKey,t)}},o.get=function(e){var t,r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!==(t=null===(r=o.characterDatabase)||void 0===r?void 0:r[e])&&void 0!==t?t:i},o.remove=function(e){delete o.characterDatabase[e],localStorage.removeItem("char_".concat(e)),o.emitEvent()},o.getArtifactIDFromSlot=function(e,t){var r,i,a;return null!==(r=null===(i=o.get(e))||void 0===i||null===(a=i.equippedArtifacts)||void 0===a?void 0:a[t])&&void 0!==r?r:null},o.equipArtifact=function(e,t){var r=o.get(e);r&&t&&t.slotKey&&(r.equippedArtifacts||(r.equippedArtifacts={}),r.equippedArtifacts[t.slotKey]=t.id,o.update(r))},o.unequipArtifactOnSlot=function(e,t){var r,i=o.get(e);i&&t&&(null===i||void 0===i||null===(r=i.equippedArtifacts)||void 0===r?void 0:r[t])&&(i.equippedArtifacts[t]="",o.update(i))},o.equipArtifactBuild=function(e,t){var r=o.get(e);r&&(r.equippedArtifacts=t,o.update(r))},o.unequipAllArtifacts=function(){Object.values(o.characterDatabase).forEach((function(e){e.equippedArtifacts={},o.update(e)}))},o.clearDatabase=function(){o.characterDatabase={},o.initiated=!1,o.emitEvent()}},19:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var i=r(31),a=r(32),_=r(6),n=!1,o={},c=1,l={},s=[],u=function(){function e(){if(Object(i.a)(this,e),this instanceof e)throw Error("A static class cannot be instantiated.")}return Object(a.a)(e,null,[{key:"registerListener",value:function(e){s.push(e)}},{key:"unregisterListener",value:function(e){s=s.filter((function(t){return t!==e}))}},{key:"emitEvent",value:function(){s.forEach((function(e){return e(o)}))}},{key:"registerArtListener",value:function(e,t){l[e]?l[e].push(t):l[e]=[t]}},{key:"unregisterArtListener",value:function(e,t){var r;l[e]=null===(r=l[e])||void 0===r?void 0:r.filter((function(e){return e!==t}))}},{key:"emitArtEvent",value:function(e,t){var r;null===(r=l[e])||void 0===r||r.forEach((function(e){return e(t)}))}}]),e}();u.isInvalid=function(e){var t;return!e||!e.setKey||!e.numStars||!e.slotKey||!e.mainStatKey||(null===(t=e.substats)||void 0===t?void 0:t.some((function(e){return e.key&&!e.value})))},u.getArtifactDatabase=function(){return o},u.getIdList=function(){return Object.keys(o)},u.populateDatebaseFromLocalStorage=function(){return!n&&(Object.keys(localStorage).filter((function(e){return e.startsWith("artifact_")})).forEach((function(e){if(!o[e]){var t=Object(_.n)(e);if(!t)return;if(u.isInvalid(t))return void u.removeArtifactById(e);o[e]=t}})),n=!0,u.emitEvent(),!0)},u.get=function(e){var t;return null!==(t=o[e])&&void 0!==t?t:null},u.removeArtifact=function(e){u.removeArtifactById(e.id)},u.update=function(e){if(!u.isInvalid(e)){var t=e.id;if(!t){do{t="artifact_".concat(c++)}while(null!==localStorage.getItem(t));e.id=t}var r=Object(_.f)(e);Object(_.r)(t,r),o[t]=r,u.emitEvent(),u.emitArtEvent(t,r)}},u.removeArtifactById=function(e){delete o[e],localStorage.removeItem(e),u.emitEvent()},u.moveToNewLocation=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=u.get(e);r&&r.location!==t&&(r.location=t,u.update(r))},u.setLocked=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=u.get(e);r&&r.lock!==t&&(r.lock=t,u.update(r))},u.swapLocations=function(e,t){var r=e.location,i=t.location;u.moveToNewLocation(e.id,i),u.moveToNewLocation(t.id,r)},u.swapLocationsById=function(e,t){return u.swapLocations(u.get(e),u.get(t))},u.unequipAllArtifacts=function(){Object.values(o).forEach((function(e){e.location="",u.update(e)}))},u.clearDatabase=function(){o={},n=!1,c=1,u.emitEvent()}},59:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return y})),r.d(t,"c",(function(){return h})),r.d(t,"a",(function(){return s}));var i=r(16),a=r(55),_=r(19),n=r(17),o={char_ele_key:"characterEle",char_level:"characterLevel",hp_base:"characterHP",hp_final:"finalHP",atk_character_base:"characterATK",atk_base:"baseATK",atk_final:"finalATK",atk_weapon:"weaponATK",def_base:"characterDEF",def_final:"finalDEF",phy_dmg_bonus:"physical_dmg_",phy_res:"physical_res_",anemo_ele_dmg_bonus:"anemo_dmg_",geo_ele_dmg_bonus:"geo_dmg_",electro_ele_dmg_bonus:"electro_dmg_",hydro_ele_dmg_bonus:"hydro_dmg_",pyro_ele_dmg_bonus:"pyro_dmg_",cryo_ele_dmg_bonus:"cryo_dmg_",anemo_ele_res:"anemo_res_",geo_ele_res:"geo_res_",electro_ele_res:"electro_res_",hydro_ele_res:"hydro_res_",pyro_ele_res:"pyro_res_",cryo_ele_res:"cryo_res_",ener_rech:"enerRech_",crit_rate:"critRate_",crit_dmg:"critDMG_",stam:"stamina",heal_bonu:"heal_",inc_heal:"incHeal_",pow_shield:"powShield_",red_cd:"cdRed_",skill_cd_red:"skillCDRed_",burst_cd_red:"burstCDRed_",all_dmg_bonus:"dmg_",move_spd:"moveSPD_",atk_spd:"atkSPD_",weakspot_dmg:"weakspotDMG_",stamina_dec:"staminaDec_",stamina_gliding_dec:"staminaGlidingDec_",stamina_charged_dec:"staminaChargedDec_",ele_mas_multi_x:"eleMasX",ele_mas_multi_y:"eleMasY",ele_mas_multi_z:"eleMasZ",norm_atk_dmg:"physical_normal_hit",char_atk_dmg:"physical_charged_hit",plunge_dmg:"physical_plunging_hit",norm_atk_crit_dmg:"physical_normal_critHit",char_atk_crit_dmg:"physical_charged_critHit",plunge_crit_dmg:"physical_plunging_critHit",norm_atk_avg_dmg:"physical_normal_avgHit",char_atk_avg_dmg:"physical_charged_avgHit",plunge_avg_dmg:"physical_plunging_avgHit",norm_atk_dmg_bonus:"normal_dmg_",char_atk_dmg_bonus:"charged_dmg_",plunge_atk_dmg_bonus:"plunging_dmg_",skill_dmg_bonus:"skill_dmg_",burst_dmg_bonus:"burst_dmg_",norm_atk_crit_rate:"normal_critRate_",char_atk_crit_rate:"charged_critRate_",skill_crit_rate:"skill_critRate_",burst_crit_rate:"burst_critRate_",anemo_skill_dmg:"anemo_skill_hit",anemo_burst_dmg:"anemo_burst_hit",anemo_skill_crit_dmg:"anemo_skill_critHit",anemo_burst_crit_dmg:"anemo_burst_critHit",anemo_skill_avg_dmg:"anemo_skill_avgHit",anemo_burst_avg_dmg:"anemo_burst_avgHit",geo_skill_dmg:"geo_skill_hit",geo_burst_dmg:"geo_burst_hit",geo_skill_crit_dmg:"geo_skill_critHit",geo_burst_crit_dmg:"geo_burst_critHit",geo_skill_avg_dmg:"geo_skill_avgHit",geo_burst_avg_dmg:"geo_burst_avgHit",electro_skill_dmg:"electro_skill_hit",electro_burst_dmg:"electro_burst_hit",electro_skill_crit_dmg:"electro_skill_critHit",electro_burst_crit_dmg:"electro_burst_critHit",electro_skill_avg_dmg:"electro_skill_avgHit",electro_burst_avg_dmg:"electro_burst_avgHit",hydro_skill_dmg:"hydro_skill_hit",hydro_burst_dmg:"hydro_burst_hit",hydro_skill_crit_dmg:"hydro_skill_critHit",hydro_burst_crit_dmg:"hydro_burst_critHit",hydro_skill_avg_dmg:"hydro_skill_avgHit",hydro_burst_avg_dmg:"hydro_burst_avgHit",pyro_skill_dmg:"pyro_skill_hit",pyro_burst_dmg:"pyro_burst_hit",pyro_skill_crit_dmg:"pyro_skill_critHit",pyro_burst_crit_dmg:"pyro_burst_critHit",pyro_skill_avg_dmg:"pyro_skill_avgHit",pyro_burst_avg_dmg:"pyro_burst_avgHit",cryo_skill_dmg:"cryo_skill_hit",cryo_burst_dmg:"cryo_burst_hit",cryo_skill_crit_dmg:"cryo_skill_critHit",cryo_burst_crit_dmg:"cryo_burst_critHit",cryo_skill_avg_dmg:"cryo_skill_avgHit",cryo_burst_avg_dmg:"cryo_burst_avgHit",phy_dmg:"physical_hit",phy_crit_dmg:"physical_critHit",phy_avg_dmg:"physical_avgHit",anemo_ele_dmg:"anemo_hit",anemo_ele_crit_dmg:"anemo_critHit",anemo_ele_avg_dmg:"anemo_avgHit",geo_ele_dmg:"geo_hit",geo_ele_crit_dmg:"geo_critHit",geo_ele_avg_dmg:"geo_avgHit",electro_ele_dmg:"electro_hit",electro_ele_crit_dmg:"electro_critHit",electro_ele_avg_dmg:"electro_avgHit",hydro_ele_dmg:"hydro_hit",hydro_ele_crit_dmg:"hydro_critHit",hydro_ele_avg_dmg:"hydro_avgHit",pyro_ele_dmg:"pyro_hit",pyro_ele_crit_dmg:"pyro_critHit",pyro_ele_avg_dmg:"pyro_avgHit",cryo_ele_dmg:"cryo_hit",cryo_ele_crit_dmg:"cryo_critHit",cryo_ele_avg_dmg:"cryo_avgHit",overload_dmg:"overload_hit",overload_dmg_bonus:"overload_dmg_",overload_multi:"overload_multi",electrocharged_dmg:"electrocharged_hit",electrocharged_dmg_bonus:"electrocharged_dmg_",electrocharged_multi:"electrocharged_multi",superconduct_dmg:"superconduct_hit",superconduct_dmg_bonus:"superconduct_dmg_",superconduct_multi:"superconduct_multi",burning_dmg:"burning_hit",burning_dmg_bonus:"burning_dmg_",swirl_dmg:"swirl_hit",swirl_dmg_bonus:"swirl_dmg_",swirl_multi:"swirl_multi",shatter_dmg:"shattered_hit",shatter_dmg_bonus:"shattered_dmg_",shatter_multi:"shattered_multi",crystalize_dmg:"crystalize_hit",crystalize_dmg_bonus:"crystalize_dmg_",melt_dmg_bonus:"melt_dmg_",vaporize_dmg_bonus:"vaporize_dmg_",pyro_vaporize_normal_dmg:"pyro_vaporize_normal_hit",pyro_vaporize_normal_crit_dmg:"pyro_vaporize_normal_critHit",pyro_vaporize_normal_avg_dmg:"pyro_vaporize_normal_avgHit",pyro_vaporize_chraged_dmg:"pyro_vaporize_chraged_hit",pyro_vaporize_chraged_crit_dmg:"pyro_vaporize_chraged_critHit",pyro_vaporize_chraged_avg_dmg:"pyro_vaporize_chraged_avgHit",pyro_vaporize_plunge_dmg:"pyro_vaporize_plunging_hit",pyro_vaporize_plunge_crit_dmg:"pyro_vaporize_plunging_critHit",pyro_vaporize_plunge_avg_dmg:"pyro_vaporize_plunging_avgHit",pyro_vaporize_skill_dmg:"pyro_vaporize_skill_hit",pyro_vaporize_skill_crit_dmg:"pyro_vaporize_skill_critHit",pyro_vaporize_skill_avg_dmg:"pyro_vaporize_skill_avgHit",pyro_vaporize_burst_dmg:"pyro_vaporize_burst_hit",pyro_vaporize_burst_crit_dmg:"pyro_vaporize_burst_critHit",pyro_vaporize_burst_avg_dmg:"pyro_vaporize_burst_avgHit",pyro_vaporize_ele_dmg:"pyro_vaporize_hit",pyro_vaporize_ele_crit_dmg:"pyro_vaporize_critHit",pyro_vaporize_ele_avg_dmg:"pyro_vaporize_avgHit",hydro_vaporize_normal_dmg:"hydro_vaporize_normal_hit",hydro_vaporize_normal_crit_dmg:"hydro_vaporize_normal_critHit",hydro_vaporize_normal_avg_dmg:"hydro_vaporize_normal_avgHit",hydro_vaporize_chraged_dmg:"hydro_vaporize_chraged_hit",hydro_vaporize_chraged_crit_dmg:"hydro_vaporize_chraged_critHit",hydro_vaporize_chraged_avg_dmg:"hydro_vaporize_chraged_avgHit",hydro_vaporize_plunge_dmg:"hydro_vaporize_plunging_hit",hydro_vaporize_plunge_crit_dmg:"hydro_vaporize_plunging_critHit",hydro_vaporize_plunge_avg_dmg:"hydro_vaporize_plunging_avgHit",hydro_vaporize_skill_dmg:"hydro_vaporize_skill_hit",hydro_vaporize_skill_crit_dmg:"hydro_vaporize_skill_critHit",hydro_vaporize_skill_avg_dmg:"hydro_vaporize_skill_avgHit",hydro_vaporize_burst_dmg:"hydro_vaporize_burst_hit",hydro_vaporize_burst_crit_dmg:"hydro_vaporize_burst_critHit",hydro_vaporize_burst_avg_dmg:"hydro_vaporize_burst_avgHit",hydro_vaporize_ele_dmg:"hydro_vaporize_hit",hydro_vaporize_ele_crit_dmg:"hydro_vaporize_critHit",hydro_vaporize_ele_avg_dmg:"hydro_vaporize_avgHit",pyro_melt_normal_dmg:"pyro_melt_normal_hit",pyro_melt_normal_crit_dmg:"pyro_melt_normal_critHit",pyro_melt_normal_avg_dmg:"pyro_melt_normal_avgHit",pyro_melt_chraged_dmg:"pyro_melt_chraged_hit",pyro_melt_chraged_crit_dmg:"pyro_melt_chraged_critHit",pyro_melt_chraged_avg_dmg:"pyro_melt_chraged_avgHit",pyro_melt_plunge_dmg:"pyro_melt_plunging_hit",pyro_melt_plunge_crit_dmg:"pyro_melt_plunging_critHit",pyro_melt_plunge_avg_dmg:"pyro_melt_plunging_avgHit",pyro_melt_skill_dmg:"pyro_melt_skill_hit",pyro_melt_skill_crit_dmg:"pyro_melt_skill_critHit",pyro_melt_skill_avg_dmg:"pyro_melt_skill_avgHit",pyro_melt_burst_dmg:"pyro_melt_burst_hit",pyro_melt_burst_crit_dmg:"pyro_melt_burst_critHit",pyro_melt_burst_avg_dmg:"pyro_melt_burst_avgHit",pyro_melt_ele_dmg:"pyro_melt_hit",pyro_melt_ele_crit_dmg:"pyro_melt_critHit",pyro_melt_ele_avg_dmg:"pyro_melt_avgHit",cryo_melt_normal_dmg:"cryo_melt_normal_hit",cryo_melt_normal_crit_dmg:"cryo_melt_normal_critHit",cryo_melt_normal_avg_dmg:"cryo_melt_normal_avgHit",cryo_melt_chraged_dmg:"cryo_melt_chraged_hit",cryo_melt_chraged_crit_dmg:"cryo_melt_chraged_critHit",cryo_melt_chraged_avg_dmg:"cryo_melt_chraged_avgHit",cryo_melt_plunge_dmg:"cryo_melt_plunging_hit",cryo_melt_plunge_crit_dmg:"cryo_melt_plunging_critHit",cryo_melt_plunge_avg_dmg:"cryo_melt_plunging_avgHit",cryo_melt_skill_dmg:"cryo_melt_skill_hit",cryo_melt_skill_crit_dmg:"cryo_melt_skill_critHit",cryo_melt_skill_avg_dmg:"cryo_melt_skill_avgHit",cryo_melt_burst_dmg:"cryo_melt_burst_hit",cryo_melt_burst_crit_dmg:"cryo_melt_burst_critHit",cryo_melt_burst_avg_dmg:"cryo_melt_burst_avgHit",cryo_melt_ele_dmg:"cryo_melt_hit",cryo_melt_ele_crit_dmg:"cryo_melt_critHit",cryo_melt_ele_avg_dmg:"cryo_melt_avgHit",enemy_phy_res:"physical_enemyRes_",enemy_phy_res_multi:"physical_enemyRes_multi",enemy_phy_immunity:"physical_enemyImmunity",anemo_enemy_ele_res:"anemo_enemyRes_",anemo_enemy_ele_res_multi:"anemo_enemyRes_multi",anemo_enemy_ele_immunity:"anemo_enemyImmunity",geo_enemy_ele_res:"geo_enemyRes_",geo_enemy_ele_res_multi:"geo_enemyRes_multi",geo_enemy_ele_immunity:"geo_enemyImmunity",electro_enemy_ele_res:"electro_enemyRes_",electro_enemy_ele_res_multi:"electro_enemyRes_multi",electro_enemy_ele_immunity:"electro_enemyImmunity",hydro_enemy_ele_res:"hydro_enemyRes_",hydro_enemy_ele_res_multi:"hydro_enemyRes_multi",hydro_enemy_ele_immunity:"hydro_enemyImmunity",pyro_enemy_ele_res:"pyro_enemyRes_",pyro_enemy_ele_res_multi:"pyro_enemyRes_multi",pyro_enemy_ele_immunity:"pyro_enemyImmunity",cryo_enemy_ele_res:"cryo_enemyRes_",cryo_enemy_ele_res_multi:"cryo_enemyRes_multi",cryo_enemy_ele_immunity:"cryo_enemyImmunity",ele_mas:"eleMas",amp_reaction_base_multi:"ampReactionBase_multi",enemy_level_multi:"enemyLevel_multi",enemy_level:"enemyLevel"},c={avg_dmg:"avgHit",dmg:"hit",crit_dmg:"critHit"},l=r(6),s=3;function u(){var e=d();if(e<2){Object.keys(localStorage).filter((function(e){return e.startsWith("character_")})).forEach((function(e){var t=Object(l.n)(e),r=t.characterKey,_=t.equippedArtifacts,n=void 0===_?{}:_,s="char_".concat(r);if(null===localStorage.getItem(s)){t.id,t.name;var u,d,m,g=t.dmgMode,y=Object(a.a)(t,["id","name","dmgMode"]);Array.isArray(null===y||void 0===y||null===(u=y.buildSetting)||void 0===u?void 0:u.mainStat)&&(y.buildSetting.mainStat=y.buildSetting.mainStat.map((function(e){return e in o?o[e]:e}))),"object"===typeof(null===y||void 0===y||null===(d=y.buildSetting)||void 0===d?void 0:d.statFilters)&&(y.buildSetting.statFilters=Object.fromEntries(Object.entries(y.buildSetting.statFilters).map((function(e){var t=Object(i.a)(e,2),r=t[0],a=t[1];return[r in o?o[r]:r,a]})))),y.hitMode=null!==(m=c[g])&&void 0!==m?m:Object.keys(c)[0],Object(l.r)(s,y),Object.values(n).forEach((function(e){var t=Object(l.n)(e);t&&(t.location=r,Object(l.r)(e,t))}))}else Object.values(n).forEach((function(e){var t=Object(l.n)(e);t&&(t.location="",Object(l.r)(e,t))}));localStorage.removeItem(e)}));var t=Object(l.n)("ArtifactDisplay.state");t&&(t.filterMainStatKey in o&&(t.filterMainStatKey=o[t.filterMainStatKey]),t.filterSubstats=t.filterSubstats.map((function(e){return e in o?o[e]:e})),Object(l.r)("ArtifactDisplay.state",t))}if(e<3){var r=Object(l.n)("CharacterDisplay.state");r&&(Array.isArray(r.elementalFilter)&&(r.elementalFilter=""),Array.isArray(r.weaponFilter)&&(r.weaponFilter=""),Object(l.r)("CharacterDisplay.state",r))}var u=n.a.populateDatebaseFromLocalStorage(),g=_.a.populateDatebaseFromLocalStorage();if(u||g){Object.values(Object(l.f)(_.a.getArtifactDatabase())).forEach((function(t){var r,i,a=!0;if(t.location)if(n.a.get(t.location)){var c=n.a.getArtifactIDFromSlot(t.location,t.slotKey);c?c!==t.id&&(t.location="",a=!1):n.a.equipArtifact(t.location,t)}else t.location="",a=!1;e<2&&(t.mainStatKey in o&&(t.mainStatKey=o[t.mainStatKey],a=!1),null===t||void 0===t||null===(r=t.substats)||void 0===r||r.forEach((function(e,r){e.key in o&&(t.substats[r].key=o[e.key],a=!1)})));e<3&&(delete t.currentEfficiency,delete t.maximumEfficiency,null===t||void 0===t||null===(i=t.substats)||void 0===i||i.forEach((function(e,t){delete e.efficiency,delete e.rolls})),a=!1);a||_.a.update(t)}));var y=n.a.getCharacterDatabase();Object.values(y).forEach((function(t){var r=!0,a=t.characterKey;if(t.equippedArtifacts||(t.equippedArtifacts={},r=!1),Object.entries(t.equippedArtifacts).forEach((function(e){var n=Object(i.a)(e,2),o=n[0],c=n[1],l=_.a.get(c);l&&l.location!==a&&_.a.moveToNewLocation(c,a),c&&!l&&(r=!1,t.equippedArtifacts[o]="")})),e<3){var o;if(delete t.artifactConditional,delete t.talentCondtiional,delete t.autoInfused,t.buildSetting){var c,l=null!==(c=t.buildSetting)&&void 0!==c?c:{},s=l.artifactsAssumeFull,u=void 0!==s&&s,d=l.ascending,m=void 0!==d&&d,g=l.mainStat,y=void 0===g?["","",""]:g,h=l.setFilters,p=void 0===h?[{key:"",num:0},{key:"",num:0},{key:"",num:0}]:h,v=l.useLockedArts,b=void 0!==v&&v;delete t.buildSetting,t.buildSettings={mainStatAssumptionLevel:u?20:0,ascending:m,mainStatKeys:y,setFilters:p,useLockedArts:b}}null===(o=t.weapon)||void 0===o||delete o.conditionalNum,r=!1}r||n.a.update(t)})),m(s)}}var d=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return parseInt(null!==(e=Object(l.n)("db_ver"))&&void 0!==e?e:t)},m=function(e){return Object(l.r)("db_ver",e)};function g(){var e,t,r,i=n.a.getCharacterDatabase(),a=_.a.getArtifactDatabase(),o=null!==(e=Object(l.n)("ArtifactDisplay.state"))&&void 0!==e?e:{},c=null!==(t=Object(l.n)("CharacterDisplay.state"))&&void 0!==t?t:{},s=null!==(r=Object(l.n)("BuildsDisplay.state"))&&void 0!==r?r:{};return{version:d(),characterDatabase:i,artifactDatabase:a,artifactDisplay:o,characterDisplay:c,buildsDisplay:s}}function y(e){var t=e.version,r=void 0===t?0:t,a=e.characterDatabase,_=e.artifactDatabase,n=e.artifactDisplay,o=e.characterDisplay,c=e.buildsDisplay;h(),Object.entries(a).forEach((function(e){var t=Object(i.a)(e,2),r=t[0],a=t[1];return Object(l.r)("char_".concat(r),a)})),Object.entries(_).forEach((function(e){var t=Object(i.a)(e,2),r=t[0],a=t[1];return Object(l.r)(r,a)})),m(r),Object(l.r)("ArtifactDisplay.state",n),Object(l.r)("CharacterDisplay.state",o),Object(l.r)("BuildsDisplay.state",c),u()}function h(){Object.keys(localStorage).filter((function(e){return e.startsWith("char_")||e.startsWith("artifact_")})).forEach((function(e){return localStorage.removeItem(e)})),localStorage.removeItem("db_ver"),localStorage.removeItem("ArtifactDisplay.state"),localStorage.removeItem("CharacterDisplay.state"),localStorage.removeItem("BuildsDisplay.state"),n.a.clearDatabase(),_.a.clearDatabase()}},6:function(e,t,r){"use strict";r.d(t,"j",(function(){return _})),r.d(t,"k",(function(){return n})),r.d(t,"n",(function(){return o})),r.d(t,"r",(function(){return c})),r.d(t,"f",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"b",(function(){return g})),r.d(t,"s",(function(){return y})),r.d(t,"l",(function(){return h})),r.d(t,"p",(function(){return p})),r.d(t,"m",(function(){return v})),r.d(t,"q",(function(){return b})),r.d(t,"g",(function(){return f})),r.d(t,"o",(function(){return j})),r.d(t,"e",(function(){return k})),r.d(t,"h",(function(){return O}));var i=r(16),a=r(40),_=function(e){return e[Math.floor(Math.random()*e.length)]};function n(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1)+e)}var o=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},c=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},l=function(e){return JSON.parse(JSON.stringify(e))},s=function(e,t){return Math.abs(e-t)<=.101},u=function(e,t){return Math.abs(e-t)<=1},d=function(e,t,r){return e<t?t:e>r?r:e},m=function(e){return e.length?e[e.length-1]:null},g=function(e){return d(e,0,100)};function y(e,t,r){return(new Array(r+1).join(t)+e).slice(-r)}function h(e,t){var r=0;e=e.toLowerCase(),t=t.toLowerCase();for(var i=0,a=Math.max(e.length,t.length);i<a;i++){var _=!0;e[i]&&t[i]&&e[i]===t[i]||(_=!1),e[i-1]!==t[i]&&e[i+1]!==t[i]||(_=!0),_||r++}return r}function p(e,t){return 1===t||Object.keys(e).forEach((function(r){"object"===typeof e[r]&&p(e[r],t),"number"===typeof e[r]&&(e[r]=e[r]*t)})),e}function v(e,t,r){return t.reduce((function(e,t,i,a){return i===a.length-1?e[t]=r:(e[t]||(e[t]={}),e[t])}),e),e}function b(e,t){return t.reduce((function(e,t){return null===e||void 0===e?void 0:e[t]}),e)}function f(e,t){var r=Object(a.a)(t),i=r.pop();delete b(e,r)[i]}function j(e){for(var t in e)"object"===typeof e[t]&&(j(e[t]),Object.keys(e[t]).length||delete e[t])}function k(e,t,r,_){r(e)?_(e,t):e&&"object"===typeof e&&Object.entries(e).forEach((function(e){var n=Object(i.a)(e,2),o=n[0];return k(n[1],[].concat(Object(a.a)(t),[o]),r,_)}))}function O(e,t){return"function"===typeof e?e(t):e}},74:function(e){e.exports=JSON.parse('{"a":"5.2.0"}')},84:function(e,t,r){},89:function(e,t,r){},90:function(e,t,r){},95:function(e,t,r){"use strict";r.r(t);var i=r(0),a=r.n(i),_=r(24),n=r.n(_),o=(r(84),r(39)),c=r(50),l=r(27),s=r(42),u=r(41),d=r(73),m=r(14),g=r(30),y=r(51),h=r(76),p=r(25),v=r(20),b=r(9),f=r(74),j=(r(89),r(90),r(59)),k=r(1),O=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(15)]).then(r.bind(null,280))})),H=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(3),r.e(9),r.e(13)]).then(r.bind(null,281))})),z=Object(i.lazy)((function(){return Promise.all([r.e(3),r.e(5),r.e(20)]).then(r.bind(null,274))})),D=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(3),r.e(10)]).then(r.bind(null,287))})),x=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(17)]).then(r.bind(null,279))})),S=Object(i.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(14),r.e(11)]).then(r.bind(null,282))})),A=Object(i.lazy)((function(){return Promise.all([r.e(18),r.e(23)]).then(r.bind(null,276))}));Object(j.b)();var L=function(){return Object(k.jsx)(v.a,{children:Object(k.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(k.jsxs)("div",{id:"content",className:"flex-grow-1",children:[Object(k.jsxs)(g.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(k.jsx)(g.a.Brand,{as:v.b,to:"/",children:"Genshin Optimizer"}),Object(k.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsxs)(g.a.Collapse,{id:"basic-navbar-nav",children:[Object(k.jsxs)(m.a,{className:"mr-auto",children:[Object(k.jsx)(m.a.Link,{as:v.b,to:"/artifact",children:"Artifacts"}),Object(k.jsx)(m.a.Link,{as:v.b,to:"/character",children:"Characters"}),Object(k.jsx)(m.a.Link,{as:v.b,to:"/build",children:"Builds"}),Object(k.jsx)(m.a.Link,{as:v.b,to:"/tools",children:"Tools"}),!1]}),Object(k.jsxs)(m.a,{children:[Object(k.jsx)(m.a.Link,{href:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",target:"_blank",rel:"noreferrer",onClick:function(){return p.a.outboundLink({label:"patreon"},(function(){}))},children:Object(k.jsxs)("span",{children:[Object(k.jsx)(l.a,{icon:o.c,className:"fa-fw"})," PayPal"]})}),Object(k.jsx)(m.a.Link,{href:"https://www.patreon.com/frzyc",target:"_blank",rel:"noreferrer",onClick:function(){return p.a.outboundLink({label:"patreon"},(function(){}))},children:Object(k.jsxs)("span",{children:[Object(k.jsx)(l.a,{icon:o.b,className:"fa-fw"})," Patreon"]})}),Object(k.jsx)(m.a.Link,{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",onClick:function(){return p.a.outboundLink({label:"discord"},(function(){}))},children:Object(k.jsxs)("span",{children:[Object(k.jsx)(l.a,{icon:o.a,className:"fa-fw"})," Discord"]})}),Object(k.jsx)(m.a.Link,{as:v.b,to:"/setting",children:Object(k.jsx)(l.a,{icon:c.d})})]})]})]}),Object(k.jsx)(i.Suspense,{fallback:Object(k.jsx)(d.a,{children:Object(k.jsx)(s.a,{bg:"darkcontent",text:"lightfont",className:"mt-2",children:Object(k.jsx)(s.a.Body,{children:Object(k.jsxs)("h3",{className:"text-center",children:["Loading... ",Object(k.jsx)(h.a,{animation:"border",variant:"primary"})]})})})}),children:Object(k.jsxs)(b.d,{children:[Object(k.jsx)(b.b,{path:"/artifact",component:H}),Object(k.jsx)(b.b,{path:"/character",component:z}),Object(k.jsx)(b.b,{path:"/build",component:D}),Object(k.jsx)(b.b,{path:"/tools",component:x}),!1,Object(k.jsx)(b.b,{path:"/setting",component:A}),Object(k.jsx)(b.b,{path:"/flex",component:S}),Object(k.jsx)(b.b,{path:"/",component:O})]})})]}),Object(k.jsx)(m.a,{id:"footer",className:"bg-dark",children:Object(k.jsxs)(y.a,{className:"w-100 ml-0 mr-0 mb-2 text-light d-flex justify-content-between",children:[Object(k.jsx)(u.a,{xs:"auto",children:Object(k.jsxs)("span",{children:[" ",Object(k.jsx)("small",{children:"Genshin Optimizer is not affiliated with or endorsed by miHoYo. "})]})}),Object(k.jsx)(u.a,{xs:"auto",children:Object(k.jsx)("span",{children:Object(k.jsxs)("small",{children:[" Genshin Optimizer Ver:",f.a," "]})})})]})})]})})},E=function(e){e&&e instanceof Function&&r.e(27).then(r.bind(null,277)).then((function(t){var r=t.getCLS,i=t.getFID,a=t.getFCP,_=t.getLCP,n=t.getTTFB;r(e),i(e),a(e),_(e),n(e)}))};p.a.initialize("UA-185058805-1",{}),n.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(L,{})}),document.getElementById("root")),E(void 0)}},[[95,7,8]]]);
//# sourceMappingURL=main.9ce7d740.chunk.js.map