To reproduce the crash:
Install this app on your device using `npx expo run:android`
Add .evn file with proper `EXPO_PUBLIC_GIPHY_API_KEY=` env var

 1. Open gif selector
2. Wait for gifs to load
3. Scroll the list of gifs
4. When list is still scrolling - close the gif selector.
