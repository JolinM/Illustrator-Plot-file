﻿var myDoc = app.activeDocument; var newFill = new RGBColor();newFill.red = 67;newFill.green = 67;newFill.blue = 181; var paths = myDoc.pathItems;for (var i=0; i<paths.length; i++) {    var f = paths[i].fillColor;    if (f instanceof RGBColor // is it RGB        && f.red.toFixed(0) == 173 //check red        && f.green.toFixed(0) == 173 //check green        && f.blue.toFixed(0) == 132 // check blue    ) {        paths[i].fillColor = newFill;    }}