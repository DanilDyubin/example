// import Timeline from 'react-calendar-timeline';
// import TimelineHeaders from 'react-calendar-timeline/dist/lib/headers/TimelineHeaders';
// import SidebarHeader from 'react-calendar-timeline/dist/lib/headers/SidebarHeader';
// import DateHeader from 'react-calendar-timeline/dist/lib/headers/DateHeader';

// import {
//   TimelineHeaders,
//   SidebarHeader,
//   DateHeader,
// } from 'react-calendar-timeline/dist/lib/headers';

// import Timeline from 'react-calendar-timeline/dist/lib/Timeline';
// import 'react-calendar-timeline/lib/Timeline.css';
// import 'react-calendar-timeline/dist/styles.css';
import { groupRenderer } from './custom-group/CustomGroup';
import { CustomSidebarHeader } from './custom-sidebar-header/CustomSidebarHeader';
import moment from 'moment';
import 'moment/locale/ru';
import Timeline, { TimelineHeaders, SidebarHeader, DateHeader } from 'react-calendar-timeline';
import '../../styles/timeLine.css';
import './styles.scss';

moment.locale('ru'); // устанавливаем русский язык
var localLocale = moment();
localLocale.locale('ru');

// const groups = [
//   { id: 1, title: 'Зеленый', color: 'additional information', height: 60 },
//   { id: 2, title: 'group 2', color: 'additional information', height: 60 },
// ];

const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment().add(1, 'day'),
    end_time: moment().add(5, 'day'),
    itemProps: {
      className: 'bordernone',
      style: {
        background: 'fuchsia',
        border: 'none',
      },
    },
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start_time: moment().add(-1, 'day'),
    end_time: moment().add(2, 'day'),
  },
  {
    id: 3,
    group: 1,
    title: 'item 3',
    start_time: moment().add(1, 'day'),
    end_time: moment().add(7, 'day'),
  },
];

const itemHandler = (itemId, e, time) => {
  console.log('Item ID:', itemId);
  console.log('Event:', e);
  console.log('Time:', time);
};

const canvasHandler = (groupId, time, e) => {
  console.log('groupId:', groupId);
  console.log('Event:', e);
  console.log('Time:', time);
};

// const groupRenderer = ({ group }) => {
//   return (
//     <div className="custom-group" style={{ display: 'flex' }}>
//       <span className="title">{group.title}</span>
//       <div className="tip">{group.color}</div>
//     </div>
//   );
// };

const TimeLine = ({ data }) => {
  // console.log(moment().format('MMMM-DD-YYYY'));
  console.log(data.groups);
  return (
    <div>
      {/* <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        itemHeightRatio={1} // изменяет высоту элементов
        stackItems // 1 item под вторым
        // lineHeight={60}
      /> */}
      <Timeline
        groups={data.total.stages}
        items={items}
        defaultTimeStart={moment().startOf('date')}
        defaultTimeEnd={moment().startOf('day').add(1, 'month').toDate()}
        // defaultTimeStart={moment().add(-12, 'hour')}
        // defaultTimeEnd={moment().add(12, 'hour')}
        itemHeightRatio={1} // изменяет высоту элементов
        stackItems // 1 item под вторым
        canMove={false} // запретить перемещение
        canResize={false} // запретить изменение размера
        // canSelect={false}
        // minZoom={1000 * 60 * 60 * 24 * 90}
        sidebarWidth={313}
        minZoom={1000 * 60 * 60 * 24 * 30}
        maxZoom={1000 * 60 * 60 * 24 * 280}
        onItemSelect={itemHandler}
        onCanvasClick={canvasHandler}
        groupRenderer={groupRenderer}>
        <TimelineHeaders>
          <SidebarHeader>
            {/* {({ getRootProps }) => {
              return <div {...getRootProps()}>Этапы</div>;
            }} */}
            {({ getRootProps }) => {
              return <CustomSidebarHeader getRootProps={getRootProps} />;
            }}
          </SidebarHeader>
          <DateHeader unit="year" />
          <DateHeader
            unit="month"
            // labelFormat={(dates) => {
            //   return moment(dates[0]?.$d).format('MMMM YYYY');
            // }}
            labelFormat={([startTime]) => {
              const formatter = new Intl.DateTimeFormat('ru-RU', {
                month: 'long',
                year: 'numeric',
              });
              return formatter.format(startTime.toDate()); // Конвертируем moment в Date
            }}
          />
          {/* <DateHeader
            unit="month"
            labelFormat={(interval) => {
              return console.log(interval.startTime);
            }}
          /> */}
        </TimelineHeaders>
      </Timeline>
    </div>
  );
};

export default TimeLine;

// var keys = {
//   groupIdKey: 'id',
//   groupTitleKey: 'title',
//   itemIdKey: 'id',
//   itemTitleKey: 'title',
//   itemDivTitleKey: 'title',
//   itemGroupKey: 'group',
//   itemTimeStartKey: 'start',
//   itemTimeEndKey: 'end',
//   groupLabelKey: 'title',
// };

//onItemClick(itemId, e, time)
//itemTouchSendsClick
// moment().startOf("day").toDate();
// defaultTimeStart and defaultTimeEnd начало календаря
// sidebarWidth
// sidebarContent ?

// const headerLabelFormats = {
//   year: { long: 'YYYY', medium: 'YYYY', short: 'YY' },
//   month: { long: 'MMMM YYYY', medium: 'MMMM', short: 'MMM' },
//   week: { long: 'DD MMMM', medium: 'DD MMM', short: 'DD MMM' },
//   day: { long: 'dddd, DD MMMM', medium: 'DD MMM', short: 'DD' },
//   hour: { long: 'HH:mm', medium: 'HH:mm', short: 'HH' },
//   minute: { long: 'HH:mm', medium: 'HH:mm', short: 'HH:mm' },
// };

{
  /* <DateHeader
      unit="primaryHeader"
      labelFormat={(interval) => moment(interval.startTime).format('MMMM YYYY')}
    /> */
}

// labelFormat={([startTime]) => {
//   const formatter = new Intl.DateTimeFormat('ru-RU', {
//     month: 'long',
//     year: 'numeric',
//   });
//   return formatter.format(startTime.toDate()); // Конвертируем moment в Date
// }} // рабочий

// labelFormat={(dates) => {
//         return moment(dates[0]?.$d).format('MMMM YYYY');
//       }} // рабочий
