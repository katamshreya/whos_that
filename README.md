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

SECOND WEEK -------------------------------------------------------------------------------------------------------------
# Web Development Project 3 - *Who's That? 🌟*

Submitted by: **Shreya Katam**

This web app: **A celebrity guessing flashcard game where players try to identify singers from an extreme close-up crop of their face. Type your guess before flipping to reveal the full photo and name!**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong
  - Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cards**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:

- [ ] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked
  - Cards should change to a random sequence once the shuffle button is clicked
- [x] A user's answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user's current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards

The following **additional** features are implemented:

* [x] Cards use an extreme close-up CSS zoom crop on the front to make guessing harder, with a full photo reveal on the back
* [x] Each card includes a cryptic fun fact hint beneath the cropped image
* [x] Card flip uses a smooth 3D CSS animation
* [x] Correct guess auto-flips the card to show the full reveal

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[Video Walkthrough](https://www.loom.com/share/a7c01b116f6a4ff581b23a250cb9ad1e)

## Notes

The trickiest part of Part 2 was managing multiple pieces of state that interact with each other — the guess input, the flip state, and the feedback state all needed to stay in sync. Using a `key` prop on the Flashcard component resets all of that state cleanly when navigating to a new card. Also implemented case-insensitive matching so guesses like "billie eilish" and "Billie Eilish" both count as correct.

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