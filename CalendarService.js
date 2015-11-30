var CalendarService = function(){};
CalendarService.prototype.CALENDAR_SCOPE = "https://www.googleapis.com/auth/calendar.readonly"
CalendarService.prototype.FIELDS = "items(creator(displayName,self),description,gadget,hangoutLink,htmlLink,start),summary";
CalendarService.prototype.CONFERENCE_CODE_REGEX = /conference.code[^\d]*(\d*)/i

CalendarService.prototype.getCalendarRequestParams = function() {
    var result = {
      calendarId: 'primary',
      q: 'toll-free dial-in number',
      timeMin: this.getToday().toISOString(),
      timeMax: this.getTomorrow().toISOString(),
      fields: this.FIELDS
    }
    return result;
};

CalendarService.prototype.getToday = function() {
  var date = new Date();
  date.setHours(0,0,0);
  return date
};

CalendarService.prototype.getTomorrow = function() {
  var date = new Date();
  date.setHours(0,0,0);
  date.setDate(date.getDate() + 1);
  return date
};

CalendarService.prototype.getCandidateMeetings = function() {
  var params = this.getCalendarRequestParams();
  request = gapi.client.calendar.events.list(params);

  // reqest.execute takes a single parametered callback function.
  var result = new Promise(function(pass) { request.execute(pass) });
  return result
}

CalendarService.prototype.meetingDescToConferenceCode = function(meetingDesc) {
  try {
    var regexResult =
      CalendarService.prototype.CONFERENCE_CODE_REGEX.exec(meetingDesc);
    var conferenceCode = regexResult[1];

    // Convert to an int and back to meet our contract.
    return parseInt(conferenceCode).toString()
  } catch (e) {
    console.warn("failed to find a conference code in a calendar meeting.", e, meetingDesc, regexResult, conferenceCode);
    return null;
  }
}
