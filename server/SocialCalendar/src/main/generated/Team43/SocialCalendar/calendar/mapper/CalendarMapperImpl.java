package Team43.SocialCalendar.calendar.mapper;

import Team43.SocialCalendar.calendar.dto.CalendarResponseDto;
import Team43.SocialCalendar.calendar.entity.Calendar;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-27T10:03:54+0900",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.15 (Azul Systems, Inc.)"
)
@Component
public class CalendarMapperImpl implements CalendarMapper {

    @Override
    public List<CalendarResponseDto> calendarsToCalendarResponseDtos(List<Calendar> calendars) {
        if ( calendars == null ) {
            return null;
        }

        List<CalendarResponseDto> list = new ArrayList<CalendarResponseDto>( calendars.size() );
        for ( Calendar calendar : calendars ) {
            list.add( calendarToCalendarResponseDto( calendar ) );
        }

        return list;
    }
}
