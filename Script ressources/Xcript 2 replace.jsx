﻿if ( app.documents.length > 0 ) {  //test de dialoguefunction csDialog() {          var fabGroup = app.activeDocument.swatchGroups.getByName('Fabrics');     var allFabs = fabGroup.getAllSwatches();     var fabNames = Array();     for (var i = 0; i < allFabs.length; i++) {          fabNames.push(allFabs[i].name);           if (i < allFabs.length-1) fabNames.push('-');     }      var csdlg = new Window('dialog', 'Tim\'s Fabric Picker…',[0,0,300,205]);         // Standard Buttons          csdlg.cancelBtn = csdlg.add('button', [15,164,125,186], 'Cancel', {name:'cancel'});     csdlg.okBtn = csdlg.add('button', [175,164,285,186], 'OK', {name:'ok'});               // Button call back     csdlg.okBtn.onClick = function() {          csdlg.close(1);          colourSwapper('Black','Black'); // Here call the process     }     csdlg.center();     csdlg.show();} // Main active document commands go here function colourSwapper(a,b) {     var uIL = app.userInteractionLevel;     app.userInteractionLevel = UserInteractionLevel.DONTDISPLAYALERTS;     var docRef = app.activeDocument;     recurseLayers(docRef.layers);     alert('Now run Action:\r"Delete Unused Panel Items"');     app.userInteractionLevel = uIL;} // Main active document check functionfunction activeDoc() {     if (app.documents.length == 0) {          alert('NO document open?');          return;     }}activeDoc();  function recurseLayers(objArray) {     for (var i = 0; i < objArray.length; i++) {          var l = objArray[i].locked;          if (l) objArray[i].locked = false;          var v = objArray[i].visible;          if (!v) objArray[i].visible = true;          changeText(objArray[i].textFrames);          changeColours(objArray[i].pathItems);          if (objArray[i].layers.length > 0) {               recurseLayers(objArray[i].layers)          }          if (objArray[i].groupItems.length > 0) {               recurseGroups(objArray[i].groupItems)          }          if (objArray[i].compoundPathItems.length > 0) {               loopCompounds(objArray[i].compoundPathItems)          }          objArray[i].locked = l;          objArray[i].visible = v;     }}; function recurseGroups(objArray) {     for (var i = 0; i < objArray.length; i++) {          var l = objArray[i].locked;          if (l) objArray[i].locked = false;          var h = objArray[i].hidden;          if (h) objArray[i].hidden = false;          changeText(objArray[i].textFrames);          changeColours(objArray[i].pathItems);          if (objArray[i].groupItems.length > 0) {               recurseGroups(objArray[i].groupItems)          }          if (objArray[i].compoundPathItems.length > 0) {               loopCompounds(objArray[i].compoundPathItems)          }          objArray[i].locked = l;          objArray[i].hidden = h;     }}; function loopCompounds(objArray) {     for (var i = 0; i < objArray.length; i++) {          var l = objArray[i].locked;          if (l) objArray[i].locked = false;          var h = objArray[i].hidden;          if (h) objArray[i].hidden = false;          changeColours(objArray[i].pathItems);               objArray[i].locked = l;          objArray[i].hidden = h;     }}; function changeColours(objArray) {     for (var i = objArray.length-1; i >= 0; i--) {          var l = objArray[i].locked;          if (l) objArray[i].locked = false;          var h = objArray[i].hidden;          if (h) objArray[i].hidden = false;          if (objArray[i].strokeColor instanceof SpotColor) {               if (objArray[i].strokeColor.spot.name == 'AutoCAD Color 11') {                    objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;               }               if (objArray[i].strokeColor.spot.name == 'AutoCAD Color 23') {                    objArray[i].strokeColor = app.activeDocument.swatches.getByName('Black').color;               }                     }          objArray[i].locked = l;          objArray[i].hidden = h;     }}; function changeText(objArray) {     for (var i = objArray.length-1; i >= 0; i--) {          var l = objArray[i].locked;          if (l) objArray[i].locked = false;          var h = objArray[i].hidden;          if (h) objArray[i].hidden = false;          if (/Primary/.test(objArray[i].contents)) {               objArray[i].contents = objArray[i].contents.replace('AutoCAD Color 11', 'Black')          }          if (/Secondary/.test(objArray[i].contents)) {               objArray[i].contents = objArray[i].contents.replace('AutoCAD Color 23', 'BLack')          }          objArray[i].locked = l;          objArray[i].hidden = h;     }};}