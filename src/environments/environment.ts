// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://api.mediastack.com/v1/news?access_key=412112dbca30bf8f826d9b7ad1096fd1',
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebaseConfig: {
  apiKey: "AIzaSyCgaNowyVwX0L38p8TGQqq4l8OZHL0_dZs",
  authDomain: "fastnews-119ef.firebaseapp.com",
  projectId: "fastnews-119ef",
  storageBucket: "fastnews-119ef.appspot.com",
  messagingSenderId: "495323978587",
  appId: "1:495323978587:web:cb3faf3f0d10ec1026987e",
  measurementId: "${config.measurementId}"
},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
