import { InferInsertModel } from 'drizzle-orm'

import { AddressInsertInput } from '@backend/graphql/modules/address/addressRepository'

import { notaryDateRule, user } from './schema'

type UserInsertInput = Omit<InferInsertModel<typeof user>, 'id' | 'password'>
type NotaryDateRulesInsertInput = Omit<
  InferInsertModel<typeof notaryDateRule>,
  'id' | 'notaryId'
>

export interface NotarySeedData {
  user: UserInsertInput
  address: AddressInsertInput
  dateRules: NotaryDateRulesInsertInput[]
}

export const notarySeedDataValues: NotarySeedData[] = [
  // Praha 1
  {
    user: {
      email: 'petr.hochman@notary.com',
      displayName: 'JUDr. Petr Hochman',
      name: 'Petr',
      surname: 'Hochman',
      gender: 'Male',
      phone: '+420777111222',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Staroměstské náměstí',
      streetNumber: '1',
      municipality: 'Praha',
      postalCode: '11000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 1,
        endMonth: 1,
      },
      {
        startDay: 1,
        endDay: 28,
        startMonth: 2,
        endMonth: 2,
      },
    ],
  },
  {
    user: {
      email: 'roman.hochman@notary.com',
      displayName: 'JUDr. Roman Hochman',
      name: 'Roman',
      surname: 'Hochman',
      gender: 'Male',
      phone: '+420777222333',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Karlův most',
      streetNumber: '15',
      municipality: 'Praha',
      postalCode: '11800',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 3,
        endMonth: 3,
      },
      {
        startDay: 1,
        endDay: 30,
        startMonth: 4,
        endMonth: 4,
      },
    ],
  },
  {
    user: {
      email: 'bohdan.hallada@notary.com',
      displayName: 'JUDr. Bohdan Hallada',
      name: 'Bohdan',
      surname: 'Hallada',
      gender: 'Male',
      phone: '+420777333444',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Václavské náměstí',
      streetNumber: '21',
      municipality: 'Praha',
      postalCode: '11000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 5,
        endMonth: 5,
      },
      {
        startDay: 1,
        endDay: 30,
        startMonth: 6,
        endMonth: 6,
      },
    ],
  },
  {
    user: {
      email: 'jarmila.humpolcova@notary.com',
      displayName: 'JUDr. Jarmila Humpolcová',
      name: 'Jarmila',
      surname: 'Humpolcová',
      gender: 'Female',
      phone: '+420777444555',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vinohrady',
      streetNumber: '34',
      municipality: 'Praha',
      postalCode: '11000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 7,
        endMonth: 7,
      },
      {
        startDay: 1,
        endDay: 31,
        startMonth: 8,
        endMonth: 8,
      },
    ],
  },
  {
    user: {
      email: 'miroslav.novak@notary.com',
      displayName: 'JUDr. Miroslav Novák',
      name: 'Miroslav',
      surname: 'Novák',
      gender: 'Male',
      phone: '+420777555666',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Malá Strana',
      streetNumber: '17',
      municipality: 'Praha',
      postalCode: '11000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 30,
        startMonth: 9,
        endMonth: 9,
      },
      {
        startDay: 1,
        endDay: 31,
        startMonth: 10,
        endMonth: 10,
      },
    ],
  },
  {
    user: {
      email: 'lucie.vankova@notary.com',
      displayName: 'JUDr. Lucie Vaňková',
      name: 'Lucie',
      surname: 'Vaňková',
      gender: 'Female',
      phone: '+420777666777',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Letná',
      streetNumber: '50',
      municipality: 'Praha',
      postalCode: '11000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 30,
        startMonth: 11,
        endMonth: 11,
      },
      {
        startDay: 1,
        endDay: 31,
        startMonth: 12,
        endMonth: 12,
      },
    ],
  },

  // Praha 2
  {
    user: {
      email: 'zuzana.prochazkova@notary.com',
      displayName: 'JUDr. Zuzana Holá Procházková',
      name: 'Zuzana',
      surname: 'Holá Procházková',
      gender: 'Female',
      phone: '+420777333444',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Václavské náměstí',
      streetNumber: '1',
      municipality: 'Praha',
      postalCode: '12000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 1,
        endMonth: 3,
      },
    ],
  },
  {
    user: {
      email: 'nikola.slavik@notary.com',
      displayName: 'Mgr. Nikola Slavík',
      name: 'Nikola',
      surname: 'Slavík',
      gender: 'Male',
      phone: '+420777444555',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Karlovo náměstí',
      streetNumber: '10',
      municipality: 'Praha',
      postalCode: '12000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 30,
        startMonth: 4,
        endMonth: 6,
      },
    ],
  },
  {
    user: {
      email: 'lukas.valigura@notary.com',
      displayName: 'Mgr. Lukáš Valigura',
      name: 'Lukáš',
      surname: 'Valigura',
      gender: 'Male',
      phone: '+420777555666',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Karlovo náměstí',
      streetNumber: '5',
      municipality: 'Praha',
      postalCode: '12000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 30,
        startMonth: 7,
        endMonth: 9,
      },
    ],
  },
  {
    user: {
      email: 'frantisek.boucek@notary.com',
      displayName: 'JUDr. František Bouček, Ph.D.',
      name: 'František',
      surname: 'Bouček',
      gender: 'Male',
      phone: '+420777666777',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Na Příkopě',
      streetNumber: '15',
      municipality: 'Praha',
      postalCode: '12000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 10,
        endMonth: 12,
      },
    ],
  },

  // Praha 3
  {
    user: {
      email: 'iva.sidova@notary.com',
      displayName: 'JUDr. Iva Šídová',
      name: 'Iva',
      surname: 'Šídová',
      gender: 'Female',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vinohradská',
      streetNumber: '30',
      municipality: 'Praha',
      postalCode: '13000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 6,
        startMonth: 1,
        endMonth: 12,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 1,
        endMonth: 1,
      },
    ],
  },
  {
    user: {
      email: 'erik.mrzena@notary.com',
      displayName: 'Mgr. Erik Mrzena',
      name: 'Erik',
      surname: 'Mrzena',
      gender: 'Male',
      phone: '+420777999000',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Žižkova',
      streetNumber: '50',
      municipality: 'Praha',
      postalCode: '13000',
    },
    dateRules: [
      {
        startDay: 7,
        endDay: 12,
        startMonth: 1,
        endMonth: 12,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 3,
        endMonth: 3,
      },
    ],
  },
  {
    user: {
      email: 'radim.neubauer@notary.com',
      displayName: 'Mgr. Radim Neubauer',
      name: 'Radim',
      surname: 'Neubauer',
      gender: 'Male',
      phone: '+420777000111',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Olšanská',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '13000',
    },
    dateRules: [
      {
        startDay: 13,
        endDay: 18,
        startMonth: 1,
        endMonth: 12,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 5,
        endMonth: 5,
      },
    ],
  },
  {
    user: {
      email: 'marketa.menclerova@notary.com',
      displayName: 'JUDr. Markéta Menclerová',
      name: 'Markéta',
      surname: 'Menclerová',
      gender: 'Female',
      phone: '+420777111222',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Jičínská',
      streetNumber: '8',
      municipality: 'Praha',
      postalCode: '13000',
    },
    dateRules: [
      {
        startDay: 19,
        endDay: 24,
        startMonth: 1,
        endMonth: 12,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 7,
        endMonth: 7,
      },
    ],
  },
  {
    user: {
      email: 'stepan.stancl@notary.com',
      displayName: 'Mgr. Štěpán Stancl, LL.M.',
      name: 'Štěpán',
      surname: 'Stancl',
      gender: 'Male',
      phone: '+420777222333',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Husitská',
      streetNumber: '15',
      municipality: 'Praha',
      postalCode: '13000',
    },
    dateRules: [
      {
        startDay: 25,
        endDay: 30,
        startMonth: 1,
        endMonth: 12,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 8,
        endMonth: 8,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 10,
        endMonth: 10,
      },
      {
        startDay: 31,
        endDay: 31,
        startMonth: 12,
        endMonth: 12,
      },
    ],
  },

  // Praha 4
  {
    user: {
      email: 'marketa.nyvltova@notary.com',
      displayName: 'Mgr. Markéta Nývltová',
      name: 'Markéta',
      surname: 'Nývltová',
      gender: 'Female',
      phone: '+420777444555',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Modřanská',
      streetNumber: '72',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 1,
        endMonth: 1,
      },
    ],
  },
  {
    user: {
      email: 'ondrej.klicka@notary.com',
      displayName: 'JUDr. Ing. Ondřej Klička',
      name: 'Ondřej',
      surname: 'Klička',
      gender: 'Male',
      phone: '+420777555666',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Branická',
      streetNumber: '23',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 2,
        endMonth: 2,
      },
    ],
  },
  {
    user: {
      email: 'marketa.kaninska@notary.com',
      displayName: 'Mgr. Markéta Káninská',
      name: 'Markéta',
      surname: 'Káninská',
      gender: 'Female',
      phone: '+420777666777',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Podolská',
      streetNumber: '34',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 3,
        endMonth: 3,
      },
    ],
  },
  {
    user: {
      email: 'frantisek.novotny@notary.com',
      displayName: 'Mgr. František Novotný',
      name: 'František',
      surname: 'Novotný',
      gender: 'Male',
      phone: '+420777777888',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Nad Malým Mýtem',
      streetNumber: '11',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 30,
        startMonth: 4,
        endMonth: 4,
      },
    ],
  },
  {
    user: {
      email: 'sarka.tlaskova@notary.com',
      displayName: 'Mgr. Šárka Tlašková',
      name: 'Šárka',
      surname: 'Tlašková',
      gender: 'Female',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 5,
        endMonth: 5,
      },
    ],
  },
  {
    user: {
      email: 'petr.duda@notary.com',
      displayName: 'Mgr. Petr Duda',
      name: 'Petr',
      surname: 'Duda',
      gender: 'Male',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 6,
        endMonth: 6,
      },
    ],
  },
  {
    user: {
      email: 'sarka.matejickova@notary.com',
      displayName: 'Mgr. Šárka Matějčková',
      name: 'Šárka',
      surname: 'Matějčková',
      gender: 'Female',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 7,
        endMonth: 7,
      },
    ],
  },
  {
    user: {
      email: 'sarka.sykorova@notary.com',
      displayName: 'Mgr. Šárka Sýkorová',
      name: 'Šárka',
      surname: 'Sýkorová',
      gender: 'Female',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 8,
        endMonth: 8,
      },
    ],
  },
  {
    user: {
      email: 'jana.rybarova@notary.com',
      displayName: 'Mgr. Jana Rybářová',
      name: 'Jana',
      surname: 'Rybářová',
      gender: 'Female',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 9,
        endMonth: 9,
      },
    ],
  },
  {
    user: {
      email: 'petr.oulik@notary.com',
      displayName: 'Mgr. Petr Oulík',
      name: 'Petr',
      surname: 'Oulík',
      gender: 'Male',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 10,
        endMonth: 10,
      },
    ],
  },
  {
    user: {
      email: 'petra.habartova@notary.com',
      displayName: 'JUDr. Petra Habartová',
      name: 'Petra',
      surname: 'Habartová',
      gender: 'Female',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 11,
        endMonth: 11,
      },
    ],
  },
  {
    user: {
      email: 'miloslav.peterka@notary.com',
      displayName: 'JUDr. Miloslav Peterka',
      name: 'Miloslav',
      surname: 'Peterka',
      gender: 'Male',
      phone: '+420777888999',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Lhotka',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '14000',
    },
    dateRules: [
      {
        startDay: 1,
        endDay: 31,
        startMonth: 12,
        endMonth: 12,
      },
    ],
  },

  // Praha 5
  {
    user: {
      email: 'ales.brezina@notary.com',
      displayName: 'JUDr. Aleš Březina',
      name: 'Aleš',
      surname: 'Březina',
      gender: 'Male',
      phone: '+420777123456',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Radlická',
      streetNumber: '67',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 1, endDay: 3, startMonth: 1, endMonth: 12 },
      { startDay: 28, endDay: 28, startMonth: 1, endMonth: 5 },
    ],
  },
  {
    user: {
      email: 'jakub.stradej@notary.com',
      displayName: 'Mgr. Jakub Straděj',
      name: 'Jakub',
      surname: 'Straděj',
      gender: 'Male',
      phone: '+420777234567',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Nádražní',
      streetNumber: '89',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 4, endDay: 6, startMonth: 1, endMonth: 12 },
      { startDay: 28, endDay: 28, startMonth: 6, endMonth: 10 },
    ],
  },
  {
    user: {
      email: 'michaela.havlova@notary.com',
      displayName: 'JUDr. Michaela Havlová',
      name: 'Michaela',
      surname: 'Havlová',
      gender: 'Female',
      phone: '+420777345678',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Štefánikova',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 8, endDay: 10, startMonth: 1, endMonth: 12 },
      { startDay: 28, endDay: 28, startMonth: 11, endMonth: 12 },
      { startDay: 29, endDay: 29, startMonth: 1, endMonth: 1 },
      { startDay: 29, endDay: 29, startMonth: 3, endMonth: 4 },
    ],
  },
  {
    user: {
      email: 'alena.prochazkova@notary.com',
      displayName: 'JUDr. Alena Procházková',
      name: 'Alena',
      surname: 'Procházková',
      gender: 'Female',
      phone: '+420777456789',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Strakonická',
      streetNumber: '45',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 13, endDay: 15, startMonth: 1, endMonth: 12 },
      { startDay: 29, endDay: 29, startMonth: 5, endMonth: 9 },
    ],
  },
  {
    user: {
      email: 'tereza.kubisova@notary.com',
      displayName: 'JUDr. Tereza Kubišová',
      name: 'Tereza',
      surname: 'Kubišová',
      gender: 'Female',
      phone: '+420777567890',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vítězná',
      streetNumber: '9',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 16, endDay: 18, startMonth: 1, endMonth: 12 },
      { startDay: 29, endDay: 29, startMonth: 10, endMonth: 12 },
      { startDay: 30, endDay: 30, startMonth: 1, endMonth: 1 },
      { startDay: 30, endDay: 30, startMonth: 3, endMonth: 3 },
    ],
  },
  {
    user: {
      email: 'lenka.leszay@notary.com',
      displayName: 'JUDr. Lenka Leszay, Ph.D.',
      name: 'Lenka',
      surname: 'Leszay',
      gender: 'Female',
      phone: '+420777678901',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Šaldova',
      streetNumber: '10',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 19, endDay: 21, startMonth: 1, endMonth: 12 },
      { startDay: 30, endDay: 30, startMonth: 4, endMonth: 7 },
      { startDay: 29, endDay: 29, startMonth: 2, endMonth: 2 },
    ],
  },
  {
    user: {
      email: 'martin.divis@notary.com',
      displayName: 'Mgr. Martin Diviš, LL.B.',
      name: 'Martin',
      surname: 'Diviš',
      gender: 'Male',
      phone: '+420777567890',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Ocelářská',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 25, endDay: 27, startMonth: 1, endMonth: 12 },
      { startDay: 30, endDay: 30, startMonth: 8, endMonth: 11 },
    ],
  },
  {
    user: {
      email: 'jiri.svoboda@notary.com',
      displayName: 'JUDr. Jiří Svoboda',
      name: 'Jiří',
      surname: 'Svoboda',
      gender: 'Male',
      phone: '+420777234567',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vysočanská',
      streetNumber: '21',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 22, endDay: 24, startMonth: 1, endMonth: 12 },
      { startDay: 30, endDay: 30, startMonth: 12, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 1, endMonth: 1 },
      { startDay: 31, endDay: 31, startMonth: 3, endMonth: 3 },
      { startDay: 31, endDay: 31, startMonth: 5, endMonth: 5 },
    ],
  },
  {
    user: {
      email: 'vaclav.voda@notary.com',
      displayName: 'Mgr. Václav Voda',
      name: 'Václav',
      surname: 'Voda',
      gender: 'Male',
      phone: '+420777956789',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Horní Měcholupy',
      streetNumber: '34',
      municipality: 'Praha',
      postalCode: '15000',
    },
    dateRules: [
      { startDay: 7, endDay: 12, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 7, endMonth: 12 },
    ],
  },

  // Praha 6
  {
    user: {
      email: 'nadezda.alsova@notary.com',
      displayName: 'Mgr. Naděžda Alšová',
      name: 'Naděžda',
      surname: 'Alšová',
      gender: 'Female',
      phone: '+420777123456',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Na Petynce',
      streetNumber: '20',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 1, endDay: 3, startMonth: 1, endMonth: 12 },
      { startDay: 27, endDay: 27, startMonth: 6, endMonth: 10 },
    ],
  },
  {
    user: {
      email: 'ivana.kruskova@notary.com',
      displayName: 'JUDr. Ivana Krušková',
      name: 'Ivana',
      surname: 'Krušková',
      gender: 'Female',
      phone: '+420777234567',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Pod Kaštany',
      streetNumber: '8',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 4, endDay: 6, startMonth: 1, endMonth: 12 },
      { startDay: 7, endDay: 7, startMonth: 1, endMonth: 5 },
    ],
  },
  {
    user: {
      email: 'jana.vecernikova@notary.com',
      displayName: 'Mgr. Jana Večerníková',
      name: 'Jana',
      surname: 'Večerníková',
      gender: 'Female',
      phone: '+420777345678',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'V Šáreckém údolí',
      streetNumber: '15',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 9, endDay: 11, startMonth: 1, endMonth: 12 },
      { startDay: 8, endDay: 8, startMonth: 7, endMonth: 11 },
    ],
  },
  {
    user: {
      email: 'martin.krcma@notary.com',
      displayName: 'JUDr. Martin Krčma',
      name: 'Martin',
      surname: 'Krčma',
      gender: 'Male',
      phone: '+420777456789',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Na Ořechovce',
      streetNumber: '33',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 12, endDay: 14, startMonth: 1, endMonth: 12 },
      { startDay: 8, endDay: 8, startMonth: 2, endMonth: 6 },
    ],
  },
  {
    user: {
      email: 'olga.spoustova@notary.com',
      displayName: 'Mgr. Olga Spoustová',
      name: 'Olga',
      surname: 'Spoustová',
      gender: 'Female',
      phone: '+420777567890',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Zelená',
      streetNumber: '45',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 15, endDay: 17, startMonth: 1, endMonth: 12 },
      { startDay: 8, endDay: 8, startMonth: 12, endMonth: 12 },
    ],
  },
  {
    user: {
      email: 'alexandra.cervova@notary.com',
      displayName: 'Mgr. Alexandra Červová',
      name: 'Alexandra',
      surname: 'Červová',
      gender: 'Female',
      phone: '+420777678901',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Evropská',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 18, endDay: 20, startMonth: 1, endMonth: 12 },
      { startDay: 7, endDay: 7, startMonth: 9, endMonth: 12 },
      { startDay: 8, endDay: 8, startMonth: 1, endMonth: 1 },
    ],
  },
  {
    user: {
      email: 'jan.hejtmanek@notary.com',
      displayName: 'Mgr. Jan Hejtmánek',
      name: 'Jan',
      surname: 'Hejtmánek',
      gender: 'Male',
      phone: '+420777789012',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Na Špitálce',
      streetNumber: '9',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 21, endDay: 23, startMonth: 1, endMonth: 12 },
      { startDay: 27, endDay: 27, startMonth: 11, endMonth: 12 },
      { startDay: 7, endDay: 7, startMonth: 6, endMonth: 8 },
    ],
  },
  {
    user: {
      email: 'jan.kruta@notary.com',
      displayName: 'JUDr. Jan Krůta',
      name: 'Jan',
      surname: 'Krůta',
      gender: 'Male',
      phone: '+420777890123',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Střešovická',
      streetNumber: '14',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [
      { startDay: 24, endDay: 26, startMonth: 1, endMonth: 12 },
      { startDay: 27, endDay: 27, startMonth: 1, endMonth: 5 },
    ],
  },
  {
    user: {
      email: 'blanka.cechova@notary.com',
      displayName: 'JUDr. Blanka Čechová',
      name: 'Blanka',
      surname: 'Čechová',
      gender: 'Female',
      phone: '+420777901234',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Na Bateriích',
      streetNumber: '17',
      municipality: 'Praha',
      postalCode: '16000',
    },
    dateRules: [{ startDay: 28, endDay: 31, startMonth: 1, endMonth: 12 }],
  },

  // Praha 7
  {
    user: {
      email: 'eva.kralova@notary.com',
      displayName: 'Mgr. Eva Králová',
      name: 'Eva',
      surname: 'Králová',
      gender: 'Female',
      phone: '+420777345123',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Letenská',
      streetNumber: '25',
      municipality: 'Praha',
      postalCode: '17000',
    },
    dateRules: [{ startDay: 1, endDay: 31, startMonth: 1, endMonth: 3 }],
  },
  {
    user: {
      email: 'vanda.pirkova@notary.com',
      displayName: 'JUDr. Ing. Vanda Pirková',
      name: 'Vanda',
      surname: 'Pirková',
      gender: 'Female',
      phone: '+420777456234',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Milady Horákové',
      streetNumber: '10',
      municipality: 'Praha',
      postalCode: '17000',
    },
    dateRules: [{ startDay: 1, endDay: 31, startMonth: 4, endMonth: 6 }],
  },
  {
    user: {
      email: 'gajane.rejzkova@notary.com',
      displayName: 'Mgr. Gajané Rejzková',
      name: 'Gajané',
      surname: 'Rejzková',
      gender: 'Female',
      phone: '+420777567345',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'U Sparty',
      streetNumber: '5',
      municipality: 'Praha',
      postalCode: '17000',
    },
    dateRules: [{ startDay: 1, endDay: 31, startMonth: 7, endMonth: 9 }],
  },
  {
    user: {
      email: 'karel.uhlir@notary.com',
      displayName: 'Mgr. Karel Uhlíř',
      name: 'Karel',
      surname: 'Uhlíř',
      gender: 'Male',
      phone: '+420777678456',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'U Výstaviště',
      streetNumber: '17',
      municipality: 'Praha',
      postalCode: '17000',
    },
    dateRules: [{ startDay: 1, endDay: 31, startMonth: 10, endMonth: 12 }],
  },

  // Praha 8
  {
    user: {
      email: 'michael.sablik@notary.com',
      displayName: 'JUDr. Ing. Michael Sáblík',
      name: 'Michael',
      surname: 'Sáblík',
      gender: 'Male',
      phone: '+420777789012',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Křižíkova',
      streetNumber: '48',
      municipality: 'Praha',
      postalCode: '18600',
    },
    dateRules: [
      { startDay: 1, endDay: 6, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 1, endMonth: 1 },
      { startDay: 31, endDay: 31, startMonth: 7, endMonth: 7 },
      { startDay: 31, endDay: 31, startMonth: 12, endMonth: 12 },
    ],
  },
  {
    user: {
      email: 'michaela.oswaldova@notary.com',
      displayName: 'Mgr. Michaela Oswaldová',
      name: 'Michaela',
      surname: 'Oswaldová',
      gender: 'Female',
      phone: '+420777890123',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Karlínské náměstí',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '18600',
    },
    dateRules: [{ startDay: 7, endDay: 12, startMonth: 1, endMonth: 12 }],
  },
  {
    user: {
      email: 'hana.remesova@notary.com',
      displayName: 'Mgr. Hana Remešová',
      name: 'Hana',
      surname: 'Remešová',
      gender: 'Female',
      phone: '+420777901234',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Pernerova',
      streetNumber: '7',
      municipality: 'Praha',
      postalCode: '18600',
    },
    dateRules: [
      { startDay: 13, endDay: 18, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 3, endMonth: 3 },
      { startDay: 31, endDay: 31, startMonth: 8, endMonth: 8 },
    ],
  },
  {
    user: {
      email: 'sarka.zwierzynova@notary.com',
      displayName: 'Mgr. Šárka Zwierzynová',
      name: 'Šárka',
      surname: 'Zwierzynová',
      gender: 'Female',
      phone: '+420777012345',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Thámova',
      streetNumber: '20',
      municipality: 'Praha',
      postalCode: '18600',
    },
    dateRules: [{ startDay: 19, endDay: 24, startMonth: 1, endMonth: 12 }],
  },
  {
    user: {
      email: 'eva.krejcarova@notary.com',
      displayName: 'JUDr. Eva Krejcarová',
      name: 'Eva',
      surname: 'Krejcarová',
      gender: 'Female',
      phone: '+420777123456',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Šaldova',
      streetNumber: '16',
      municipality: 'Praha',
      postalCode: '18600',
    },
    dateRules: [
      { startDay: 25, endDay: 30, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 5, endMonth: 5 },
      { startDay: 31, endDay: 31, startMonth: 10, endMonth: 10 },
    ],
  },

  // Praha 9
  {
    user: {
      email: 'simon.brezina@notary.com',
      displayName: 'Mgr. Šimon Březina',
      name: 'Šimon',
      surname: 'Březina',
      gender: 'Male',
      phone: '+420777234567',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Prosecká',
      streetNumber: '10',
      municipality: 'Praha',
      postalCode: '19000',
    },
    dateRules: [
      { startDay: 1, endDay: 6, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 1, endMonth: 1 },
    ],
  },
  {
    user: {
      email: 'sona.glazarova@notary.com',
      displayName: 'Mgr. Soňa Glazarová',
      name: 'Soňa',
      surname: 'Glazarová',
      gender: 'Female',
      phone: '+420777345678',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vysočanská',
      streetNumber: '21',
      municipality: 'Praha',
      postalCode: '19000',
    },
    dateRules: [
      { startDay: 7, endDay: 12, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 3, endMonth: 3 },
    ],
  },
  {
    user: {
      email: 'vera.sablikova@notary.com',
      displayName: 'JUDr. Věra Sáblíková',
      name: 'Věra',
      surname: 'Sáblíková',
      gender: 'Female',
      phone: '+420777456789',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Kolbenova',
      streetNumber: '50',
      municipality: 'Praha',
      postalCode: '19000',
    },
    dateRules: [
      { startDay: 13, endDay: 18, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 5, endMonth: 5 },
    ],
  },
  {
    user: {
      email: 'petr.divis@notary.com',
      displayName: 'Mgr. Petr Diviš',
      name: 'Petr',
      surname: 'Diviš',
      gender: 'Male',
      phone: '+420777567890',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Ocelářská',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '19000',
    },
    dateRules: [
      { startDay: 19, endDay: 24, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 7, endMonth: 7 },
    ],
  },
  {
    user: {
      email: 'sylva.kotrbova@notary.com',
      displayName: 'JUDr. Sylva Kotrbová',
      name: 'Sylva',
      surname: 'Kotrbová',
      gender: 'Female',
      phone: '+420777678901',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Letňanská',
      streetNumber: '14',
      municipality: 'Praha',
      postalCode: '19000',
    },
    dateRules: [
      { startDay: 25, endDay: 30, startMonth: 1, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 8, endMonth: 8 },
      { startDay: 31, endDay: 31, startMonth: 10, endMonth: 10 },
      { startDay: 31, endDay: 31, startMonth: 12, endMonth: 12 },
    ],
  },

  // Praha 10
  {
    user: {
      email: 'simon.klein@notary.com',
      displayName: 'Mgr. Šimon Klein',
      name: 'Šimon',
      surname: 'Klein',
      gender: 'Male',
      phone: '+420777789012',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vršovická',
      streetNumber: '25',
      municipality: 'Praha',
      postalCode: '10100',
    },
    dateRules: [
      { startDay: 1, endDay: 3, startMonth: 1, endMonth: 12 },
      { startDay: 16, endDay: 16, startMonth: 1, endMonth: 4 },
      { startDay: 31, endDay: 31, startMonth: 12, endMonth: 12 },
    ],
  },
  {
    user: {
      email: 'jaroslava.voclova@notary.com',
      displayName: 'JUDr. Jaroslava Voclová',
      name: 'Jaroslava',
      surname: 'Voclová',
      gender: 'Female',
      phone: '+420777890123',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Eden Street',
      streetNumber: '45',
      municipality: 'Praha',
      postalCode: '10100',
    },
    dateRules: [
      { startDay: 5, endDay: 7, startMonth: 1, endMonth: 12 },
      { startDay: 16, endDay: 16, startMonth: 5, endMonth: 8 },
      { startDay: 31, endDay: 31, startMonth: 3, endMonth: 3 },
    ],
  },
  {
    user: {
      email: 'martin.riha@notary.com',
      displayName: 'Mgr. Martin Říha',
      name: 'Martin',
      surname: 'Říha',
      gender: 'Male',
      phone: '+420777901234',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Záběhlická',
      streetNumber: '66',
      municipality: 'Praha',
      postalCode: '10200',
    },
    dateRules: [
      { startDay: 9, endDay: 11, startMonth: 1, endMonth: 12 },
      { startDay: 16, endDay: 16, startMonth: 9, endMonth: 12 },
      { startDay: 31, endDay: 31, startMonth: 5, endMonth: 5 },
    ],
  },
  {
    user: {
      email: 'stepan.nyvlt@notary.com',
      displayName: 'Mgr. Štěpán Nývlt',
      name: 'Štěpán',
      surname: 'Nývlt',
      gender: 'Male',
      phone: '+420777912345',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Michle',
      streetNumber: '72',
      municipality: 'Praha',
      postalCode: '10100',
    },
    dateRules: [
      { startDay: 13, endDay: 15, startMonth: 1, endMonth: 12 },
      { startDay: 20, endDay: 20, startMonth: 1, endMonth: 4 },
      { startDay: 31, endDay: 31, startMonth: 7, endMonth: 7 },
    ],
  },
  {
    user: {
      email: 'daniela.anderson@notary.com',
      displayName: 'JUDr. Daniela Anderson',
      name: 'Daniela',
      surname: 'Anderson',
      gender: 'Female',
      phone: '+420777923456',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Vinohrady',
      streetNumber: '88',
      municipality: 'Praha',
      postalCode: '10100',
    },
    dateRules: [
      { startDay: 17, endDay: 19, startMonth: 1, endMonth: 12 },
      { startDay: 20, endDay: 20, startMonth: 5, endMonth: 8 },
      { startDay: 31, endDay: 31, startMonth: 8, endMonth: 8 },
    ],
  },
  {
    user: {
      email: 'vera.dundova@notary.com',
      displayName: 'JUDr. Věra Dundová',
      name: 'Věra',
      surname: 'Dundová',
      gender: 'Female',
      phone: '+420777934567',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Zahradní Město',
      streetNumber: '93',
      municipality: 'Praha',
      postalCode: '10200',
    },
    dateRules: [
      { startDay: 21, endDay: 23, startMonth: 1, endMonth: 12 },
      { startDay: 20, endDay: 20, startMonth: 9, endMonth: 12 },
    ],
  },
  {
    user: {
      email: 'jana.zangiova@notary.com',
      displayName: 'JUDr. Jana Zangiová',
      name: 'Jana',
      surname: 'Zangiová',
      gender: 'Female',
      phone: '+420777945678',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Strašnice',
      streetNumber: '12',
      municipality: 'Praha',
      postalCode: '10000',
    },
    dateRules: [
      { startDay: 24, endDay: 26, startMonth: 1, endMonth: 12 },
      { startDay: 27, endDay: 27, startMonth: 1, endMonth: 6 },
      { startDay: 31, endDay: 31, startMonth: 10, endMonth: 10 },
    ],
  },
  {
    user: {
      email: 'martin.muzikar@notary.com',
      displayName: 'JUDr. Ing. Martin Muzikář',
      name: 'Martin',
      surname: 'Muzikář',
      gender: 'Male',
      phone: '+420777956789',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Horní Měcholupy',
      streetNumber: '34',
      municipality: 'Praha',
      postalCode: '10900',
    },
    dateRules: [
      { startDay: 28, endDay: 30, startMonth: 1, endMonth: 12 },
      { startDay: 27, endDay: 27, startMonth: 5, endMonth: 8 },
      { startDay: 31, endDay: 31, startMonth: 12, endMonth: 12 },
    ],
  },
  {
    user: {
      email: 'lucie.foukalova@notary.com',
      displayName: 'JUDr. Lucie Foukalová',
      name: 'Lucie',
      surname: 'Foukalová',
      gender: 'Female',
      phone: '+420777967890',
      type: 'Notary',
      confirmed: true,
    },
    address: {
      street: 'Hostivařská',
      streetNumber: '17',
      municipality: 'Praha',
      postalCode: '10200',
    },
    dateRules: [
      { startDay: 4, endDay: 4, startMonth: 1, endMonth: 12 },
      { startDay: 8, endDay: 8, startMonth: 1, endMonth: 12 },
      { startDay: 12, endDay: 12, startMonth: 1, endMonth: 12 },
      { startDay: 27, endDay: 27, startMonth: 9, endMonth: 12 },
    ],
  },
]
