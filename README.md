# web-clues

Setup Instruction.

1. Clone the repo.
2. npm install
3. cd ios && npx pod install
4. npx react-native run-android or npx react-native run-ios

Functionalities:

1. Full screen video player which will be auto playing in loop.
2. Details can be found at the bottom left of the video.
3. Actions for the video can be found on the bottom right of the video.

Components.

1. Wrapper Component: Hold the flatlist and handles all the video.
2. List item: the individual item of video with the details and all the controls.
3. Video Component: Has the actuall video player with autoplay and loop feature which will be playing in the -1 layer of the item component.
