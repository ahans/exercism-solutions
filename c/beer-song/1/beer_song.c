#include "beer_song.h"

#include <stdio.h>
#include <string.h>

static int verse(uint8_t bottle, char** song, int index) {
    switch (bottle) {
        case 2:
            sprintf(song[index++], "2 bottles of beer on the wall, 2 bottles of beer.");
            sprintf(song[index++], "Take one down and pass it around, 1 bottle of beer on the wall.");
            break;
        case 1:
            sprintf(song[index++], "1 bottle of beer on the wall, 1 bottle of beer.");
            sprintf(song[index++], "Take it down and pass it around, no more bottles of beer on the wall.");
            break;
        case 0:
            sprintf(song[index++], "No more bottles of beer on the wall, no more bottles of beer.");
            sprintf(song[index++], "Go to the store and buy some more, 99 bottles of beer on the wall.");
            break;
        default: 
            sprintf(song[index++], "%d bottles of beer on the wall, %d bottles of beer.", bottle, bottle);
            sprintf(song[index++], "Take one down and pass it around, %d bottles of beer on the wall.", bottle - 1);
            break;
    }
    return index;
}

void recite(uint8_t start_bottles, uint8_t take_down, char **song)
{
    for (int i = 0, index = 0; i < take_down; ++i) {
        if (i > 0) strcpy(song[index++], "");
        index = verse(start_bottles - i, song, index);
    }
}