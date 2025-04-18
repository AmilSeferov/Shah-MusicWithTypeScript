import { createSlice } from "@reduxjs/toolkit";
import {
  musicType,
  playListType,
  profileType,
  stateType,
} from "../types/types";
const data = {
  albums: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:album:3t3BbpFJiGcXl4jI5CRLLA",
          name: "Rocky IV",
          artists: {
            items: [
              {
                uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
                profile: {
                  name: "Various Artists",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02f4a2ccbe20d6d52f16816812",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851f4a2ccbe20d6d52f16816812",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273f4a2ccbe20d6d52f16816812",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 1985,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:5XpEKORZ4y6OrCZSKsi46A",
          name: "Norman Fucking Rockwell!",
          artists: {
            items: [
              {
                uri: "spotify:artist:00FQb4jTyendYWaN8pK0wa",
                profile: {
                  name: "Lana Del Rey",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02879e9318cb9f4e05ee552ac9",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851879e9318cb9f4e05ee552ac9",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273879e9318cb9f4e05ee552ac9",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2019,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:6Wi0eIgEMemIdqHhBfe1ti",
          name: "Rock",
          artists: {
            items: [
              {
                uri: "spotify:artist:4ovtyvs7j1jSmwhkBGHqSr",
                profile: {
                  name: "Olamide",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02840fe118b9dec83f68f4d468",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851840fe118b9dec83f68f4d468",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273840fe118b9dec83f68f4d468",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2021,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:1US66auJ538TiXGeUf24yL",
          name: "Rockstar",
          artists: {
            items: [
              {
                uri: "spotify:artist:5deLgmgAEgy8UHOfJ9Dj8w",
                profile: {
                  name: "Ilkay Sencan",
                },
              },
              {
                uri: "spotify:artist:3v6Ji4uoWtKRkhuDUaxi9n",
                profile: {
                  name: "Dynoro",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02a1d56525c3380e5cbda5f48f",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851a1d56525c3380e5cbda5f48f",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273a1d56525c3380e5cbda5f48f",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2019,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:3MATDdrpHmQCmuOcozZjDa",
          name: "TESTING",
          artists: {
            items: [
              {
                uri: "spotify:artist:13ubrt8QOOCPljQ2FL1Kca",
                profile: {
                  name: "A$AP Rocky",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e029feadc48ab0661e9b3a9170b",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d000048519feadc48ab0661e9b3a9170b",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b2739feadc48ab0661e9b3a9170b",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2018,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:5ZNIZY6Dg9sC04xsJEBx0o",
          name: "Rock",
          artists: {
            items: [
              {
                uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
                profile: {
                  name: "Various Artists",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e029e84c4ff5034ce599ed2e1cc",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d000048519e84c4ff5034ce599ed2e1cc",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b2739e84c4ff5034ce599ed2e1cc",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2018,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:3buy6DvCMUseqKyEC4RI4g",
          name: "Rock Believer (Deluxe)",
          artists: {
            items: [
              {
                uri: "spotify:artist:27T030eWyCQRmDyuvr1kxY",
                profile: {
                  name: "Scorpions",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02eeacad9436d5ba5052d46c43",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851eeacad9436d5ba5052d46c43",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273eeacad9436d5ba5052d46c43",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2022,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:2wq6cnNKGy6tP5c5ow5Uo8",
          name: "POCKET ROCKET",
          artists: {
            items: [
              {
                uri: "spotify:artist:46HzS7yz0c9udVwtbHk1sx",
                profile: {
                  name: "Cochise",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02efe0cfba604f12fddb637588",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851efe0cfba604f12fddb637588",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273efe0cfba604f12fddb637588",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2021,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:2Bh34W8x50I7Qp4eoyknyr",
          name: "Rock",
          artists: {
            items: [
              {
                uri: "spotify:artist:4cZvsAtZm91PBC0tXlDrP0",
                profile: {
                  name: "Dirty Palm",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e0235e70dc4e6a0478f98afa7b4",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000485135e70dc4e6a0478f98afa7b4",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b27335e70dc4e6a0478f98afa7b4",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2020,
          },
        },
      },
      {
        data: {
          uri: "spotify:album:3meZFplbMmji648oWUNEfQ",
          name: "Rockabye (feat. Sean Paul & Anne-Marie)",
          artists: {
            items: [
              {
                uri: "spotify:artist:6MDME20pz9RveH9rEXvrOM",
                profile: {
                  name: "Clean Bandit",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e021431c3bdf16aa99f71799d95",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d000048511431c3bdf16aa99f71799d95",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b2731431c3bdf16aa99f71799d95",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 2016,
          },
        },
      },
    ],
  },
  artists: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:artist:3xs0LEzcPXtgNfMNcHzLIP",
          profile: {
            name: "Rockwell",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d0000b27357de8cb9bbbe22a9e71c8af7",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000485157de8cb9bbbe22a9e71c8af7",
                  width: 64,
                  height: 64,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:13ubrt8QOOCPljQ2FL1Kca",
          profile: {
            name: "A$AP Rocky",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb6d5529e3962a16bd267bfeb2",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f1786d5529e3962a16bd267bfeb2",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:5Dnxo3wz80YtuqxSvvT7RG",
          profile: {
            name: "RockA",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb7b46496da72b59cc33e611cf",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f1787b46496da72b59cc33e611cf",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:1T8S48bD91THNKBByWBDyn",
          profile: {
            name: "Dwayne Johnson",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb23bd2abefa574c356dcb36ef",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f17823bd2abefa574c356dcb36ef",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:2KTDVOTp2crzV4KBe16SgW",
          profile: {
            name: "Rock",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb3be664b0e571500cc7722fd5",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f1783be664b0e571500cc7722fd5",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:4pzAvicKWenQtv9zIQim47",
          profile: {
            name: "Rock Mafia",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb22eb45be3f64aa96e863be2d",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f17822eb45be3f64aa96e863be2d",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:28ExwzUQsvgJooOI0X1mr3",
          profile: {
            name: "Jay Rock",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb02012f4390f3c8e7424766a3",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f17802012f4390f3c8e7424766a3",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:2WtzprkWeq1YQZsniLzKUY",
          profile: {
            name: "Rock",
          },
          visuals: {
            avatarImage: null,
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:6JDmbR90UIGFaZcVsbmBWe",
          profile: {
            name: "Rock",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2731298a37825bcb72c82773a8b",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048511298a37825bcb72c82773a8b",
                  width: 64,
                  height: 64,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:artist:28HYsUPxAybp0lyAV4nxyD",
          profile: {
            name: "Rock Mack",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6761610000e5eb71c8cdf2362702c3853cffb9",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab6761610000f17871c8cdf2362702c3853cffb9",
                  width: 160,
                  height: 160,
                },
              ],
            },
          },
        },
      },
    ],
  },
  episodes: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:episode:3thwnKKqM6VF9EC4E18R6T",
          name: "Memorias de un RockStar",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68de57583bf55c0badcc9ce29e1",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fe57583bf55c0badcc9ce29e1",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8ae57583bf55c0badcc9ce29e1",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 3793583,
          },
          releaseDate: {
            isoString: "2022-03-01T02:13:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d5923d8c04c61d3a4a1764243",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f5923d8c04c61d3a4a1764243",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a5923d8c04c61d3a4a1764243",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description:
            "Cuidemos dónde ponemos nuestras esperanzas y sueños, pues corremos el riesgo de que se puedan evaporar. Las Escrituras registran la odisea hedonista de Salomón, para ayudarnos a evitar malgastar nuestras vidas como él lo hizo. Tenemos la opción de aprender de sus errores y decidir el legado que dejaremos en otras vidas cuando nos marchemos. Todos vamos a morir, y el mundo seguirá girando sin nosotros. Debemos aprender a vivir sin degradarnos, sin corrompernos, conscientes del viaje que vamos a hacer cuando regresemos a casa con el Padre. Y cuando lleguemos a la penumbra de nuestro atardecer, debemos enfrentar a la muerte, enteros y vivos.  ---   Support this podcast: https://anchor.fm/dante-gebel/support",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:1uzOt89hUJkFYCK9V9fYhT",
          name: "KÜFÜR MEDİTASYONU (şifa kaynağı)",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68d7b7d704c1f189455185d789d",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1f7b7d704c1f189455185d789d",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8a7b7d704c1f189455185d789d",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 450021,
          },
          releaseDate: {
            isoString: "2021-03-08T22:01:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d7b7d704c1f189455185d789d",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f7b7d704c1f189455185d789d",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a7b7d704c1f189455185d789d",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description: "her şeyi sikin atın gitsin.",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:4o1idc0WeoHeeBW0N2z2ds",
          name: "lovers rock - tv girl / sped up sound by nursena ",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68de411fd56fa8bdf7241b4d6ce",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fe411fd56fa8bdf7241b4d6ce",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8ae411fd56fa8bdf7241b4d6ce",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 162028,
          },
          releaseDate: {
            isoString: "2022-02-06T17:24:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d938e115ffdb649f70851c533",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f938e115ffdb649f70851c533",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a938e115ffdb649f70851c533",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description: "lovers rock - tv girl",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:3bARFYFvYINOY7zHsOnuRq",
          name: "DÜNYANIN EN İYİ SPORCU MOTIVASYONU !!!",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68da8aa29c34b6fbc4baf78840a",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fa8aa29c34b6fbc4baf78840a",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8aa8aa29c34b6fbc4baf78840a",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 631768,
          },
          releaseDate: {
            isoString: "2021-10-24T11:24:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68dc35d396116be3f60c632e493",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1fc35d396116be3f60c632e493",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8ac35d396116be3f60c632e493",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description: "DÜNYANIN EN İYİ SPORCU MOTIVASYONU !!! ",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:5ZscUAvunAsTxnBsyFFTl8",
          name: "ROCK Y MAS ROCK EN ESPAÑOL",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68d5cfec93f5820010ac7651127",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1f5cfec93f5820010ac7651127",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8a5cfec93f5820010ac7651127",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 9567539,
          },
          releaseDate: {
            isoString: "2021-04-25T05:09:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d1c54ff06694e2f9a0c7e39ba",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f1c54ff06694e2f9a0c7e39ba",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a1c54ff06694e2f9a0c7e39ba",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description:
            "LO MEJOR DEL ROCK EN ESPAÑOL EN GENERACION X BONUS TRACK, MIGUELK MATEOS ENANITOS VERDES, ZOE, LOS CLAXONS, LOS BUNKERS, Y MUCHA MUSICA ESPECTACULAR.",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:0tB5bj6oHf2SDvKdGIJbCN",
          name: "BEGE - MİGROS",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/5a5d15c59df3aedd41bcf928584f5968e5edf862",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/d1cb14edd6325986deffdf75f16ff461bd5bf3bc",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/3f20e44f80bc36e9abdb736315d1309b7394cfab",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 163474,
          },
          releaseDate: {
            isoString: "2020-08-23T21:52:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/6310ef20ab9a42501b67431d9213e8ecd31ee048",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/7a9afa78fcf5b564efa93fb3f35b8910e8ac3264",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/27f3a00cba982bedd28e8b5a43d9f37fd9414eee",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description: "berkejuan",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:07AkF6vQhmF9uyyCaaiQ5F",
          name: "Ansage an die Rocket Beans!",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68d081d4b341621eec380207fc3",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1f081d4b341621eec380207fc3",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8a081d4b341621eec380207fc3",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 4141740,
          },
          releaseDate: {
            isoString: "2022-03-04T23:20:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d9c15e4a464021ef2b1a5c6f9",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f9c15e4a464021ef2b1a5c6f9",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a9c15e4a464021ef2b1a5c6f9",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description:
            "Unsere neue Praktikantin Kata unterstützt uns bei einer krassen Ansage an die Rocket Beans! Werbung: Vielen Dank an HelloFresh! Entdeckt neue Gerichte mit Spar-Vorteil: Bis zu 80€ Rabatt (Schweiz 140CHF) - je nach Boxgröße - und kostenloser Versand für die erste Box auf https://www.hellofresh.de/HFSTUNDE oder mit dem Code HFSTUNDE. Und auch ein dickes Danke an Bookbeat! Holt euch jetzt auf https://www.bookbeat.de/sprechstunde zwei Monate kostenlos Hörbücher und Hörspiele - oder nutzt einfach unseren Rabatt-Code Sprechstunde!Feedback, Diskussionen und Rückfragen beantworten wir in unserer Reddit-Community: https://www.reddit.com/r/Sprechstunde/ See acast.com/privacy for privacy and opt-out information.",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:4A98qNwtCAgBXtPdfR3gy8",
          name: "sehinsah-kacarsa-vur-feat-khontkar-kasetcalar-plaa3",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68dd8050a3da8f83204c8773190",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fd8050a3da8f83204c8773190",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8ad8050a3da8f83204c8773190",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 220056,
          },
          releaseDate: {
            isoString: "2021-05-17T06:18:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d40b888a2b045860c87f6da71",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f40b888a2b045860c87f6da71",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a40b888a2b045860c87f6da71",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description: "Zaabum.",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:4FMGf0Qmp7U69NLxMlHKeO",
          name: "#108 - Rocky Raccoon Ultramarathon Race Recap",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68d28715fe733f3c30998250734",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1f28715fe733f3c30998250734",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8a28715fe733f3c30998250734",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 5358733,
          },
          releaseDate: {
            isoString: "2022-02-21T07:30:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab6765630000f68d371ac5be59f54c44bd94eecd",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67656300005f1f371ac5be59f54c44bd94eecd",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab6765630000ba8a371ac5be59f54c44bd94eecd",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description:
            "In this episode, host Nick Bare is joined by BPN's Creative Director Jordan Utter to recount both their experiences running the Rocky Raccoon Ultramarathon which was held on February 5th, 2022.   This is Nick's second 100 mile ultramarathon, and the first race he has run since the Leadville 100 in August of 2021.  Jordan ran the 100 kilometer race on the same course to complete his first ultra. The two share insight into how they approached training, nutrition, and mindset for their respective races, and how their individual experiences differed throughout the weekend.   More Resources: BPN website: www.bpnsupps.com Nick Bare website: www.nickbare.com Instagram: www.instagram.com/nickbarefitness Youtube: www.youtube.com/user/barelifenutrition",
          contentRating: {
            label: "NONE",
          },
        },
      },
      {
        data: {
          uri: "spotify:episode:7qXuwdmQUmlExfIE1G6Sjn",
          name: "Rockstar Freestyle",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/fc94858b3b48794d80b68a724552eaf16bad6d15",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ec4a5f83907a720fec8df8d4cb145e224aefbc72",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/6c59b6a4e0a46149f82cb21251a66648ac086293",
                width: 640,
                height: 640,
              },
            ],
          },
          duration: {
            totalMilliseconds: 119606,
          },
          releaseDate: {
            isoString: "2021-01-14T03:27:00Z",
          },
          podcast: {
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/859d78680269d098c94fc73a39168468bee43dc9",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/8bc86e2781af0a9018b7420cb84f883c8353cc9c",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/215cf4e461e52a52e2c8c029d48d6b582ad67baf",
                  width: 640,
                  height: 640,
                },
              ],
            },
          },
          description: "",
          contentRating: {
            label: "NONE",
          },
        },
      },
    ],
  },
  genres: {
    totalCount: 5,
    items: [
      {
        data: {
          uri: "rock",
          name: "Rock",
          image: {
            sources: [
              {
                url: "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
                width: null,
                height: null,
              },
            ],
          },
        },
      },
      {
        data: {
          uri: "spotify:genre:0JQ5IMCbQBLABS5QuPz2gz",
          name: "Rap Rock",
          image: {
            sources: [
              {
                url: "",
                width: null,
                height: null,
              },
            ],
          },
        },
      },
      {
        data: {
          uri: "spotify:genre:0JQ5IMCbQBLuSQiPSt7COA",
          name: "Rock Right Now",
          image: {
            sources: [
              {
                url: "",
                width: null,
                height: null,
              },
            ],
          },
        },
      },
      {
        data: {
          uri: "50s",
          name: "50s",
          image: {
            sources: [
              {
                url: "https://t.scdn.co/images/0e5e0ae991aa4c9f83b531bf2f46257f",
                width: null,
                height: null,
              },
            ],
          },
        },
      },
      {
        data: {
          uri: "spotify:genre:0JQ5IMCbQBLtdnAfqgo52b",
          name: "Second Wave of Post-rock",
          image: {
            sources: [
              {
                url: "",
                width: null,
                height: null,
              },
            ],
          },
        },
      },
    ],
  },
  playlists: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1EQpj7X7UK8OOF",
          name: "Rock Mix",
          description:
            "<a href=spotify:playlist:37i9dQZF1EIXZWpMEne2Nl>Dire Straits</a>, <a href=spotify:playlist:37i9dQZF1EIUsI68Cm2ojI>Eagles</a>, <a href=spotify:playlist:37i9dQZF1EIVJW7PzIkjtQ>Creedence Clearwater Revival</a> and more",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://seed-mix-image.spotifycdn.com/v6/img/rock/0WwSkZ7LtFUFjGjMZBMt6T/en/default",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1DWXRqgorJj26U",
          name: "Rock Classics",
          description:
            "Rock legends & epic songs spanning decades, that continue to inspire generations. ",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706f0000000242f2feffa24c09214ab3be76",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1DX3RfxtU3KC3j",
          name: "Türkçe Rock",
          description: "Gitar ve davulu konuşturanlar. Kapak: Simge Pınar",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706f000000027f1d6906eac7c8e05da12dee",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:42RzknAZ7lkhLhl057N86v",
          name: " ROCK NACIONAL ARGENTINO ",
          description:
            '¡Las mejores canciones del Rock Argentino!. <a href="https://playlistdespotify.com">Sugerí tu canción</a>, Dale play y disfruta de los clasicos de rock nacional 80 90.',
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706c0000da84594349ddaa2c81ce07d3ce0e",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Top Global",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1DXdJK5t0CJ27H",
          name: "Kült Rock",
          description: "Türkçe rock'ın unutulmazları. Kapak: Duman ",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706f00000002145a1bf38d46cb8a2d8db613",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:6bPfbndNnl9FIRoUVKgmF3",
          name: "Türkçe Rock En İyi 100",
          description:
            'Türkçe Rock\'ın En İyi 100 Şarkısı Sizler İçin Bu Çalma Listesinde.     | <a href="https://www.instagram.com/dipmuzik.co/">Instagram</a> | ',
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706c0000da842e365b856f3daecc254aa568",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Dip Müzik",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:6N4OpEkWtV9dRKH5UzPiOk",
          name: "Rock en ingles 70, 80, 90 y 00",
          description: "Rock en ingles 70, 80, 90 y 00",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706c0000da842bb9d66a173136e8c803f22c",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "J Flores",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1DX9bvVeeesP1m",
          name: "Anadolu Rock",
          description:
            "Efsanelerin yorumlarıyla saykedelik rock. Kapak: Erkin Koray",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706f00000002d9c35bb892a28bc6dbb2da17",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:3VGtJ4wotczNHihDWT4IaQ",
          name: "Rocky Soundtrack (1-6)",
          description:
            "Best songs and music from Rocky I, II, III, IV, V &amp; VI | 洛奇 | ロッキー | Workout and Motivation pump with Rocky Balboa and Creed.",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706c0000da8442afc0b664f39b2e8a8779ca",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Boisterous Pop",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:3O0kKyRVt6TxYBTU4EYikO",
          name: "Rock Nacional - As Melhores",
          description:
            "Os maiores sucessos do Rock Nacional! Ouça as melhores músicas do Rock Brasileiro com Charlie Brown Jr, Titãs, Legião Urbana, O Rappa, Ira e muito mais! Rock Brasil!",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706c0000da84b315b75b65ffd2dea74e9a2e",
                    width: 640,
                    height: 640,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "@vitrolaplay",
          },
        },
      },
    ],
  },
  podcasts: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:show:7exTzXcsvM9EH7uxhWbFFI",
          name: "Rockstars del Dinero",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68decdf29703d33cbef9a4a913c",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fecdf29703d33cbef9a4a913c",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8aecdf29703d33cbef9a4a913c",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Sonoro",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:0IZb7Y060GVPTxP7WV5qXW",
          name: "KÜFÜR MEDİTASYONU (şifa kaynağı)",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68d7b7d704c1f189455185d789d",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1f7b7d704c1f189455185d789d",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8a7b7d704c1f189455185d789d",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "daisy",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:6MBMK3p14EkZTPtpu2xfhm",
          name: "The Triple M Rocks Footy NRL",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68dfb5bc724cfa04ca3159f2863",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1ffb5bc724cfa04ca3159f2863",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8afb5bc724cfa04ca3159f2863",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Triple M",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:59L0gIoKkCjATVS4mHoFQC",
          name: "%100 Müzik ile Rock Tarihinden Hikayeler",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/c89d4639d16bb6f06e82def6323f73ac5f04412c",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/4843a8f066a5eb87fe9740c75705a020d853266c",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/93e9aa5ac26e17ce7e2399496c414e8104349973",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "962 Digital",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:1S8CykYVIekJTcXRRQ7BLq",
          name: "La case de papel - çav bella",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/923bd99f391ccb6ca96de937e1eff3fa9de1c1b0",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/aaf3a7d53942f2b6d2034fe434611a2127f95574",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/455a25ee626978a655fb46a08eb131a246201135",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Lastronin Batuhan",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:3kqVVzS5v0Z7dyLUNtxbnL",
          name: "Rock n' Roll English",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68de44b9e2e13eeb913b04df0f0",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fe44b9e2e13eeb913b04df0f0",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8ae44b9e2e13eeb913b04df0f0",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Martin Johnston",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:7LKD0lzAdvep1LnCmdWwoe",
          name: "ADANA MERKEZ PATLIYOR HERKES",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/b1fa38afb6636b8386ce024c83fb0fb30a1e795e",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/a80d6c7f9c3d2ffe35da19e5e25aec093f4c6380",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/28a5909c1dda8f1981668a2f2a9bd635ffc22b20",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Erdemler Limited®",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:6rUE2QPJmWzH9IWQAzTPTe",
          name: "Rockersønnens Hemmelighed",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68d49f2c176cd1bbe96d44e42f5",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1f49f2c176cd1bbe96d44e42f5",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8a49f2c176cd1bbe96d44e42f5",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Loud",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:166vlIA456SIjOrd1L96ay",
          name: "Tech Leadership Rocks",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/06f1fdd20262681fa0d3c8a28fa2b7e8ed08adde",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/3e5849716b492c8e6fcbc874749611bf265c90bb",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/151b6d9748d928c92b292cad0b9fa221f2df2d1a",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Eduardo",
          },
          mediaType: "AUDIO",
        },
      },
      {
        data: {
          uri: "spotify:show:4hCmX3W4pHZlnRbBiEh9Np",
          name: "Bizim Rock’çılar",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ea7fe7083507db5612b21f644b4351291e5d05c6",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/95589ee81be5781fc9aee353f4819e2ceddb76cc",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/7104004505cdee9f940cf1d067330a3e477167a7",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "NTVRadyo",
          },
          mediaType: "AUDIO",
        },
      },
    ],
  },
  topResults: {
    items: [
      {
        data: {
          uri: "spotify:artist:3xs0LEzcPXtgNfMNcHzLIP",
          profile: {
            name: "Rockwell",
          },
          visuals: {
            avatarImage: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d0000b27357de8cb9bbbe22a9e71c8af7",
                  width: 640,
                  height: 640,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000485157de8cb9bbbe22a9e71c8af7",
                  width: 64,
                  height: 64,
                },
              ],
            },
          },
        },
      },
      {
        data: {
          uri: "spotify:track:0e7ipj03S05BNilyu5bRzt",
          id: "0e7ipj03S05BNilyu5bRzt",
          name: "rockstar (feat. 21 Savage)",
          albumOfTrack: {
            uri: "spotify:album:6trNtQUgC8cgbWcqoMYkOR",
            name: "beerbongs & bentleys",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851b1c4b76e23414c9f20242268",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "6trNtQUgC8cgbWcqoMYkOR",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/6trNtQUgC8cgbWcqoMYkOR?si=yeu78nLfQHaxy4S3Xuh04w",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:246dkjvS1zLTtiykXe5h60",
                profile: {
                  name: "Post Malone",
                },
              },
              {
                uri: "spotify:artist:1URnnhqYAYcrqrcwql10ft",
                profile: {
                  name: "21 Savage",
                },
              },
            ],
          },
          contentRating: {
            label: "EXPLICIT",
          },
          duration: {
            totalMilliseconds: 218146,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1EQpj7X7UK8OOF",
          name: "Rock Mix",
          description:
            "<a href=spotify:playlist:37i9dQZF1EIXZWpMEne2Nl>Dire Straits</a>, <a href=spotify:playlist:37i9dQZF1EIUsI68Cm2ojI>Eagles</a>, <a href=spotify:playlist:37i9dQZF1EIVJW7PzIkjtQ>Creedence Clearwater Revival</a> and more",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://seed-mix-image.spotifycdn.com/v6/img/rock/0WwSkZ7LtFUFjGjMZBMt6T/en/default",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:album:3t3BbpFJiGcXl4jI5CRLLA",
          name: "Rocky IV",
          artists: {
            items: [
              {
                uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
                profile: {
                  name: "Various Artists",
                },
              },
            ],
          },
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab67616d00001e02f4a2ccbe20d6d52f16816812",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab67616d00004851f4a2ccbe20d6d52f16816812",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67616d0000b273f4a2ccbe20d6d52f16816812",
                width: 640,
                height: 640,
              },
            ],
          },
          date: {
            year: 1985,
          },
        },
      },
      {
        data: {
          uri: "spotify:show:7exTzXcsvM9EH7uxhWbFFI",
          name: "Rockstars del Dinero",
          coverArt: {
            sources: [
              {
                url: "https://i.scdn.co/image/ab6765630000f68decdf29703d33cbef9a4a913c",
                width: 64,
                height: 64,
              },
              {
                url: "https://i.scdn.co/image/ab67656300005f1fecdf29703d33cbef9a4a913c",
                width: 300,
                height: 300,
              },
              {
                url: "https://i.scdn.co/image/ab6765630000ba8aecdf29703d33cbef9a4a913c",
                width: 640,
                height: 640,
              },
            ],
          },
          type: "PODCAST",
          publisher: {
            name: "Sonoro",
          },
          mediaType: "AUDIO",
        },
      },
    ],
    featured: [
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1DWYGrDuvTW4S8",
          name: "Behind The Lyrics: HITS",
          description:
            "Watch your screen as you listen to see lyrics, fun facts, and artist stories from Genius!",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://i.scdn.co/image/ab67706f0000000243af530ae7fb19fc104789dc",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1E4EghP5SblUDr",
          name: "Rockwell Radio",
          description: "",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://seeded-session-images.scdn.co/v1/img/artist/3xs0LEzcPXtgNfMNcHzLIP/en",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
      {
        data: {
          uri: "spotify:playlist:37i9dQZF1DZ06evO23zms8",
          name: "This Is Rockwell",
          description:
            "This is Rockwell. The essential tracks, all in one playlist.",
          images: {
            items: [
              {
                sources: [
                  {
                    url: "https://thisis-images.scdn.co/37i9dQZF1DZ06evO23zms8-default.jpg",
                    width: null,
                    height: null,
                  },
                ],
              },
            ],
          },
          owner: {
            name: "Spotify",
          },
        },
      },
    ],
  },
  tracks: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:track:0e7ipj03S05BNilyu5bRzt",
          id: "0e7ipj03S05BNilyu5bRzt",
          name: "rockstar (feat. 21 Savage)",
          albumOfTrack: {
            uri: "spotify:album:6trNtQUgC8cgbWcqoMYkOR",
            name: "beerbongs & bentleys",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02b1c4b76e23414c9f20242268",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851b1c4b76e23414c9f20242268",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "6trNtQUgC8cgbWcqoMYkOR",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/6trNtQUgC8cgbWcqoMYkOR?si=Bzl5ZJgUTyKSZB8jlvAC4g",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:246dkjvS1zLTtiykXe5h60",
                profile: {
                  name: "Post Malone",
                },
              },
              {
                uri: "spotify:artist:1URnnhqYAYcrqrcwql10ft",
                profile: {
                  name: "21 Savage",
                },
              },
            ],
          },
          contentRating: {
            label: "EXPLICIT",
          },
          duration: {
            totalMilliseconds: 218146,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:0So2sgVa8aJiARPl2P29u2",
          id: "0So2sgVa8aJiARPl2P29u2",
          name: "Pope Is a Rockstar",
          albumOfTrack: {
            uri: "spotify:album:7ywSMs3G2OWOGVKMqc7KsE",
            name: "SALES LP",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e021138eea74b6d7e06289bedaa",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048511138eea74b6d7e06289bedaa",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2731138eea74b6d7e06289bedaa",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "7ywSMs3G2OWOGVKMqc7KsE",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/7ywSMs3G2OWOGVKMqc7KsE?si=-oAUoGg6RU2sEXPLuzM8TA",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:6vVztIuqdDHvYWxOEXCzjN",
                profile: {
                  name: "SALES",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 187333,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:4OgwXdylh75fHfwUzJTUqg",
          id: "4OgwXdylh75fHfwUzJTUqg",
          name: "Rockstar",
          albumOfTrack: {
            uri: "spotify:album:1US66auJ538TiXGeUf24yL",
            name: "Rockstar",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02a1d56525c3380e5cbda5f48f",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851a1d56525c3380e5cbda5f48f",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273a1d56525c3380e5cbda5f48f",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "1US66auJ538TiXGeUf24yL",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/1US66auJ538TiXGeUf24yL?si=OPhXrO-GQf-YuQRGTbwBBA",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:5deLgmgAEgy8UHOfJ9Dj8w",
                profile: {
                  name: "Ilkay Sencan",
                },
              },
              {
                uri: "spotify:artist:3v6Ji4uoWtKRkhuDUaxi9n",
                profile: {
                  name: "Dynoro",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 212280,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:5knuzwU65gJK7IF5yJsuaW",
          id: "5knuzwU65gJK7IF5yJsuaW",
          name: "Rockabye (feat. Sean Paul & Anne-Marie)",
          albumOfTrack: {
            uri: "spotify:album:3meZFplbMmji648oWUNEfQ",
            name: "Rockabye (feat. Sean Paul & Anne-Marie)",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e021431c3bdf16aa99f71799d95",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048511431c3bdf16aa99f71799d95",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2731431c3bdf16aa99f71799d95",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "3meZFplbMmji648oWUNEfQ",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/3meZFplbMmji648oWUNEfQ?si=kEcpyNGcTSKlhRySRMnDkA",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:6MDME20pz9RveH9rEXvrOM",
                profile: {
                  name: "Clean Bandit",
                },
              },
              {
                uri: "spotify:artist:3Isy6kedDrgPYoTS1dazA9",
                profile: {
                  name: "Sean Paul",
                },
              },
              {
                uri: "spotify:artist:1zNqDE7qDGCsyzJwohVaoX",
                profile: {
                  name: "Anne-Marie",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 251088,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:0CN4qzGw9mUHYdQvo7VCsu",
          id: "0CN4qzGw9mUHYdQvo7VCsu",
          name: "Rockin' Around The Christmas Tree",
          albumOfTrack: {
            uri: "spotify:album:6b8YfsKvzvepM8nCVPOztx",
            name: "Esperando A Santa Vol. 2",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e0263d4e6d89dd8fb4e1c0d31f2",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000485163d4e6d89dd8fb4e1c0d31f2",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b27363d4e6d89dd8fb4e1c0d31f2",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "6b8YfsKvzvepM8nCVPOztx",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/6b8YfsKvzvepM8nCVPOztx?si=cPP-5U-VQ8WshbvBA5EATA",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:5C4PDR4LnhZTbVnKWXuDKD",
                profile: {
                  name: "Morat",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 154453,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:3B3V1R35fv4Vz5FNBT7xUn",
          id: "3B3V1R35fv4Vz5FNBT7xUn",
          name: "you should see me in a crown",
          albumOfTrack: {
            uri: "spotify:album:1aUEOFjCxEAY3e3JBtLQIR",
            name: "Girls Rock!",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02d0e5044969ecc03e2ed11f12",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851d0e5044969ecc03e2ed11f12",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273d0e5044969ecc03e2ed11f12",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "1aUEOFjCxEAY3e3JBtLQIR",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/1aUEOFjCxEAY3e3JBtLQIR?si=JujzA6BjT-K4AfNrMaNPRQ",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:6qqNVTkY8uBg9cP3Jd7DAH",
                profile: {
                  name: "Billie Eilish",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 180566,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:1FKG2wgJ75wS9MFNVZFiWd",
          id: "1FKG2wgJ75wS9MFNVZFiWd",
          name: "POCKET ROCKET",
          albumOfTrack: {
            uri: "spotify:album:2wq6cnNKGy6tP5c5ow5Uo8",
            name: "POCKET ROCKET",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02efe0cfba604f12fddb637588",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851efe0cfba604f12fddb637588",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273efe0cfba604f12fddb637588",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "2wq6cnNKGy6tP5c5ow5Uo8",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/2wq6cnNKGy6tP5c5ow5Uo8?si=SIVndD7vQo-8bO51ZiS5Ig",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:46HzS7yz0c9udVwtbHk1sx",
                profile: {
                  name: "Cochise",
                },
              },
            ],
          },
          contentRating: {
            label: "EXPLICIT",
          },
          duration: {
            totalMilliseconds: 131500,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:2KH16WveTQWT6KOG9Rg6e2",
          id: "2KH16WveTQWT6KOG9Rg6e2",
          name: "Eye of the Tiger",
          albumOfTrack: {
            uri: "spotify:album:3t3BbpFJiGcXl4jI5CRLLA",
            name: "Rocky IV",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e02f4a2ccbe20d6d52f16816812",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d00004851f4a2ccbe20d6d52f16816812",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b273f4a2ccbe20d6d52f16816812",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "3t3BbpFJiGcXl4jI5CRLLA",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/3t3BbpFJiGcXl4jI5CRLLA?si=TvCS2zECTNe-aZLelI62KQ",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:26bcq2nyj5GB7uRr558iQg",
                profile: {
                  name: "Survivor",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 245640,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:7ytR5pFWmSjzHJIeQkgog4",
          id: "7ytR5pFWmSjzHJIeQkgog4",
          name: "ROCKSTAR (feat. Roddy Ricch)",
          albumOfTrack: {
            uri: "spotify:album:623PL2MBg50Br5dLXC9E9e",
            name: "BLAME IT ON BABY",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e0220e08c8cc23f404d723b5647",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000485120e08c8cc23f404d723b5647",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b27320e08c8cc23f404d723b5647",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "623PL2MBg50Br5dLXC9E9e",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/623PL2MBg50Br5dLXC9E9e?si=FFFMl_KRS1u1Lt-g7NLQiw",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:4r63FhuTkUYltbVAg5TQnk",
                profile: {
                  name: "DaBaby",
                },
              },
              {
                uri: "spotify:artist:757aE44tKEUQEqRuT6GnEB",
                profile: {
                  name: "Roddy Ricch",
                },
              },
            ],
          },
          contentRating: {
            label: "EXPLICIT",
          },
          duration: {
            totalMilliseconds: 181733,
          },
          playability: {
            playable: true,
          },
        },
      },
      {
        data: {
          uri: "spotify:track:1H7zdcRD0gLGQY0w5ejGgX",
          id: "1H7zdcRD0gLGQY0w5ejGgX",
          name: "Lovers Rock",
          albumOfTrack: {
            uri: "spotify:album:6WrxgVbi9Q96gV8tZMq3FH",
            name: "French Exit",
            coverArt: {
              sources: [
                {
                  url: "https://i.scdn.co/image/ab67616d00001e023cfca71bb96dacbb1c0fb2bf",
                  width: 300,
                  height: 300,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d000048513cfca71bb96dacbb1c0fb2bf",
                  width: 64,
                  height: 64,
                },
                {
                  url: "https://i.scdn.co/image/ab67616d0000b2733cfca71bb96dacbb1c0fb2bf",
                  width: 640,
                  height: 640,
                },
              ],
            },
            id: "6WrxgVbi9Q96gV8tZMq3FH",
            sharingInfo: {
              shareUrl:
                "https://open.spotify.com/album/6WrxgVbi9Q96gV8tZMq3FH?si=J2L4XgtUQ9uP4Z8k9hWYzw",
            },
          },
          artists: {
            items: [
              {
                uri: "spotify:artist:0Y6dVaC9DZtPNH4591M42W",
                profile: {
                  name: "TV Girl",
                },
              },
            ],
          },
          contentRating: {
            label: "NONE",
          },
          duration: {
            totalMilliseconds: 213920,
          },
          playability: {
            playable: true,
          },
        },
      },
    ],
  },
  users: {
    totalCount: 1000,
    items: [
      {
        data: {
          uri: "spotify:user:rockstargames",
          id: "rockstargames",
          displayName: "Rockstar Games",
          username: "rockstargames",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b822696da150dafe289126bd1ff",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee852696da150dafe289126bd1ff",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:rockinriooficial",
          id: "rockinriooficial",
          displayName: "Rock in Rio",
          username: "rockinriooficial",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b8215699e5d984ae3e7d7589177",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee8515699e5d984ae3e7d7589177",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:rockhardmagazin",
          id: "rockhardmagazin",
          displayName: "Rock Hard Magazin",
          username: "rockhardmagazin",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b82dda3f3540459214ebff2da77",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee85dda3f3540459214ebff2da77",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:my-rock",
          id: "my-rock",
          displayName: "Phil Lists",
          username: "my-rock",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b82ba492c3510fa3b46db282801",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee85ba492c3510fa3b46db282801",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:filtr.rock.de",
          id: "filtr.rock.de",
          displayName: "Rock.de",
          username: "filtr.rock.de",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b821a14b4fe7e0de0ad59ce986a",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee851a14b4fe7e0de0ad59ce986a",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:rocksound",
          id: "rocksound",
          displayName: "Rock Sound",
          username: "rocksound",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b820eff7c66ce2bb7cb66617b24",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee850eff7c66ce2bb7cb66617b24",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:ev33mgdhkavs2p6qy72ki9z3e",
          id: "ev33mgdhkavs2p6qy72ki9z3e",
          displayName: "East Rock Radio",
          username: "ev33mgdhkavs2p6qy72ki9z3e",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b82816b6d89caa109762a92774a",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee85816b6d89caa109762a92774a",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:rockdeluxspotifyoficial",
          id: "rockdeluxspotifyoficial",
          displayName: "Rockdelux Oficial",
          username: "rockdeluxspotifyoficial",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b82f41bd749ae78e8a580a067fb",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee85f41bd749ae78e8a580a067fb",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:classicrockmagazine",
          id: "classicrockmagazine",
          displayName: "Classic Rock",
          username: "classicrockmagazine",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b82a531fb77c4515fff70d46bf0",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee85a531fb77c4515fff70d46bf0",
          },
        },
      },
      {
        data: {
          uri: "spotify:user:lyckligaste",
          id: "lyckligaste",
          displayName: "ROCK RADAR",
          username: "lyckligaste",
          image: {
            smallImageUrl:
              "https://i.scdn.co/image/ab67757000003b8211eac9b124799ffa87753751",
            largeImageUrl:
              "https://i.scdn.co/image/ab6775700000ee8511eac9b124799ffa87753751",
          },
        },
      },
    ],
  },
};

const playLists: playListType[] =
// data.playlists.items.map((item: any) => {
//   return {
//     name: item.data.name,
//     img: item.data.images.items[0].sources[0].url,
//     musics: [],
//   };
// });
JSON.parse(localStorage.musicLists)
const initialState: stateType = {
  isLoading: false,
  error: false,
  data: data,
  menu: true,
  addPlayList: false,
  player:JSON.parse(localStorage.getItem('player') ),
  playLists: playLists,
  profile: { name: "", img: "" },
  playList: { name: "", img: "", musics: [] },
  selectedMusic: {music:null,toPlayList:false},
};

export const counterSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    setmenu: (state) => {
      state.menu = !state.menu;
    },
    setAddList: (state) => {
      state.addPlayList = !state.addPlayList;
    },
    addPlayList: (
      state,
      actions: {
        payload: playListType;
        type: string;
      }
    ) => {
      state.playLists = [...state.playLists, actions.payload];
      localStorage.setItem('musicLists',JSON.stringify(state.playLists))
    },
    addPlayer: (
      state,
      actions: {
        payload: any;
        type: string;
      }
    ) => {
      localStorage.setItem('player',JSON.stringify(actions.payload))
      state.player = actions.payload;
    },
    addProfile: (
      state,
      actions: {
        payload: profileType;
        type: string;
      }
    ) => {
      state.profile = actions.payload;
    },
    selectPlayList: (
      state,
      actions: {
        payload: playListType;
        type: string;
      }
    ) => {
      state.playList = actions.payload;
     
    },
    sellectMusic: (
      state,
      actions: {
        payload: null | musicType;
        type: string;
      }
    ) => {
      state.selectedMusic.music = actions.payload;
    },
    add_toPlayList: (state, actions) => {
      console.log('clcl')
      state.playLists.filter((item) => {
        if (
          item.name === actions.payload.name
        )
          state.selectedMusic.music !== null && item.musics.push(state.selectedMusic.music);
          localStorage.setItem('musicLists',JSON.stringify(state.playLists))
      });
    },
    setsellect:(state)=>{
      state.selectedMusic.toPlayList=!state.selectedMusic.toPlayList
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setmenu,
  setAddList,
  addPlayList,
  addPlayer,
  addProfile,
  selectPlayList,
  sellectMusic,
  add_toPlayList,
  setsellect,
} = counterSlice.actions;

export default counterSlice.reducer;
