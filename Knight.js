import KnightItemSheet from "./module/sheets/KnightItemSheet.js";

Hooks.once("init", function(){
    console.log ("knight| debut de la seance")

    Items.unregisterSheet ("core", ItemSheet);
    Items.registerSheet("Knight",KnightItemSheet, {makeDefault: true});
});