﻿replaceGlobalColor(); function replaceGlobalColor() {    var doc, count, rgb, value, swat;     doc = app.activeDocument, count = doc.spots.length;     for ( var i = 0; i < count; i++ ) {         if ( doc.spots[i].colorType == ColorModel.PROCESS ) {             value = doc.spots[i].getInternalColor();             swat = doc.swatches.add();             swat.name = doc.spots[i].name;             rgb = new RGBColor();             rgb.red = value[0];            rgb.green = value[1];            rgb.blue = value[2];             swat.color = rgb;         };     };     if ( count > 0 ) { doc.spots.removeAll(); } };