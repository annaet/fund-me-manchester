var app = angular.module('fundMe', [
    'ui.router'
])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
      enabled: true
  });

  $urlRouterProvider
      .otherwise('');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .state('help', {
      url: '/help',
      templateUrl: 'app/help/help.html',
      controller: 'HelpCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'app/contact/contact.html',
      controller: 'ContactCtrl'
    })
    .state('agile-aardvarks', {
      url: '/agile-aardvarks',
      views: {
        '': {
          templateUrl: 'app/projects/agile-aardvarks/agile-aardvarks.html',
          controller: 'AgileAardvarksCtrl'
        },
        'about@agile-aardvarks': {
          templateUrl: 'app/projects/agile-aardvarks/agile-aardvarks.about.html',
          controller: 'AgileAardvarksAboutCtrl'
         },
        'raised@agile-aardvarks': {
          templateUrl: 'app/projects/agile-aardvarks/agile-aardvarks.raised.html',
          controller: 'AgileAardvarksRaisedCtrl'
        },
        'donate@agile-aardvarks': {
          templateUrl: 'app/projects/agile-aardvarks/agile-aardvarks.donate.html',
          controller: 'AgileAardvarksDonateCtrl'
        }
      }
    })
    .state('bluetooth-badgers', {
      url: '/bluetooth-badgers',
      views: {
        '': {
          templateUrl: 'app/projects/bluetooth-badgers/bluetooth-badgers.html',
          controller: 'BluetoothBadgersCtrl'
        },
        'about@bluetooth-badgers': {
          templateUrl: 'app/projects/bluetooth-badgers/bluetooth-badgers.about.html',
          controller: 'BluetoothBadgersAboutCtrl'
         },
        'raised@bluetooth-badgers': {
          templateUrl: 'app/projects/bluetooth-badgers/bluetooth-badgers.raised.html',
          controller: 'BluetoothBadgersRaisedCtrl'
        },
        'donate@bluetooth-badgers': {
          templateUrl: 'app/projects/bluetooth-badgers/bluetooth-badgers.donate.html',
          controller: 'BluetoothBadgersDonateCtrl'
        }
      }
    })
    .state('cloud-camels', {
      url: '/cloud-camels',
      views: {
        '': {
          templateUrl: 'app/projects/cloud-camels/cloud-camels.html',
          controller: 'CloudCamelsCtrl'
        },
        'about@cloud-camels': {
          templateUrl: 'app/projects/cloud-camels/cloud-camels.about.html',
          controller: 'CloudCamelsAboutCtrl'
         },
        'raised@cloud-camels': {
          templateUrl: 'app/projects/cloud-camels/cloud-camels.raised.html',
          controller: 'CloudCamelsRaisedCtrl'
        },
        'donate@cloud-camels': {
          templateUrl: 'app/projects/cloud-camels/cloud-camels.donate.html',
          controller: 'CloudCamelsDonateCtrl'
        }
      }
    })
    .state('data-ducks', {
      url: '/data-ducks',
      views: {
        '': {
          templateUrl: 'app/projects/data-ducks/data-ducks.html',
          controller: 'DataDucksCtrl'
        },
        'about@data-ducks': {
          templateUrl: 'app/projects/data-ducks/data-ducks.about.html',
          controller: 'DataDucksAboutCtrl'
         },
        'raised@data-ducks': {
          templateUrl: 'app/projects/data-ducks/data-ducks.raised.html',
          controller: 'DataDucksRaisedCtrl'
        },
        'donate@data-ducks': {
          templateUrl: 'app/projects/data-ducks/data-ducks.donate.html',
          controller: 'DataDucksDonateCtrl'
        }
      }
    })
    .state('ethernet-elephants', {
      url: '/ethernet-elephants',
      views: {
        '': {
          templateUrl: 'app/projects/ethernet-elephants/ethernet-elephants.html',
          controller: 'EthernetElephantsCtrl'
        },
        'about@ethernet-elephants': {
          templateUrl: 'app/projects/ethernet-elephants/ethernet-elephants.about.html',
          controller: 'EthernetElephantsAboutCtrl'
         },
        'raised@ethernet-elephants': {
          templateUrl: 'app/projects/ethernet-elephants/ethernet-elephants.raised.html',
          controller: 'EthernetElephantsRaisedCtrl'
        },
        'donate@ethernet-elephants': {
          templateUrl: 'app/projects/ethernet-elephants/ethernet-elephants.donate.html',
          controller: 'EthernetElephantsDonateCtrl'
        }
      }
    })
    .state('fibre-foxes', {
      url: '/fibre-foxes',
      views: {
        '': {
          templateUrl: 'app/projects/fibre-foxes/fibre-foxes.html',
          controller: 'FibreFoxesCtrl'
        },
        'about@fibre-foxes': {
          templateUrl: 'app/projects/fibre-foxes/fibre-foxes.about.html',
          controller: 'FibreFoxesAboutCtrl'
         },
        'raised@fibre-foxes': {
          templateUrl: 'app/projects/fibre-foxes/fibre-foxes.raised.html',
          controller: 'FibreFoxesRaisedCtrl'
        },
        'donate@fibre-foxes': {
          templateUrl: 'app/projects/fibre-foxes/fibre-foxes.donate.html',
          controller: 'FibreFoxesDonateCtrl'
        }
      }
    })
    .state('gaming-gorillas', {
      url: '/gaming-gorillas',
      views: {
        '': {
          templateUrl: 'app/projects/gaming-gorillas/gaming-gorillas.html',
          controller: 'GamingGorillasCtrl'
        },
        'about@gaming-gorillas': {
          templateUrl: 'app/projects/gaming-gorillas/gaming-gorillas.about.html',
          controller: 'GamingGorillasAboutCtrl'
         },
        'raised@gaming-gorillas': {
          templateUrl: 'app/projects/gaming-gorillas/gaming-gorillas.raised.html',
          controller: 'GamingGorillasRaisedCtrl'
        },
        'donate@gaming-gorillas': {
          templateUrl: 'app/projects/gaming-gorillas/gaming-gorillas.donate.html',
          controller: 'GamingGorillasDonateCtrl'
        }
      }
    })
    .state('hardware-hippos', {
      url: '/hardware-hippos',
      views: {
        '': {
          templateUrl: 'app/projects/hardware-hippos/hardware-hippos.html',
          controller: 'HardwareHipposCtrl'
        },
        'about@hardware-hippos': {
          templateUrl: 'app/projects/hardware-hippos/hardware-hippos.about.html',
          controller: 'HardwareHipposAboutCtrl'
         },
        'raised@hardware-hippos': {
          templateUrl: 'app/projects/hardware-hippos/hardware-hippos.raised.html',
          controller: 'HardwareHipposRaisedCtrl'
        },
        'donate@hardware-hippos': {
          templateUrl: 'app/projects/hardware-hippos/hardware-hippos.donate.html',
          controller: 'HardwareHipposDonateCtrl'
        }
      }
    })
    .state('internet-iguanas', {
      url: '/internet-iguanas',
      views: {
        '': {
          templateUrl: 'app/projects/internet-iguanas/internet-iguanas.html',
          controller: 'InternetIguanasCtrl'
        },
        'about@internet-iguanas': {
          templateUrl: 'app/projects/internet-iguanas/internet-iguanas.about.html',
          controller: 'InternetIguanasAboutCtrl'
         },
        'raised@internet-iguanas': {
          templateUrl: 'app/projects/internet-iguanas/internet-iguanas.raised.html',
          controller: 'InternetIguanasRaisedCtrl'
        },
        'donate@internet-iguanas': {
          templateUrl: 'app/projects/internet-iguanas/internet-iguanas.donate.html',
          controller: 'InternetIguanasDonateCtrl'
        }
      }
    })
    .state('java-jaguars', {
      url: '/java-jaguars',
      views: {
        '': {
          templateUrl: 'app/projects/java-jaguars/java-jaguars.html',
          controller: 'JavaJaguarsCtrl'
        },
        'about@java-jaguars': {
          templateUrl: 'app/projects/java-jaguars/java-jaguars.about.html',
          controller: 'JavaJaguarsAboutCtrl'
         },
        'raised@java-jaguars': {
          templateUrl: 'app/projects/java-jaguars/java-jaguars.raised.html',
          controller: 'JavaJaguarsRaisedCtrl'
        },
        'donate@java-jaguars': {
          templateUrl: 'app/projects/java-jaguars/java-jaguars.donate.html',
          controller: 'JavaJaguarsDonateCtrl'
        }
      }
    })
    .state('kernel-koalas', {
      url: '/kernel-koalas',
      views: {
        '': {
          templateUrl: 'app/projects/kernel-koalas/kernel-koalas.html',
          controller: 'KernelKoalasCtrl'
        },
        'about@kernel-koalas': {
          templateUrl: 'app/projects/kernel-koalas/kernel-koalas.about.html',
          controller: 'KernelKoalasAboutCtrl'
         },
        'raised@kernel-koalas': {
          templateUrl: 'app/projects/kernel-koalas/kernel-koalas.raised.html',
          controller: 'KernelKoalasRaisedCtrl'
        },
        'donate@kernel-koalas': {
          templateUrl: 'app/projects/kernel-koalas/kernel-koalas.donate.html',
          controller: 'KernelKoalasDonateCtrl'
        }
      }
    })
    .state('linux-llamas', {
      url: '/linux-llamas',
      views: {
        '': {
          templateUrl: 'app/projects/linux-llamas/linux-llamas.html',
          controller: 'LinuxLlamasCtrl'
        },
        'about@linux-llamas': {
          templateUrl: 'app/projects/linux-llamas/linux-llamas.about.html',
          controller: 'LinuxLlamasAboutCtrl'
         },
        'raised@linux-llamas': {
          templateUrl: 'app/projects/linux-llamas/linux-llamas.raised.html',
          controller: 'LinuxLlamasRaisedCtrl'
        },
        'donate@linux-llamas': {
          templateUrl: 'app/projects/linux-llamas/linux-llamas.donate.html',
          controller: 'LinuxLlamasDonateCtrl'
        }
      }
    })
    .state('mobile-monkeys', {
      url: '/mobile-monkeys',
      views: {
        '': {
          templateUrl: 'app/projects/mobile-monkeys/mobile-monkeys.html',
          controller: 'MobileMonkeysCtrl'
        },
        'about@mobile-monkeys': {
          templateUrl: 'app/projects/mobile-monkeys/mobile-monkeys.about.html',
          controller: 'MobileMonkeysAboutCtrl'
         },
        'raised@mobile-monkeys': {
          templateUrl: 'app/projects/mobile-monkeys/mobile-monkeys.raised.html',
          controller: 'MobileMonkeysRaisedCtrl'
        },
        'donate@mobile-monkeys': {
          templateUrl: 'app/projects/mobile-monkeys/mobile-monkeys.donate.html',
          controller: 'MobileMonkeysDonateCtrl'
        }
      }
    })
    .state('network-newts', {
      url: '/network-newts',
      views: {
        '': {
          templateUrl: 'app/projects/network-newts/network-newts.html',
          controller: 'NetworkNewtsCtrl'
        },
        'about@network-newts': {
          templateUrl: 'app/projects/network-newts/network-newts.about.html',
          controller: 'NetworkNewtsAboutCtrl'
         },
        'raised@network-newts': {
          templateUrl: 'app/projects/network-newts/network-newts.raised.html',
          controller: 'NetworkNewtsRaisedCtrl'
        },
        'donate@network-newts': {
          templateUrl: 'app/projects/network-newts/network-newts.donate.html',
          controller: 'NetworkNewtsDonateCtrl'
        }
      }
    })
    .state('optical-octopuses', {
      url: '/optical-octopuses',
      views: {
        '': {
          templateUrl: 'app/projects/optical-octopuses/optical-octopuses.html',
          controller: 'OpticalOctopusesCtrl'
        },
        'about@optical-octopuses': {
          templateUrl: 'app/projects/optical-octopuses/optical-octopuses.about.html',
          controller: 'OpticalOctopusesAboutCtrl'
         },
        'raised@optical-octopuses': {
          templateUrl: 'app/projects/optical-octopuses/optical-octopuses.raised.html',
          controller: 'OpticalOctopusesRaisedCtrl'
        },
        'donate@optical-octopuses': {
          templateUrl: 'app/projects/optical-octopuses/optical-octopuses.donate.html',
          controller: 'OpticalOctopusesDonateCtrl'
        }
      }
    })
    .state('proxy-penguins', {
      url: '/proxy-penguins',
      views: {
        '': {
          templateUrl: 'app/projects/proxy-penguins/proxy-penguins.html',
          controller: 'ProxyPenguinsCtrl'
        },
        'about@proxy-penguins': {
          templateUrl: 'app/projects/proxy-penguins/proxy-penguins.about.html',
          controller: 'ProxyPenguinsAboutCtrl'
         },
        'raised@proxy-penguins': {
          templateUrl: 'app/projects/proxy-penguins/proxy-penguins.raised.html',
          controller: 'ProxyPenguinsRaisedCtrl'
        },
        'donate@proxy-penguins': {
          templateUrl: 'app/projects/proxy-penguins/proxy-penguins.donate.html',
          controller: 'ProxyPenguinsDonateCtrl'
        }
      }
    });


});
