import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { OccamlabApiService } from 'src/app/services/occamlab-api.service';
import { updateImage, uploadImage } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private occamlabApi: OccamlabApiService) { }

  uploadImage$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(uploadImage),
      mergeMap((action) => {
        return this.occamlabApi.uploadImage(action.file).pipe(
          map((data) => {
            const imageUrl = data.image_url;
            return updateImage({ imageUrl });
          })
        )
      })
    )
  });
}