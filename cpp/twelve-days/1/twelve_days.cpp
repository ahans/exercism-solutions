#include "twelve_days.h"

#include <array>
#include <sstream>

namespace twelve_days {

auto recite(int const from, int const to) -> std::string {

    constexpr auto verse = [](auto& ss, auto day) {
        constexpr std::array ordinals = {
            "first",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth",
            "seventh",
            "eighth",
            "ninth",
            "tenth",
            "eleventh",
            "twelfth"
        };
        
        constexpr std::array gifts = {
            "twelve Drummers Drumming",
            "eleven Pipers Piping",
            "ten Lords-a-Leaping",
            "nine Ladies Dancing",
            "eight Maids-a-Milking",
            "seven Swans-a-Swimming",
            "six Geese-a-Laying",
            "five Gold Rings",
            "four Calling Birds",
            "three French Hens",
            "two Turtle Doves",
            "a Partridge in a Pear Tree"
        };

        ss << "On the " << ordinals[day - 1] << " day of Christmas my true love gave to me: ";
        auto const num_gifts = day;
        auto const offset = gifts.size() - num_gifts;
        for (auto i = 0; i < num_gifts; ++i) {
            auto const gifts_left = num_gifts - i;
            if (i > 0) ss << (gifts_left > 1 ? ", " : ", and ");
            ss << gifts.at(offset + i);
        }
        ss << ".\n";
    };

    std::stringstream ss;
    for (auto day = from; day <= to; ++day) {
        if (day > from) ss << '\n';
        verse(ss, day);
    }
    return ss.str();
}

}  // namespace twelve_days
