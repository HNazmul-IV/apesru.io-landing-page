// All State Document Variable;
let allObServerElement: NodeListOf<Element>;
let interSectingElement: Element[];
let observer: IntersectionObserver;

export interface InterSectingDetails {
    observer: IntersectionObserver;
    isInterSecting: boolean;
}

function dispatchCustomEvent<EventData>(element: Element, detail: EventData) {
    let event = new CustomEvent<EventData>("intersecting", { detail });
    element.dispatchEvent(event);
}

const observerCallback: IntersectionObserverCallback = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            dispatchCustomEvent<InterSectingDetails>(entry.target, { observer, isInterSecting: entry.isIntersecting });
        } else if (!entry.isIntersecting) {
            dispatchCustomEvent<InterSectingDetails>(entry.target, { observer, isInterSecting: entry.isIntersecting });
        }
    });
};

export function initiateObserver() {
    observer = new IntersectionObserver(observerCallback);
    allObServerElement = document.querySelectorAll(`[data-use-case="observer"]`);
    allObServerElement.forEach((element) => observer.observe(element));
}

addEventListener("load", initiateObserver);

export interface CustomEventMap {
    intersecting: CustomEvent;
}
export type AllEventType =
    | keyof ElementEventMap
    | keyof HTMLElementEventMap
    | keyof WindowEventMap
    | keyof HTMLVideoElementEventMap
    | keyof AnimationEventMap
    | keyof HTMLMediaElementEventMap
    | keyof CustomEventMap;

export function addEvent(element: Element | Node, type: AllEventType, callback: EventListenerOrEventListenerObject, options?: AddEventListenerOptions) {
    element.addEventListener(type, callback);
}
