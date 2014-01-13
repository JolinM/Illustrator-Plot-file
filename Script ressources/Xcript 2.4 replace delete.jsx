﻿activeDoc();function activeDoc() {    if (app.documents.length == 0) {        alert('No document open');        return;    } else {        colourSwapper();    }    //Delete unused start here====    //-----Set 'keepRegistration' to 'false' to remove registration swatch.---    var keepRegistration = true;    //-----Set 'keepNoColor' to 'false' to remove NoColor swatch.---    var keepNoColor = true;    var skipSwatches = 0;	var swtsRem = 0;	var smbsRem = 0;	var stysRem = 0;    // Now call the "remove" functions (just comment out the ones you don't want to use...)    deleteUnusedSwatches();}function colourSwapper(a, b) {    var uIL = app.userInteractionLevel;    app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;    var docRef = app.activeDocument;    recurseLayers(docRef.layers);    alert('Now run Action:\r"Delete Unused Panel Items"');    app.userInteractionLevel = uIL;}function recurseLayers(objArray) {    for (var i = 0; i < objArray.length; i++) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var v = objArray[i].visible;        if (!v) objArray[i].visible = true;        changeText(objArray[i].textFrames);        changeColours(objArray[i].pathItems);        if (objArray[i].layers.length > 0) {            recurseLayers(objArray[i].layers)        }        if (objArray[i].groupItems.length > 0) {            recurseGroups(objArray[i].groupItems)        }        if (objArray[i].compoundPathItems.length > 0) {            loopCompounds(objArray[i].compoundPathItems)        }        objArray[i].locked = l;        objArray[i].visible = v;    }};function recurseGroups(objArray) {    for (var i = 0; i < objArray.length; i++) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        changeText(objArray[i].textFrames);        changeColours(objArray[i].pathItems);        if (objArray[i].groupItems.length > 0) {            recurseGroups(objArray[i].groupItems)        }        if (objArray[i].compoundPathItems.length > 0) {            loopCompounds(objArray[i].compoundPathItems)        }        objArray[i].locked = l;        objArray[i].hidden = h;    }};function loopCompounds(objArray) {    for (var i = 0; i < objArray.length; i++) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        changeColours(objArray[i].pathItems);        objArray[i].locked = l;        objArray[i].hidden = h;    }};function changeColours(objArray) {    for (var i = objArray.length - 1; i >= 0; i--) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        switch (objArray[i].strokeColor instanceof SpotColor) {             case (objArray[i].strokeColor.spot.name == 'Oui'):                objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;        break;             case (objArray[i].strokeColor.spot.name == 'Non'):                objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;        break;        }        objArray[i].locked = l;        objArray[i].hidden = h;    }};/*function changeText(objArray) {    for (var i = objArray.length - 1; i >= 0; i--) {        var l = objArray[i].locked;        if (l) objArray[i].locked = false;        var h = objArray[i].hidden;        if (h) objArray[i].hidden = false;        if (/Primary/.test(objArray[i].contents)) {            objArray[i].contents = objArray[i].contents.replace('Oui', 'Black')        }        if (/Secondary/.test(objArray[i].contents)) {            objArray[i].contents = objArray[i].contents.replace('Non', 'BLack')        }        objArray[i].locked = l;        objArray[i].hidden = h;    }}*/// ============================// ====Delete unused start here===// ============================function deleteUnusedSwatches() {    killed = "";    saved = "";    var usedSwatches = findUsedSwatches();    //alert("UsedSwatchesLength = "+usedSwatches.length);    var x = lastIndex = app.activeDocument.swatches.length;    total = x;    var isSpotReg = 0;    /*			 				*/    try {        while (x > skipSwatches) {            var lastIndex = app.activeDocument.swatches.length - 1;            var swatchToDelete = app.activeDocument.swatches[x - 1];            //initialize vars to 0            save = ulen = noSwt = regSwt = 0;            try {                isSpotReg = swatchToDelete.color.spot.colorType == ColorModel.REGISTRATION;            } catch (e) {                // do nothing, we don't care if it fails, only if it succeeds.            }            for (var u in usedSwatches) {                ulen++;                if (compareColors(usedSwatches[u], swatchToDelete.color)) {                    saved += swatchToDelete + "\n";                    save = 1;                    x--                }            }            if (isSpotReg && keepRegistration) { // For Registration swatch..                saved += swatchToDelete + "\n";                save = 1;                x--;                //resetting variable to 0 because every subsequent "try" will fail                isSpotReg = 0;                regSwt = 1;            } else if (swatchToDelete.color.typename == "NoColor" && keepNoColor) { // for "NoColor" swatch                saved += swatchToDelete + "\n";                save = 1;                x--;                noSwt = 1;            }            if (save == 0) {                killed += swatchToDelete + "\n";                swatchToDelete.remove();                x--;            }        }        // for tracking...        swtsRem = total - (ulen + noSwt + regSwt);    } catch (e) {        alert(e + "\nThe specified swatch doesn't exist. x = " + x);    }}function findUsedSwatches() {    allitems = activeDocument.pageItems.length;    var found = [];    while (allitems > 0) {        if (activeDocument.pageItems[allitems - 1].stroked == true) {            stk = activeDocument.pageItems[allitems - 1].strokeColor;            if (!inList(stk, found)) {                found.push(stk);            }        }        if (activeDocument.pageItems[allitems - 1].filled == true) {            fil = activeDocument.pageItems[allitems - 1].fillColor;            if (!inList(fil, found)) {                found.push(fil);            }        } else if (activeDocument.pageItems[allitems - 1].typename == "TextFrame") {            fil = activeDocument.pageItems[allitems - 1].textRange.fillColor;            if (!inList(fil, found)) {                found.push(fil);            }        }        //        allitems--;    }    return (found);}function inList(a, b) {    if (b.length == 0) {        return false;    }    for (var all in b) {        if (compareColors(a, b[all])) {            return true;        }    }    return false;}function compareColors(a, b) {    //	No need to check for "none" because the calling function only passes hits.    if (a.pattern == b.pattern && a.pattern != undefined) {        //Compare patterns        return true;    } else if (a.gradient == b.gradient && a.gradient != undefined) {        //Compare gradients        return true;    } else {        //innocent until proven guilty..        answer = true;        //Compare contents...        for (var each in a) {            if (a[each] != b[each] && each != "tint") {                //if anything doesn't match:                answer = false;            }        }        return answer;    }}