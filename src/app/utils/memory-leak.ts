import {ElementRef} from "@angular/core";
import {SubscriptionLike} from "rxjs";

const SIMPLE_TYPES = ['string', 'boolean', 'number'];

/**
 * Unsubscribes from all available subscriptions in component remove memory leaks
 */
export function CleanSubscriptionsAndMemoryLeaks(): (e: any) => void {
  return (constructor: (e: any) => any) => {
    const original = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function() {
      if (original && typeof original.apply === 'function') {
        original.apply(this);
      }
      for (const prop in this) {
        if (this.hasOwnProperty(prop) && !/^(__ngContext__|__zone)/i.test(prop)) {
          const item: any = this[prop];
          if (item && !SIMPLE_TYPES.includes(typeof item)) {
            if (Array.isArray(item) && item.length > 0 && isSubscription(item[0])) {
              this[prop] = cleanSubscriptions(item);
            } else if (isSubscription(item)) {
              this[prop] = cleanSubscription(item);
            } else if (typeof item !== 'function' && !isAngularEntity(item)) {
              if (item.nativeElement && !/^(firstElement|lastElement)$/i.test(prop)) {
                this[prop] = blurElementRef(item);
              } else {
                this[prop] = null;
              }
            }
          }
        }
      }
    };
  };
}

function isSubscription(obj: any): boolean {
  return obj && typeof obj.unsubscribe === 'function' && typeof obj.closed !== 'undefined';
}

function isAngularEntity(obj: any): boolean {
  return obj && typeof obj.constructor === 'function' && !obj.nativeElement && !obj['__ngContext__'] &&
    (typeof obj.constructor.__NG_ELEMENT_ID__ !== 'undefined' ||
      typeof obj.constructor.ɵfac !== 'undefined' ||
      typeof obj.constructor.ɵprov !== 'undefined' ||
      Array.isArray(obj.constructor.decorators) && obj.constructor.decorators.length);
}


// utils

export function blurElementRef(elem: ElementRef): any {
  if (elem && elem.nativeElement) {
    elem.nativeElement.blur();
  }
  return null;
}

export function cleanSubscription(valSub?: SubscriptionLike): any {
  if (valSub && !valSub.closed) {
    valSub.unsubscribe();
  }
  return null;
}

export function cleanSubscriptions(arr: SubscriptionLike[]): any {
  while (arr && arr.length) {
    cleanSubscription(arr.pop());
  }
  return null;
}
