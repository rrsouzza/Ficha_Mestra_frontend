export interface Character {
  class: string;
  originalStats: {
    fullHP: number;
    fullShield: number;
  };
  currentStats: {
    currentHP: number;
    currentShield: number;
  };
}

export enum CharClasses {
  ARTIFICE = 'Artífice',
  BARBARO = 'Bárbaro',
  BARDO = 'Bardo',
  CLERIGO = 'Clérigo',
  DRUIDA = 'Druida',
  GUERREIRO = 'Guerreiro',
  MONGE = 'Monge',
  PALADINO = 'Paladino',
  RANGER = 'Ranger',
  LADINO = 'Ladino',
  FEITICEIRO = 'Feiticeiro',
  BRUXO = 'Bruxo',
  MAGO = 'Mago',
}

export enum CharRaces {
  ANAO = 'Anão',
  DRACONATO = 'Draconato',
  ELFO = 'Elfo',
  GNOMO = 'Gnomo',
  MEIO_ELFO = 'Meio Elfo',
  MEIO_ORC = 'Meio Orc',
  HALFLING = 'Halfling',
  HUMANO = 'Humano',
  TIELFLING = 'Tielfling',
}

export enum CharPriors {
  ACOLITO = 'Acólito',
  ARTESAO_DE_GUILDA = 'Artesão de Guilda',
  ARTISTA = 'Artista',
  CHARLATAO = 'Charlatão',
  CRIMINOSO = 'Criminoso',
  HEROI_DO_POVO = 'Heroi do Povo',
  EREMITA = 'Eremita',
  NOBRE = 'Nobre',
  FORASTEIRO = 'Forasteiro',
  MARINHEIRO = 'Marinheiro',
  SABIO = 'Sábio',
  SOLDADO = 'Soldado',
  ORFAO = 'Órfao',
}
