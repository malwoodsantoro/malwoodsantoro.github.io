class Accessibility {

  constructor(options = {}) {
    this.width = options.width || 200;
    this.height = options.height || 200;
  }

  onAdd(map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl mapboxgl-ctrl-accessibility';
    this._container.setAttribute('style', 'position: fixed; border: 10px solid; z-index: 2; width: ' + this.width + 'px; height: ' + this.height + 'px; margin-top: -100px; margin-left: -100px; top: 50%; left: 50%;');

    this._featuresContainer = document.createElement('div');
    this._featuresContainer.className = 'features';
    this._featuresContainer.setAttribute('style', 'position: absolute; top: 0; right: 0; bottom: 0; width: 25%; overflow: auto; background: rgba(255, 255, 255, 0.8);');
    document.body.appendChild(this._featuresContainer);

    this._map.on('idle', function () {

      this._showFeatures();

      this._map.on('moveend', function () {
        this._showFeatures();
        this._bindDirectionKeys();
      }.bind(this));
    }.bind(this))

    return this._container;
  }

  _showFeatures() {
    var point = map.project(map.getCenter());
    var width = 200;
    var height = 200;

    var features = map.queryRenderedFeatures([
      [point.x - width / 2, point.y - height / 2],
      [point.x + width / 2, point.y + height / 2]
    ], { layers: ['poi-label'] });

    var displayProperties = ['type', 'properties', 'id'];

    var displayFeatures = features.map(function (feat) {
      var displayFeat = {};
      displayProperties.forEach(function (prop) {
        displayFeat[prop] = feat[prop];
      });
      return displayFeat;
    });

    document.querySelector('.features').innerHTML = JSON.stringify(displayFeatures, null, 2);
  }

  _bindDirectionKeys() {
    var bearing = map.getBearing()

    document.onkeydown = function (event) {
      switch (event.keyCode) {
        //West
        case 37:
          console.log('Moving ' + bearingToDirection(bearing - 90))
          break;
        //North 
        case 38:
          console.log('Moving ' + bearingToDirection(bearing))
          break;
        //East
        case 39:
          console.log('Moving ' + bearingToDirection(bearing + 90))
          break;
        //South
        case 40:
          console.log('Moving ' + bearingToDirection(bearing + 180))
          break;
      }
    };
  }

  onRemove = () => {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}

function bearingToDirection(bearing) {
  var positiveBearing = makeBearingPositive(bearing)

  switch (true) {
    case (positiveBearing < 30):
      return "North";

    case (positiveBearing <= 60):
      return "Northeast";

    case (positiveBearing <= 120):
      return "East";

    case (positiveBearing <= 150):
      return "Southeast";

    case (positiveBearing <= 210):
      return "South";

    case (positiveBearing <= 240):
      return "Southwest";

    case (positiveBearing <= 300):
      return "West";

    case (positiveBearing <= 330):
      return "Northwest"

    case (positiveBearing <= 360):
      return "North"

    default:
      console.log('Default');
  }
}

function makeBearingPositive(bearing) {
  while (bearing < 0) {
    bearing += 360
  }
  return bearing
}

mapboxgl.Accessibility = Accessibility;
