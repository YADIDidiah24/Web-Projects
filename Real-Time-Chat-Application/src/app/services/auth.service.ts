import { Injectable, NgZone } from '@angular/core';
import { SupabaseClient, createClient, User } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase?: SupabaseClient;
  private router: Router;
  private ngZone: NgZone;

  constructor(
    router: Router,
    ngZone: NgZone
  ) {
    this.router = router;
    this.ngZone = ngZone;

    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

    this.supabase.auth.onAuthStateChange((event, session) => {
      console.log("Event: ", event, " Session: ", session);

      localStorage.setItem('session', JSON.stringify(session?.user));

      if (session?.user) {
        this.ngZone.run(() => {
          this.router.navigate(['/chat']);
        });
      }
    });
  }



  get isLoggedIn(): boolean {
    const userStr = localStorage.getItem('session');
    return !!userStr;
  }

  async GoogleSignIn() {
    await this.supabase?.auth.signInWithOAuth({
      provider: "google"
    });
  }

  async SignOut() {
    await this.supabase?.auth.signOut();
  }
}
