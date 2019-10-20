## RealMates-UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a static client side only page.

Styles are using BEM guidelines. Data is hardcoded inside the `db/` folder.

Main components:
- `help-seeker-form` - the form with filters for help seeker to fill in with their criteria
- `match-dashboard` - dashboard that shows the real mates based on the matching filter criteria

## Running App

```bash
yarn
yarn start
```

## Build for production
```bash
yarn build
```
This builds to the `/build` folder.

## Deployment

For the Hacking for Humanity hack, we deployed the built app to a static hosted S3 bucket.
Run the build step, then copy and paste the files to the bucket. Make sure the files permissions are set to public.
