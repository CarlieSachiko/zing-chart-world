// (function() {
// 'use strict';
    zingchart.loadModules('maps, maps-world-countries');

    var myConfig = {
      type: null,
      title: {
        text: 'World Happiness By Year',
        'color': 'black',
        'background-color': 'none'
      },
      subtitle : {
        text: 'Select a year to see happiness rating',
        color: 'grey',
      },
      source: {
        text: 'Source: The World Happiness Report, worldhappiness.report',
      },
      shapes: [
        {
          type: 'zingchart.maps',
          'scale-x': {
            zooming: true
          },
          'scale-y': {
            zooming: true
          },
          options: {
            id: 'map',
            name: 'world.countries',
            scale: true,
            // x: '17%',
            // y: '19%',
             style: {
              'background-color': '#ebebeb',
              label: {
                visible: false
              },
              'hover-state':{
                visible:true
              },
              tooltip: {
                'border-radius': '6'
              },
              // items: {
              //   USA : {
              //     'background-color': 'green',
              //     'text-color': 'white',
              //     'tooltip': {
              //       text: '6.99/10'
              //     }
              //   }
              // }
            }
          }
        },
          {
            type: 'circle',
            id: '2012',
            cursor: 'pointer',
            size: 10,
            x: '5%',
            y: '37%',
            'background-color': 'blue',
            label: {
              text: '2010',
              'offset-x': 30
            }
          }

      ]
    };

  zingchart.render({
    id: 'myChart',
    data: myConfig,
    height: 880,
    width: '100%'
  });

