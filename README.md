# [Passport Offices in Greece](http://alefteris.github.io/passport-offices-greece/)

Map of passport offices in Greece. Location data in GeoJSON format, at [app/data/passport-offices-greece.geojson](https://github.com/alefteris/passport-offices-greece/blob/master/app/data/passport-offices-greece.geojson).

Some locations are not accurate and are tagged with ```fixme: true```. So if you know the area, please send a pull request or submit an issue with the correct coordinates.

## Build Instructions

You will need to have [Node.js](http://nodejs.org/) and [Ruby](http://www.ruby-lang.org/) installed in your system.

``` shell
npm install -g grunt-cli bower
gem install compass
git clone git://github.com/alefteris/passport-offices-greece.git
cd passport-offices-greece
npm install
bower install
grunt server
```

## License

Unless otherwise stated, MIT License. Copyright © Thanos Lefteris
