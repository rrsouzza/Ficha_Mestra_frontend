import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { CharacterEffects } from "./character/character.effects";

@NgModule({
  imports: [
    EffectsModule.forRoot([
      CharacterEffects,
    ]),
  ],
})
export class AppEffects {}
