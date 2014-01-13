﻿activeDoc();/*    Ajouter un dialogue pour mettre les plots files, qui save dans un fichier texte    Ajouter un facteur de scale    Remplacer les fontes    teinter les filets    remplacer couleur texte */function activeDoc() {    if (app.documents.length == 0) {        alert('No document open');        return;    } else {        //remove black                     try {            app.activeDocument.swatches.getByName('Black').remove();              }            catch (e){}        //add Black swatch        var newSwatch = app.activeDocument.swatches.add()        var newColor = new GrayColor();        newColor.gray = 100;        newSwatch.name = "Black"        newSwatch.color = newColor        //remplacement        colourSwapper();    }    deleteUnusedSwatches();}function colourSwapper(a, b) {    var uIL = app.userInteractionLevel;    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;    var docRef = app.activeDocument;    recurseLayers(docRef.layers);}function recurseLayers(objArray) {    for (var i = 0; i < objArray.length; i++) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var v = objArray[i].visible;        if (!v) objArray[i].visible = true;        //changeText(objArray[i].textFrames);        changeColours(objArray[i].pathItems);        if (objArray[i].layers.length > 0) {            recurseLayers(objArray[i].layers)        }        if (objArray[i].groupItems.length > 0) {            recurseGroups(objArray[i].groupItems)        }        if (objArray[i].compoundPathItems.length > 0) {            loopCompounds(objArray[i].compoundPathItems)        }        objArray[i].locked = l;        objArray[i].visible = v;    }};function recurseGroups(objArray) {    for (var i = 0; i < objArray.length; i++) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        //changeText(objArray[i].textFrames);        changeColours(objArray[i].pathItems);        if (objArray[i].groupItems.length > 0) {            recurseGroups(objArray[i].groupItems)        }        if (objArray[i].compoundPathItems.length > 0) {            loopCompounds(objArray[i].compoundPathItems)        }        objArray[i].locked = l;        objArray[i].hidden = h;    }};function loopCompounds(objArray) {    for (var i = 0; i < objArray.length; i++) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        changeColours(objArray[i].pathItems);        objArray[i].locked = l;        objArray[i].hidden = h;    }};function changeColours(objArray) {    for (var i = objArray.length - 1; i >= 0; i--) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;                          try {           switch (objArray[i].strokeColor instanceof SpotColor) {        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 2'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 3'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 4'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 5'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 6'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 7'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 8'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 9'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 10'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 11'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 12'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 13'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 14'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 15'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 16'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 17'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 18'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 19'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 20'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.255;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 21'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 22'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.34;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 23'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 24'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.85;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 25'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 26'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.283;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 27'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 28'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 29'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 30'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        case (objArray[i].strokeColor.spot.name == 'AutoCAD Color 31'):            objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;            objArray[i].strokeWidth = 0.142;            break;        }                  }            catch (e){}        objArray[i].locked = l;        objArray[i].hidden = h;    }};/*function changeText(objArray) {    for (var i = objArray.length - 1; i >= 0; i--) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        if (/Primary/.test(objArray[i].contents)) {            objArray[i].contents = objArray[i].contents.replace('AutoCad Color 13', 'Black')        }        if (/Secondary/.test(objArray[i].contents)) {            objArray[i].contents = objArray[i].contents.replace('AutoCAD Color 14', 'BLack')        }        objArray[i].locked = l;        objArray[i].hidden = h;    }}*/// ============================// ====Delete unused start here===// ============================function deleteUnusedSwatches() {    killed = "";    saved = "";    var usedSwatches = findUsedSwatches();    //alert("UsedSwatchesLength = "+usedSwatches.length);    var x = lastIndex = app.activeDocument.swatches.length;    total = x;    var isSpotReg = 0;    /*			 				*/    try {        while (x > 0) {            var lastIndex = app.activeDocument.swatches.length - 1;            var swatchToDelete = app.activeDocument.swatches[x - 1];            //initialize vars to 0            save = ulen = noSwt = regSwt = 0;            try {                isSpotReg = swatchToDelete.color.spot.colorType == ColorModel.REGISTRATION;            } catch (e) {                // do nothing, we don't care if it fails, only if it succeeds.            }            for (var u in usedSwatches) {                ulen++;                if (compareColors(usedSwatches[u], swatchToDelete.color)) {                    saved += swatchToDelete + "\n";                    save = 1;                    x--                }            }            if (isSpotReg && true) { // For Registration swatch..                saved += swatchToDelete + "\n";                save = 1;                x--;                //resetting variable to 0 because every subsequent "try" will fail                isSpotReg = 0;                regSwt = 1;            } else if (swatchToDelete.color.typename == "NoColor" && true) { // for "NoColor" swatch                saved += swatchToDelete + "\n";                save = 1;                x--;                noSwt = 1;            }            if (save == 0) {                killed += swatchToDelete + "\n";                swatchToDelete.remove();                x--;            }        }    } catch (e) {        alert(e + "\nThe specified swatch doesn't exist. x = " + x);    }}function findUsedSwatches() {    allitems = activeDocument.pageItems.length;    var found = [];    while (allitems > 0) {        if (activeDocument.pageItems[allitems - 1].stroked == true) {            stk = activeDocument.pageItems[allitems - 1].strokeColor;            if (!inList(stk, found)) {                found.push(stk);            }        }        if (activeDocument.pageItems[allitems - 1].filled == true) {            fil = activeDocument.pageItems[allitems - 1].fillColor;            if (!inList(fil, found)) {                found.push(fil);            }        } else if (activeDocument.pageItems[allitems - 1].typename == "TextFrame") {            fil = activeDocument.pageItems[allitems - 1].textRange.fillColor;            if (!inList(fil, found)) {                found.push(fil);            }        }        //        allitems--;    }    return (found);}function inList(a, b) {    if (b.length == 0) {        return false;    }    for (var all in b) {        if (compareColors(a, b[all])) {            return true;        }    }    return false;}function compareColors(a, b) {    //	No need to check for "none" because the calling function only passes hits.    if (a.pattern == b.pattern && a.pattern != undefined) {        //Compare patterns        return true;    } else if (a.gradient == b.gradient && a.gradient != undefined) {        //Compare gradients        return true;    } else {        //innocent until proven guilty..        answer = true;        //Compare contents...        for (var each in a) {            if (a[each] != b[each] && each != "tint") {                //if anything doesn't match:                answer = false;            }        }        return answer;    }}