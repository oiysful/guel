import React from 'react';
import './Calendar.css'; // CSS 파일을 임포트합니다.

const Calendar = () => {
    const today = new Date();
    const tg_date = new Date(2222, 2, 22, 14, 22, 0);

    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const daysInMonth = 28;
    const firstDayOfMonth = new Date(2222, 1, 1).getDay(); // 6월은 0부터 시작하므로 6은 7월
    const target_day = 22;

    //calendar에다가 2월1일의 날짜 전만큼 빈칸을 추가함
    const calendarDays = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarDays.push(<td key={`empty-${i}`}></td>);
    }

    //그리고 이후에 해당 달의 마지막 날짜 전까지 component를 추가함
    for (let day = 1; day <= daysInMonth; day++) {
        calendarDays.push(
            //이때 보면 결혼식 날짜는 특별하게 className을 `special-day`로 설정해줌
            <td key={day} className={day === target_day ? 'special-day' : ''}>
                {day}
            </td>
        );
    }

    const rows = [];
    //위에서 만들어진 날짜들을 7개씩 쪼개서 table형태로 만들어줌
    for (let i = 0; i < calendarDays.length; i += 7) {
        const week = calendarDays.slice(i, i + 7);
        rows.push(
            <tr key={`row-${i}`}>
                {week.map((day, index) => (
                    //일요일인 경우 빨간색으로 표기하기 위해서 별도로 sunday라고 claaName설정
                    <td key={index} className={(day.key === `${target_day}`)
                        ? "special-day"
                        : (index === 0) ? 'sunday' : ''}>
                        {day.props.children}
                    </td>
                ))}
            </tr>
        );
    }

    //위에서 만들어진 calendar를 table형태로 만들어서 반환해줌
    return (
        <>
            <p style={{
                fontSize: "20px",
                fontFamily: "MaruBuri",
                margin: "20px"
            }}>2222. 02. 22</p>
            금요일 오후 2시 22분<br/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <table className="calendar">
                    <thead>
                    <tr>
                        {daysOfWeek.map((day, index) => (
                            <th key={index} className={index === 0 ? 'sunday' : ''}>{day}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
            신랑 신부의 결혼식이
            <span style={{color: "magenta"}}>
      {Math.floor((tg_date - today) / (1000 * 60 * 60 * 24))}
      </span>일 남았습니다.
        </>
    );
};

export default Calendar;