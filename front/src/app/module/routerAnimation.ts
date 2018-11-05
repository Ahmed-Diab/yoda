import {animate, animateChild, group, query as q, sequence, state, style, transition, trigger} from '@angular/animations';

export function query(s, a) {
    return q(s, a, {optional: true});
}
export const routerTransition = trigger('routeAnimation', [
    transition('login => *', [
      style({height:'!'}),
      query(':enter', style({transform:'translateX(-100%)'})),
      query(':enter, :leave', style({position:'absolute', top:'70px', left:0, right:0})),
      group([
        query(':leave', [animate('.3s cubic-bezier(.35, .0, .25, 1)', style({transform:'translateX(100%)'}))]),
        query(':enter', [animate('.3s cubic-bezier(.35, .0, .25, 1)', style({transform:'translateX(0)'}))])
      ])
    ]),
    transition('* => login', [
      style({height:'!'}),
      query(':enter', style({transform:'translateX(100%'})),
      query(':enter, :leave', style({position:'absolute', top:'70px', left:0, right:0})),
      group([
        query(':leave', [animate('.3s cubic-bezier(.35, .0, .25, 1)', style({transform:'translateX(-100%)'}))]),
        query(':enter', [animate('.3s cubic-bezier(.35, .0, .25, 1)', style({transform:'translateX(0)'}))])
      ])
    ])
])