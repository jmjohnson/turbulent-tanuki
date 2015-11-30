/**
 * @fileoverview Suite for the primary js work.
 */

var MEETING_DESCRIPTION_WITH_NEWLINES =
"Toll-free dial-in number (U.S. and Canada): (866) 243-6264i\n" +
"Conference code: 915.607.3554\n" +
"Leader PIN/Web Meeting password: 372954 \n\n";

var MEETING_DESCRIPTION_WITH_NEWLINES_2 =
"Toll-free dial-in number (U.S. and Canada):" +
"(866) 243-6264\n\n" +

"Conference code:\n" +
"6502876775\n\n" +

"Leader PIN\n" +
"177500"
;

describe("Hello world", function() {
  it("finds the conference code in the meeting description", function() {
    var result = CalendarService.prototype.meetingDescToConferenceCode(MEETING_DESCRIPTION_WITH_NEWLINES);
    expect(result).toEqual("6502876775");
  });
});
