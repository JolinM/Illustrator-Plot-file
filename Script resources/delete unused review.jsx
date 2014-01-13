var docRef = app.activeDocument;
if (app.documents.length > 0) {


// ============================
// ====Delete unused start here====
// ============================
//tweaking this script:
    //-----Set 'keepRegistration' to 'false' to remove registration swatch.---
    var keepRegistration = true;
    //-----Set 'keepNoColor' to 'false' to remove NoColor swatch.---
    var keepNoColor = true;
    var skipSwatches = 0;
	var swtsRem = 0;
	var smbsRem = 0;
	var stysRem = 0;    // Now call the "remove" functions (just comment out the ones you don't want to use...)
    deleteUnusedSwatches();
}

function deleteUnusedSwatches() {
    killed = "";
    saved = "";
    var usedSwatches = findUsedSwatches();
    //alert("UsedSwatchesLength = "+usedSwatches.length);
    var x = lastIndex = app.activeDocument.swatches.length;
    total = x;
    var isSpotReg = 0;
    /*
			 
				*/
    try {
        while (x > skipSwatches) {
            var lastIndex = app.activeDocument.swatches.length - 1;
            var swatchToDelete = app.activeDocument.swatches[x - 1];
            //initialize vars to 0
            save = ulen = noSwt = regSwt = 0;
            try {
                isSpotReg = swatchToDelete.color.spot.colorType == ColorModel.REGISTRATION;
            } catch (e) {
                // do nothing, we don't care if it fails, only if it succeeds.
            }
            for (var u in usedSwatches) {
                ulen++;
                if (compareColors(usedSwatches[u], swatchToDelete.color)) {
                    saved += swatchToDelete + "\n";
                    save = 1;
                    x--
                }
            }
            if (isSpotReg && keepRegistration) { // For Registration swatch..
                saved += swatchToDelete + "\n";
                save = 1;
                x--;
                //resetting variable to 0 because every subsequent "try" will fail
                isSpotReg = 0;
                regSwt = 1;
            } else if (swatchToDelete.color.typename == "NoColor" && keepNoColor) { // for "NoColor" swatch
                saved += swatchToDelete + "\n";
                save = 1;
                x--;
                noSwt = 1;
            }
            if (save == 0) {
                killed += swatchToDelete + "\n";
                swatchToDelete.remove();
                x--;
            }
        }
        // for tracking...
        swtsRem = total - (ulen + noSwt + regSwt);
    } catch (e) {
        alert(e + "\nThe specified swatch doesn't exist. x = " + x);
    }
}

function findUsedSwatches() {
    allitems = activeDocument.pageItems.length;
    var found = [];
    while (allitems > 0) {
        if (activeDocument.pageItems[allitems - 1].stroked == true) {
            stk = activeDocument.pageItems[allitems - 1].strokeColor;
            if (!inList(stk, found)) {
                found.push(stk);
            }
        }
        if (activeDocument.pageItems[allitems - 1].filled == true) {
            fil = activeDocument.pageItems[allitems - 1].fillColor;
            if (!inList(fil, found)) {
                found.push(fil);
            }
        } else if (activeDocument.pageItems[allitems - 1].typename == "TextFrame") {
            fil = activeDocument.pageItems[allitems - 1].textRange.fillColor;
            if (!inList(fil, found)) {
                found.push(fil);
            }
        }
        //
        allitems--;
    }
    return (found);
}

function inList(a, b) {
    if (b.length == 0) {
        return false;
    }
    for (var all in b) {
        if (compareColors(a, b[all])) {
            return true;
        }
    }
    return false;
}

function compareColors(a, b) {
    //	No need to check for "none" because the calling function only passes hits.
    if (a.pattern == b.pattern && a.pattern != undefined) {
        //Compare patterns
        return true;
    } else if (a.gradient == b.gradient && a.gradient != undefined) {
        //Compare gradients
        return true;
    } else {
        //innocent until proven guilty..
        answer = true;
        //Compare contents...
        for (var each in a) {
            if (a[each] != b[each] && each != "tint") {
                //if anything doesn't match:
                answer = false;
            }
        }
        return answer;
    }
}
