package Team43.SocialCalendar.member.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AttendedCalendarResponseDto {

    private long calendarId;
    private long memberId;
    private String title;
    private String calendarImg;
}
