<template>
  <v-dialog v-model="modelValue" max-width="600">
    <v-card>
      <v-sheet color="primary">
        <v-card-title class="headline">How to Play Wordle</v-card-title>
      </v-sheet>
      <v-card-text>
        Wordle is a word puzzle game where you have to guess a five-letter word
        within a certain number of attempts. After each guess, Wordle will
        provide feedback to indicate if each letter:
        <ul>
          <li>Is in the correct position and is the right letter.</li>
          <li>Is in the word but in the wrong position.</li>
          <li>Is not in the word at all.</li>
        </ul>
      </v-card-text>
      <v-card-text>
        For example, if the word is "BLIMP" and you guess "BILBO", the feedback
        might look like this:
        <!-- Center the below v-card -->
        <div class="d-flex justify-center">
          <v-card
            v-for="letter in word.letters"
            :key="letter"
            :color="letter.color"
            width="50px"
            height="50px"
            class="mx-1 text-center"
          >
            <v-card-text>{{ letter.char }}</v-card-text>
          </v-card>
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="modelValue = false" variant="tonal"
          >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Letter, LetterState } from "~/scripts/letter";
import { Word } from "~/scripts/word";

const modelValue = defineModel<boolean>({ default: false });

const word = new Word({word: "BILBO"});
word.letters = [
  new Letter("B", LetterState.Correct),
  new Letter("I", LetterState.Misplaced),
  new Letter("L", LetterState.Misplaced),
  new Letter("B", LetterState.Wrong),
  new Letter("O", LetterState.Wrong),
];
</script>
