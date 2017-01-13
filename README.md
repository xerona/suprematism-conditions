# Suprematism Conditions

An Angular 2 conditions builder component.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-conditions
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-conditions/)
- Run the example locally with `npm run example`


## Components
- [`supre-conditions`](#supre-conditions)

#### <a id="supre-conditions"></a> `supre-conditions`
A component for building conditions.

##### Directives
- `color: string` - The condition builder color (eg 'red').
- `number: number` - The condition builder number (eg 1).
- `audienceNumber: number` - The audience size (eg 134787).
- `audiencePercent: number` - The audience percent (eg .2325).

##### Events
- `conjunctionUpdated: and|or` - The conjunction selected.
- `actionsUpdated: Array<sort|chooser>` - An array of the possible actions.


## Example
```html
<supre-conditions
  [color]="red"
  [number]="1"
  [audienceNumber]="134787"
  [audiencePercent]=".2325"
  (conjunctionUpdated)="log($event)"
  (actionsUpdated)="log($event)"
>
</supre-conditions>
```
