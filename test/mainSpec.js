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

describe("The extraction of phone numbers from calendar descriptions.", function() {
  beforeEach(function() {
    this.meetingDescToConfCode = CalendarService.prototype.meetingDescToConferenceCode;
  });

  it("finds the phone number separated by dots.", function() {
    var result = this.meetingDescToConfCode(MEETING_DESCRIPTION_WITH_NEWLINES);
    expect(result).toEqual("9156073554");
  });

  it("finds the phone number separated by a newline.", function() {
    result = this.meetingDescToConfCode(MEETING_DESCRIPTION_WITH_NEWLINES_2);
    expect(result).toEqual("6502876775")
  });
});


describe('The calendar service when it calls the API.', function() {
  xit('will handle empty results just fine', function() {

  });

  xit('will return a map of phonenumber/calendar objects', function() {

  });
});
