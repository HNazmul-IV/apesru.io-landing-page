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

addEventListener("load", function () {
    //setting Intersection Observer;
    observer = new IntersectionObserver(observerCallback);
    allObServerElement = document.querySelectorAll(`[data-case="observe"]`);
    allObServerElement.forEach((element) => observer.observe(element));

    console.log(observer);
});

export function in_viewport(element: Element) {
    // if (!element.getAttribute("data-case")) throw new Error(`Fo checking element is in viewport you have to set attribute data-case="observe"`);
    // element.addEventListener("intersecting", function (e: InterSectingEvent) {
    //     console.log(e);
    //     return e.detail.isInterSecting;
    // });
}

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
