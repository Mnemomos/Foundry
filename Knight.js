import {knight} from "./module/config.js";
import KnightItemSheet from "./module/sheets/KnightItemSheet.js";

Hooks.once("init", function(){
    console.log ("knight| debut de la seance")

    CONFIG.knight = knight;

    Items.unregisterSheet ("core", ItemSheet);
    Items.registerSheet("Knight",KnightItemSheet, {makeDefault: true});
});