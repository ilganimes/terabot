const Discord = require("discord.js");
const client = new Discord.Client();

client.login("token");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  //Set the prefix
  let prefix = "?";

  //Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix+ "priestjob")) {
    message.channel.send("As a priest you are to maximize the DPS of the party and keep you self & your teammates alive. Their is a five rules/tasks to do this that will be commands from priest1 to priest6. Also Priestcommands will show all priest commands");
    } else
  if (message.content.startsWith(prefix+ "priest1")) {
    message.channel.send("Is to focus on staying alive because if you die it can mean a wipe/reset boss/dugeion for the team. Now with that said you should always heal your self first than heal others because they can always be resurrected but you arent so easy to be resurrected.(command for these skill Priest1.1 to Priest1.4)");
    } else
  if (message.content.startsWith(prefix+ "Priest1.1")) {
    message.channel.send("Back Step is your main iframe to help you stay alive.");
    } else
  if (message.content.startsWith(prefix+ "Priest1.2")) {
    message.channel.send("Heal Thyself is your one of your main self healing skills");
    } else
  if (message.content.startsWith(prefix+ "Priest1.3")) {
    message.channel.send("Fiery Escape can be used to move a quick distance like to move out of way of an AoE but is not an iframe.");
    } else
  if (message.content.startsWith(prefix+ "Priest1.4")) {
    message.channel.send("Divine Respite is a last resort because it takes time to cast and has a long cooldown time but restore % of heath per second.");
    } else
  if (message.content.startsWith(prefix+ "priest2")) {
    message.channel.send("Is to keep your party alive you should priorities by role when healing Healer>Tank>DPS (command for these skill Priest2.1 to Priest2.8)" );
    } else
  if (message.content.startsWith(prefix+ "Priest2.1")) {
    message.channel.send("Focus Heal (Main healing skill but depends how your build is on how high the heal is) is a lock on skill");
    } else
  if (message.content.startsWith(prefix+ "Priest2.2")) {
    message.channel.send("Healing Immersion (Main healing skill that should be a little strong or a lot stronger then focus heal but depends how your build) is a lock on aoe heal");
    } else
  if (message.content.startsWith(prefix+ "Priest2.3")) {
    message.channel.send("Healing Circle (Main healing skill that should be a little strong or a lot stronger then focus heal but depends how your build) is an aoe circle heal");
    } else
  if (message.content.startsWith(prefix+ "Priest2.4")) {
    message.channel.send("Restorative Burst (Situational skill but if used should be on Tank mainly but also on DPS but shares a cooldown with healing circle) is an radius recovery healing aoe circle.");
    } else
  if (message.content.startsWith(prefix+ "Priest2.5")) {
    message.channel.send("Purifying Circle (Main Cleansing skill {which mean removes debuffs that are removeable}) its an AoE cleanse for you and teammates in a certain amount of metters from you");
    } else
  if (message.content.startsWith(prefix+ "Priest2.6")) {
    message.channel.send("Kaia Sheild (Main skill to reduce damage taken) it is used to saves lives it sheild teammates from damage only covers five people including your self");
    } else
  if (message.content.startsWith(prefix+ "Priest2.7")) {
    message.channel.send("Guardian Sanctuary (Situational skill that is used to reduce damage) is used to reduce damage for you and teammates with in certain radius from you");
    } else
  if (message.content.startsWith(prefix+ "Priest2.8")) {
    message.channel.send("Mana Charge (Main Skill to give mana) it gives mana in a certain radius from when you cast to teammates");
    } else
  if (message.content.startsWith(prefix+ "priest3")) {
    message.channel.send("Is to give your party & self buffs {make sure if anyone die when can rebuff them}(command for these skill Priest3.1 to Priest3.3)");
    } else
  if (message.content.startsWith(prefix+ "Priest3.1")) {
    message.channel.send("Grace of Resurrection (self-resurrection {self buff}) use this buff whenever possible if not active.");
    } else
  if (message.content.startsWith(prefix+ "Priest3.2")) {
    message.channel.send("Blessing of Shakan (offence buff {team & self buff}) is an aoe buff that increase movement and power. It also should have fleetfooted blessing glyph helps you stay alive.");
    } else
  if (message.content.startsWith(prefix+ "Priest3.3")) {
    message.channel.send("Blessing of Balder (defence buff {team & self buff}) is an aoe buff that increase endurance, resistance, and hp recovery.");
    } else
  if (message.content.startsWith(prefix+ "priest4")) {
    message.channel.send("Is boss debuff which is four skills but two are situational since some boss mechs call for sleep or boss cleanse(command for these skill Priest4.1 to Priest4.4)");
    } else
  if (message.content.startsWith(prefix+ "Priest4.1")) {
    message.channel.send("Energy Stars (should have both glyphs) it is used to give the team additonal power, crit factor, and attack speed but only grants it in a certain range should be keep on all times when possible.");
    } else
  if (message.content.startsWith(prefix+ "Priest4.2")) {
    message.channel.send("Triple Nemesis (should have glyph is 100% chance to decrease a target’s Endurance by 10% for 12 seconds) it is used to lower boss endurance allowing your team to do more damage {should be keep on all the time when possible but does not stack with Volley of Curses but does with contagion}.");
    } else
  if (message.content.startsWith(prefix+ "Priest4.3")) {
    message.channel.send("Plague of Exhaustion (is situational some boss require) it is lock on removes buffs on boss or players in most cases need to be casted at a certain time or it is a wipe");
    } else
  if (message.content.startsWith(prefix+ "Priest4.4")) {
    message.channel.send("Ishara’s Lullaby (is situational some boss require) it is lock on sleep skill need to be casted at a certain time or it is a wipe");
    } else
  if (message.content.startsWith(prefix+ "priest5")) {
    message.channel.send("Is postioning & animation lock these are very important it can mean you dieing a lot or little(command for these skill Priest5.1 to Priest5.2)");
    } else
  if (message.content.startsWith(prefix+ "Priest5.1")) {
    message.channel.send("Positioning is knowing where you should be on a certain boss {like some have lots of back attack then you want to be on side} so it best to study or look up boss patterns to know your postioning");
    } else
  if (message.content.startsWith(prefix+ "Priest5.2")) {
    message.channel.send("Animation Lock is the time you get stuck in an animation of casting a skill like focus heal or resurrection (but need to note some cant be cancled some can be and attack speed help with this as well)");
    } else
  if (message.content.startsWith(prefix+ "Priest6")) {
    message.channel.send("Callouts which in most cases expected to do especail on some mech either through text, voice or what ever you can");
    } else
  if (message.content.startsWith(prefix+ "priestgear")) {
    message.channel.send("Following commands will cover the rolls for you gear this includes weapon, armor, belt, jewelry, circlet, etching, innerwears and much much more. Those command will start from priest(gear) example priestweapon.");
    } else
  if (message.content.startsWith(prefix+ "priestweapon")) {
    message.channel.send("Weapon rolls are {Top skill cooldown by 7.2%, Option 1: healing skills by 6%, Option 2: Attack Speed by 4.5%, & Option 3: skill cooldown by 7.2%} or {Top Attack Speed by 9%, Option 1: healing skills by 6%, Option 2: Attack Speed by 4.5%, & Option 3: skill cooldown by 7.2%}.");
    } else
  if (message.content.startsWith(prefix+ "priestchest")) {
    message.channel.send("Chest rolls are {Top Kaia shield cooldown, Option 1: damage taken by 6%, Option 2: Raises max HP by 8%, & damage from enraged monsters by 10%} or {Top Kaia shield cooldown, Option 1: damage taken by 6%, Option 2: frontal attacks by 6.9%, & damage from enraged monsters by 10%} or {Top Focus Heal +15%, Option 1: damage taken by 6%, Option 2: frontal attacks by 6.9%, & damage from enraged monsters by 10%}.");
    } else
  if (message.content.startsWith(prefix+ "priestglove")) {
    message.channel.send("Glove rolls are {Endurance by 12, Healing skills by 3%, & Attack Speed by 2.25%}.");
    } else
  if (message.content.startsWith(prefix+ "priestboot")) {
    message.channel.send("Boots rolls are {Movement Speed by 6%, Endurance by 4, & Replenishes 1% MP}.");
    } else
  if (message.content.startsWith(prefix+ "priestbelt")) {
    message.channel.send("Belt rolls are {Increase Crit Factor by 6 & Increase Crit Factor by 4} or {Increase Crit Factor by 6 & Raises max hp by 2.3%}.");
    } else
  if (message.content.startsWith(prefix+ "priestjewelry")) {
    message.channel.send("Jewelry should have 5 Crit Accessorys rolls should be {Necklace - Increase Healing by 256}, {Rings - Increase Healing by  217 & 256} & {Earrings Increase Healing by 217 & 256 or Increase HP by 2% & 4%}.");
    } else
  if (message.content.startsWith(prefix+ "priestcirclet")) {
    message.channel.send("Circlet: rolls are {Crit Factor by 8} or {Endurance by 8}.");
    } else
  if (message.content.startsWith(prefix+ "priestbrooch")) {
    message.channel.send("Brooch Superior Cleansing rolls are {Increase Crit Factor by 4, Increase Crit Factor by 6}.");
    } else
  if (message.content.startsWith(prefix+ "priestinner")) {
    message.channel.send("innerwears are {Insulated} or {Fitness}.");
    } else
  if (message.content.startsWith(prefix+ "priestetching")) {
    message.channel.send("Etching are {Weapons & Gloves - Energetic II/III/IV (Permanently are best but if not II for temporaries)} & {Armor & Boots - Grounded II/III/IV (Permanently are best but if not II of temporaries)}.");
    } else
  if (message.content.startsWith(prefix+ "priestcystals")) {
    message.channel.send("Following commands will cover the cystals you want on your weapon, armor, & accessories. Those command will start from priestcystal1 to priestcystal3)");
    } else
  if (message.content.startsWith(prefix+ "priestcystal1")) {
    message.channel.send("Weapon are {Swift, Carving, and 2 Brilliant(main PvE & PvP)} or {Swift, Carving, and 2 Pounding (Situational like mobs[Main PvE])}.");
    } else
  if (message.content.startsWith(prefix+ "priestcystal2")) {
    message.channel.send("Armor are {4 Hardy(main PvE)} or {4 Rentless(main PvP)}.");
    } else
  if (message.content.startsWith(prefix+ "priestcystal3")) {
    message.channel.send("Accessory/Jewelry are {4 Succoring Vyrsk(main PvE)}, {4 Swift Vyrsk(PvE or PvP), {4 Rentless Vyrsk(Situational certain dugeion might require)[Main PvE]}, or {4 Indomitable Zyrk (PvP)}.");
    } else
  if (message.content.startsWith(prefix+ "priestglyph")) {
    message.channel.send("Beginner glyph build https://cdn.discordapp.com/attachments/327169128031059979/340240069682003968/unknown.png, Sleepyheather glyph build https://cdn.discordapp.com/attachments/327169128031059979/327174132477198336/TERA_ScreenShot_20170606_182223.png.");
    } else
  if (message.content.startsWith(prefix+ "priestdoc")) {
    message.channel.send("The how to priest google document https://docs.google.com/spreadsheets/d/1hfHK6ASzfiByzCJZzgT1jZ_mrJCf1Du7X97Ubd_Z9qE/edit?usp=sharing");
    } else
  if (message.content.startsWith(prefix+ "mysticjob")) {
    message.channel.send("As a mystic you are to maximize the DPS of the party and keep you self & your teammates alive. Their is a five rules/tasks to do this that will be commands from Mystic1 to Mystic6. Also mysticcommands will show all mystic commands");
    } else
  if (message.content.startsWith(prefix+ "mystic1")) {
    message.channel.send("Is to focus on staying alive because if you die it can mean a wipe/reset boss/dugeion for the team. Now with that said you should always heal your self first than heal others because they can always be resurrected but you arent so easy to be resurrected.(command for these skill Mystic1.1 to Mystic1.3)");
    } else
  if (message.content.startsWith(prefix+ "Mystic1.1")) {
    message.channel.send("Teleport Jaunt is your main iframe to help you stay alive.");
    } else
  if (message.content.startsWith(prefix+ "Mystic1.2")) {
    message.channel.send("Arun’s Vitae is your one of your main self healing skills if you eat the mote (but if you glyph Restoration {Immediately recovers 20% of total HP})");
    } else
  if (message.content.startsWith(prefix+ "Mystic1.3")) {
    message.channel.send("Corruption Ring can be glyph to reduce damage taken by 50% while casting");
    } else
  if (message.content.startsWith(prefix+ "mystic2")) {
    message.channel.send("Is to keep your party alive you should priorities by role when healing Healer>Tank>DPS (command for these skill Mystic2.1 to Mystic2.7)" );
    } else
  if (message.content.startsWith(prefix+ "Mystic2.1")) {
    message.channel.send("Titanic Favor (Main healing skill but depends how your build is on how high the heal is) is a lock on skill");
    } else
  if (message.content.startsWith(prefix+ "Mystic2.2")) {
    message.channel.send("Boomerang Pulse (Main healing skill that should be a little weaker then titanic favor that should be glyph for cooldown) it is a healing and damage boomerang skill that comeback");
    } else
  if (message.content.startsWith(prefix+ "Mystic2.3")) {
    message.channel.send("Warding Totem (always use) it is an totem that has a radius healing for team within range.");
    } else
  if (message.content.startsWith(prefix+ "Mystic2.4")) {
    message.channel.send("Arun’s Vitae is your one of your self but also team healing skill throwing a healing ball once pick up recovers hp over time");
    } else
  if (message.content.startsWith(prefix+ "Mystic2.5")) {
    message.channel.send("Arun’s Tears is your one of your self but also team mana skill throwing a mana ball once pick up recovers mp over time");
    } else
  if (message.content.startsWith(prefix+ "Mystic2.6")) {
    message.channel.send("Arun’s Cleansing Touch (Main Cleansing skill {which mean removes debuffs that are removeable}) its an lock on cleanse for you and teammates up to maximum of five if glyphed");
    } else
  if (message.content.startsWith(prefix+ "Mystic2.7")) {
    message.channel.send("Corruption Ring (Main Skill to give mana) it gives mana if you drain hp from an target (first cast is hp drain second cast gives mana) in a certain radius from when you cast to teammates");
  } else
  if (message.content.startsWith(prefix+ "mystic3")) {
    message.channel.send("Is to give your party & self buffs {make sure if you die recast buff}(command for these skill Mystic3.1 to Mystic3.7)");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.1")) {
    message.channel.send("Vow of Rebirth (teammates and self-resurrection (should be glyph for self, another target and cooldown) use this buff whenever possible if not active on who needs it.");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.2")) {
    message.channel.send("Aura of the Merciless (offence buff team & self buff) is center around you if you die or move to far away they lose the buff which increase power, attack speed and crit factor {Used with Aura of the Tenacious}.");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.3")) {
    message.channel.send("Aura of the Tenacious (other buff team & self buff) is center around you if you die or move to far away they lose the buff which gives mp to the team per second {Used with Aura of the Merciless}.");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.4")) {
    message.channel.send("Thrall of Protection (offence/defence buff team & self buff {only if glyphed Grounding which Increases all party members’ Endurance by 10% for 10 minutes.}) is used to give teammates increase defence which should be casted before fights.");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.5")) {
    message.channel.send("Aura of the Swift (offence/defence mostly used in PvP for team & self buff) is center around you if you die or move to far away they lose the buff which gives incease in movement speed by 30% {Used with Aura of the Unyielding}.");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.6")) {
    message.channel.send("Aura of the Unyielding (ooffence/defence mostly used in PvP for team & self buff) is center around you if you die or move to far away they lose the buff which gives incease crit resist factor by 40% {Aura of the Swift}.");
    } else
  if (message.content.startsWith(prefix+ "Mystic3.7")) {
    message.channel.send("Aura of the Merciless cant be used with Aura of the Swift & Aura of the Tenacious cant be used with Aura of the Unyielding. Also Vow of Rebirth cant be used on Grace one cancles out the other.");
    } else
  if (message.content.startsWith(prefix+ "mystic4")) {
    message.channel.send("Is boss debuff which is four skills but two are situational since some boss mechs call for sleep or boss cleanse(command for these skill Mystic4.1 to Mystic4.4)");
    } else
  if (message.content.startsWith(prefix+ "Mystic4.1")) {
    message.channel.send("Volley of Curses (should have glyph is decrease a target’s Endurance by 9% for 21 seconds) it is used to lower boss endurance allowing your team to do more damage {should be keep on all the time when possible does not stack with priest triple nemesis}.");
    } else
  if (message.content.startsWith(prefix+ "Mystic4.2")) {
    message.channel.send("Contagion (should be glyph for increase duration) it is used to lower boss endurance allowing your team to do more damage {should be keep on all the time when possible and does stack with Priest Triple Nemesis or Mystic Volley of Curses}.");
    } else
  if (message.content.startsWith(prefix+ "Mystic4.3")) {
    message.channel.send("Regression (is situational some boss require) it is radius casted skill of 8 meters removes buffs on boss or players in most cases need to be casted at a certain time or it is a wipe");
    } else
  if (message.content.startsWith(prefix+ "Mystic4.4")) {
    message.channel.send("Sonorous Dreams (is situational some boss require) it is lock on sleep skill need to be casted at a certain time or it is a wipe");
    } else
  if (message.content.startsWith(prefix+ "mystic5")) {
    message.channel.send("Is postioning & animation lock these are very important it can mean you dieing a lot or little(command for these skill Mystic5.1 to Mystic5.2)");
    } else
  if (message.content.startsWith(prefix+ "Mystic5.1")) {
    message.channel.send("Positioning is knowing where you should be on a certain boss {like some have lots of back attack then you want to be on side} so it best to study or look up boss patterns to know your postioning");
    } else
  if (message.content.startsWith(prefix+ "Mystic5.2")) {
    message.channel.send("Animation Lock is the time you get stuck in an animation of casting a skill like titanic favor or resurrection (but need to note some cant be cancled some can be and attack speed help with this as well)");
    } else
  if (message.content.startsWith(prefix+ "Mystic6")) {
    message.channel.send("Callouts which in most cases expected to do especail on some mech either through text, voice or what ever you can");
    } else
  if (message.content.startsWith(prefix+ "mysticgear")) {
    message.channel.send("Following commands will cover the rolls for you gear this includes weapon, armor, belt, accessory, circlet, etching, innerwears and much much more. Those command will start from mystic(gear) example mysticweapon.");
    } else
  if (message.content.startsWith(prefix+ "mysticweapon")) {
    message.channel.send("Weapon rolls are {Top skill cooldown by 7.2%, Option 1: healing skills by 6%, Option 2: Attack Speed by 4.5%, & Option 3: skill cooldown by 7.2%}.");
    } else
  if (message.content.startsWith(prefix+ "mysticchest")) {
    message.channel.send("Chest rolls are {Top Teleport Jaunt cooldown, Option 1: damage taken by 6%, Option 2: frontal attacks by 6.9%,& damage from enraged monsters by 10%}.");
    } else
  if (message.content.startsWith(prefix+ "mysticgloves")) {
    message.channel.send("Glove rolls are {Endurance by 12, Healing skills by 3%, & Attack Speed by 2.25%}.");
    } else
  if (message.content.startsWith(prefix+ "mysticboot")) {
    message.channel.send("Boots rolls are {Movement Speed by 6%, Endurance by 4, & Replenishes 1% MP}.");
    } else
  if (message.content.startsWith(prefix+ "mysticbelt")) {
    message.channel.send("Belt rolls are {Increase Crit Factor by 6 & Increase Crit Factor by 4} or {Increase Crit Factor by 6 & Raises max hp by 2.3%}.");
    } else
  if (message.content.startsWith(prefix+ "mysticjewelry")) {
    message.channel.send("Jewelry should have 5 Crit Accessorys rolls should be {Necklace - Increase Healing by 256}, {Rings - Increase Healing by  217 & 256} & {Earrings - Increase Healing by 217 & 256 or Increase HP by 2% & 4%}.");
    } else
  if (message.content.startsWith(prefix+ "mysticcirclet")) {
    message.channel.send("Circlet: rolls are {Endurance by 8} or {Crit Factor by 8}.");
    } else
  if (message.content.startsWith(prefix+ "mysticbrooch")) {
    message.channel.send("Brooch Superior Cleansing rolls are {Increase Crit Factor by 4, Increase Crit Factor by 6}.");
    } else
  if (message.content.startsWith(prefix+ "mysticinner")) {
    message.channel.send("innerwears are {Insulated} or {Fitness}.");
    } else
  if (message.content.startsWith(prefix+ "mysticetching")) {
    message.channel.send("Etching are {Weapons & Gloves - Energetic II/III/IV (Permanently are best but if not II for temporaries)} & {Armor & Boots - Grounded II/III/IV (Permanently are best but if not II of temporaries)}.");
    } else
  if (message.content.startsWith(prefix+ "mysticcystals")) {
    message.channel.send("Following commands will cover the cystals you want on your weapon, armor, & accessories. Those command will start from mysticcystal1 to mysticcystal3)");
    } else
  if (message.content.startsWith(prefix+ "mysticcystal1")) {
    message.channel.send("Weapon are {Swift, Carving, and 2 Brilliant(main PvE & PvP)} or {Swift, Carving, and 2 Pounding (Situational like mobs[Main PvE])}.");
    } else
  if (message.content.startsWith(prefix+ "mysticcystal2")) {
    message.channel.send("Armor are {4 Hardy(main PvE)} or {4 Rentless(main PvP)}.");
    } else
  if (message.content.startsWith(prefix+ "mysticcystal3")) {
    message.channel.send("Accessory/Jewelry are {4 Succoring Vyrsk(main PvE)}, {4 Rentless Vyrsk(Situational certain dugeion might require)[Main PvE]}, or {4 Indomitable Zyrk (PvP)}.");
    } else
  if (message.content.startsWith(prefix+ "mysticcglyph")) {
    message.channel.send("Main glyph build https://cdn.discordapp.com/attachments/327169128031059979/340243872464502804/unknown.png.");
    } else
  if (message.content.startsWith(prefix+ "mysticdoc")) {
    message.channel.send("The how to mystic google document https://docs.google.com/spreadsheets/d/1JNH22eaWFw_7ESKN92V4kvLgz6dmVXSgzQgoP_fflhQ/edit?usp=sharing");
    } else
  if (message.content.startsWith(prefix+ "valkjob")) {
    message.channel.send("As a Valkyrie you are burst DPS (melee class) which means you should behind/back crit. commands from valk1 to valk6. Also Valkcommands will show all Valkyrie commands");
    } else
  if (message.content.startsWith(prefix+ "valk1")) {
    message.channel.send("The next few command will cover skills to keep you alive so you can keep dpsing these skill are commands from Valk1.1 to Valk1.4).");
    } else
  if (message.content.startsWith(prefix+ "Valk1.1")) {
    message.channel.send("Evasion is your main iframe to help you stay alive.");
    } else
  if (message.content.startsWith(prefix+ "Valk1.2")) {
    message.channel.send("Backstab is your second iframe that Teleport your to back of boss.");
    } else
  if (message.content.startsWith(prefix+ "Valk1.3")) {
    message.channel.send("Charge can be used to move a quick distance like to move out of way of an AoE but is not an iframe.");
    } else
  if (message.content.startsWith(prefix+ "Valk1.4")) {
    message.channel.send("Balder’s Tears reduce receive damage by 70% of damage per orb also grants immunity to Knockdown and Stagger.");
    } else
  if (message.content.startsWith(prefix+ "valk2")) {
    message.channel.send("The next few command will cover skills that should be using and are main skills these skill will be commands Valk2.1 to Valk2.8)" );
    } else
  if (message.content.startsWith(prefix+ "Valk2.1")) {
    message.channel.send("Shining Crescent burst damage skill that if full Runemarks 8 can trigger it twice (definitely want skill cooldown and damage glyphed).");
    } else
  if (message.content.startsWith(prefix+ "Valk2.2")) {
    message.channel.send("Runeburst it has many uses for mobs, filer or Ragnarok Point regeneration should be used when Shining Crescent on cooldown");
    } else
  if (message.content.startsWith(prefix+ "Valk2.3")) {
    message.channel.send("Bloodflower its main purpose is to produce Ragnarok Point but it also stuns mobs (if evasion has glyph for this skill cooldown if you do perfect evasion you can spam it more often).");
    } else
  if (message.content.startsWith(prefix+ "Valk2.4")) {
    message.channel.send("Maelstrom is an important dps skill that does quite a bit of damage but aslo gives 6 runemarks if all hit successfully.");
    } else
  if (message.content.startsWith(prefix+ "Valk2.5")) {
    message.channel.send("Glaive Strike is an important dps skill especail when it crit but it also gives two Runemark");
    } else
  if (message.content.startsWith(prefix+ "Valk2.6")) {
    message.channel.send("Spinning Death is a 3 hit combo skill that on third hit generates 1 Runemark but aslo if glyph increase all skill damage by 20% for 3 seconds");
    } else
  if (message.content.startsWith(prefix+ "Valk2.7")) {
    message.channel.send("Dark Herald great for gathering mobs & can stun mobs for 3 seconds but if glyph can also do bonus damage with Runeburst");
    } else
  if (message.content.startsWith(prefix+ "Valk2.8")) {
    message.channel.send("Ragnarok it is used when your Ragnarok Point gauge is full that gives lots of stats bonus but main one is coodldown of certain skills by almost half should be used often and glyphed");
    } else
  if (message.content.startsWith(prefix+ "valk3")) {
    message.channel.send("You have one party buffs that is Titansbane its a skill that when you use gives your team extra damage but make you stationary and cant move when using so becareful.");
    } else
  if (message.content.startsWith(prefix+ "valk4")) {
    message.channel.send("Combo/Rotations are is the skill you want to use the most do the most dps(command for these skill Valk4.1 to Valk4.3).");
    } else
  if (message.content.startsWith(prefix+ "Valk4.1")) {
    message.channel.send("Main combo is to cast Maelstrom, 3 spinning death, back stab, then Shining Crescent (https://cdn.discordapp.com/attachments/335313058287190017/340156012453691392/unknown.png).");
    } else
  if (message.content.startsWith(prefix+ "Valk4.2")) {
    message.channel.send("Filler combo is to cast Bloodflower, Leaping Slash, Glaive Strike, Windslash, Leaping Slash, Ground Bash, 3 spinning death, Dark Herald, Runeburst (https://cdn.discordapp.com/attachments/335313058287190017/340158719985844224/unknown.png).");
    } else
  if (message.content.startsWith(prefix+ "Valk4.3")) {
    message.channel.send("Full Ragnarok combo is to cast  Maelstrom, 3 spinning death, back stab, Shining Crescent, Bloodflower, Leaping Slash, Glaive Strike, Windslash, before Ragnarok ends use Titansbane (https://cdn.discordapp.com/attachments/335313058287190017/340158719985844224/unknown.png).");
    } else
  if (message.content.startsWith(prefix+ "valk5")) {
    message.channel.send("Is Animation lock these are very important it can mean you dieing a lot or little(command for these skill Valk5.1).");
    } else
  if (message.content.startsWith(prefix+ "Valk5.1")) {
    message.channel.send("Animation Lock is the time you get stuck in an animation of casting a skill like Shining Crescent (need to note some cant be cancled but some can be & attack speed help with this as well)");
    } else
  if (message.content.startsWith(prefix+ "valk6")) {
    message.channel.send("Your excepted to watch for callouts, keep healer alive from mobs or kill mobs in general, & carry a resurrection scrolls on you at all times");
    } else
  if (message.content.startsWith(prefix+ "valkgear")) {
    message.channel.send("Following commands will cover the rolls for you gear this includes weapon, armor, belt, accessory, circlet, etching, innerwears and much much more. Those command will start from valk(gear) example valkweapon");
    } else
  if (message.content.startsWith(prefix+ "valkweapon")) {
    message.channel.send("Weapon rolls are {Top Enraged Damage by 9.3%, Option 1: Enraged Damage by 9.3%, Option 2: Back Damage by 6.9%, & Option 3: Reduce Cooldown by 7.2%}.");
    } else
  if (message.content.startsWith(prefix+ "valkchest")) {
    message.channel.send("Chest rolls are {Bloodflower – Replenish 15 Ragnarok Points on every hit, Option 1: dam taken by 6%, Option 2: frontal attacks by 6.9%, & damage from enraged monsters by 10%}.");
    } else
  if (message.content.startsWith(prefix+ "valkgloves")) {
    message.channel.send("Glove rolls are {Crit Factor by 9, Power by 5, & Attack Speed by 2.25%}.");
    } else
  if (message.content.startsWith(prefix+ "valkboot")) {
    message.channel.send("Boots rolls are {Movement Speed by 6%, Endurance by 4, & Replenishes 1% MP}.");
    } else
  if (message.content.startsWith(prefix+ "valkbelt")) {
    message.channel.send("Belt rolls are {Increases Crit Factor by 6, Increases Power by 3}.");
    } else
  if (message.content.startsWith(prefix+ "valkJewelry")) {
    message.channel.send("Jewelry should have 5 Power Accessory rolls should be {Necklace - Power by 4}, {Rings - Crit Factor by 4 & Power by 4 (recommended) or Power by 4 & Power by 2.} & {Earrings Increase Endurance by 4 & Increase HP by 4%}.");
    } else
  if (message.content.startsWith(prefix+ "valkcirclet")) {
    message.channel.send("Circlet: rolls are {Power 4 or Crit Factor by 8}.");
    } else
  if (message.content.startsWith(prefix+ "valkbrooch")) {
    message.channel.send("Quickcarve Brooch {Increase Crit Factor by 6& Increase Crit Factor by 4} or Empowered Brooch/Quarterfoil Brooch {Increase Crit Factor by 6, Increase Power by 3}.");
    } else
  if (message.content.startsWith(prefix+ "valkinner")) {
    message.channel.send("innerwears are {Empowered}.");
    } else
  if (message.content.startsWith(prefix+ "valkethcing")) {
    message.channel.send("Etching are {Weapons & Gloves - Energetic II/III/IV (Permanently are best but if not II for temporaries)} & {Armor & Boots - Grounded II/III/IV (Permanently are best but if not II of temporaries)}.");
    } else
  if (message.content.startsWith(prefix+ "valkcystals")) {
    message.channel.send("Following commands will cover the cystals you want on your weapon, armor, & accessories. Those command will start from valkcystal1 to valkcystal3)");
    } else
  if (message.content.startsWith(prefix+ "valkcystal1")) {
    message.channel.send("Weapon are {Focused, Bitter, Savage, & Pounding (main PvE)}.");
    } else
  if (message.content.startsWith(prefix+ "valkcystal2")) {
    message.channel.send("Armor are {4 Hardy(main PvE)} or {4 Rentless(main PvP)}.");
    } else
  if (message.content.startsWith(prefix+ "valkcystal3")) {
    message.channel.send("Accessory/Jewelry are {4 Powerful Vyrsk (Main PvE with Mystic Party)} or {4 Keen Vyrsk (Alt PvE with Priest Party)}.");
    } else
  if (message.content.startsWith(prefix+ "valkglyph")) {
    message.channel.send("Main glyph build https://cdn.discordapp.com/attachments/335280244107771904/339803229825269760/unknown.png");
    } else
  if (message.content.startsWith(prefix+ "valkdoc")) {
    message.channel.send("The how to Valk google document {https://docs.google.com/spreadsheets/d/1eHWAX1iRPj0Y1ROU79GMpuaE8SAe_qR8L17hdlczqbQ/edit?usp=sharing} or essentialmana guide {https://www.essentialmana.com/valkyrie-guide/}");
    } else
  if (message.content.startsWith(prefix+ "ninjajob")) {
    message.channel.send("As a Ninja you are burst DPS (melee class) which means you should behind/back crit. commands from ninja1 to ninja6. Also Ninjacommands will show all Ninja commands");
    } else
  if (message.content.startsWith(prefix+ "ninja1")) {
    message.channel.send("The next few command will cover skills to keep you alive so you can keep dpsing these skill are commands from Ninja1.1 to Ninja1.6).");
    } else
  if (message.content.startsWith(prefix+ "Ninja1.1")) {
    message.channel.send("Shadow Jump is your main iframe to help you stay alive.");
    } else
  if (message.content.startsWith(prefix+ "Ninja1.2")) {
    message.channel.send("Decoy Jutus is an iframe that Teleport your to back of boss.");
    } else
  if (message.content.startsWith(prefix+ "Ninja1.3")) {
    message.channel.send("Thousand Cuts is ab iframe that can help you stay alive.");
    } else
  if (message.content.startsWith(prefix+ "Ninja1.4")) {
    message.channel.send("Jagged path is an iframe but most used to move a quick distance like to move out of way of an AoE.");
    } else
  if (message.content.startsWith(prefix+ "Ninja1.5")) {
    message.channel.send("Impact Bomb can be used to move a quick distance like to move out of way of an AoE but is not an iframe.");
    } else
  if (message.content.startsWith(prefix+ "Ninja1.6")) {
    message.channel.send("Smoke bomb can be used to as an iframe for 3 second for not just you but anyone in circle but does not work in all dungeon.");
    } else
  if (message.content.startsWith(prefix+ "ninja2")) {
    message.channel.send("The next few command will cover skills that should be using and are main skills these skill will be commands Ninja2.1 to Ninja2.8)." );
    } else
  if (message.content.startsWith(prefix+ "Ninja2.1")) {
    message.channel.send("Fire Avalanche it is a burst damage skill that uses chi can used three times (definitely want skill damage and crit glyphed).");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.2")) {
    message.channel.send("Burning Heart it is a burst damage skill that uses chi can used till out of chi should be used when Fire Avalanche on cooldown (should have increase skill damage glyphed).");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.3")) {
    message.channel.send("Double Cut it is used the most because of it's high damage, cooldowns and power linked to Skyfall (should have glyph Skyfall power link, cooldown, & crit).");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.4")) {
    message.channel.send("Double Jutsu it is used cooldowns and power linked to Double cut (should have glyph Double cut power link, cooldown, & crit).");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.5")) {
    message.channel.send("Skyfall is an important dps skill that powerlinked to circle of steel (should have glyphed circle of steel power link and crit).");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.6")) {
    message.channel.send("Circle of Steel is an important dps skill that is does most damage since it powerlinked to skyfall (should have glyphed");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.7")) {
    message.channel.send("Attunement generates chi");
    } else
  if (message.content.startsWith(prefix+ "Ninja2.7")) {
    message.channel.send("Chalk Thrust great for stun mobs.");
    } else
  if (message.content.startsWith(prefix+ "ninja3")) {
    message.channel.send("You have two solo buff that is {Focus this skill increase skill damage by 5% then has a stacking bonus from 1 to 10 for every 5 seconds goes up one stack unless you get hit (also not when you teleport you use it and had has to be recasted or when you die) this totals up to 15% skill damage} & jagged edge gives 10% skill damage if glyph totaling to 25% skill damage.");
    } else
  if (message.content.startsWith(prefix+ "ninja4")) {
    message.channel.send("combo/Rotations are is the skill you want to use the most do the most dps(command for these skill Ninja4.1 to Ninja4.3).");
    } else
  if (message.content.startsWith(prefix+ "Ninja4.1")) {
    message.channel.send("Main combo is to cast Double Cut, Skyfall, Decoy Jutsu, Double Cut, Circle of Steel, Auto Attack, Double Cut, Skyfall, Jagged Path, Decoy Jutus.");
    } else
  if (message.content.startsWith(prefix+ "Ninja4.2")) {
    message.channel.send("Full Chi main combo is to cast/use brooch, Fire Avalanche, Jagged Path, Fire Avalanche & Fire Avalanche.");
    } else
  if (message.content.startsWith(prefix+ "Ninja4.3")) {
    message.channel.send("Full Chi alt combo is to cast/use brooch, Jagged Path, Burning Heart (till out of chi).");
    } else
  if (message.content.startsWith(prefix+ "ninja5")) {
    message.channel.send("Is Animation lock these are very important it can mean you dieing a lot or little(command for these skill ninja5.1).");
    } else
  if (message.content.startsWith(prefix+ "Ninja5.1")) {
    message.channel.send("Animation Lock is the time you get stuck in an animation of casting a skill like Circle of Steel (need to note some cant be cancled but some can be & attack speed help with this as well)");
    } else
  if (message.content.startsWith(prefix+ "ninja6")) {
    message.channel.send("Your excepted to watch for callouts, keep healer alive from mobs or kill mobs in general, & carry a resurrection scrolls on you at all times");
    } else
  if (message.content.startsWith(prefix+ "ninjagear")) {
    message.channel.send("Following commands will cover the rolls for you gear this includes weapon, armor, belt, accessory, circlet, etching, innerwears and much much more. Those command will start from ninja(gear) example ninjaweapon");
    } else
  if (message.content.startsWith(prefix+ "ninjaweapon")) {
    message.channel.send("Weapon rolls are {Top Enraged Damage by 9.3%, Option 1: Enraged Damage by 9.3%, Option 2: Back Damage by 6.9%, & Option 3: Damage by 6%}.");
    } else
  if (message.content.startsWith(prefix+ "ninjachest")) {
    message.channel.send("Chest rolls are {Top dam Double Cut by 12%, Option 1: damage taken by 6%, Option 2: frontal attacks by 6.9%, & damage from enraged monsters by 10%} or {Top dam Skyfall by 12%, Option 1: damage taken by 6%, Option 2: frontal attacks by 6.9%, & damage from enraged monsters by 10%}.");
    } else
  if (message.content.startsWith(prefix+ "ninjagloves")) {
    message.channel.send("Glove rolls are {Crit Factor by 9, Power by 5, & Attack Speed by 2.25%}.");
    } else
  if (message.content.startsWith(prefix+ "ninjaboot")) {
    message.channel.send("Boots rolls are {Movement Speed by 6%, Endurance by 4, & Replenishes 1% MP}.");
    } else
  if (message.content.startsWith(prefix+ "ninjabelt")) {
    message.channel.send("Belt rolls are {Increases Crit Factor by 6, Increases Power by 3}.");
    } else
  if (message.content.startsWith(prefix+ "ninjaJewelry")) {
    message.channel.send("Jewelry should have 5 Crit Accessory rolls should be {Necklace - Power by 4}, {Rings - Crit Factor by 4 & Power by 4} & {Earrings Increase Endurance by 4 & Increase HP by 4%}.");
    } else
  if (message.content.startsWith(prefix+ "ninjacirclet")) {
    message.channel.send("Circlet: rolls are {Power 4 or Crit Factor by 8}.");
    } else
  if (message.content.startsWith(prefix+ "Ninjabrooch")) {
    message.channel.send("Quickcarve/Quarterfoil Brooch {Increase Crit Factor by 6 & Increase Crit Factor by 4}.");
    } else
  if (message.content.startsWith(prefix+ "ninjainner")) {
    message.channel.send("innerwears are {Fortified}.");
    } else
  if (message.content.startsWith(prefix+ "ninjaethcing")) {
    message.channel.send("Etching are {Weapons & Gloves - Keen II/III/IV (Permanently are best but if not II for temporaries)} & {Armor & Boots - Grounded II/III/IV (Permanently are best but if not II of temporaries)}.");
    } else
  if (message.content.startsWith(prefix+ "ninjacystals")) {
    message.channel.send("Following commands will cover the cystals you want on your weapon, armor, & accessories. Those command will start from ninjacystals1 to ninjacystals3)");
    } else
  if (message.content.startsWith(prefix+ "ninjacystal1")) {
    message.channel.send("Weapon are {Bitter, Savage, Focused, & Carving (main PvE)}.");
    } else
  if (message.content.startsWith(prefix+ "ninjacystal2")) {
    message.channel.send("Armor are {4 Hardy(main PvE)} or {4 Rentless(main PvP)}.");
    } else
  if (message.content.startsWith(prefix+ "ninjacystal3")) {
    message.channel.send("Accessory/Jewelry are {4 Keen Vyrsk (Main PvE)}.");
    } else
  if (message.content.startsWith(prefix+ "ninjaglglyphyph")) {
    message.channel.send("Main glyph build https://cdn.discordapp.com/attachments/327169128031059979/340240231070433281/unknown.png");
    } else
  if (message.content.startsWith(prefix+ "ninjadoc")) {
    message.channel.send("The how to ninja {Essential Mana guide https://www.essentialmana.com/ninja-pve-guide-yurai/#skillusage} or {google document https://docs.google.com/spreadsheets/d/12O-Mzcz4ulDeC7AGOH_YfSpbaiFNUSshHp7SI-Tuqig/edit?usp=sharing}");
    } else
  if (message.content.startsWith(prefix+ "battlesolution")) {
    message.channel.send("No matter what dugeion should be using if have help with damage, heal and etc but once level 65 should be using prime battle solutions");
    } else
  if (message.content.startsWith(prefix+ "ccb")) {
    message.channel.send("The Term ccb = Complete Crystal Bind (protects your cystals from death)");
    } else
  if (message.content.startsWith(prefix+ "pve")) {
    message.channel.send("The Term PvE = Player vs. Environment");
    } else
  if (message.content.startsWith(prefix+ "pvp")) {
    message.channel.send("The Term PvP = Player vs. Player");
    } else
  if (message.content.startsWith(prefix+ "PVPVE")) {
    message.channel.send("The Term PvE = Player vs. Player vs. Environment");
    } else
  if (message.content.startsWith(prefix+ "OWPvP")) {
    message.channel.send("The Term OWPvP = Open World Player vs. Player");
    } else
  if (message.content.startsWith(prefix+ "aoe")) {
    message.channel.send("The Term AoE = Area of Effect");
    } else
  if (message.content.startsWith(prefix+ "dot")) {
    message.channel.send("The Term DoT = Damage over Time");
    } else
  if (message.content.startsWith(prefix+ "cd")) {
    message.channel.send("The Term cd = CoolDown");
    } else
  if (message.content.startsWith(prefix+ "CDR")) {
     message.channel.send("The Term CDR = CoolDownRate");
     } else
  if (message.content.startsWith(prefix+ "ow")) {
    message.channel.send("The Term ow = Open World");
    } else
  if (message.content.startsWith(prefix+ "aa")) {
    message.channel.send("The Term aa = Auto Attack");
    } else
  if (message.content.startsWith(prefix+ "BH")) {
    message.channel.send("The Term BG = Burning Heart (ninja)");
    } else
  if (message.content.startsWith(prefix+ "DJ")) {
    message.channel.send("The Term DJ = Decoy Jutsu (ninja)");
    } else
  if (message.content.startsWith(prefix+ "DC")) {
    message.channel.send("The Term DC = Double Cut (ninja)");
    } else
  if (message.content.startsWith(prefix+ "SF")) {
    message.channel.send("The Term SF = Skyfall (ninja)");
    } else
  if (message.content.startsWith(prefix+ "CoS")) {
    message.channel.send("The Term CoS = Circle of Steel (ninja)");
    } else
  if (message.content.startsWith(prefix+ "FA")) {
    message.channel.send("The Term FA = Fire Avalanche (ninja)");
    } else
  if (message.content.startsWith(prefix+ "JP")) {
    message.channel.send("The Term JP = Jagged Path (ninja)");
    } else
  if (message.content.startsWith(prefix+ "Att")) {
    message.channel.send("The Term Att = Attunement (ninja)");
    } else
  if (message.content.startsWith(prefix+ "re")) {
      message.channel.send("The Term re = Reslove (lancer)");
  } else
  if (message.content.startsWith(prefix+ "htl")) {
      message.channel.send("The Term hlt = Hold The Line (lancer)");
  } else
  if (message.content.startsWith(prefix+ "we")) {
     message.channel.send("The Term we = Willpower (gunner)");
  } else
  if (message.content.startsWith(prefix+ "icb")) {
     message.channel.send("The Term icb = In Cold Blood (slayer)");
  } else
  if (message.content.startsWith(prefix+ "kds")) {
      message.channel.send("The Term kds = Knockdown Strike (slayer)");
  } else
  if (message.content.startsWith(prefix+ "db")) {
     message.channel.send("The Term db = Distant Blade (slayer)");
  } else
  if (message.content.startsWith(prefix+ "ht")) {
      message.channel.send("The Term ht = Heart Thrust (slayer)");
  } else
  if (message.content.startsWith(prefix+ "Evis")) {
     message.channel.send("The Term Evis = Eviscerate (slayer)");
  } else
  if (message.content.startsWith(prefix+ "Fury")) {
      message.channel.send("The Term Fury = Fury Strike (slayer)");
  } else
  if (message.content.startsWith(prefix+ "hr")) {
     message.channel.send("The Term hr = Headlong Rush (slayer)");
  } else
  if (message.content.startsWith(prefix+ "Kick")) {
      message.channel.send("The Term Kick = Startling Kick (slayer)");
  } else
  if (message.content.startsWith(prefix+ "ohs")) {
      message.channel.send("The Term ohs = Overhand Strike (slayer)");
  } else
  if (message.content.startsWith(prefix+ "UOHS")) {
     message.channel.send("The Term UOHS = Ulimate Overhand Strike (slayer)");
  } else
  if (message.content.startsWith(prefix+ "ms")) {
      message.channel.send("The Term ms = Measured Slice (slayer)");
  } else
  if (message.content.startsWith(prefix+ "op")) {
     message.channel.send("The Term op = Overpower (slayer)");
  } else
  if (message.content.startsWith(prefix+ "Shout")) {
     message.channel.send("The Term Shout = Triumphant Shout (slayer)");
  } else
  if (message.content.startsWith(prefix+ "ww")) {
      message.channel.send("The Term ww = Whirlwind (slayer)");
  } else
  if (message.content.startsWith(prefix+ "war(r)")) {
     message.channel.send("The Term war(r) = Warrior");
  } else
  if (message.content.startsWith(prefix+ "zerk")) {
      message.channel.send("The Term zerk = Berserker");
  } else
  if (message.content.startsWith(prefix+ "valk")) {
     message.channel.send("The Term valk = Valkyrie");
  } else
  if (message.content.startsWith(prefix+ "sorc")) {
      message.channel.send("The Term sorc = Sorcerer");
  } else
  if (message.content.startsWith(prefix+ "myst")) {
     message.channel.send("The Term myst = Mystic");
  } else
  if (message.content.startsWith(prefix+ "lance")) {
      message.channel.send("The Term lance = Lancer");
  } else
  if (message.content.startsWith(prefix+ "brawl")) {
     message.channel.send("The Term brawl = Brawler");
  } else
  if (message.content.startsWith(prefix+ "arch")) {
      message.channel.send("The Term arch = Archer");
  } else
  if (message.content.startsWith(prefix+ "slay")) {
     message.channel.send("The Term slay = Slayer");
  } else
  if (message.content.startsWith(prefix+ "gun")) {
      message.channel.send("The Term gun = Gunner");
  } else
  if (message.content.startsWith(prefix+ "iframe")) {
     message.channel.send("The Term iframe = invincibility frames");
  } else
  if (message.content.startsWith(prefix+ "commands")) {
    message.channel.send("Priestcommands, Mysticcommands, Valkcommands, Ninjacommands, Termscommands");
    } else
  if (message.content.startsWith(prefix+ "Priestcommands")) {
    message.channel.send("priestjob, priest1, Priest1.1, Priest1.2, Priest1.3, Priest1.4, priest2, Priest2.1, Priest2.2, Priest2.3, Priest2.4, Priest2.5, Priest2.6, Priest2.7, Priest2.8, priest3, Priest3.1, Priest3.2, Priest3.3, priest4, Priest4.1, Priest4.2, Priest4.3, Priest4.4, priest5, Priest5.1, Priest5.2, priest6, priestgear, priestweapon, priestchest, priestglove, priestboot, priestbelt, priestjewelry, priestcirclet, priestbrooch, priestinner, priestetching, priestcystal1, priestcystal2, priestcystal3, priestglyph, priestdoc,");
    } else
  if (message.content.startsWith(prefix+ "Mysticcommands")) {
    message.channel.send("mysticjob, mystic1, Mystic1.1, Mystic1.2, Mystic1.3, Mystic1.4, Mystic2, Mystic2.1, Mystic2.2, Mystic2.3, Mystic2.4, Mystic2.5, Mystic2.6, Mystic2.7, mystic3, Mystic3.1, Mystic3.2, Mystic3.3, Mystic3.4, Mystic3.5, Mystic3.6, Mystic3.7, mystic4, Mystic4.1, Mystic4.2, Mystic4.3, Mystic4.4, mystic5, Mystic5.1, Mystic5.2, mystic6, mysticgear, mysticweapon, mysticchest, mysticglove, mysticboot, mysticbelt, mysticjewelry, mysticcirclet, mysticbrooch, mysticinner, mysticetching, mysticcystal1, mysticcystal2, mysticcystal3, mysticglyph, mysticdoc.");
    } else
  if (message.content.startsWith(prefix+ "Valkcommands")) {
    message.channel.send("valkjob, valk1, Valk1.1, Valk1.2, Valk1.3, Valk1.4, valk2, Valk2.1, Valk2.2, Valk2.3, Valk2.4, Valk2.5, Valk2.6, Valk2.7, Valk2.8, valk3, valk4, Valk4.1, Valk4.2, Valk4.3, valk5, Valk5.1, valk6, valkgear, valkweapon, valkchest, valkglove, valkboot, valkbelt, valkjewelry, valkcirclet, valkbrooch, valkinner, valketching, valkcystal1, valkcystal2, valkcystal3, valkglyph, valkdoc.");
    } else
  if (message.content.startsWith(prefix+ "Ninjacommands")) {
    message.channel.send("ninjajob, ninja1, Ninja1.1, Ninja1.2, Ninja1.3, Ninja1.4, Ninja1.5, Ninja1.6, ninja2, Ninja2.1, Ninja2.2, Ninja2.3, Ninja2.4, Ninja2.5, Ninja2.6, Ninja2.7, ninja3, ninja4, Ninja4.1, Ninja4.2, Ninja4.3, Ninja4.4, ninja5, Ninja5.1, Ninja5.2, ninja6, ninjagear, ninjaweapon, ninjachest, ninjaglove, ninjaboot, ninjabelt, ninjajewelry, ninjacirclet, ninjabrooch, ninjainner, ninjaetching, ninjacystal1, ninjacystal2, ninjacystal3, ninjaglyph, ninjadoc.");
    } else
  if (message.content.startsWith(prefix+ "Termscommands")) {
    message.channel.send("battlesolution, ccb, pve, pvp, PVPVE, OWPvP, aoe, dot, cd, CDR, ow, aa, BH, DJ, DC, SF, CoS, FA, JP, Att, re, htl, we, icb, kds, db, ht, Evis, Fury, hr, Kick, ohs, UOHS, ms, op, Shout, ww, war(r), zerk, valk, sorc, myst, lance, brawl, arch, slay, gun, iframe,");
  }
});
