export interface Nod {
  id: number;
  tip: string;
  nume: string;
  date: Nod;
}


export const ac = [
  {
    Doctorat: {
      id: 35, tip: 'CICLU', nume: 'Doctorat', date: {
        'Calculatoare și tehnologia informației': {
          id: 53,
          tip: 'DOMENIU',
          nume: 'Calculatoare și tehnologia informației',
          date: {
            1: {id: 293, tip: 'AN', nume: '1', date: null},
            10: {id: 302, tip: 'AN', nume: '10', date: null},
            2: {id: 294, tip: 'AN', nume: '2', date: null},
            3: {id: 295, tip: 'AN', nume: '3', date: null},
            4: {id: 296, tip: 'AN', nume: '4', date: null},
            5: {id: 297, tip: 'AN', nume: '5', date: null},
            6: {id: 298, tip: 'AN', nume: '6', date: null},
            7: {id: 299, tip: 'AN', nume: '7', date: null},
            8: {id: 300, tip: 'AN', nume: '8', date: null},
            9: {id: 301, tip: 'AN', nume: '9', date: null}
          }
        },
        'Ingineria sistemelor (Automatică și Informatică Aplicată)': {
          id: 52,
          tip: 'DOMENIU',
          nume: 'Ingineria sistemelor (Automatică și Informatică Aplicată)',
          date: {
            1: {id: 281, tip: 'AN', nume: '1', date: null},
            10: {id: 290, tip: 'AN', nume: '10', date: null},
            2: {id: 282, tip: 'AN', nume: '2', date: null},
            3: {id: 283, tip: 'AN', nume: '3', date: null},
            4: {id: 284, tip: 'AN', nume: '4', date: null},
            5: {id: 285, tip: 'AN', nume: '5', date: null},
            6: {id: 286, tip: 'AN', nume: '6', date: null},
            7: {id: 287, tip: 'AN', nume: '7', date: null},
            8: {id: 288, tip: 'AN', nume: '8', date: null},
            9: {id: 289, tip: 'AN', nume: '9', date: null}
          }
        }
      }
    }, Licență: {
      id: 14, tip: 'CICLU', nume: 'Licență', date: {
        'Calculatoare și tehnologia informației': {
          id: 47, tip: 'DOMENIU', nume: 'Calculatoare și tehnologia informației', date: {
            Calculatoare: {
              id: 136,
              tip: 'PROGRAM',
              nume: 'Calculatoare',
              date: {
                4: {
                  id: 568,
                  tip: 'AN',
                  nume: '4',
                  date: {
                    '1405A': {id: 898, tip: 'GRUPA', nume: '1405A', date: null},
                    '1405B': {id: 901, tip: 'GRUPA', nume: '1405B', date: null},
                    '1406A': {id: 900, tip: 'GRUPA', nume: '1406A', date: null},
                    '1406B': {id: 897, tip: 'GRUPA', nume: '1406B', date: null},
                    '1407A': {id: 899, tip: 'GRUPA', nume: '1407A', date: null}
                  }
                }
              }
            },
            'Calculatoare și tehnologia informației (trunchi comun)': {
              id: 137, tip: 'PROGRAM', nume: 'Calculatoare și tehnologia informației (trunchi comun)', date: {
                1: {
                  id: 571,
                  tip: 'AN',
                  nume: '1',
                  date: {
                    1: {
                      id: 814,
                      tip: 'SERIE',
                      nume: '1',
                      date: {
                        '1106A': {id: 924, tip: 'GRUPA', nume: '1106A', date: null},
                        '1106B': {id: 923, tip: 'GRUPA', nume: '1106B', date: null},
                        '1107A': {id: 925, tip: 'GRUPA', nume: '1107A', date: null},
                        '1107B': {id: 926, tip: 'GRUPA', nume: '1107B', date: null},
                        '1108A': {id: 928, tip: 'GRUPA', nume: '1108A', date: null},
                        '1108B': {id: 929, tip: 'GRUPA', nume: '1108B', date: null},
                        '1109B': {id: 927, tip: 'GRUPA', nume: '1109B', date: null}
                      }
                    },
                    2: {
                      id: 815,
                      tip: 'SERIE',
                      nume: '2',
                      date: {
                        '1108A': {id: 935, tip: 'GRUPA', nume: '1108A', date: null},
                        '1108B': {id: 937, tip: 'GRUPA', nume: '1108B', date: null},
                        '1109A': {id: 936, tip: 'GRUPA', nume: '1109A', date: null},
                        '1109B': {id: 930, tip: 'GRUPA', nume: '1109B', date: null},
                        '1110A': {id: 934, tip: 'GRUPA', nume: '1110A', date: null},
                        '1110B': {id: 932, tip: 'GRUPA', nume: '1110B', date: null},
                        '1111A': {id: 931, tip: 'GRUPA', nume: '1111A', date: null},
                        '1111B': {id: 933, tip: 'GRUPA', nume: '1111B', date: null}
                      }
                    }
                  }
                },
                2: {
                  id: 570,
                  tip: 'AN',
                  nume: '2',
                  date: {
                    1: {
                      id: 812,
                      tip: 'SERIE',
                      nume: '1',
                      date: {
                        '1206A': {id: 912, tip: 'GRUPA', nume: '1206A', date: null},
                        '1206B': {id: 915, tip: 'GRUPA', nume: '1206B', date: null},
                        '1207A': {id: 917, tip: 'GRUPA', nume: '1207A', date: null},
                        '1207B': {id: 914, tip: 'GRUPA', nume: '1207B', date: null},
                        '1208A': {id: 913, tip: 'GRUPA', nume: '1208A', date: null},
                        '1208B': {id: 916, tip: 'GRUPA', nume: '1208B', date: null}
                      }
                    },
                    2: {
                      id: 813,
                      tip: 'SERIE',
                      nume: '2',
                      date: {
                        '1209A': {id: 921, tip: 'GRUPA', nume: '1209A', date: null},
                        '1209B': {id: 918, tip: 'GRUPA', nume: '1209B', date: null},
                        '1210A': {id: 922, tip: 'GRUPA', nume: '1210A', date: null},
                        '1210B': {id: 919, tip: 'GRUPA', nume: '1210B', date: null},
                        '1211A': {id: 920, tip: 'GRUPA', nume: '1211A', date: null}
                      }
                    }
                  }
                },
                3: {
                  id: 569,
                  tip: 'AN',
                  nume: '3',
                  date: {
                    1: {
                      id: 810,
                      tip: 'SERIE',
                      nume: '1',
                      date: {
                        '1305A': {id: 903, tip: 'GRUPA', nume: '1305A', date: null},
                        '1305B': {id: 902, tip: 'GRUPA', nume: '1305B', date: null},
                        '1306A': {id: 904, tip: 'GRUPA', nume: '1306A', date: null},
                        '1306B': {id: 906, tip: 'GRUPA', nume: '1306B', date: null},
                        '1307A': {id: 905, tip: 'GRUPA', nume: '1307A', date: null}
                      }
                    },
                    2: {
                      id: 811,
                      tip: 'SERIE',
                      nume: '2',
                      date: {
                        '1308A': {id: 909, tip: 'GRUPA', nume: '1308A', date: null},
                        '1308B': {id: 908, tip: 'GRUPA', nume: '1308B', date: null},
                        '1309A': {id: 910, tip: 'GRUPA', nume: '1309A', date: null},
                        '1309B': {id: 911, tip: 'GRUPA', nume: '1309B', date: null},
                        '1310A': {id: 907, tip: 'GRUPA', nume: '1310A', date: null}
                      }
                    }
                  }
                }
              }
            },
            'Tehnologia informației': {
              id: 135,
              tip: 'PROGRAM',
              nume: 'Tehnologia informației',
              date: {
                4: {
                  id: 439,
                  tip: 'AN',
                  nume: '4',
                  date: {
                    1: {
                      id: 809,
                      tip: 'SERIE',
                      nume: '1',
                      date: {'1410A': {id: 896, tip: 'GRUPA', nume: '1410A', date: null}}
                    }
                  }
                }
              }
            }
          }
        }, 'Ingineria sistemelor (Automatică și Informatică Aplicată)': {
          id: 46, tip: 'DOMENIU', nume: 'Ingineria sistemelor (Automatică și Informatică Aplicată)', date: {
            'Automatică și informatică aplicată': {
              id: 134, tip: 'PROGRAM', nume: 'Automatică și informatică aplicată', date: {
                1: {
                  id: 438,
                  tip: 'AN',
                  nume: '1',
                  date: {
                    '1101A': {id: 891, tip: 'GRUPA', nume: '1101A', date: null},
                    '1101B': {id: 888, tip: 'GRUPA', nume: '1101B', date: null},
                    '1102A': {id: 892, tip: 'GRUPA', nume: '1102A', date: null},
                    '1102B': {id: 890, tip: 'GRUPA', nume: '1102B', date: null},
                    '1103A': {id: 893, tip: 'GRUPA', nume: '1103A', date: null},
                    '1103B': {id: 894, tip: 'GRUPA', nume: '1103B', date: null},
                    '1104A': {id: 886, tip: 'GRUPA', nume: '1104A', date: null},
                    '1104B': {id: 887, tip: 'GRUPA', nume: '1104B', date: null},
                    '1105A': {id: 889, tip: 'GRUPA', nume: '1105A', date: null},
                    '1105B': {id: 895, tip: 'GRUPA', nume: '1105B', date: null}
                  }
                },
                2: {
                  id: 437,
                  tip: 'AN',
                  nume: '2',
                  date: {
                    '1201A': {id: 880, tip: 'GRUPA', nume: '1201A', date: null},
                    '1201B': {id: 878, tip: 'GRUPA', nume: '1201B', date: null},
                    '1202A': {id: 882, tip: 'GRUPA', nume: '1202A', date: null},
                    '1202B': {id: 885, tip: 'GRUPA', nume: '1202B', date: null},
                    '1203A': {id: 883, tip: 'GRUPA', nume: '1203A', date: null},
                    '1203B': {id: 879, tip: 'GRUPA', nume: '1203B', date: null},
                    '1204A': {id: 877, tip: 'GRUPA', nume: '1204A', date: null},
                    '1204B': {id: 884, tip: 'GRUPA', nume: '1204B', date: null},
                    '1205A': {id: 881, tip: 'GRUPA', nume: '1205A', date: null}
                  }
                },
                3: {
                  id: 436,
                  tip: 'AN',
                  nume: '3',
                  date: {
                    '1301A': {id: 871, tip: 'GRUPA', nume: '1301A', date: null},
                    '1301B': {id: 873, tip: 'GRUPA', nume: '1301B', date: null},
                    '1302A': {id: 869, tip: 'GRUPA', nume: '1302A', date: null},
                    '1302B': {id: 876, tip: 'GRUPA', nume: '1302B', date: null},
                    '1303A': {id: 872, tip: 'GRUPA', nume: '1303A', date: null},
                    '1303B': {id: 875, tip: 'GRUPA', nume: '1303B', date: null},
                    '1304A': {id: 874, tip: 'GRUPA', nume: '1304A', date: null},
                    '1304B': {id: 870, tip: 'GRUPA', nume: '1304B', date: null}
                  }
                },
                4: {
                  id: 435,
                  tip: 'AN',
                  nume: '4',
                  date: {
                    '1401A': {id: 867, tip: 'GRUPA', nume: '1401A', date: null},
                    '1401B': {id: 861, tip: 'GRUPA', nume: '1401B', date: null},
                    '1402A': {id: 864, tip: 'GRUPA', nume: '1402A', date: null},
                    '1402B': {id: 865, tip: 'GRUPA', nume: '1402B', date: null},
                    '1403A': {id: 863, tip: 'GRUPA', nume: '1403A', date: null},
                    '1403B': {id: 868, tip: 'GRUPA', nume: '1403B', date: null},
                    '1404A': {id: 866, tip: 'GRUPA', nume: '1404A', date: null},
                    '1404B': {id: 862, tip: 'GRUPA', nume: '1404B', date: null}
                  }
                }
              }
            }
          }
        }
      }
    }, Master: {
      id: 25, tip: 'CICLU', nume: 'Master', date: {
        'Calculatoare și tehnologia informației': {
          id: 49, tip: 'DOMENIU', nume: 'Calculatoare și tehnologia informației', date: {
            'Calculatoare încorporate': {
              id: 140,
              tip: 'PROGRAM',
              nume: 'Calculatoare încorporate',
              date: {
                1: {
                  id: 567,
                  tip: 'AN',
                  nume: '1',
                  date: {
                    'CI I 1A': {id: 952, tip: 'GRUPA', nume: 'CI I 1A', date: null},
                    'CI I 1B': {id: 951, tip: 'GRUPA', nume: 'CI I 1B', date: null},
                    'CI I 2A': {id: 953, tip: 'GRUPA', nume: 'CI I 2A', date: null}
                  }
                },
                2: {
                  id: 566,
                  tip: 'AN',
                  nume: '2',
                  date: {
                    'CI II 1A': {id: 949, tip: 'GRUPA', nume: 'CI II 1A', date: null},
                    'CI II 1B': {id: 950, tip: 'GRUPA', nume: 'CI II 1B', date: null}
                  }
                }
              }
            },
            'Distributed Systems and Web Technologies': {
              id: 139,
              tip: 'PROGRAM',
              nume: 'Distributed Systems and Web Technologies',
              date: {
                1: {
                  id: 561,
                  tip: 'AN',
                  nume: '1',
                  date: {
                    'DSWT 1 1A': {id: 948, tip: 'GRUPA', nume: 'DSWT 1 1A', date: null},
                    'DSWT I 1B': {id: 947, tip: 'GRUPA', nume: 'DSWT I 1B', date: null}
                  }
                },
                2: {
                  id: 560,
                  tip: 'AN',
                  nume: '2',
                  date: {
                    'DSWT II 1A': {id: 946, tip: 'GRUPA', nume: 'DSWT II 1A', date: null},
                    'DSWT II 1B': {id: 945, tip: 'GRUPA', nume: 'DSWT II 1B', date: null}
                  }
                }
              }
            },
            'Sisteme Distribuite și Tehnologii Web': {
              id: 138,
              tip: 'PROGRAM',
              nume: 'Sisteme Distribuite și Tehnologii Web',
              date: {
                1: {
                  id: 559,
                  tip: 'AN',
                  nume: '1',
                  date: {
                    'SDTW I 1A': {id: 944, tip: 'GRUPA', nume: 'SDTW I 1A', date: null},
                    'SDTW I 1B': {id: 943, tip: 'GRUPA', nume: 'SDTW I 1B', date: null},
                    'SDTW I 2A': {id: 942, tip: 'GRUPA', nume: 'SDTW I 2A', date: null},
                    'SDTW I 2B': {id: 941, tip: 'GRUPA', nume: 'SDTW I 2B', date: null}
                  }
                },
                2: {
                  id: 558,
                  tip: 'AN',
                  nume: '2',
                  date: {
                    'SDTW II 1A': {id: 940, tip: 'GRUPA', nume: 'SDTW II 1A', date: null},
                    'SDTW II 1B': {id: 938, tip: 'GRUPA', nume: 'SDTW II 1B', date: null},
                    'SDTW II 2A': {id: 939, tip: 'GRUPA', nume: 'SDTW II 2A', date: null}
                  }
                }
              }
            }
          }
        }, 'Ingineria sistemelor (Automatică și Informatică Aplicată)': {
          id: 50,
          tip: 'DOMENIU',
          nume: 'Ingineria sistemelor (Automatică și Informatică Aplicată)',
          date: {
            'Sisteme de control încorporate': {
              id: 141,
              tip: 'PROGRAM',
              nume: 'Sisteme de control încorporate',
              date: {
                1: {
                  id: 563,
                  tip: 'AN',
                  nume: '1',
                  date: {
                    'SCI I 1A': {id: 956, tip: 'GRUPA', nume: 'SCI I 1A', date: null},
                    'SCI I 1B': {id: 959, tip: 'GRUPA', nume: 'SCI I 1B', date: null},
                    'SCI I 2A': {id: 957, tip: 'GRUPA', nume: 'SCI I 2A', date: null},
                    'SCI I 2B': {id: 958, tip: 'GRUPA', nume: 'SCI I 2B', date: null}
                  }
                },
                2: {
                  id: 562,
                  tip: 'AN',
                  nume: '2',
                  date: {
                    'SCI II 1A': {id: 955, tip: 'GRUPA', nume: 'SCI II 1A', date: null},
                    'SCI II 1B': {id: 954, tip: 'GRUPA', nume: 'SCI II 1B', date: null}
                  }
                }
              }
            },
            'Systems and Control': {
              id: 142,
              tip: 'PROGRAM',
              nume: 'Systems and Control',
              date: {
                1: {
                  id: 565,
                  tip: 'AN',
                  nume: '1',
                  date: {'SC 1': {id: 961, tip: 'GRUPA', nume: 'SC 1', date: null}}
                },
                2: {
                  id: 564,
                  tip: 'AN',
                  nume: '2',
                  date: {'SC II 1A': {id: 960, tip: 'GRUPA', nume: 'SC II 1A', date: null}}
                }
              }
            }
          }
        }
      }
    }
  }
];
