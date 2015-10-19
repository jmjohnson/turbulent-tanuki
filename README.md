# turbulent-tanuki
Rough notes and steps:
* To get this set up and working properly there were a host of hoops that needed
  to be jumped through. Not the least of which was to add oauth scopes
  (https://www.googleapis.com/auth/plus.me
  https://www.googleapis.com/auth/hangout.av
  https://www.googleapis.com/auth/hangout.participants
  https://www.googleapis.com/auth/hangout.telephone) to the configuration of
  your project (on the google developer's console) and create OAuth2 credentials
  (even for private development).

  You then need to try enabling the app once, watch it crash, since your brand
  new OAuth2 credentials don't have any JS origins. Copy the `referrer URL` from
  the error message into the OAuth2 Credential's settings. AND THEN, try again.

  jeez...
