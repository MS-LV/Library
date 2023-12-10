import {InjectionToken} from "@angular/core";

export interface IBookConfigs {
  minLengthChapterTitle: number,
  maxLengthChapterTitle: number,
  minLengthPhotos: number,
  maxLengthPhotos: number,
  minLengthAlternateName: number,
  maxLengthAlternateName: number,
  minLengthDescriptionArea: number,
  maxLengthDescriptionArea: number,
  minLengthArea: number,
  maxLengthArea: number,
}

export const BOOK_CONFIG: IBookConfigs = {
  minLengthChapterTitle: 3,
  maxLengthChapterTitle: 80,
  minLengthPhotos: 3,
  maxLengthPhotos: 10,
  minLengthAlternateName: 5,
  maxLengthAlternateName: 180,
  minLengthDescriptionArea: 40,
  maxLengthDescriptionArea: 10000,
  minLengthArea: 3,
  maxLengthArea: 32
}


export const BOOK_CONFIG_TOKEN = new InjectionToken<IBookConfigs>('add-book.config', {
  factory: () => BOOK_CONFIG
})
