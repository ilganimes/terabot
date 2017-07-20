const Discord = require("discord.js");
const client = new Discord.Client();

client.login("MzM1MzA0MzQ3MzgwNjEzMTIw.DFFYsg.1MAF-i3VmzOJtmeFb-d2OLaMe3s");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  //Set the prefix
  let prefix = "?";

  //Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

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
  if (message.content.startsWith(prefix+ "OWPvP")) {
     message.channel.send("The Term OWPvP = Open World Player vs. Player");
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
  if (message.content.startsWith(prefix+ "icb")) {
     message.channel.send("The Term icb = In Cold Blood (slayer)");
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
  if (message.content.startsWith(prefix+ "War(r)")) {
     message.channel.send("The Term War(r) = Warrior");
  } else
  if (message.content.startsWith(prefix+ "Zerk")) {
      message.channel.send("The Term Zerk = Berserker");
  } else
  if (message.content.startsWith(prefix+ "Valk")) {
     message.channel.send("The Term Valk = Valkyrie");
  } else
  if (message.content.startsWith(prefix+ "Sorc")) {
      message.channel.send("The Term Sorc = Sorcerer");
  } else
  if (message.content.startsWith(prefix+ "iframe")) {
     message.channel.send("The Term iframe = invincibility frames");
  }
});
