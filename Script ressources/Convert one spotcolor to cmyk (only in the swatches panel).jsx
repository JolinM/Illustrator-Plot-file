﻿if ( app.documents.length > 0 ) { var colorToChange = app.activeDocument.swatches.getByName ("abc"); var CMYKvalues=colorToChange.color.spot.color; colorToChange.color=CMYKColor; colorToChange.color=CMYKvalues; } 