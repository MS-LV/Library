export interface IHeaderLocale {
  home: string;
  catalog: string;
  searchPlaceHolder: string;
  signIn: string;
  registration: string
}

export interface IFooterLocale {
  hotBookTypes: string[];
  hotTitle: string;
}

export interface IAdminLocale {
  bookCharacters: IBookCharacter[],
  bookGenres: string[],
  bookTags: string[],
  bookCountries: string[]
}


// another locale

export interface IBookCharacter {
  name: string;
  title: string;
}
