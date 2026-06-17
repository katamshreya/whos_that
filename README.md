# Web Development Project 2 - *Who's That? 🌟*

Submitted by: **Shreya Katam**

This web app: **A celebrity guessing flashcard game where players try to identify singers from an extreme close-up crop of their face. Tap the card to flip it and reveal the full photo and name!**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] Cards use an extreme close-up CSS zoom crop on the front to make guessing harder, with a full photo reveal on the back
* [x] Each card includes a cryptic fun fact hint beneath the cropped image
* [x] Deck is shuffled so all 10 cards appear before any repeats
* [x] Card flip uses a smooth 3D CSS animation

## Video Walkthrough

Here's a walkthrough of implemented required features:

[Video Walkthrough](https://www.loom.com/share/282c07ded5404809bc6f8e6adb9331bd)

## Notes

The trickiest part was getting the CSS crop zoom to work correctly — using `transform: scale()` with a matching `transformOrigin` lets you zoom into a specific facial feature without needing separate cropped image files. Also had to use a `key` prop on the Flashcard component so the flip state resets properly when moving to the next card.

## License

    Copyright 2025 Shreya Katam

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.