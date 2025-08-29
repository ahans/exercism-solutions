#include "anagram.h"

static unsigned int index(char c) {
    if ('a' <= c && c <= 'z') return c - 'a';
    else return c - 'A';
}

static void count(const char *word, int* count) {
    for (unsigned int i = 0; i < 26; ++i) count[i] = 0;
    while (*word != 0) {
        count[index(*word)] += 1;
        word++;
    }
}

static int same(const char* a, const char* b) {
    while (*a != 0 && *b != 0 && index(*a) == index(*b)) {
        ++a;
        ++b;
    }
    return (*a == 0 && *b == 0);
}

void find_anagrams(const char *subject, struct candidates *candidates)
{
    int subject_count[26];
    int candidate_count[26];
    count(subject, subject_count);
    for (unsigned int i = 0; i < candidates->count; ++i) {
        if (same(subject, candidates->candidate[i].word)) {
            candidates->candidate[i].is_anagram = NOT_ANAGRAM;
        } else {
            count(candidates->candidate[i].word, candidate_count);
            for (unsigned int j = 0; j < 26; ++j) {
                if (subject_count[j] != candidate_count[j]) {
                    candidates->candidate[i].is_anagram = NOT_ANAGRAM;
                    break;
                }
            }
            if (candidates->candidate[i].is_anagram == UNCHECKED) {
                candidates->candidate[i].is_anagram = IS_ANAGRAM;
            }
        }
    }
}